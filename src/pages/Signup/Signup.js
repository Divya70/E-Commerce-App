import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <>
      <div className="signup-page-container">
        <h1 className="signup-title">SIGN UP</h1>
        <div className="signup-form-cont">
          <div className="username">
            <input type="text" placeholder="Username" required />
          </div>
          <div className="emails">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="password">
            <input
              type="password"
              className="login-password input-field"
              placeholder="Password"
              required
            />
          </div>
          <div className="confirm-password">
            <input
              type="text"
              className="login-password input-field"
              placeholder="confirm Password"
              required
            />
          </div>
          <Link to="/login" className="signup-link">
            <button className="signup-button">Sign Up</button>
          </Link>
          <div className="redirect-to-login">
            Already have an account?
            <Link to="/login" className="login-link">
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export { Signup };
