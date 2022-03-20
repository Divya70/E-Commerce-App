import React from "react";
import "./productdetails.css";

const ProductDetails = () => {
  return (
    <>
      <div className="cart-container">
        <div className="product-card">
          <div className="product-image">
            <img src="/images/apple.webp" />
          </div>
          <div className="mycart-details">
            <div className="product-brand-name">Bata</div>
            <div className="product-des">Women Platform Heels</div>
            <div className="product-price-cont">
              <div className="price">Rs.2999</div>
              <div className="price-discount">Rs.5999</div>
              <div className="price-OFF">50% OFF</div>
            </div>
            <div className="quantity">
              Quantity:
              <button className="decrement-btn quantity-btn-inline">-</button>
              <button className="qunatity-of-product quantity-btn-inline">
                2
              </button>
              <button className="increment-btn quantity-btn-inline">+</button>
            </div>
            <div className="add-to-cart-cont">
              <button
                className="icon-btn cart-button"
                id="remove-from-cart-btn"
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
