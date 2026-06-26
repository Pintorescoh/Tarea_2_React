import React, { useEffect, useState } from "react";
import "./ProductTable.css";

function ProductTable() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products", { signal });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (!Array.isArray(data)) throw new Error("Unexpected response shape");
        setProducts(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "Error fetching products");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();

    return () => controller.abort();
  }, []);

  if (loading) return <div className="status" aria-busy="true">Cargando productos…</div>;
  if (error) return <div className="status error" role="alert">Error: {error}</div>;

  return (
    <div className="table-container">
      <table className="product-table" aria-describedby="productos-caption">
        <caption id="productos-caption" className="table-caption">Listado de productos</caption>
        <thead>
          <tr>
            <th scope="col">Título</th>
            <th scope="col">Precio</th>
            <th scope="col">Categoría</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td data-label="Título">{p.title}</td>
              <td data-label="Precio">{formatPrice(p.price)}</td>
              <td data-label="Categoría">{p.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function formatPrice(value) {
  if (typeof value !== "number") return String(value);
  return new Intl.NumberFormat("es-CL", { style: "currency", currency: "USD" }).format(value);
}

// Presentation is handled in ProductTable.css

export default ProductTable;
