import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, avgRating, cloudinaryImageId, costForTwo, cuisines, sla, aggregatedDiscountInfoV3 } =
    resData?.info ?? resData?.card?.card?.info ?? {};
  const discount = aggregatedDiscountInfoV3
    ? `${aggregatedDiscountInfoV3.header} ${aggregatedDiscountInfoV3.subHeader || ""}`.trim()
    : null;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt={name}
        src={CDN_URL+cloudinaryImageId}
      />
      <div className="res-info">
        <div className="res-name">{name}</div>
        <div className="res-cuisines">{cuisines?.join(", ")}</div>
        {discount && <span className="res-discount">{discount}</span>}
        <div className="res-meta">
          <span className="res-rating">⭐ {avgRating}</span>
          <span className="res-delivery">🕐 {sla?.slaString}</span>
          <span className="res-cost">{costForTwo}</span>
        </div>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => (
    <div style={{ position: "relative" }}>
      <span style={{
        position: "absolute", top: "10px", left: "10px",
        background: "#ff5722", color: "#fff",
        fontSize: "11px", fontWeight: "700",
        padding: "3px 8px", borderRadius: "6px", zIndex: 1
      }}>Promoted</span>
      <RestaurantCard {...props} />
    </div>
  );
};

export default RestaurantCard;