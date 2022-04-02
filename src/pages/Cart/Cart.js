import React, { useEffect } from "react";
import "./cart.css";
import { Navbar, ProductDetails, PriceDetails } from "../../components";
import { useProduct } from "../../Context/Product-Context";
import axios from "axios";
import { Link } from "react-router-dom";
const Cart = () => {
  const { state, dispatch } = useProduct();
  const getProductInCart = async () => {
    try {
      const res = await axios.get("/api/user/cart", {
        headers: { authorization: localStorage.getItem("token") },
      });
      if (res.status === 200) {
        dispatch({ type: "GET_CART", payload: res.data.cart });
      } else {
        console.log("err:", res);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };
  useEffect(() => {
    getProductInCart();
  }, []);

  return (
    <>
      <Navbar />
      {state.cartItem.length !== 0 ? (
        <>
          <h1 className="cart-title">MY CART({state.cartItem.length})</h1>
          <div className="mycart-brand-container">
            <div className="added-cart-product">
              {state.cartItem.map((item) => {
                return (
                  <>
                    <ProductDetails key={item._id} item={item} />
                  </>
                );
              })}
            </div>
            <PriceDetails />
          </div>
        </>
      ) : (
        <>
          <div className="empty-cart-cont">
            <h1>Cart is Empty ☹</h1>
            <Link to="/product" className="keep-shopping-link">
              Keep Shopping
            </Link>
          </div>
        </>
      )}
    </>
  );
};
export { Cart };
