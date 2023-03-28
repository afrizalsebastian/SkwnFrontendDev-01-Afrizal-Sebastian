import React from "react";
import mail from "../assets/image/mail.svg";
import "../assets/css/Email.css";

function Email() {
  return (
    <div className="email-section">
      <p>LIMITED DEALS</p>
      <h1>Become a member and get 10% off of your first purchase</h1>
      <div className="email-input">
        <input type="email" placeholder="Enter your email here" />
        <span>
          <img src={mail} alt="" />
        </span>
      </div>
    </div>
  );
}

export default Email;
