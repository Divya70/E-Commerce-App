import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../Context/Auth-Context";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { Navbar } from "../../components";
const Login = () => {
  const { authDispatch } = useAuth();
  const navigateProduct = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const getLoginData = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };
  const testUserCredential = {
    email: "joeytribbiani@gmail.com",
    password: "joeytribbiani",
  };
  const testCredential = (e) => {
    e.preventDefault();
    setLoginData(testUserCredential);
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/login", {
        email: loginData.email,
        password: loginData.password,
      });
      if (res.status === 200) {
        localStorage.setItem("token", res.data.encodedToken);
        localStorage.setItem("user", JSON.stringify(res.data.foundUser));
        navigateProduct("/product");
        authDispatch({
          type: "LOG_IN",
          payload: {
            token: res.data.encodedToken,
            user: res.data.foundUser,
          },
        });
      } else {
        alert("Please Enter Correct Email and Password!");
      }
    } catch (error) {
      console.log("Error:", error.res);
    }
  };

  return (
    <>
      <Navbar />
      <div className="login-page-container">
        <h1 className="login-title">LOGIN</h1>
        <div className="login-form-cont">
          <div className="email">
            <input
              type="email"
              name="email"
              id="email"
              value={loginData.email}
              onChange={getLoginData}
              placeholder="Username or Email"
              required
            />
          </div>
          <div className="password">
            <input
              type="password"
              name="password"
              id="Password"
              value={loginData.password}
              onChange={getLoginData}
              className="login-password input-field"
              placeholder="User Password"
              required
            />
          </div>
          <div className="options">
            <div className="remember-me">
              <input id="remember-me" type="checkbox" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <div className="forgot-password">
              <Link to="/forgot" className="forgot-pass">
                Forgot Password?
              </Link>
            </div>
          </div>
          <div className="login-test-user">
            <button
              className="login-button login-test-credential"
              onClick={testCredential}
            >
              Login With Test Credentials
            </button>
            <button className="login-button" onClick={loginHandler}>
              Login
            </button>
          </div>

          <div className="signup-link">
            <Link to="/signup" className="signup">
              Create New Account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export { Login };
