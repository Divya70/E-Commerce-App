import React from "react";
import "./cart.css";
import { Navbar, ProductDetails, PriceDetails } from "../../components";
const Cart = () => {
  return (
    <>
      <Navbar />
      <h1 className="cart-title">MY CART(2)</h1>
      <div className="mycart-brand-container">
        <ProductDetails />
        <PriceDetails />
      </div>
    </>
  );
};
export { Cart };
