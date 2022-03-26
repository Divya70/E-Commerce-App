import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Product } from "./pages/Product/Product";
import { Forgot } from "./pages/Forgot/Forgot";
import { HomePage } from "./pages/Home/HomePage";
import { Login } from "./pages/Login/Login";
import { Signup } from "./pages/Signup/Signup";
import { Cart } from "./pages/Cart/Cart";
import { Wishlist } from "./pages/Wishlist/Wishlist";
import Mockman from "mockman-js";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<Forgot />} />
        {/* <Route path="/logout" element={<Logout />} /> */}
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/mock" element={<Mockman />} />
      </Routes>
    </>
  );
}

export default App;
