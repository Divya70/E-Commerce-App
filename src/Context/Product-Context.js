import { productReduce } from "../Reducer/Product-Reducer";
import { createContext, useContext, useReducer } from "react";

const ProductContext = createContext();
const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReduce, {
    initialValue: [],
    sortBy: null,
    categoryName: [],
    price: 2000,
    rating: "",
  });
  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
const useProduct = () => useContext(ProductContext);
export { ProductProvider, useProduct };
