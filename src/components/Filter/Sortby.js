import React from "react";
import "./css/sortby.css";
import { useProduct } from "../../Context/Product-Context";
const Sortby = () => {
  const { state, dispatch } = useProduct();
  return (
    <>
      <div className="filter-sidebar-category">
        <span>
          <b>Sort By</b>
        </span>
        <div className="filter-items">
          <input
            type="radio"
            name="radio"
            id="low-to-high"
            onChange={() => dispatch({ type: "LOW_TO_HIGH" })}
          />
          <label htmlFor="low-to-high"> Price - Low to High</label>
        </div>
        <div className="filter-items">
          <input
            type="radio"
            name="radio"
            id="high-to-low"
            checked={state.sortBy === "HIGH_TO_LOW"}
            onChange={() => dispatch({ type: "HIGH_TO_LOW" })}
          />
          <label htmlFor="high-to-low">Price - High to Low</label>
        </div>
      </div>
    </>
  );
};
export { Sortby };
