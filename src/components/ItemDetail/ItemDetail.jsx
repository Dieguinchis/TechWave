import { useCartContext } from "../../context/CartContext/useCartContext";
import { Count } from "../Count/Count";
import { Item } from "../Item/Item";

export const ItemDetail = ({ detail }) => {
  const { addItem } = useCartContext();

  const handleAdd = (quantity) => {
    // Normaliza las propiedades
    const product = {
      id: detail.id,
      name: detail.name || detail.nombre,
      price: Number(detail.price || detail.precio),
      category: detail.category || detail.categoria,
      imageUrl: detail.imageUrl || detail.imagen,
      description: detail.description,
      quantity,
    };
    addItem(product);
  };

  return (
    <Item {...detail}>
      <Count btnText={"Agregar al carrito"} onConfirm={handleAdd} />
    </Item>
  );
};
