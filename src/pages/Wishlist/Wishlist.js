import React from "react";
import "./wishlist.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { Products } from "../../components/Products/Products";
import { ProductData } from "../../components/Products/ProductData";
const Wishlist = () => {
  return (
    <>
      <Navbar />
      <h1 className="wishlist-heading">My WishList</h1>
      <div className="product-card-cont">
        {ProductData.slice(6, 12).map(({ item }) => {
          return <Products key={item.id} item={item} />;
        })}
      </div>
    </>
  );
};
export { Wishlist };
