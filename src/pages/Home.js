import React from "react";
import Navbar from "../components/Navbar";
import NavbarMobile from "../components/NavbarMobile";
import home from '../assets/lottie/home.json'
import Lottie from "react-lottie";

const Home = () => {


  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: home,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="wrapper">
      <div className="home">
        <Navbar />
        <div className="info-home">
        <Lottie options={defaultOptions} width={350} height={350}  />
          <h4>Altschool Frontend  Assignment 2 </h4>
          <p>
          &apos; Creativity is a habit, and the best creativity is the result of good work habits&apos;. - Twyla Tharp
          </p>
        </div>
      </div>

      <>
        <NavbarMobile />
      </>
      </div>
  );
};

export default Home;
