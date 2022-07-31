import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Product } from "./pages/Product/Product";
import { Forgot } from "./pages/Forgot/Forgot";
import { HomePage } from "./pages/Home/HomePage";
import { Login } from "./pages/Login/Login";
import { Signup } from "./pages/Signup/Signup";
import { Cart } from "./pages/Cart/Cart";
import { Wishlist } from "./pages/Wishlist/Wishlist";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Mockman from "mockman-js";
function App() {
  return (
    <>
      <div className="App">
        <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
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
      </div>
    </>
  );
}

export default App;
