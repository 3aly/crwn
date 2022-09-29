import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import "./navbar.styles.scss";
import { ReactComponent as Crwnlogo } from "../../assets/crown.svg";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils.js";
export default function Nav() {
  const { currentUser } = useContext(UserContext);

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
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}
