import React from "react";
import "./css/rating.css";
const Rating = () => {
  return (
    <>
      <div className="filter-sidebar-category">
        <span>
          <b>Rating</b>
        </span>
        <div className="filter-items">
          <input type="radio" name="radio" />
          4stars & above
        </div>
        <div className="filter-items">
          <input type="radio" name="radio" />
          3stars & above
        </div>
        <div className="filter-items">
          <input type="radio" name="radio" />
          2stars & above
        </div>
        <div className="filter-items">
          <input type="radio" name="radio" />
          1stars & above
        </div>
      </div>
    </>
  );
};
export { Rating };
