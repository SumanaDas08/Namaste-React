import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-brand">
        <h2>🍽️ NamasteFood</h2>
        <p>Delivering happiness, one meal at a time.</p>
      </div>
      <div className="footer-links">
        <h4>Quick Links</h4>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </div>
      <div className="footer-links">
        <h4>Contact</h4>
        <ul>
          <li>📍 Surat, Gujarat</li>
          <li>📞 +91 98765 43210</li>
          <li>✉️ support@namastefood.com</li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© 2025 NamasteFood. Made with ❤️ by Sumana Das</p>
    </div>
  </footer>
);

export default Footer;
