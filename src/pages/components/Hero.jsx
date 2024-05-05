import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="mainHeroContainer">
      <Link to="/tejis" style={{ textDecoration: "none" }}>
        <div className="firstHeroContainer">
          <div className="heroCard"></div>
          <div className="heroCardInfo">
            <h3 style={{ textSize: "4vw", color: "white" }}>
              Get valuable Internships at Discounted price.
            </h3>{" "}
            <br />{" "}
            <h5 style={{ color: "white" }}>CLICK TO AVAIL EXCITING OFFERS!!</h5>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Hero;
