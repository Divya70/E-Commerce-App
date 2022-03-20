import React from "react";
import { useState } from "react";
import "./css/category.css";
import { Price } from "./Price";
import { Rating } from "./Rating";
import { Sortby } from "./Sortby";
const Category = () => {
  const [input, setInput] = useState();
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      <Price />
      <div className="filter-sidebar-category">
        <span>
          <b>Category</b>
        </span>
        <div className="filter-items">
          <input type="checkbox" onChange={inputHandler} />
          Seasonal Fruits
        </div>
        <div className="filter-items">
          <input type="checkbox" onChange={inputHandler} />
          Regular Fruits
        </div>
      </div>
      <Rating />
      <Sortby />
    </>
  );
};
export { Category };
