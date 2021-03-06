import axios from "axios";
const clearCartHandler = (token) => {
  axios.delete("/api/user/cart/all", {
    headers: { authorization: token },
  });
};
const productReduce = (state, action) => {
  switch (action.type) {
    case "FETCH_PRODUCT_DATA":
      return {
        ...state,
        initialValue: action.payload,
      };
    case "HIGH_TO_LOW":
      return { ...state, sortBy: "HIGH_TO_LOW" };
    case "LOW_TO_HIGH":
      return { ...state, sortBy: "LOW_TO_HIGH" };
    case "SEASONAL_FRUIT":
      return action.payload
        ? { ...state, categoryName: [...state.categoryName, action.type] }
        : {
            ...state,
            categoryName: [
              ...state.categoryName.filter((item) => item !== action.type),
            ],
          };
    case "REGULAR_FRUIT":
      return action.payload
        ? { ...state, categoryName: [...state.categoryName, action.type] }
        : {
            ...state,
            categoryName: [
              ...state.categoryName.filter((item) => item !== action.type),
            ],
          };
    case "PRICE":
      return { ...state, price: action.payload };
    case "RATING":
      return {
        ...state,
        rating: action.payload,
      };
    case "CLEAR_FILTER":
      return {
        ...state,
        sortBy: null,
        categoryName: [],
        price: 2000,
        rating: "",
      };
    case "GET_CART":
      return { ...state, cartItem: action.payload };
    case "ADD_TO_CART": {
      return { ...state, cartItem: action.payload };
    }
    case "REMOVE_FROM_CART":
      return { ...state, cartItem: action.payload };
    case "CLEAR_FROM_CART": {
      clearCartHandler(action.payload);
      console.log("payyyyyload", action.payload);
      return { ...state, cartItem: [] };
    }
    case "INCREASE_QUANTITY":
      return { ...state, cartItem: action.payload };
    case "DECREASE_QUANTITY":
      return { ...state, cartItem: action.payload };
    case "LOGOUT":
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return { ...state, cartItem: [] };
    case "GET_WISHLIST":
      return { ...state, wishlistItem: action.payload };
    case "ADD_TO_WISHLIST":
      return { ...state, wishlistItem: action.payload };
    case "REMOVE_FROM_WISHLIST":
      return { ...state, wishlistItem: action.payload };
    default:
      return "Error";
  }
};

export const getSortedList = ({ sortBy }, products) => {
  if (sortBy === "HIGH_TO_LOW") {
    return [...products.sort((a, b) => Number(b.price) - Number(a.price))];
  } else if (sortBy === "LOW_TO_HIGH") {
    return [...products.sort((a, b) => Number(a.price) - Number(b.price))];
  } else {
    return products;
  }
};

export const getCategorizedData = ({ categoryName }, list) => {
  if (
    categoryName.includes("SEASONAL_FRUIT") &&
    !categoryName.includes("REGULAR_FRUIT")
  ) {
    return list.filter((item) => item.categoryName === "Seasonal Fruit");
  } else if (
    categoryName.includes("REGULAR_FRUIT") &&
    !categoryName.includes("SEASONAL_FRUIT")
  ) {
    return list.filter((item) => item.categoryName === "Regular Fruit");
  } else if (
    categoryName.includes("REGULAR_FRUIT") &&
    categoryName.includes("SEASONAL_FRUIT")
  ) {
    return list;
  } else {
    return list;
  }
};

export const getPriceList = ({ price }, list) => {
  return list.filter((item) => Number(item.price) <= Number(price));
};

export const getRating = ({ rating }, list) => {
  if (rating) {
    return list.filter((value) => value.rating === rating);
  }
  return list;
};

export { productReduce };
