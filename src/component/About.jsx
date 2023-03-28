import React from "react";
import search from "../assets/image/search-1.svg";
import sBag from "../assets/image/shopping_bag-1.svg";
import "../assets/css/About.css";

function About() {
  return (
    <div className="about">
      <h2>WHY CHOOSE US?</h2>
      <h1>We care about details and the quality of our products</h1>
      <div className="more">
        <p>
          <span className="icon">
            <img src={search} alt="" />
          </span>
          <span className="i-desc">MANUFACTURED WITH QUALITY MATERIALS</span>
        </p>
        <p>
          <span className="icon letter">5</span>
          <span className="i-desc">5 YEARS OF WARRANTY FOR EACH PRODUCT</span>
        </p>
        <p>
          <span className="icon">
            <img src={sBag} alt="" />
          </span>
          <span className="i-desc">20 YEARS OF EXPERTISE</span>
        </p>
      </div>
    </div>
  );
}

export default About;
