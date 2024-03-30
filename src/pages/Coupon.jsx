import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function Coupon() {
  return (
    <div
      className="mainCouponContainer"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Navbar />
      <div className="firstCouponContainer">
        <div className="wheelContainer">Wheel</div>
        <button>spin</button>
      </div>
      <Footer />
    </div>
  );
}

export default Coupon;
