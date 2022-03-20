import React from "react";
import "./forgot.css";
import { Link } from "react-router-dom";
const Forgot = () => {
  return (
    <>
      <div className="forgot-password-container">
        <h3 className="forgot-title">Forget Password</h3>
        <div className="change-pass">
          <input type="email" placeholder="Enter Your Email" required />
        </div>
        <Link to="/login" className="forgot-link">
          <button className="submit-button">Submit</button>
        </Link>
      </div>
    </>
  );
};
export { Forgot };
