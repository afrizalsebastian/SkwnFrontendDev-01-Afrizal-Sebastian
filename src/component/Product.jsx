import React, { useState } from "react";
import "../assets/css/Product.css";
import product from "../assets/image/products.png";
import product1 from "../assets/image/products-1.png";
import left from "../assets/image/left-b.svg";
import right from "../assets/image/right-b.svg";

function Product() {
  const [prod, setProd] = useState([
    product,
    product1,
    product,
    product1,
    product,
    product1,
  ]);

  const leftHandle = () => {
    setProd((prevProd) => {
      const left = prevProd.slice(0, 1);
      const right = prevProd.slice(1, prod.length);
      return right.concat(left);
    });
  };

  const rightHandle = () => {
    setProd((prevProd) => {
      const left = prevProd.slice(0, prod.length - 1);
      const right = prevProd.slice(prod.length - 1, prod.length);
      return right.concat(left);
    });
  };

  return (
    <div className="product">
      <div className="prod-title">
        <div>
          <p>Our Products</p>
          <h2>This month's best seller</h2>
        </div>
        <button>SEE MORE</button>
      </div>
      <div className="prod-image">
        <img src={prod[0]} alt="" />
        <img className="focus" src={prod[1]} alt="" />
        <div className="prod-desc">
          <p>$329</p>
          <h2>Und Chair</h2>
        </div>
        <img src={prod[2]} alt="" />
        <img src={prod[3]} alt="" />
        <img src={prod[4]} alt="" />
        <img src={prod[5]} alt="" />
        <div className="btn-prod">
          <button>
            <img onClick={leftHandle} src={left} alt="" />
          </button>
          <button>
            <img onClick={rightHandle} src={right} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
