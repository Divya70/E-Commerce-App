import React from "react";
import "./css/category.css";
import { Price } from "./Price";
import { Rating } from "./Rating";
import { Sortby } from "./Sortby";
import { useProduct } from "../../Context/Product-Context";
const Category = () => {
  const { state, dispatch } = useProduct();
  return (
    <>
      <Price />
      <div className="filter-sidebar-category">
        <span>
          <b>Category</b>
        </span>
        <div className="filter-items">
          <input
            type="checkbox"
            id="seasonal"
            checked={state.categoryName.includes("SEASONAL_FRUIT")}
            onChange={(e) =>
              dispatch({ type: "SEASONAL_FRUIT", payload: e.target.checked })
            }
          />
          <label htmlFor="seasonal"> Seasonal Fruits</label>
        </div>
        <div className="filter-items">
          <input
            type="checkbox"
            id="regular"
            checked={state.categoryName.includes("REGULAR_FRUIT")}
            onChange={(e) =>
              dispatch({ type: "REGULAR_FRUIT", payload: e.target.checked })
            }
          />
          <label htmlFor="regular">Regular Fruits</label>
        </div>
      </div>
      <Rating />
      <Sortby />
    </>
  );
};
export { Category };
