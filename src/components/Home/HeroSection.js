import React from "react";
import "./css/herosection.css";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <>
      <main className="main-content-cont">
        <div className="home-sec-image">
          <img src="/images/main-img.jpg" alt="" />
          <h1 className="home-title">SIMPLY DELICIOUS FOOD</h1>

          <Link to="/product">
            <button className="order-now-btn">Order Now</button>
          </Link>
        </div>
      </main>
    </>
  );
};
export { HeroSection };
