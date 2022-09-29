import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import "./navbar.styles.scss";
import { ReactComponent as Crwnlogo } from "../../assets/crown.svg";

export default function Nav() {
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
          <Link className="nav-link" to="/auth">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}
