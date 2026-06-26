import React from 'react';
import ProductTable from './ProductTable';

export default function App() {
  return (
    <main style={{ padding: 20, fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, Arial' }}>
      <h1 style={{ marginTop: 0 }}>Productos</h1>
      <ProductTable />
    </main>
  );
}
