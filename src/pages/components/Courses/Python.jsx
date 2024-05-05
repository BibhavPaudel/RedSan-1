import React from "react";
import "./Python.css";
import logo from "./logo.png";
import Navbar from "../Navbar";
import Footer from "../Footer";
import GamesCard from "../Cards/GamesCard";

const Python = () => {
  return (
    <div className="pythonMainContainer">
      <Navbar></Navbar>
      <div className="firstPythonContainer">
        <h2>TeJasya’s Camp T.I.N.K.E.R</h2>
        <div className="courseCardContainer">
          <div className="profilePython">
            <img src={logo} alt="" />
          </div>
          <div className="profileInfoPython">
            <p
              style={{
                fontSize: "2vw",
                fontWeight: 600,
                textAlign: "start",
              }}
            >
              Technology, Innovation, Nurturing Knowledge, Exploration, and
              Robotics (T.I.N.K.E.R.)
            </p>
          </div>
        </div>
      </div>

      <div className="secondIOTContainer">
        <div className="formContainer"></div>
        <div className="campInfoContanier">
          <h2
            style={{
              fontSize: "2.2vw",
              textAlign: "justify",
              paddingBottom: "0.5vw",
            }}
          >
            Coding Camp:
          </h2>
          <h4 style={{ fontSize: "1.5vw", textAlign: "justify" }}>
            This 10-day immersive experience transforms you into a tech-savvy
            environmental detective. You'll learn the power of IoT programming
            to collect real-time data on our planet's health and become a force
            for positive change.
          </h4>
        </div>
        <a
          href="https://zfrmz.in/I46sEFwUVZ1mqQ1daO8v"
          style={{
            fontSize: "2.5vw",
            position: "absolute",
            top: "65vw",
            left: "2vw",
            color: "black",
          }}
        >
          Fill This Form To Register.
        </a>
        <div
          className="qrPython"
          style={{ position: "absolute", top: "50vw", right: "6vw" }}
        ></div>
      </div>
      <GamesCard></GamesCard>
      <Footer></Footer>
    </div>
  );
};

export default Python;
