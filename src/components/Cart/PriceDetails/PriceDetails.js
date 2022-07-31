import React from "react";
import { makePayment } from "../../checkout/makepayment";
import { useProduct } from "../../../Context/Product-Context";
import { useAuth } from "../../../Context/Auth-Context";
import "./pricedetails.css";
const PriceDetails = (qty) => {
  const { state, dispatch } = useProduct();
  const { authState } = useAuth();
  const {
    authState: { token },
  } = useAuth();
  const getPriceBill = (cartItem) => {
    const currentQty = cartItem.reduce(
      (acc, curr) => acc + Number(curr.qty),
      0
    );
    const currentPrice = cartItem.reduce(
      (acc, curr) => (acc += Number(curr.price) * Number(curr.qty)),
      0
    );
    const totalSaving = currentPrice + 10;
    const totalPrice = currentPrice - 50 + 40;
    return { currentQty, currentPrice, totalPrice, totalSaving };
  };
  const { currentQty, currentPrice, totalPrice, totalSaving } = getPriceBill(
    state.cartItem
  );
  return (
    <>
      <div className="cart-container" id="price-cont">
        <h1 className="price-details-title">PRICE DETAILS</h1>
        <ul>
          <li className="lists price-text space-between price-des-size">
            Price ({currentQty} items)
            <span className="price">Rs. {currentPrice}</span>
          </li>
          <li className="lists price-text space-between price-des-size">
            Discount
            <span className="price">Rs. 50</span>
          </li>
          <li className="lists price-text space-between price-des-size">
            Delevery Charge
            <span className="price">Rs. 40</span>
          </li>
          <li className="lists price-text space-between total-amount">
            TOTAL AMOUNT
            <span className="price total-amount">Rs. {totalPrice}</span>
          </li>
        </ul>
        <div className="save-price">
          You will have save Rs. {totalSaving} on this order
        </div>
        <button
          className="place-order"
          onClick={() => makePayment({ totalPrice, dispatch, token })}
        >
          PLACE ORDER
        </button>
      </div>
    </>
  );
};
export { PriceDetails };
