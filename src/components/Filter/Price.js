import React from "react";
import "./css/price.css";
import { useProduct } from "../../Context/Product-Context";
const Price = () => {
  const { state, dispatch } = useProduct();

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
          value={state.price}
          onChange={(e) => {
            dispatch({ type: "PRICE", payload: e.target.value });
          }}
          style={{ width: "80%" }}
        />
      </div>
    </>
  );
};
export { Price };
