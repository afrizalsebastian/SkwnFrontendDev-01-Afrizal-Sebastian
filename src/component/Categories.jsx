import React, { useState } from "react";
import "../assets/css/Categories.css";
import cat1 from "../assets/image/categories-1.png";
import cat2 from "../assets/image/categories-2.png";
import cat3 from "../assets/image/categories-3.png";
import Recomendation from "./Recomendation";

function Categories() {
  const [expand, setExpand] = useState(null);

  const handleClick = (component) => {
    if (component === expand) {
      setExpand(null);
    } else {
      setExpand(component);
    }
  };
  return (
    <div className="categories">
      <div className="img-categories">
        <img className="hide" src={cat1} alt="" />
        <img className="hide" src={cat2} alt="" />
        <img src={cat3} alt="" />
      </div>
      <div className="rec-categories">
        <h3>Categories</h3>
        <h1>Furniture Sets Recomendation</h1>
        <div className="rec-wheel">
          <Recomendation
            title="Bedroom"
            content="Enjoy a great room living aesthetics with your family Designs created for increased comfortability"
            expand={expand === "component1"}
            onClick={() => handleClick("component1")}
          />
          <Recomendation
            title="Living Room"
            content="Enjoy a great room living aesthetics with your family Designs created for increased comfortability"
            expand={expand === "component2"}
            onClick={() => handleClick("component2")}
          />
          <Recomendation
            title="Home Office"
            content="Enjoy a great room living aesthetics with your family Designs created for increased comfortability"
            expand={expand === "component3"}
            onClick={() => handleClick("component3")}
          />
          <Recomendation
            title="Gaming Room"
            content="Enjoy a great room living aesthetics with your family Designs created for increased comfortability"
            expand={expand === "component4"}
            onClick={() => handleClick("component4")}
          />
        </div>
      </div>
    </div>
  );
}

export default Categories;
