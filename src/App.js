
import React, { useState } from "react";
import "./App.css";
import { products } from "./components/data";
import Product from "./components/Product";
import logo from "./AKPINAR ECOMMERCE-logos_black.png"
import ProductDetails from './components/ProductDetails';
import { BrowserRouter as Router, Route,Routes, Switch, Link } from 'react-router-dom';
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Login from "./components/Login";

function App() {
  const [cart,setCart]=useState([]);
  const defaultLogin = JSON.parse(window.localStorage.getItem("login")); 
  const [isLoggedIn, setIsLoggedIn] = useState(defaultLogin.login);
  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === existingItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    window.localStorage.setItem("login", JSON.stringify({login : false}));
  };


  
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  return (
    <div className='App'>
      <h1> <img src={logo} alt="E-commerce Store Logo" className="logo" /> </h1>

      
       <Router>
        <Routes>
          <Route path="/" element={<div className="product-list">
            {products.map((product) => (
              <div key={product.id} className="product">
                <div className="image-container">
                  <Link to={`/product/${product.id}`}>
                    <img src={product.image} alt={product.name} />
                  </Link>
                  
                  
                </div>
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            ))}
          </div>} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/login"
            element={<Login onLogin={() => setIsLoggedIn(true)} />}
          />

        </Routes>

        <div className="top-right">
          {!isLoggedIn ? (
            <Link to="/login">Login</Link>
          ) : (
            <Link to="/" onClick={handleLogout}>Logout</Link>
          )}
        </div>

        
        
        <div className="cart">
          <Cart 
            cartItems={cart}
            removeFromCart={removeFromCart}
            total={calculateTotalPrice()}
          />
          <Link to="/checkout">
            <button>Checkout</button>
          </Link>
        </div>
        
      </Router>

    </div>
  );
}

export default App;
