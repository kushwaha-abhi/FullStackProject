import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/frontend_assets/assets";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { storeContext } from "../../Context/storeContext.jsx"
const Navbar = ({ setShowLogin }) => {
  const Navigate= useNavigate();
  const [menu, setMenu] = useState("home");
  // const {token} = useContext(storeContext);
  const token = localStorage.getItem("token");

  const logoOut= ()=>{
    localStorage.removeItem("token");
    window.location.reload();
  }
  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#exploremenu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#mobile-app"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          Mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>
      <div className="navbarright">
        <span onClick={()=>Navigate('/search')} ><img src={assets.search_icon} alt="" /></span>
        <div className="navbar-search-icon">
          <Link to="/cart">
            {" "}
            <img src={assets.basket_icon} alt="" />{" "}
          </Link>
          <div className="dot"></div>
        </div>
        {!token ? (
          <button
            onClick={() => {
              setShowLogin(true);
            }}
          >
            Sign In
          </button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li onClick={()=>Navigate('/myorders')}><img src={assets.bag_icon} alt="" /> <p>Orders</p></li>
              <hr />
              <li onClick={logoOut} ><img src={assets.logout_icon} alt="" /> <p>LogOut</p></li>
              </ul>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default Navbar;
