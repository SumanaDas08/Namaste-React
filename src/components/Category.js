import React from "react";
import ItemList from "./ItemList";

const Category = ({ data, showItems = false, onToggle }) => {
  const itemCount = data?.itemCards?.length ?? 0;

  return (
    <div className={`category ${showItems ? "open" : ""}`}>
      <h3 className="category-title" onClick={onToggle}>
        <span>
          {data?.title}
          <span className="category-count">({itemCount})</span>
        </span>
        <span className={`chevron ${showItems ? "up" : ""}`}>▾</span>
      </h3>
      {showItems && <ItemList items={data?.itemCards} />}
    </div>
  );
};

export default Category;