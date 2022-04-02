import "./Navbar.css";
import { Link } from "react-router-dom";
import { useProduct } from "../../Context/Product-Context";
import { useAuth } from "../../Context/Auth-Context";
const Navbar = () => {
  const { state, dispatch } = useProduct();
  const { authState } = useAuth();
  return (
    <>
      <nav className="navigation-cont">
        <Link to="/" className="logo-link">
          <h1 className="name-of-site">Flavorsome</h1>
        </Link>
        <div className="searchbar">
          <span>
            <i className="fa fa-search" aria-hidden="true"></i>
          </span>
          <input className="search-input" type="text" placeholder="Search" />
        </div>
        <div className="nav-buttons-cont">
          <Link to="/wishlist" className="nav-button nav-icons-name">
            <i className="fas fa-heart nav-icon"></i>
            {state.wishlistItem.length !== 0 ? (
              <span className="icon-badge">{state.wishlistItem.length}</span>
            ) : null}
          </Link>
          <Link to="/cart" className="nav-button nav-icons-name">
            <i className="fas fa-shopping-cart nav-icon"></i>
            {state.cartItem.length !== 0 ? (
              <span className="icon-badge">{state.cartItem.length}</span>
            ) : null}
          </Link>
          {authState.token === null ? (
            <div className="nav-button login-btn">
              <Link to="/login" className="login-button">
                Login
              </Link>
            </div>
          ) : (
            <div
              className="nav-button login-btn"
              onClick={() => dispatch({ type: "LOGOUT" })}
            >
              <Link to="/login" className="login-button">
                Logout
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};
export { Navbar };
