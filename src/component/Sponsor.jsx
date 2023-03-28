import React from "react";
import "../assets/css/Sponsor.css";
import gusto from "../assets/image/gusto.svg";
import stripe from "../assets/image/stripe.svg";
import treeHouse from "../assets/image/treehouse.svg";
import upwork from "../assets/image/upwork.svg";

function Sponsor() {
  return (
    <div className="sponsor">
      <div className="num-sponsor">
        <h1>25+</h1>
        <span>PARTNERED BRANDS</span>
      </div>
      <div className="brand">
        <img src={gusto} alt="" />
        <img src={stripe} alt="" />
        <img src={treeHouse} alt="" />
        <img src={upwork} alt="" />
      </div>
    </div>
  );
}

export default Sponsor;
