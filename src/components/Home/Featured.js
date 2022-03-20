import React from "react";
import "./css/bestselling.css";
import { BestSelling } from "./BestSelling";
import { Products } from "./Product";
const Featured = () => {
  return (
    <>
      <p className="best-sell-para">FRESH FROM OUR FARM</p>
      <h2 className="home-heading-h2">Featured Products</h2>
      <div className="featured-card-cont">
        {Products.map((val, index) => {
          return (
            <BestSelling
              imgSrc={val.imgSrc}
              hoverimg={val.hoverimg}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
};

export { Featured };
