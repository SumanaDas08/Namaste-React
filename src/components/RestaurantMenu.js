import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams, Link } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import Category from "./Category";
import mockMenuData from "../utils/mockMenuData";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [showIndex, setShowIndex] = useState(0);
  const { id } = useParams();
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchMenu();
  }, [id]);

  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_API + id);
      const text = await data.text();
      if (!text) throw new Error("Empty response");
      const json = JSON.parse(text);
      if (json.data) {
        setResInfo(json.data);
      } else {
        setResInfo(mockMenuData[id] ?? mockMenuData["934128"]);
      }
    } catch (err) {
      console.warn("Menu fetch failed, using mock:", err.message);
      setResInfo(mockMenuData[id] ?? mockMenuData["934128"]);
    }
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, areaName, avgRating, totalRatingsString, sla, costForTwoMessage, veg } =
    resInfo?.cards[0]?.card?.card?.info ?? {};

  const categories =
    resInfo?.cards
      ?.find((c) => c?.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (c) =>
          c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      ) ?? [];

  if (!onlineStatus)
    return (
      <div className="empty-state">
        <div className="empty-emoji">📡</div>
        <h2>You're Offline</h2>
        <p>Please check your internet connection and try again.</p>
      </div>
    );

  return (
    <div className="menu">
      <Link
        to="/"
        className="back-link"
      >
        ← Back to Restaurants
      </Link>

      <div className="menu-restaurant-card">
        <div className="menu-restaurant-head">
          <h1>{name}</h1>
          <div className="menu-rating-box">
            <span className={Number(avgRating) >= 4 ? "rating-good" : "rating-bad"}>
              ★ {avgRating || "NA"}
            </span>
            <span className="rating-count">{totalRatingsString || ""}</span>
          </div>
        </div>
        <p className="menu-cuisines">
          {cuisines?.join(", ")}
          {veg ? " 🥦 Pure Veg" : ""}
        </p>
        <p className="menu-info">
          {areaName && <span>📍 {areaName}</span>}
          {sla?.slaString && (
            <span className="chip">
              🕐 {sla.slaString}
            </span>
          )}
          {costForTwoMessage && <span className="chip">💸 {costForTwoMessage}</span>}
        </p>
      </div>

      <div className="menu-items-heading">
        <h2>Menu</h2>
        <span>{categories.reduce((acc, c) => acc + (c?.card?.card?.itemCards?.length ?? 0), 0)} items</span>
      </div>

      {categories.length === 0 ? (
        <p className="no-items">No menu items available.</p>
      ) : (
        categories.map((category, i) => (
          <Category
            key={i}
            data={category?.card?.card}
            showItems={showIndex === i}
            onToggle={() => setShowIndex(showIndex === i ? null : i)}
          />
        ))
      )}
    </div>
  );
};

export default RestaurantMenu;