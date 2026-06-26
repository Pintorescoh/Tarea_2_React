# TablaReact

Componente de ejemplo que consume el endpoint https://fakestoreapi.com/products y muestra los datos en una tabla.

Requisitos
- Node.js (14+)
- npm o yarn

Instalación (ejemplo con Create React App)

```bash
npm install
npm start
```

O si usas Vite

```bash
npm install
npm run dev
```

Estructura mínima
- `src/ProductTable.jsx` — componente que hace `fetch` y renderiza la tabla.
- `src/App.jsx` — punto de montaje que importa `ProductTable`.

Uso
- Asegúrate de que `src/index.js` o `src/main.jsx` renderice el componente `App`.
- Abrir el navegador en `http://localhost:3000` (CRA) o la URL que devuelva Vite.

Notas
- El componente incluye manejo de carga, error y limpieza con `AbortController`.
- Para la entrega, incluye una captura de pantalla de la tabla renderizada en el navegador.
