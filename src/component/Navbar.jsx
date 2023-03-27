import React from "react";
import logo from "../assets/image/logo.svg";
import shopBag from "../assets/image/shopping_bag.svg";
import "../assets/css/Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Furniture</a>
            </li>
            <li>
              <a href="#">Partnerships</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="auth-cont">
          <div>
            <button>Sign Up</button>
            <div className="bag">
              <img src={shopBag} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
