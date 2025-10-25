import { Item } from "../Item/Item";
import { useCartContext } from "../../context/CartContext/useCartContext";

export const ItemDetail = ({ detail }) => {
  const { addItem } = useCartContext();

  return (
    <Item {...detail}>
      <button onClick={() => addItem(detail, 1)}>Enviar al carrito</button>
    </Item>
  );
};