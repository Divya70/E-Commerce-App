import React from "react";
import "./footer.css";
let year = new Date().getFullYear();
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-header">
          Made with <span style={{ color: "red" }}>❤</span> by Divya Namdev
        </div>
        <ul className="social-link list-non-bullet margin-top">
          <li className="list-item-inline">
            <a className="link" href="#">
              About Us
            </a>
          </li>
          <li className="list-item-inline">
            <a className="link" href="#">
              Contact Us
            </a>
          </li>
          <li className="list-item-inline">
            <a className="link" href="#">
              Privacy Policy
            </a>
          </li>
          <li className="list-item-inline">
            <a className="link" href="#">
              Security
            </a>
          </li>
          <li className="list-item-inline">
            <a className="link" href="#">
              Terms & Conditions
            </a>
          </li>
        </ul>
        <div className="copyright margin-top">
          copyright &copy;{year} flavorsome shop. All Right Reserved
        </div>
      </footer>
    </>
  );
};
export { Footer };
