import { useEffect, useState, useContext } from "react/cjs/react.development";
import { Link } from "react-router-dom";
import { CartContext } from "../App.jsx";

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const value = useContext(CartContext) || [];
  const cartitems = value.cartitems || [];

  useEffect(() => {
    async function getCategories() {
      try {
        const url_category = "http://localhost:3001/categories";
        const response = await fetch(url_category, {
          method: "POST",
        });

        const data = await response.json();
        setCategories(data.categories);
      } catch (error) {}
    }
    getCategories();
  }, []);

  return (
    <div className="dashboard_header">
      <div>
        <ul className="dashboard_nav">
          <Link to="/dashboard">
            <li>All Products</li>
          </Link>
          {categories.map((category) => (
            <li key={category}>{category}</li>
          ))}
          <Link to="/mycart">
            <li>
              My Cart<span className="cartNo">{cartitems.length}</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className="searchbox">
        {" "}
        <input type="text" placeholder="Product Name..." />
        <button className="search_button">Search</button>{" "}
      </div>
    </div>
  );
};
export default Navbar;
