import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import PlaceOrder from "./pages/Place_order/PlaceOrder.jsx";
import Footer from "./components/footer/Footer";
import { useState } from "react";
import MyOrders from "./pages/MyOrders/MyOrders"
import Login from "./components/LogInPopUp/Login"
import Verify from "./pages/verify/Verify";
import Search from "./components/Search/Search";
import { ToastContainer } from 'react-toastify';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? (
        <Login setShowLogin={setShowLogin} showLogin={showLogin} />
      ) : null}
      <div className="app">
      <ToastContainer />
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify/>} />
          <Route path="/myorders" element={<MyOrders/>} />
          <Route path="/search" element={<Search/>} />
          
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
