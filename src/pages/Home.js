import React from "react";
import Navbar from "./Navbar";
import home from "../assets/images/image-home.png";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
        <div className="info-home">
        <h3>Altschool-circle-7 Team</h3>
        <p>
          We are a proactive team of developers who love creating brand and
          digital experirnce that matters
        </p>
        <div className="home-img">
        <img src={home} alt="home" />
      </div>
      </div>
      
      
    </div>
  );
};

export default Home;
