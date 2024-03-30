import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import img1 from "../pages/images/Frame 1.png";
import { Link } from "react-router-dom";

function FreeCoupon() {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Navbar />
      <div className="firstLaunchContainer">
        <img src={img1} alt="" />
      </div>
      <div className="secondLaunchContainer">
        <button className="scanButton">
          <Link
            to="/coupons"
            style={{ textDecoration: "none", color: "white" }}
          >
            Scan QR
          </Link>
        </button>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default FreeCoupon;
