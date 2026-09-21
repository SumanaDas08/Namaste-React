import React from "react";
import RestrurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState, useMemo, useRef } from "react";
import Shimmer from "./Shimmer";
import resList from "../utils/mockData";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const PromotedRestaurantCard = withPromotedLabel(RestrurantCard);

const getInfo = (res) => res?.info ?? res?.card?.card?.info;
const parseCost = (str = "") => parseInt(str.replace(/[^0-9]/g, ""), 10) || 0;

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [vegOnly, setVegOnly] = useState(false);
  const [loading, setLoading] = useState(true);
  const fetchedRef = useRef(false);

  useEffect(() => {
    if (fetchedRef.current) return;
    fetchedRef.current = true;
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const text = await data.text();
      if (!text) throw new Error("Empty response");
      const json = JSON.parse(text);
      const cards = json?.data?.cards;
      const restaurantCard = cards?.find(
        (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      const restaurants =
        restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      if (Array.isArray(restaurants) && restaurants.length > 0) {
        setListOfRestaurants(restaurants);
      } else {
        setListOfRestaurants(resList);
      }
    } catch (err) {
      console.warn("Swiggy API failed, using mock data:", err.message);
      setListOfRestaurants(resList);
    } finally {
      setLoading(false);
    }
  };

  const filteredRestaurants = useMemo(() => {
    const query = searchText.trim().toLowerCase();
    let result = listOfRestaurants.filter((res) => {
      const info = getInfo(res);
      const name = info?.name ?? "";
      const cuisines = (info?.cuisines ?? []).join(" ").toLowerCase();
      const matchesSearch = !query || name.toLowerCase().includes(query) || cuisines.includes(query);
      const matchesVegFilter = !vegOnly || info?.veg === true;
      return matchesSearch && matchesVegFilter;
    });

    switch (sortBy) {
      case "rating":
        result = [...result].sort(
          (a, b) => (getInfo(b)?.avgRating ?? 0) - (getInfo(a)?.avgRating ?? 0)
        );
        break;
      case "cost-low":
        result = [...result].sort(
          (a, b) =>
            parseCost(getInfo(a)?.costForTwo) - parseCost(getInfo(b)?.costForTwo)
        );
        break;
      case "cost-high":
        result = [...result].sort(
          (a, b) =>
            parseCost(getInfo(b)?.costForTwo) - parseCost(getInfo(a)?.costForTwo)
        );
        break;
      case "delivery":
        result = [...result].sort((a, b) => {
          const timeA = getInfo(a)?.sla?.deliveryTime ?? 99;
          const timeB = getInfo(b)?.sla?.deliveryTime ?? 99;
          return timeA - timeB;
        });
        break;
      default:
        break;
    }
    return result;
  }, [listOfRestaurants, searchText, sortBy, vegOnly]);

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus)
    return (
      <div className="empty-state">
        <div className="empty-emoji">📡</div>
        <h2>You're Offline</h2>
        <p>Please check your internet connection and try again.</p>
      </div>
    );

  if (loading) return <Shimmer />;

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <span>🔍</span>
          <input
            type="text"
            className="search-box"
            placeholder="Search restaurants or cuisines..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          {searchText && (
            <button
              className="search-clear"
              aria-label="Clear search"
              onClick={() => setSearchText("")}
            >
              ✕
            </button>
          )}
        </div>
        <button
          className={`filter-btn ${vegOnly ? "active" : ""}`}
          onClick={() => setVegOnly((v) => !v)}
        >
          {vegOnly ? "🥦 Pure Veg" : "🥦 Veg Only"}
        </button>
        <select
          className="sort-select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="default">Sort: Relevance</option>
          <option value="rating">Rating: High to Low</option>
          <option value="cost-low">Cost: Low to High</option>
          <option value="cost-high">Cost: High to Low</option>
          <option value="delivery">Delivery: Fastest</option>
        </select>
      </div>

      <div className="result-info">
        <span>
          {filteredRestaurants.length} restaurant
          {filteredRestaurants.length !== 1 ? "s" : ""}
          {searchText && <> for "<strong>{searchText}</strong>"</>}
        </span>
      </div>

      {filteredRestaurants.length === 0 ? (
        <div className="empty-state">
          <div className="empty-emoji">🍽️</div>
          <h2>No restaurants found</h2>
          <p>Try a different search term or clear the filters.</p>
          <button
            className="filter-btn"
            onClick={() => {
              setSearchText("");
              setVegOnly(false);
              setSortBy("default");
            }}
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="res-container">
          {filteredRestaurants.map((restaurant, index) => {
            const info = getInfo(restaurant);
            return (
              <Link key={info?.id} to={`/restaurant/${info?.id}`}>
                {index % 3 === 0 ? (
                  <PromotedRestaurantCard resData={restaurant} />
                ) : (
                  <RestrurantCard resData={restaurant} />
                )}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Body;