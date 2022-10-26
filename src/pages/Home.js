import React from "react";
import Navbar from "../components/Navbar";
import home from "../assets/images/image-home.png";
import NavbarMobile from "../components/NavbarMobile";

const Home = () => {
  return (
    <div className="wrapper">
      <div className="home">
        <Navbar />
        <div className="info-home">
          <h3>Altschool-circle-7 Team</h3>
          <p>
            We are a proactive team of developers who love creating brand and
            digital experience that matters
          </p>
          <div className="home-img">
            <img src={home} alt="home" />
          </div>
        </div>
      </div>

      <>
        <NavbarMobile />
      </>
      </div>
  );
};

export default Home;
