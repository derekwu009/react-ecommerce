import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export const ShoppingCart = () => {
  const {
    cart,
    handleAddToCart,
    handleRemoveFromCart,
    calculateTotal,
    clearCart,
  } = useContext(CartContext);

  return (
    <section className="cart-section">
      <div className="cart-container"></div>
    </section>
  );
};
