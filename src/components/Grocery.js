import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const groceryData = [
  {
    category: "🥦 Vegetables",
    items: [
      { card: { info: { id: "g1", name: "Fresh Tomatoes", price: 4000, defaultPrice: 4000, description: "Farm fresh red tomatoes 500g", imageId: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=200", itemAttribute: { vegClassifier: "VEG" } } } },
      { card: { info: { id: "g2", name: "Spinach", price: 3000, defaultPrice: 3000, description: "Organic spinach leaves 250g", imageId: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=200", itemAttribute: { vegClassifier: "VEG" } } } },
      { card: { info: { id: "g3", name: "Carrots", price: 3500, defaultPrice: 3500, description: "Fresh carrots 500g", imageId: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=200", itemAttribute: { vegClassifier: "VEG" } } } },
    ],
  },
  {
    category: "🍎 Fruits",
    items: [
      { card: { info: { id: "g4", name: "Apples", price: 18000, defaultPrice: 18000, description: "Kashmiri apples 1kg", imageId: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=200", itemAttribute: { vegClassifier: "VEG" } } } },
      { card: { info: { id: "g5", name: "Bananas", price: 6000, defaultPrice: 6000, description: "Fresh bananas 1 dozen", imageId: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=200", itemAttribute: { vegClassifier: "VEG" } } } },
      { card: { info: { id: "g6", name: "Mangoes", price: 25000, defaultPrice: 25000, description: "Alphonso mangoes 1kg", imageId: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=200", itemAttribute: { vegClassifier: "VEG" } } } },
    ],
  },
  {
    category: "🥛 Dairy",
    items: [
      { card: { info: { id: "g7", name: "Full Cream Milk", price: 6500, defaultPrice: 6500, description: "Fresh full cream milk 1L", imageId: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=200", itemAttribute: { vegClassifier: "VEG" } } } },
      { card: { info: { id: "g8", name: "Paneer", price: 9000, defaultPrice: 9000, description: "Fresh cottage cheese 200g", imageId: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=200", itemAttribute: { vegClassifier: "VEG" } } } },
      { card: { info: { id: "g9", name: "Curd", price: 4500, defaultPrice: 4500, description: "Thick set curd 400g", imageId: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=200", itemAttribute: { vegClassifier: "VEG" } } } },
    ],
  },
  {
    category: "🍞 Bakery",
    items: [
      { card: { info: { id: "g10", name: "Whole Wheat Bread", price: 4500, defaultPrice: 4500, description: "Freshly baked whole wheat loaf", imageId: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200", itemAttribute: { vegClassifier: "VEG" } } } },
      { card: { info: { id: "g11", name: "Croissant", price: 5500, defaultPrice: 5500, description: "Buttery flaky croissant", imageId: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=200", itemAttribute: { vegClassifier: "VEG" } } } },
      { card: { info: { id: "g12", name: "Muffin", price: 4000, defaultPrice: 4000, description: "Blueberry muffin", imageId: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=200", itemAttribute: { vegClassifier: "VEG" } } } },
    ],
  },
];

const GroceryCard = ({ item }) => {
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    dispatch(addItem(item));
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="grocery-card">
      <img src={item.card.info.imageId} alt={item.card.info.name} className="grocery-img" />
      <div className="grocery-info">
        <h4>{item.card.info.name}</h4>
        <p>{item.card.info.description}</p>
        <div className="grocery-footer">
          <span className="grocery-price">₹{item.card.info.price / 100}</span>
          <button className={`cart-btn ${added ? "added-btn" : "add-btn"}`} onClick={handleAdd}>
            {added ? "✓ Added" : "+ Add"}
          </button>
        </div>
      </div>
    </div>
  );
};

const Grocery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", ...groceryData.map((g) => g.category)];
  const filtered = activeCategory === "All" ? groceryData : groceryData.filter((g) => g.category === activeCategory);

  return (
    <div className="grocery-page">
      <div className="grocery-hero">
        <h1>🛒 Fresh Grocery Delivery</h1>
        <p>Farm fresh vegetables, fruits, dairy and more — delivered in 30 minutes</p>
      </div>

      <div className="grocery-categories">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`grocery-cat-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.map((section) => (
        <div key={section.category} className="grocery-section">
          <h2>{section.category}</h2>
          <div className="grocery-grid">
            {section.items.map((item) => (
              <GroceryCard key={item.card.info.id} item={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Grocery;
