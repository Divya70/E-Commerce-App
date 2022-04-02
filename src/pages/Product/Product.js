import { useEffect } from "react";
import axios from "axios";
import "./product.css";
import { Category, Products, Navbar, Footer } from "../../components";
import { useProduct } from "../../Context/Product-Context";
import {
  getSortedList,
  getCategorizedData,
  getPriceList,
  getRating,
} from "../../Reducer/Product-Reducer";
const Product = () => {
  const { state, dispatch } = useProduct();
  const { initialValue } = state;
  const getProductData = async () => {
    const response = await axios.get("/api/products");
    dispatch({ type: "FETCH_PRODUCT_DATA", payload: response.data.products });
  };
  useEffect(() => {
    getProductData();
  }, []);
  const products = initialValue;
  const sortedList = getSortedList(state, products);
  const categoryList = getCategorizedData(state, sortedList);
  const price = getPriceList(state, categoryList);
  const ratingList = getRating(state, price);

  return (
    <>
      <Navbar />
      <div className="main-body-sec">
        <div className="sidebar-filter-sec">
          <div className="filter-sidebar-heading">
            <span>
              <b>FILTER</b>
            </span>
            <span
              className="clear-filter"
              onClick={() => dispatch({ type: "CLEAR_FILTER" })}
            >
              CLEAR
            </span>
          </div>
          <Category />
        </div>
        <div className="products-sec">
          <h1 className="products-title">Showing My All Products Here!</h1>
          <div className="product-card-cont">
            {ratingList.map((item) => {
              return <Products key={item._id} item={item} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export { Product };
