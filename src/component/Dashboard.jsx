import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { CartContext } from "../App";
import { FaRegHeart } from "react-icons/fa";

const Dashboard = () => {
  const navigate = useNavigate();
  const value = useContext(CartContext);
  function logout() {
    window.localStorage.removeItem("token");
    navigate("/login");
  }
  function itemClicked(item) {
    navigate("/itemdetails", { state: { item: item, id: item.id } });
  }

  const [error, setError] = useState(null);
  const [items, setItems] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [cartitems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("mycart")) || []
  );

  useEffect(() => {
    async function getItems() {
      try {
        const url = "https://fakestoreapi.com/products";
        const response = await fetch(url);
        const data = await response.json();
        setItems(data);
        setIsLoaded(true);
      } catch (error) {
        setError(true);
        setIsLoaded(true);
      }
    }

    getItems();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="dashboard">
        <Navbar item={cartitems}></Navbar>

        <h1 className="heading">All Products</h1>

        <div className="allItems">
          {items.map((item) => (
            <div key={item.id} className="item">
              <div className="image_frame" onClick={() => itemClicked(item)}>
                <img className="item_image" src={item.image} />
              </div>
              <div className="item_title"> {item.title}</div>
              <div className="item_price"> ${item.price}</div>

              <button
                className="buttonicon addToCart"
                onClick={() => value.addToCart(item)}
              >
                <h2>
                  <FaRegHeart />
                </h2>
              </button>
            </div>
          ))}
        </div>
        <input
          className="logout"
          type="button"
          value="logout"
          onClick={logout}
        ></input>
      </div>
    );
  }
};

export default Dashboard;
