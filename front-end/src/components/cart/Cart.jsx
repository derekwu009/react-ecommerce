import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { useEffect } from "react";
import { useState } from "react";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (book, quantity = 1) => {
    const existInCart = cart.find((item) => item.id === book.id);
    if (existInCart) {
      setCart(
        cart.map((item) =>
          item.id === book.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        ),
      );
    } else {
      setCart([...cart, { ...book, quantity }]);
    }
  };

  const handleRemoveFromCart = (book) => {
    const existInCart = cart.find((item) => item.id === book.id);
    if (existInCart && existInCart.quantity === 1) {
      setCart(cart.filer((item) => item.id !== book.id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity - 1 } : item,
        ),
      );
    }
  };

  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.quantity * item.price, 0);

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        handleAddToCart,
        handleRemoveFromCart,
        calculateTotal,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
