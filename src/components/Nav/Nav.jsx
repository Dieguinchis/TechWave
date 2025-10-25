import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";
import "./nav.css";

export const Nav = () => {
  const { getTotalItems } = useCartContext();

  return (
    <nav className="nav">
      <div className="nav__brand">
        <Link to="/">TechWave</Link>
      </div>
      <ul className="nav__links">
        <li className="nav__item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav__item">
          <Link to="/category/audio">Audio</Link>
        </li>
        <li className="nav__item">
          <Link to="/category/smartphone">Smartphones</Link>
        </li>
        <li className="nav__item">
          <Link to="/cart">
            Carrito
            {getTotalItems() > 0 && (
              <span className="in-cart">{getTotalItems()}</span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
};