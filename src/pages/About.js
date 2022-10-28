import React from "react";
import Navbar from "../components/Navbar";
import NavbarMobile from "../components/NavbarMobile";

const About = () => {
  return (
    <div className="wrapper">
      <div className="about">
        <Navbar />

        <div className="about-content">
          <div className="about-image">
          </div>

          <div className="about-info">
            <h2>About</h2>
            <h2>About</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh non
              et orci ultrices dictum aliquam pretium cras. Sollicitudin cursus
              penatibus ipsum sit praesent sem erat. Massa leo placerat viverra
              viverra vulputate neque orci. Aliquam elementum mauris,
              pellentesque ullamcorper vitae. Quis rutrum dui vulputate
              facilisis. Proin faucibus turpis suspendisse fermentum odio etiam
              velit lectus
            </p>
          </div>
        </div>
      </div>

      <>
        <NavbarMobile />
      </>
    </div>
  );
};

export default About;
