import React from "react";
import "./css/bestselling.css";
import { Link } from "react-router-dom";
const BestSelling = (props) => {
  return (
    <>
      <section>
        <div className="best-sell-cont">
          <img src={props.imgSrc} alt="" />
          <img id="toggle-img" src={props.hoverimg} alt="hover image" />
        </div>
      </section>
    </>
  );
};
export { BestSelling };
