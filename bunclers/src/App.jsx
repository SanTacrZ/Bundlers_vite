import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [page, setPage] = useState(1)

  useEffect(() => {
    let isMounted = true
    async function load() {
      try {
        setLoading(true)
        setError('')
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        if (!response.ok) throw new Error(`Error ${response.status}`)
        const data = await response.json()
        if (isMounted) setCharacters(data.results ?? [])
      } catch (err) {
        if (isMounted) setError(err instanceof Error ? err.message : 'Error desconocido')
      } finally {
        if (isMounted) setLoading(false)
      }
    }
    load()
    return () => {
      isMounted = false
    }
  }, [page])

  return (
    <div className="app">
      <header className="header">
        <h1>Rick and Morty</h1>
        <div className="pager">
          <button disabled={page === 1 || loading} onClick={() => setPage(p => Math.max(1, p - 1))}>Anterior</button>
          <span>Página {page}</span>
          <button disabled={loading} onClick={() => setPage(p => p + 1)}>Siguiente</button>
        </div>
      </header>

      {loading && <p className="status">Cargando...</p>}
      {error && <p className="status error">{error}</p>}

      {!loading && !error && (
        <section className="grid">
          {characters.map((ch) => (
            <article key={ch.id} className="card">
              <img src={ch.image} alt={ch.name} />
              <div className="card-body">
                <h2>{ch.name}</h2>
                <p>
                  <strong>Estado:</strong> {ch.status} · <strong>Especie:</strong> {ch.species}
                </p>
                <p>
                  <strong>Origen:</strong> {ch.origin?.name}
                </p>
              </div>
            </article>
          ))}
        </section>
      )}
    </div>
  )
}

export default App
