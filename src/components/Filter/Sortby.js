import React from "react";
import { useState } from "react";
import "./css/sortby.css";
const Sortby = () => {
  const [input, setInput] = useState();
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      <div className="filter-sidebar-category">
        <span>
          <b>Sort By</b>
        </span>
        <div className="filter-items">
          <input type="checkbox" name="radio" onChange={inputHandler} />
          Price - Low to High
        </div>
        <div className="filter-items">
          <input type="checkbox" name="radio" onChange={inputHandler} />
          Price - High to Low
        </div>
      </div>
    </>
  );
};
export { Sortby };
