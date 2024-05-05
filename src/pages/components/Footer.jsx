import React from "react";
import "./Footer.css";
import img1 from "./facebook_icon.png";
import img2 from "./linkedin_icon.png";
import img3 from "./twitter_icon.png";

function Footer() {
  return (
    <div
      style={{
        marginTop: "auto",
        width: "100%",
      }}
    >
      <div className="footer" id="footer">
        <div className="footer-content">
          <div className="footer-content-left">
            <p style={{ fontStyle: "italic", fontSize: "25px" }}>RedSan</p>
            <p style={{ textAlign: "justify" }}>
              {" "}
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="footer-social-icons">
              <img src={img1} />
              <img src={img2} />
              <img src={img3} />
            </div>
          </div>
          <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
              <li>+1-342-345-213-5462</li>
              <li>contact@gmail.com</li>
            </ul>
          </div>
        </div>
        <hr></hr>
        <p className="footer-copyright">
          Copyright 2024 @ RedSan.in - All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
