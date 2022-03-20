import React from "react";
import "./css/demo.css";
const Demo = () => {
  return (
    <>
      <section>
        <h1 className="heading">Demo</h1>

        <div className="demo-img">
          <img src="./images/bestsell1.jpg" />
          <img src="./images/bestsell2.webp" />
        </div>
        <h1 className="heading summer-sell">SUMMER SELL</h1>
        <img src="./images/bottom-banner.jpg" className="summer-img" />
      </section>
    </>
  );
};
export { Demo };
