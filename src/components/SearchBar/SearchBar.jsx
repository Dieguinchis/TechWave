import React from "react";

export const SearchBar = ({ value, onChange }) => (
  <div style={{ marginBottom: "24px", textAlign: "center" }}>
    <input
      type="text"
      placeholder="Buscar por nombre o categoría..."
      value={value}
      onChange={onChange}
      style={{
        padding: "10px 16px",
        borderRadius: "8px",
        border: "1px solid #d1d5db",
        width: "60%",
        fontSize: "1rem",
      }}
    />
  </div>
);