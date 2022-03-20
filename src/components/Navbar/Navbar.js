import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navigation-cont">
        <h1 className="name-of-site">Flavorsome</h1>
        <div className="searchbar">
          <span>
            <i className="fa fa-search" aria-hidden="true"></i>
          </span>
          <input className="search-input" type="text" placeholder="Search" />
        </div>

        <div className="nav-buttons-cont">
          <Link to="/wishlist" className="nav-button nav-icons-name">
            <i className="fas fa-heart nav-icon"></i>
          </Link>
          <Link to="/cart" className="nav-button nav-icons-name">
            <i className="fas fa-shopping-cart nav-icon"></i>
          </Link>
          <div className="nav-button login-btn">
            <Link to="/login" className="login-button">
              Login
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
export { Navbar };
