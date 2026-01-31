import { CartContext } from "../../contexts/CartContext";
import { useContext, useState } from "react";

export const CartButtons = ({ book }) => {
  const [quantity, setQuantity] = useState(1);
  const { handleAddToCart } = useContext(CartContext);

  return (
    <div className="cart-buttons">
      <input
        type="number"
        min="1"
        max="99"
        value={quantity}
        onChange={(event) => setQuantity(Number(event.target.value))}
      />
      <button
        className="add-to-cart-btn"
        onClick={() => handleAddToCart(book, quantity)}
      >
        Add to Cart
      </button>
    </div>
  );
};
