import React from "react";
import imageJumbo from "../assets/image/jumbo-image.png";
import search from "../assets/image/search.svg";
import video from "../assets/image/video.svg";
import rArraw from "../assets/image/right-arrow.svg";
import "../assets/css/Jumbotron.css";

function Jumbotron() {
  return (
    <div>
      <div className="jumbotron">
        <div className="headline">
          <h1>
            The Kind of <span>furniture</span> you have been looking for
          </h1>
          <div className="btn-container">
            <button className="catalog search">
              <img src={search} alt="" />
              SEARCH CATALOG
            </button>
            <button className="catalog videos">
              <img src={video} alt="" />
              WATCH VIDEOS
            </button>
          </div>
        </div>
        <div className="jumbo-image">
          <img src={imageJumbo} alt="" />
          <div className="desc-image">
            <p>$329</p>
            <h2>Pösht Sofa</h2>
            <button>
              View Details <img src={rArraw} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
