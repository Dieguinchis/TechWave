import { useState, useEffect } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const raw = localStorage.getItem("techwave_cart");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("techwave_cart", JSON.stringify(cart));
    } catch {}
  }, [cart]);

  const exists = (id) => cart.some((p) => p.id === id);

  // item: { id, name, price, imageUrl, ... }, qty default 1
  const addItem = (item, qty = 1) => {
    if (!item || !item.id) return;
    setCart((prev) => {
      const found = prev.find((p) => p.id === item.id);
      if (found) {
        // actualiza cantidad si ya existe
        return prev.map((p) =>
          p.id === item.id ? { ...p, qty: (p.qty || 1) + qty } : p
        );
      }
      return [...prev, { ...item, qty }];
    });
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalItems = () => cart.reduce((sum, p) => sum + (p.qty || 1), 0);

  const getTotalPrice = () =>
    cart.reduce((sum, p) => sum + (p.price || 0) * (p.qty || 1), 0);

  const values = {
    cart,
    addItem,
    removeItem,
    clearCart,
    getTotalItems,
    getTotalPrice,
    exists,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};