import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { useProduct } from "../../Context/Product-Context";
import "./products.css";
const Products = ({ item }) => {
  const { state, dispatch } = useProduct();
  const { cartItem } = state;
  const cartBtnHandler = async (item) => {
    const token = localStorage.getItem("token");
    const addToCartResponse = await axios.post(
      "/api/user/cart",
      { product: item },
      {
        headers: { authorization: token },
      }
    );
    if (addToCartResponse.status === 201) {
      dispatch({
        type: "ADD_TO_CART",
        payload: addToCartResponse.data.cart,
      });
    } else {
      console.log("error");
    }
  };
  return (
    <>
      <div className="card-containers">
        <div className="card-images">
          <img src={item.imgsrc} />
          <img
            id="toggle-product-img"
            src="/images/banana.jpg"
            alt="toggle img"
          />
          <div className="wishlist item-wishlist">
            <i className="fas fa-heart dismiss like-dislike-icon"></i>
            <div className="rating-con">
              {item.rating}
              <i className="fa-solid fa-star  rating"></i>
            </div>
          </div>
        </div>
        <div className="product-brand-cont">
          <p className="card-title">{item.name}</p>
          <p className="card-title">{item.categoryName}</p>
        </div>
        <div className="card-price-cont">
          <div className="price">Rs.{item.price}</div>
          <div className="price-discount">Rs.{item.discountprice}</div>
          <div className="price-OFF">50% OFF</div>
        </div>
        {cartItem.some((addedItem) => addedItem._id === item._id) ? (
          <button className=" add-to-cart-button">
            <Link className="cart-secondary" to="/cart">
              <i className="fas fa-shopping-cart"></i> GO TO CART
            </Link>
          </button>
        ) : (
          <button
            className=" add-to-cart-button"
            onClick={() => cartBtnHandler(item)}
          >
            <i className="fas fa-shopping-cart"></i>ADD TO CART
          </button>
        )}
      </div>
    </>
  );
};
export { Products };
