import "./ShoppingCart.css";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ItemTable } from "../../components/itemtable/ItemTable";

export const ShoppingCart = () => {
  const { cart, calculateTotal } = useContext(CartContext);

  return (
    <section className="cart-section">
      <div className="site-content">
        <div className="cart-container">
          <div className="cart-table">
            <ItemTable />
          </div>
          <div className="checkout">
            <h2>Total: ${calculateTotal()}</h2>
            <button>Place Order</button>
          </div>
        </div>
      </div>
    </section>
  );
};
