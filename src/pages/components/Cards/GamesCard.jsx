import React from "react";
import "./GamesCard.css";
import { Link } from "react-router-dom";

const GamesCard = () => {
  return (
    <div className="gamesCard">
      <div className="gamesCardHeading">Play to WIN!!</div>
      <div className="exploreGamesCard">
        <Link to="#">
          <div className="trivia"></div>
          <div>coming soon</div>
        </Link>
        <Link to="/spinthewheel">
          <div className="spinthewheel"></div>
          <div>Play Now</div>
        </Link>
        <Link to="#">
          <div className="thisorthat"></div>
          <div>coming soon</div>
        </Link>
        <Link to="#">
          <div className="treasurehunt"></div>
          <div>coming soon</div>
        </Link>
      </div>
    </div>
  );
};

export default GamesCard;
