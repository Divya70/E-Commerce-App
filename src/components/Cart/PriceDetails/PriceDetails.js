import React from "react";
import "./pricedetails.css";
const PriceDetails = () => {
  return (
    <>
      <div className="cart-container price-cont">
        <h1 className="price-details-title">PRICE DETAILS</h1>
        <ul>
          <li className="lists price-text space-between price-des-size">
            Price (2 items)
            <span className="price">Rs. 5998</span>
          </li>
          <li className="lists price-text space-between price-des-size">
            Discount
            <span className="price">Rs. 3000</span>
          </li>
          <li className="lists price-text space-between price-des-size">
            Delevery Charge
            <span className="price">Rs. 299</span>
          </li>
          <li className="lists price-text space-between total-amount">
            TOTAL AMOUNT
            <span className="price total-amount">Rs. 9300</span>
          </li>
        </ul>
        <div className="save-price">
          You will have save Rs. 3000 on this order
        </div>
        <button className="place-order">PLACE ORDER</button>
      </div>
    </>
  );
};
export { PriceDetails };
