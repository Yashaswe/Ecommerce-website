import { useEffect, useState, createContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Login from "./component/Login";
import MyCart from "./component/MyCart";
import Dashboard from "./component/Dashboard";
import ItemDetails from "./component/ItemDetails";
import Navbar from "./component/Navbar";

function App() {
  return (
    <CartProvider>
      <Router>
        <AppRouter />
        <div className="App">
          <div>
            <nav></nav>
          </div>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/mycart" element={<MyCart />}></Route>
            <Route path="/itemdetails" element={<ItemDetails />}></Route>
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

function AppRouter() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  }, []);

  return "";
}
//***Context ***//
export const CartContext = createContext({
  cartitems: [],
});

function CartProvider({ children }) {
  const [cartitems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("mycart")) || []
  );
  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem("mycart")) || []);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("mycart", JSON.stringify(cartitems));
  }, [cartitems]);

  const addToCart = (itemToAdd) => {
    setCartItems((prevCartItems) => prevCartItems.concat(itemToAdd));
  };

  const removeFromCart = (itemToRemove) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((cartitem) => {
        return cartitem.id != itemToRemove.id;
      })
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartitems,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default App;
