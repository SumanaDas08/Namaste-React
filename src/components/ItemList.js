import React, { useState } from "react";
import { CDN_URL, getItemPrice } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemList = ({ items, showRemove = false }) => {
  const dispatch = useDispatch();
  const [addedIds, setAddedIds] = useState({});

  const handleAdd = (item) => {
    dispatch(addItem(item));
    const id = item.card.info.id;
    setAddedIds((prev) => ({ ...prev, [id]: true }));
    setTimeout(
      () => setAddedIds((prev) => ({ ...prev, [id]: false })),
      1200
    );
  };

  return (
    <ul className="category-items">
      {items?.map((item) => {
        const isVeg = item.card.info.itemAttribute?.vegClassifier === "VEG";
        const isRecommended = item.card.info.ribbon?.text === "Recommended";
        const imgId = item.card.info.imageId;
        const imgSrc = imgId?.startsWith("http")
          ? imgId
          : imgId
          ? CDN_URL + imgId
          : null;
        const quantity = item.quantity || 1;
        const added = addedIds[item.card.info.id];

        return (
          <li key={item.card.info.id} className="category-item">
            <div className="item-row">
              <div className="item-left">
                <div className="item-details">
                  <span className={isVeg ? "veg-icon" : "nonveg-icon"} />
                  {isRecommended && (
                    <span className="recommended-badge">⭐ Recommended</span>
                  )}
                </div>
                <span className="item-name">{item.card.info.name}</span>
                <span className="item-price">₹{getItemPrice(item.card.info)}</span>
                {item.card.info.description && (
                  <p className="item-desc">{item.card.info.description}</p>
                )}
                {showRemove ? (
                  <div className="qty-control">
                    <button
                      className="qty-btn"
                      onClick={() => dispatch(removeItem(item.card.info.id))}
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span className="qty-value">{quantity}</span>
                    <button
                      className="qty-btn"
                      onClick={() => handleAdd(item)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    className={`cart-btn add-btn ${added ? "added-btn" : ""}`}
                    onClick={() => handleAdd(item)}
                  >
                    {added ? "✓ ADDED" : "+ ADD"}
                  </button>
                )}
              </div>
              {imgSrc && (
                <img className="item-img" src={imgSrc} alt={item.card.info.name} />
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ItemList;