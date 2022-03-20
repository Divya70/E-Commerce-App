import React from "react";
import "./cart.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { ProductDetails } from "../../components/Cart/ProductDetails/ProductDetails";
import { PriceDetails } from "../../components/Cart/PriceDetails/PriceDetails";
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
