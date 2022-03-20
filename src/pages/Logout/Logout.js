import React from "react";
import "./logout.css";
import { Link } from "react-router-dom";
const Logout = () => {
  return (
    <>
      <div class="main-content-cont">
        <div class="logout-container">
          <div class="logout-message">You are Logged out succesfully</div>
          <p class="again-login">
            To login again <Link to="/login">click</Link>
          </p>
        </div>
      </div>
    </>
  );
};
export { Logout };
