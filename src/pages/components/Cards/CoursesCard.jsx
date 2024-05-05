import React from "react";
import "./CoursesCard.css";
import { Link } from "react-router-dom";

const CoursesCard = () => {
  return (
    <div className="coursesCard">
      <div className="coursesCardHeading">Choose from the best COURSES!!</div>
      <div className="exploreCoursesCard">
        <Link to="/IOT">
          <div className="iot"></div>
          <div>IOT</div>
        </Link>
        <Link to="/python">
          <div className="python"></div>
          <div>PYTHON</div>
        </Link>
        <Link to="/robotics">
          <div className="robotics"></div>
          <div>ROBOTICS</div>
        </Link>
      </div>
    </div>
  );
};

export default CoursesCard;
