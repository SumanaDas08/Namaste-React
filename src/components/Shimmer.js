import React from "react";

const ShimmerCard = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-img"></div>
      <div className="shimmer-info">
        <div className="shimmer-line"></div>
        <div className="shimmer-line short"></div>
        <div className="shimmer-line shorter"></div>
      </div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="res-container">
      {Array(8).fill("").map((_, i) => (
        <ShimmerCard key={i} />
      ))}
    </div>
  );
};

export default Shimmer;
