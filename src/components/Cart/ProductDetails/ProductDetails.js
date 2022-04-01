import axios from "axios";
import React from "react";
import { useProduct } from "../../../Context/Product-Context";
import "./productdetails.css";

const ProductDetails = ({ item }) => {
  const { dispatch } = useProduct();

  const token = localStorage.getItem("token");
  const removeCartHandler = async () => {
    try {
      const removeCartRes = await axios.delete(`/api/user/cart/${item._id}`, {
        headers: { authorization: token },
      });
      dispatch({ type: "REMOVE_FROM_CART", payload: removeCartRes.data.cart });
    } catch (err) {
      console.log(err.response);
    }
  };
  const incrementCartQty = async () => {
    try {
      const quantityRes = await axios.post(
        `/api/user/cart/${item._id}`,
        {
          action: {
            type: "increment",
          },
        },
        {
          headers: { authorization: token },
        }
      );

      dispatch({ type: "INCREASE_QUANTITY", payload: quantityRes.data.cart });
    } catch (error) {
      console.log("Error:", error);
    }
  };
  const decrementCartQty = async () => {
    try {
      const quantityRes = await axios.post(
        `/api/user/cart/${item._id}`,
        {
          action: {
            type: "decrement",
          },
        },
        {
          headers: { authorization: token },
        }
      );

      dispatch({ type: "DECREASE_QUANTITY", payload: quantityRes.data.cart });
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <>
      <div className="cart-container">
        <div className="product-card">
          <div className="product-image">
            <img src={item.imgsrc} />
          </div>
          <div className="mycart-details">
            <div className="product-brand-name">{item.name}</div>
            <div className="product-des">{item.categoryName}</div>
            <div className="product-price-cont">
              <div className="price">Rs.{item.price}</div>
              <div className="price-discount">Rs.{item.discountprice}</div>
              <div className="price-OFF">50% OFF</div>
            </div>
            <div className="quantity">
              Quantity:
              <button
                className="decrement-btn quantity-btn-inline"
                disabled={Number(item.qty) === 1 ? true : ""}
                onClick={decrementCartQty}
              >
                -
              </button>
              <button className="qunatity-of-product quantity-btn-inline">
                {item.qty}
              </button>
              <button
                className="increment-btn quantity-btn-inline"
                onClick={incrementCartQty}
              >
                +
              </button>
            </div>
            <div className="add-to-cart-cont">
              <button
                className="icon-btn cart-button"
                id="remove-from-cart-btn"
                onClick={removeCartHandler}
              >
                Remove From Cart
              </button>
              <button
                className="icon-btn cart-button"
                id="move-to-wishlist-btn"
              >
                Move to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export { ProductDetails };
