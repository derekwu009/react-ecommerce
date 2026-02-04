import { CartContext } from "../../contexts/CartContext";
import { useEffect } from "react";
import { useState } from "react";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const handleStorageChange = (event) => {
    if (event.key === "cart" && event.newValue) {
      setCart(JSON.parse(event.newValue));
    }
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleAddToCart = (book, quantity = 1) => {
    const existInCart = cart.find((item) => item.id === book.id);
    if (existInCart) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === book.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        ),
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...book, quantity }]);
    }
    alert(`${quantity} copies of ${book.title} added to cart!`);
  };

  const handleRemoveFromCart = (book) => {
    const existInCart = cart.find((item) => item.id === book.id);
    if (existInCart) {
      setCart(cart.filter((item) => item.id !== book.id));
      alert(`Removed ${book.title} from cart!`);
    }
  };

  const handleUpdateQuantity = (book, quantity) => {
    const existInCart = cart.find((item) => item.id === book.id);
    if (existInCart) {
      setCart(
        cart.map((item) =>
          item.id === book.id ? { ...item, quantity: quantity } : item,
        ),
      );
    }
  };

  const calculateTotal = () => {
    const total = cart.reduce(
      (sum, item) => sum + item.quantity * Number(item.price.replace("$", "")),
      0,
    );
    return total.toFixed(2);
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext
      value={{
        cart,
        handleAddToCart,
        handleRemoveFromCart,
        handleUpdateQuantity,
        calculateTotal,
        clearCart,
      }}
    >
      {children}
    </CartContext>
  );
};
