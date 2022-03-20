import React from "react";
import "./products.css";
const Products = (props) => {
  return (
    <>
      <div className="card-containers">
        <div className="card-images">
          <img src={props.imgsrc} />
          <img
            id="toggle-product-img"
            src="/images/banana.jpg"
            alt="toggle img"
          />
          <div className="wishlist item-wishlist">
            <i className="fas fa-heart dismiss like-dislike-icon"></i>
            <div className="rating-con">
              {props.rating}
              <i className="fa-solid fa-star  rating"></i>
            </div>
          </div>
        </div>
        <div className="product-brand-cont">
          <p className="card-title">{props.name}</p>
          <p className="card-title">{props.fruitcategory}</p>
        </div>
        <div className="card-price-cont">
          <div className="price">Rs.{props.price}</div>
          <div className="price-discount">Rs.{props.discountprice}</div>
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
