# Rick and Morty - Bun + Vite

Aplicación simple creada con React, Vite y Bun que muestra una lista paginada de personajes consumiendo la API pública de Rick and Morty.

## Requisitos
- Bun >= 1.2

## Instalación
```bash
bun install
```

## Desarrollo
```bash
bun run dev -- --host
```
Abre el servidor dev en la red para poder acceder desde el exterior.

## Build
```bash
bun run build
```

## Previsualización del build
```bash
bun run preview -- --host
```

## Estructura
- `src/App.jsx`: lógica y UI para listar personajes, paginación, estados de carga y error
- `src/App.css`: estilos para el grid y tarjetas
- `src/main.jsx`: arranque de la app
- `index.html`: documento base

## Tecnologías
- React 19
- Vite 7
- Bun como gestor de paquetes y runtime

## API
- Rick and Morty API: `https://rickandmortyapi.com/api`
