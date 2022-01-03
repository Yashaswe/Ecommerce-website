import { useLocation } from "react-router-dom";
import { CartContext } from "../App";
import { useContext } from "react";
import Navbar from "./Navbar";
const ItemDetails = () => {
  const value = useContext(CartContext);
  const { state } = useLocation();
  const { item, id } = state;
  console.log(item);
  return (
    <div>
      <Navbar></Navbar>
      <div className="descriptionPage">
        <div className="description_left">
          <img src=""></img>
        </div>
        <div className="description_right">
          <h2>{item.title}</h2>
          <img className="item_image" src={item.image} />
          <p>{item.description}</p>
          <p>{item.price}</p>
          <input
            className="addToCart"
            type="button"
            value="cart"
            onClick={() => value.addToCart(item)}
          ></input>
        </div>
      </div>
    </div>
  );
};
export default ItemDetails;
