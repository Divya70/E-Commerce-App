import React, { useEffect } from "react";
import axios from "axios";
import "./wishlist.css";
import { Link } from "react-router-dom";
import { useProduct } from "../../Context/Product-Context";
import { Navbar, Products } from "../../components";
const token = localStorage.getItem("token");
const Wishlist = () => {
  const { state, dispatch } = useProduct();
  const getProductInWishlist = async () => {
    try {
      const getwishlistResponse = await axios.get("/api/user/wishlist", {
        headers: { authorization: token },
      });
      if (getwishlistResponse.status === 200) {
        dispatch({
          type: "GET_WISHLIST",
          payload: getwishlistResponse.data.wishlist,
        });
      } else {
        console.log("err:", getwishlistResponse);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };
  useEffect(() => {
    getProductInWishlist();
  }, []);
  return (
    <>
      <Navbar />

      {state.wishlistItem.length !== 0 ? (
        <>
          <h1 className="wishlist-heading">
            My WishList ({state.wishlistItem.length})
          </h1>
          <div className="product-card-cont">
            {state.wishlistItem.map((item) => {
              return <Products key={item._id} item={item} />;
            })}
          </div>
        </>
      ) : (
        <>
          <div className="empty-wishlist-cont">
            <h1>Wishlist is Empty ☹</h1>
            <Link to="/product" className="keep-shopping-link">
              Keep Shopping
            </Link>
          </div>
        </>
      )}
    </>
  );
};
export { Wishlist };
