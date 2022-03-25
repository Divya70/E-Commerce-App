import React from "react";
import "./products.css";
const Products = ({
  imgsrc,
  rating,
  name,
  categoryName,
  price,
  discountprice,
}) => {
  return (
    <>
      <div className="card-containers">
        <div className="card-images">
          <img src={imgsrc} />
          <img
            id="toggle-product-img"
            src="/images/banana.jpg"
            alt="toggle img"
          />
          <div className="wishlist item-wishlist">
            <i className="fas fa-heart dismiss like-dislike-icon"></i>
            <div className="rating-con">
              {rating}
              <i className="fa-solid fa-star  rating"></i>
            </div>
          </div>
        </div>
        <div className="product-brand-cont">
          <p className="card-title">{name}</p>
          <p className="card-title">{categoryName}</p>
        </div>
        <div className="card-price-cont">
          <div className="price">Rs.{price}</div>
          <div className="price-discount">Rs.{discountprice}</div>
          <div className="price-OFF">50% OFF</div>
        </div>

        <button className=" add-to-cart-button">
          <i className="fas fa-shopping-cart"></i>ADD TO CART
        </button>
      </div>
    </>
  );
};
export { Products };
