import { React, useState } from "react";
import axios from "axios";
import { useAuth } from "../../Context/Auth-Context";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";
const Signup = () => {
  const navigateLogin = useNavigate();
  const { authDispatch } = useAuth();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const userDataHandler = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const signupHandler = async () => {
    try {
      if (userData.password === userData.confirmPassword) {
        const res = await axios.post("/api/auth/signup", {
          email: userData.email,
          password: userData.password,
        });
        authDispatch({
          type: "SIGN_UP",
          payload: {
            token: res.data.encodedToken,
            user: res.data.createdUser,
          },
        });
        console.log(res);
        if (res.status === 201) {
          localStorage.setItem("token", res.data.encodedToken);
          localStorage.setItem("user", JSON.stringify(res.data.createdUser));
          navigateLogin("/login");
        }
      } else {
        throw new Error("PassWord Do Not Match , Please Try Again !");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <div className="signup-page-container">
        <h1 className="signup-title">SIGN UP</h1>
        <div className="signup-form-cont">
          <div className="username">
            <input
              type="text"
              id="name"
              name="name"
              value={userData.name}
              onChange={userDataHandler}
              placeholder="Username"
              required
            />
          </div>
          <div className="emails">
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={userDataHandler}
              placeholder="Email"
              required
            />
          </div>
          <div className="password">
            <input
              type="password"
              name="password"
              id="Password"
              value={userData.password}
              onChange={userDataHandler}
              className="login-password input-field"
              placeholder="Password"
              required
            />
          </div>
          <div className="confirm-password">
            <input
              type="text"
              name="confirmPassword"
              id="confirmPassword"
              value={userData.confirmPassword}
              onChange={userDataHandler}
              className="login-password input-field"
              placeholder="confirm Password"
              required
            />
          </div>
          <button className="signup-button" onClick={signupHandler}>
            Sign Up
          </button>
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
