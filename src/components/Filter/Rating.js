import React from "react";
import "./css/rating.css";
import { useProduct } from "../../Context/Product-Context";
const Rating = () => {
  const { state, dispatch } = useProduct();
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
            checked={state.rating === 4}
            onChange={() => dispatch({ type: "RATING", payload: 4 })}
          />
          <label htmlFor="4star"> 4 stars</label>
        </div>
        <div className="filter-items">
          <input
            type="radio"
            name="rating"
            id="3star"
            checked={state.rating === 3}
            onChange={() => dispatch({ type: "RATING", payload: 3 })}
          />
          <label htmlFor="3star"> 3 stars</label>
        </div>
        <div className="filter-items">
          <input
            type="radio"
            name="rating"
            id="2star"
            checked={state.rating === 2}
            onChange={() => dispatch({ type: "RATING", payload: 2 })}
          />
          <label htmlFor="2star"> 2 stars</label>
        </div>
        <div className="filter-items">
          <input
            type="radio"
            name="rating"
            id="1star"
            checked={state.rating === 1}
            onChange={() => dispatch({ type: "RATING", payload: 1 })}
          />
          <label htmlFor="1star"> 1 stars</label>
        </div>
      </div>
    </>
  );
};
export { Rating };
