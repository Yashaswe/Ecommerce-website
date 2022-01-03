import { useLocation } from "react-router-dom";
import { CartContext } from "../App";
import { useContext } from "react";
import Navbar from "./Navbar";
import { FaRegHeart } from "react-icons/fa";

const ItemDetails = () => {
  const value = useContext(CartContext);
  const { state } = useLocation();
  const { item, id } = state;
  return (
    <div>
      <Navbar></Navbar>
      <div className="descriptionPage">
        <div className="description_left">
          <img className="item_image_description" src={item.image} />
        </div>
        <div className="description_right">
          <h2>{item.title}</h2>
          <br />
          <div>{item.description}</div>
          <div className="item_price">${item.price}</div>
          <div>Ratings: {item.rating.rate}</div>
          <button
            className="buttonicon addToCart"
            onClick={() => value.addToCart(item)}
          >
            <h2>
              <FaRegHeart />
            </h2>
          </button>
        </div>
      </div>
    </div>
  );
};
export default ItemDetails;
