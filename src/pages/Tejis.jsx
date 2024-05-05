import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./Tejis.css";
import logo from "./logo.png";
import CoursesCard from "./components/Cards/CoursesCard";

const tejis = () => {
  return (
    <div className="tejisContainer">
      <Navbar></Navbar>
      <div className="maintejisContainer">
        <div className="bannerContainer">
          <div className="bannerInfoContainer">
            <div className="profile">
              <img src={logo} alt="" />
            </div>
            <div className="profileInfo">
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
            <a
              href="https://zfrmz.in/I46sEFwUVZ1mqQ1daO8v"
              style={{
                fontSize: "3vw",
                position: "absolute",
                top: "16vw",
                left: "-4vw",
                color: "black",
                margin:"5px",
              }}
            >
              Fill This Form To Register
            </a>
            <div
              className="qr"
              style={{
                height: "16vw",
                position: "relative",
                top: "8vw",
                left: "15vw",
              }}
            ></div>
          </div>
        </div>
      </div>
      <CoursesCard></CoursesCard>
      <div className="secondtejisContainer">
        <div className="leftContainer1"></div>
        <div className="rightContainer1">
          <h2 style={{ fontSize: "2.5vw", paddingBottom: "10px" }}>
            About US.
          </h2>
          <h4 style={{ fontSize: "2vw", fontWeight: 600 }}>
            TeJIS (TeJasya Innovative Solutions) is a pioneering force in
            technological education, offering a diverse spectrum of courses
            encompassing Robotics, AI, Machine Learning, Humanoids, 3D Printing,
            Coding, and more. Our Year long based learning model immerses
            students in hands-on experiences, ensuring a profound understanding
            of cutting-edge technologies.
          </h4>
        </div>
      </div>
      <div className="thirdtejisContainer">
        <div className="leftContainer2">
          <p
            style={{
              fontSize: "2vw",
              margin: "1vw 2vw 0vw 2vw",
              fontWeight: 600,
              paddingBottom: "10px",
              textAlign: "justify",
            }}
          >
            Committed to democratizing education, TeJIS provides world-class
            training at affordable prices, eliminating financial barriers. What
            sets us apart is our unwavering dedication to excellence, symbolized
            by our free lab setup, transforming classrooms into dynamic
            innovation hubs. TeJIS not only equips students with skills but also
            propels them towards promising career opportunities.
          </p>
        </div>
        <div className="rightContainer2"></div>
      </div>
      <div className="coursesContainer"></div>
      <Footer></Footer>
    </div>
  );
};

export default tejis;
