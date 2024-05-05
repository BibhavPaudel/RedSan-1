import React from "react";
import Navbar from "./components/Navbar";
import "./Index.css";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";
import GamesCard from "./components/Cards/GamesCard";
import Hero from "./components/Hero";
import CoursesCard from "./components/Cards/CoursesCard";

function Index() {
  return (
    <div className="mainIndexContainer">
      <Navbar></Navbar>
      <Hero></Hero>
      <GamesCard></GamesCard>
      <CoursesCard></CoursesCard>
      <Footer></Footer>
    </div>
  );
}

export default Index;
