import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

import cartIcon from "../../icons/shopping_cart.svg";

import { auth } from "../../firebase/firebase-utils";

function Navbar({ currentUser }) {
  return (
    <nav className="nav">
      <div className="nav__container">
        <div className="logo__container">
          <h1>shoppy</h1>
        </div>
        <ul className="nav__ul">
          <li className="nav__item">
            <NavLink
              exact
              activeClassName="activeNavLink"
              to="/"
              className="nav__link"
            >
              home
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              exact
              activeClassName="activeNavLink"
              to="/shop"
              className="nav__link"
            >
              shop
            </NavLink>
          </li>
          <li className="nav__item">
            {currentUser ? (
              <span className="nav__link" onClick={() => auth.signOut()}>
                Sign out
              </span>
            ) : (
              <NavLink
                exact
                activeClassName="activeNavLink"
                to="/signIn"
                className="nav__link"
              >
                sign in
              </NavLink>
            )}
          </li>
          <li>
            <div className="cart">
              <img src={cartIcon} className="cart--icon" alt="cart-icon" />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
