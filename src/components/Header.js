import React from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const [menuOpen, setMenuOpen] = useState(false);
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0);

  const navLinkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <div className="header">
      <div className="logo-container">
        <NavLink to="/" className="logo-link">
          <img className="logo" src={LOGO_URL} alt="logo" />
          <span className="logo-text">NamasteFood</span>
        </NavLink>
      </div>
      <div className={`nav-item ${menuOpen ? "open" : ""}`}>
        <ul>
          <li className="online-status">
            <span title={onlineStatus ? "Online" : "Offline"}>
              {onlineStatus ? "🟢 Online" : "🔴 Offline"}
            </span>
          </li>
          <li>
            <NavLink to="/" className={navLinkClass} onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={navLinkClass} onClick={() => setMenuOpen(false)}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/grocery" className={navLinkClass} onClick={() => setMenuOpen(false)}>
              Grocery
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={navLinkClass} onClick={() => setMenuOpen(false)}>
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className={navLinkClass} onClick={() => setMenuOpen(false)}>
              🛒 Cart
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </NavLink>
          </li>
          <li>
            <button
              className="login"
              onClick={() =>
                setBtnName(btnName === "Login" ? "Logout" : "Login")
              }
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
      <button
        className="hamburger"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>
    </div>
  );
};

export default Header;