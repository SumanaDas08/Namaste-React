import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";
import { Link } from "react-router-dom";
import { getItemPrice } from "../utils/constants";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const itemCount = cartItems.reduce(
    (acc, item) => acc + (item.quantity || 1),
    0
  );
  const subtotal = cartItems.reduce(
    (acc, item) => acc + getItemPrice(item.card.info) * (item.quantity || 1),
    0
  );
  const deliveryFee = subtotal > 0 && subtotal < 500 ? 40 : 0;
  const gst = Math.round(subtotal * 0.05 * 100) / 100;
  const total = subtotal + deliveryFee + gst;

  if (orderPlaced) {
    return (
      <div className="empty-state checkout-success">
        <div className="empty-emoji">🎉</div>
        <h2>Order Placed!</h2>
        <p>
          <strong>₹{total.toFixed(2)}</strong> • {itemCount} item
          {itemCount !== 1 ? "s" : ""}
        </p>
        <p>Your food is on its way. Thank you for ordering with NamasteFood!</p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", marginTop: "8px" }}>
          <Link to="/">
            <button className="contact-submit-btn" style={{ width: "auto", padding: "12px 24px" }}>
              Order More
            </button>
          </Link>
          <button
            className="filter-btn"
            onClick={() => {
              dispatch(clearCart());
              setOrderPlaced(false);
            }}
          >
            Reorder
          </button>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-emoji">🛒</div>
        <h2>Your cart is empty</h2>
        <p>Add items from a restaurant to get started.</p>
        <Link to="/">
          <button className="contact-submit-btn" style={{ width: "auto", padding: "12px 32px" }}>
            Browse Restaurants
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="menu">
      <div className="cart-header">
        <h1>Your Cart 🛒</h1>
        <button className="filter-btn" onClick={() => dispatch(clearCart())}>
          Clear All
        </button>
      </div>

      <ItemList items={cartItems} showRemove={true} />

      <div className="cart-summary">
        <h3>Bill Details</h3>
        <div className="cart-summary-row">
          <span>
            Subtotal ({itemCount} item{itemCount !== 1 ? "s" : ""})
          </span>
          <span>₹{subtotal.toFixed(2)}</span>
        </div>
        <div className="cart-summary-row">
          <span>Delivery Fee</span>
          <span style={{ color: deliveryFee ? undefined : "#48c479", fontWeight: 700 }}>
            {deliveryFee ? `₹${deliveryFee.toFixed(2)}` : "FREE"}
          </span>
        </div>
        <div className="cart-summary-row">
          <span>GST (5%)</span>
          <span>₹{gst.toFixed(2)}</span>
        </div>
        <div className="cart-summary-row cart-total">
          <span>To Pay</span>
          <span>₹{total.toFixed(2)}</span>
        </div>
        <button className="contact-submit-btn" onClick={() => setOrderPlaced(true)}>
          Proceed to Checkout 🚀
        </button>
      </div>
    </div>
  );
};

export default Cart;