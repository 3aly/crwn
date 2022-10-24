import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import "./navbar.styles.scss";
import { ReactComponent as Crwnlogo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils.js";
import Cart from "../../compnents/cart-icon/cart-icon.component";
import CartDropdown from "../../compnents/cart-dropdown/cart-dropdown.component";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

export default function Nav() {
  const isCartOpen = useSelector(selectIsCartOpen);
  const currentUser = useSelector(selectCurrentUser);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Crwnlogo />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser === null ? (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          ) : (
            <span className="nav-link" onClick={signOutUser}>
              {" "}
              Sign out{" "}
            </span>
          )}
          <Cart />
        </div>

        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
}
