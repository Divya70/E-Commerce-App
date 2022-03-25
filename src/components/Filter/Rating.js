import React from "react";
import "./css/rating.css";
import { useProduct } from "../../Context/Product-Context";
const Rating = () => {
  const { dispatch } = useProduct();
  return (
    <>
      <div className="filter-sidebar-category">
        <span>
          <b>Rating</b>
        </span>
        <div className="filter-items">
          <input
            type="radio"
            name="rating"
            id="4star"
            onChange={() => dispatch({ type: "RATING", payload: 4 })}
          />
          <label htmlFor="4star"> 4 stars</label>
        </div>
        <div className="filter-items">
          <input
            type="radio"
            name="rating"
            id="3star"
            onChange={() => dispatch({ type: "RATING", payload: 3 })}
          />
          <label htmlFor="3star"> 3 stars</label>
        </div>
        <div className="filter-items">
          <input
            type="radio"
            name="rating"
            id="2star"
            onChange={() => dispatch({ type: "RATING", payload: 2 })}
          />
          <label htmlFor="2star"> 2 stars</label>
        </div>
        <div className="filter-items">
          <input
            type="radio"
            name="rating"
            id="1star"
            onChange={() => dispatch({ type: "RATING", payload: 1 })}
          />
          <label htmlFor="1star"> 1 stars</label>
        </div>
      </div>
    </>
  );
};
export { Rating };
