import React, { useState, useEffect } from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { ItemList } from "../ItemList/ItemList";
import { getProducts } from "../../services/products";
import "./ItemListContainer.css";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Asume que getProducts retorna todos los productos
    getProducts()
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  const handleSearchChange = (e) => setSearch(e.target.value);

  const filteredProducts = search.trim()
    ? products.filter(
        (product) =>
          (product.name && product.name.toLowerCase().includes(search.toLowerCase())) ||
          (product.category && product.category.toLowerCase().includes(search.toLowerCase()))
      )
    : products;

  return (
    <div className="container">
      <h1>Productos TechWave</h1>
      <SearchBar value={search} onChange={handleSearchChange} />
      {filteredProducts.length === 0 ? (
        <p>No se encontraron productos.</p>
      ) : (
        <ItemList list={filteredProducts} />
      )}
    </div>
  );
};