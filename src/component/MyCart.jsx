import { useContext, useState } from "react";
import { CartContext } from "../App.jsx";
import Navbar from "./Navbar";
import Checkout from "./Checkout";
import { ImCross } from "react-icons/im";

const MyCart = () => {
  const value = useContext(CartContext);
  const mycartunique = [];
  /*const mycartunique = value.cartitems.filter(function (item, index, array) {
    for (let i = index - 1; i >= 0; i--) {
      if (array[i] === item) {
        return false;
      }
    }
    return true;
  });*/
  function Count(arra, item) {
    let quantity = 0;

    for (let i = 0; i < arra.length; i++) {
      if (arra[i].id === item.id) {
        quantity++;
      }
    }
    return quantity;
  }
  value.cartitems.forEach((item, index, a) => {
    let prevoccured = false;

    for (let i = index - 1; i >= 0; i--) {
      if (a[i].id === item.id) {
        prevoccured = true;
      }
    }
    if (!prevoccured) {
      let itemquantity = Count(a, item);
      item.quantity = itemquantity;
      mycartunique.push(item);
    }
  });

  if (value.cartitems.length === 0) {
    return (
      <div>
        <Navbar></Navbar>
        <h1 className="heading">My Cart</h1>
        Your Cart is Empty
      </div>
    );
  } else {
    return (
      <div>
        <Navbar></Navbar>
        <div className="mycart">
          <h1 className="heading">My Cart</h1>
          <div className="allItems">
            {mycartunique.map((item) => (
              <div key={item.id} className="item">
                <div className="image_frame">
                  <img className="item_image" src={item.image} />
                </div>
                <div className="item_title"> {item.title}</div>
                <div className="item_quantity">quantity: {item.quantity}</div>
                <div className="item_price"> ${item.price}</div>

                <button
                  className="buttonicon removeFromCart"
                  onClick={() => value.removeFromCart(item)}
                >
                  <ImCross style={{ color: "#ed1b2e" }} />
                </button>
              </div>
            ))}
          </div>
        </div>
        <Checkout items={mycartunique}></Checkout>
      </div>
    );
  }
};

export default MyCart;
