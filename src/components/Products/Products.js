import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { useProduct } from "../../Context/Product-Context";
import "./products.css";
const Products = ({ item }) => {
  const { state, dispatch } = useProduct();
  const { cartItem } = state;
  const { wishlistItem } = state;
  const token = localStorage.getItem("token");
  const cartBtnHandler = async (item) => {
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
  const wishlistHandler = async (item) => {
    const setWishlistResponse = await axios.post(
      "/api/user/wishlist",
      { product: item },
      {
        headers: { authorization: token },
      }
    );
    if (setWishlistResponse.status === 201) {
      dispatch({
        type: "ADD_TO_WISHLIST",
        payload: setWishlistResponse.data.wishlist,
      });
    } else {
      console.log("error");
    }
  };
  const removeLikedItemHandler = async () => {
    try {
      const dislikeItemResponse = await axios.delete(
        `/api/user/wishlist/${item._id}`,
        {
          headers: { authorization: token },
        }
      );
      dispatch({
        type: "REMOVE_FROM_WISHLIST",
        payload: dislikeItemResponse.data.wishlist,
      });
    } catch (err) {
      console.log(err.response);
    }
  };
  return (
    <>
      <div className="card-containers">
        <div className="card-images">
          <img src={item.imgsrc} />
          <img
            id="toggle-product-img"
            src={item.toggleImage}
            alt="toggle img"
          />
          <div className="wishlist item-wishlist">
            {wishlistItem.find((likedItem) => likedItem._id === item._id) ? (
              <i
                className="fas fa-heart dismiss like-dislike-icon"
                style={{ color: "red" }}
                onClick={removeLikedItemHandler}
              ></i>
            ) : (
              <i
                className="fas fa-heart dismiss like-dislike-icon"
                onClick={() => wishlistHandler(item)}
              ></i>
            )}
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
        {cartItem.find((addedItem) => addedItem._id === item._id) ? (
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
