import { CartContext } from "../../contexts/CartContext";
import { AuthContext } from "../../contexts/AuthContext";
import { useEffect, useState, useContext } from "react";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const { accessToken } = useContext(AuthContext);

  const authHeaders = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  };

  useEffect(() => {
    const fetchCart = async () => {
      if (!accessToken) {
        setCart([]);
        return;
      }

      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/cart`, {
          headers: authHeaders,
          credentials: "include",
        });

        const data = await res.json();
        setCart(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCart();
  }, [accessToken]);

  const handleAddToCart = async (book, quantity = 1) => {
    try {
      const existInCart = cart.find((item) => item.book_id === book.id);

      if (existInCart) {
        handleUpdateQuantity(book, existInCart.quantity + quantity);
      } else {
        await fetch(`${import.meta.env.VITE_API_URL}/api/cart`, {
          method: "POST",
          headers: authHeaders,
          credentials: "include",
          body: JSON.stringify({ bookId: book.id, quantity: quantity }),
        });

        setCart((prev) => [...prev, { ...book, book_id: book.id, quantity }]);
        alert(`${quantity} copies of ${book.title} added to cart!`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleRemoveFromCart = async (book) => {
    try {
      const res = cart.find((item) => item.book_id === book.id);

      if (res) {
        await fetch(`${import.meta.env.VITE_API_URL}/api/cart/${book.id}`, {
          method: "DELETE",
          headers: authHeaders,
          credentials: "include",
        });
      }

      setCart((prev) => prev.filter((item) => item.book_id !== book.id));
      alert(`Removed ${book.title} from cart!`);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateQuantity = async (book, quantity) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/cart/${book.id}`,
        {
          method: "PATCH",
          headers: authHeaders,
          credentials: "include",
          body: JSON.stringify({ quantity }),
        },
      );

      if (res) {
        setCart((prev) =>
          prev.map((item) =>
            item.book_id === book.id ? { ...item, quantity: quantity } : item,
          ),
        );
      }
    } catch (error) {
      console.err(error);
    }
  };

  const calculateTotal = () => {
    const total = cart.reduce(
      (sum, item) => sum + item.quantity * Number(item.price.replace("$", "")),
      0,
    );
    return total.toFixed(2);
  };

  const clearCart = async () => {
    try {
      await Promise.all(
        cart.map((item) =>
          fetch(`${import.meta.env.VITE_API_URL}/api/cart/${item.bookId}`, {
            method: "DELETE",
            headers: authHeaders,
            credentials: "include",
          }),
        ),
      );

      setCart([]);
    } catch (error) {
      console.error(error);
    }
  };

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
