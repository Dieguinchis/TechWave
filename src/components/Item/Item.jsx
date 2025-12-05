import './Item.css';

export const Item = ({ name, nombre, price, precio, description, category, categoria, imageUrl, imagen, children }) => {
  return (
    <article className="product-item">
      <div className="product-image-container">
        <img src={imageUrl || imagen} alt={name || nombre} className="product-image" />
      </div>
      <h2 className="product-title">{name || nombre}</h2>
      <p className="product-price">Precio: <span>${price || precio}</span></p>
      <p className="product-description">{description}</p>
      {children}
    </article>
  );
};