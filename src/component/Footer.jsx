import React from "react";
import logo from "../assets/image/logo.svg";
import "../assets/css/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="left-side">
        <img src={logo} alt="" />
        <p>
          Dekoor is a furniture company created to fulfill the needs of family
          with aesthetic feeling in their furniture. Always pay attention to
          details and give clear communication for the customers. Priority of
          our design is comfortability.
        </p>
        <p>©Copyright 2022 Dekoor</p>
      </div>
      <div className="right-side">
        <div className="left footer-list">
          <h3>Support</h3>
          <ul>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Shipping & Returns</a>
            </li>
            <li>
              <a href="#">Care Guide</a>
            </li>
            <li>
              <a href="#">Redeem Warranty</a>
            </li>
          </ul>
        </div>
        <div className="middle footer-list">
          <h3>Social Media</h3>
          <ul>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">TikTok</a>
            </li>
          </ul>
        </div>
        <div className="right footer-list">
          <h3>Support</h3>
          <ul>
            <li>
              <a href="#">Our Story</a>
            </li>
            <li>
              <a href="#">Designer</a>
            </li>
            <li>
              <a href="#">Craftmanship</a>
            </li>
            <li>
              <a href="#">Sustainability</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
