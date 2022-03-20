import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div className="login-page-container">
        <h1 className="login-title">LOGIN</h1>
        <div className="login-form-cont">
          <div className="email">
            <input type="email" placeholder="Username or Email" required />
          </div>
          <div className="password">
            <input
              type="password"
              className="login-password input-field"
              placeholder="User Password"
              required
            />
          </div>
          <div className="options">
            <div className="remember-me">
              <input id="remember-me" type="checkbox" />
              <label for="remember-me">Remember me</label>
            </div>
            <div className="forgot-password">
              <Link to="/forgot" className="forgot-pass">
                Forgot Password?
              </Link>
            </div>
          </div>

          <Link to="/product" className="signin">
            <button className="login-button">Login</button>
          </Link>

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
