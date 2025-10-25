import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("🔍 Intentando cargar productos...");
    fetch("/data/products.json")
      .then((res) => {
        console.log("📡 Estado de la respuesta:", res.status);
        if (!res.ok) {
          throw new Error("No se pudo cargar el archivo");
        }
        return res.json();
      })
      .then((data) => {
        console.log("✅ Productos cargados:", data);
        setProducts(data);
      })
      .catch((error) => {
        console.error("❌ Error:", error);
      });
  }, []);

  return (
    <div className="container">
      <h1>Productos TechWave</h1>
      {products.length === 0 ? (
        <p>Cargando productos...</p>
      ) : (
        <ItemList list={products} />
      )}
    </div>
  );
};