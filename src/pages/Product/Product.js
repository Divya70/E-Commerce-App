import React from "react";
import { Category } from "../../components/Filter/Category";
import { Products } from "../../components/Products/Products";
import { Navbar } from "../../components/Navbar/Navbar";
import "./product.css";
import { ProductData } from "../../components/Products/ProductData";
import { Footer } from "../../components/Footer/Footer";
const Product = () => {
  return (
    <>
      <Navbar />
      <div className="main-body-sec">
        <div className="sidebar-filter-sec">
          <div className="filter-sidebar-heading">
            <span>
              <b>Filter</b>
            </span>
            <span>clear</span>
          </div>
          <Category />
        </div>
        <div className="products-sec">
          <h1 className="products-title">Showing My All Products Here!</h1>
          <div className="product-card-cont">
            {ProductData.map((val, index) => {
              return (
                <Products
                  imgsrc={val.imgsrc}
                  name={val.name}
                  fruitcategory={val.fruitcategory}
                  price={val.price}
                  discountprice={val.discountprice}
                  rating={val.rating}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export { Product };
