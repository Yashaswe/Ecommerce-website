import { useContext, useState } from "react";
import { CartContext } from "../App.jsx";

const Checkout = (items) => {
  // const value = useContext(CartContext);
  let totalPrice = 0;
  items.items.forEach(
    (item) =>
      (totalPrice =
        Math.round((totalPrice + item.quantity * item.price) * 100) / 100)
  );
  return (
    <div className="checkout">
      <h1 className="heading">Checkout</h1>
      <table className="checkoutTable">
        <tr>
          <th className="checkout_item_title"> Items</th>
          <th className="checkout_item_quantity"> Quantity</th>
          <th className="checkout_item_price"> Price</th>
          <th className="checkout_item_price"> Total Price</th>
        </tr>
        {items.items.map((item) => (
          <tr key={item.id}>
            <td className="checkout_item_title"> {item.title}</td>
            <td className="checkout_item_quantity"> {item.quantity}</td>
            <td className="checkout_item_price"> ${item.price}</td>
            <td className="checkout_item_price">
              {" "}
              ${Math.round(item.quantity * item.price * 100) / 100}
            </td>
          </tr>
        ))}
        <tr>
          <td colSpan="3">Total Price</td>
          <td>${totalPrice}</td>
        </tr>
      </table>

      <input type="button" value="Pay" className="checkout_button"></input>
    </div>
  );
};
export default Checkout;
