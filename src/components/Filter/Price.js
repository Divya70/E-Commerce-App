import React from "react";
import "./css/price.css";
const Price = () => {
  return (
    <>
      <div className="filter-sidebar-price">
        <span>
          <b>Price</b>
        </span>
        <div className="price">
          <span>100</span>
          <span>200</span>
          <span>1000</span>
          <span>2000</span>
        </div>
        <input
          type="range"
          min="100"
          max="2000"
          className="price-range"
          style={{ width: "80%" }}
        />
      </div>
    </>
  );
};
export { Price };
