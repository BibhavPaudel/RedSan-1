import React from "react";
import Navbar from "./components/Navbar";
import "./Index.css";
import { Link } from "react-router-dom";
import img1 from "../pages/images/Launch.png";
import img2 from "../pages/images/Coupon.png";
import img3 from "../pages/images/newT.png";
import Footer from "./components/Footer";

function Index() {
  return (
    <div className="mainIndexContainer">
      <Navbar></Navbar>
      <div className="cardsContainer">
        <div className="card1">
          <Link to="/launchevent">
            <div className="subcardContainer">
              <img src={img1} alt="" />
            </div>
          </Link>
        </div>
        <div className="card2">
          <Link to="/freeCoupons">
            <div className="subcardContainer">
              <img src={img2} alt="" />
            </div>
          </Link>
        </div>
        <div className="card3">
          <Link to="/treasureHunt">
            <div className="subcardContainer">
              <img src={img3} alt="" />
            </div>
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Index;
