import "./ItemTable.css";

import { useContext } from "react";
import { FiXCircle } from "react-icons/fi";
import { CartContext } from "../../contexts/CartContext";

export const ItemTable = () => {
  const {
    cart,
    handleAddToCart,
    handleRemoveFromCart,
    calculateTotal,
    clearCart,
  } = useContext(CartContext);

  return (
    <>
      <table className="cart-table" cellSpacing={0}>
        <thead>
          <tr className="table-header">
            <th className="item-remove"></th>
            <th className="item-cover"></th>
            <th className="item-name">Product</th>
            <th className="item-price">Price</th>
            <th className="item-quantity">Quantity</th>
            <th className="item-subtotal">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((book) => (
            <tr key={book.id} className="item-row">
              <td className="remove-icon">
                <div className="svg-container">
                  <FiXCircle />
                </div>
              </td>
              <td className="cartItem-cover">
                <img src={book.cover} alt={book.title} width={100} />
              </td>
              <td className="cartItem-name">{book.title}</td>
              <td className="cartItem-price">{book.price}</td>
              <td className="cartItem-quantity">
                <input
                  type="number"
                  min="1"
                  max="99"
                  defaultValue={book.quantity}
                />
              </td>
              <td className="cartItem-subtotal">
                $
                {(Number(book.price.replace("$", "")) * book.quantity).toFixed(
                  2,
                )}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="cart-table-footer">
            <td colSpan={6}>
              <button className="update-cart-button">Update Cart</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};
