import React, { useState } from "react";
import "../assets/css/Recomendation.css";

function Recomendation(props) {
  return (
    <div
      className={props.expand ? "recomend expand" : "recomend"}
      onClick={props.onClick}
    >
      <h2>{props.title}</h2>
      {props.expand && <p>{props.content}</p>}
    </div>
  );
}

export default Recomendation;
