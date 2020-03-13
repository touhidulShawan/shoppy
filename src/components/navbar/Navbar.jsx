import React from "react";
import "./Navbar.scss";

import cartIcon from "../../icons/shopping_cart.svg";

function Navbar() {
  return (
    <nav className="nav">
      <div className="nav__container">
        <div className="logo__container">
          <h1>shoppy</h1>
        </div>
        <ul className="nav__ul">
          <li className="nav__item">
            <a href="/" className="nav__link">
              home
            </a>
          </li>
          <li className="nav__item">
            <a href="/" className="nav__link">
              about
            </a>
          </li>
          <li className="nav__item">
            <a href="/" className="nav__link">
              sign in
            </a>
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
