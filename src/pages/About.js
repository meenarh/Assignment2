import React from "react";
import Navbar from "./Navbar";
import about from "../assets/images/image-About.png";

const About = () => {
  return (
    <div>
      <div className="about">
        <Navbar />

        <div>
          <img className="about-img" src={about} alt="About us" />
        </div>

        <div className="about-info">
          <h2>About Us</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh non et
          orci ultrices dictum aliquam pretium cras. Sollicitudin cursus
          penatibus ipsum sit praesent sem erat. Massa leo placerat viverra
          viverra vulputate neque orci. Aliquam elementum mauris, pellentesque
          ullamcorper vitae. Quis rutrum dui vulputate facilisis. Proin faucibus
          turpis suspendisse fermentum odio etiam velit lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh non et
          orci ultrices dictum aliquam pretium cras. Sollicitudin cursus
          penatibus ipsum sit praesent sem erat. Massa leo placerat viverra
          viverra vulputate neque orci. Aliquam elementum mauris, pellentesque
          ullamcorper vitae. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
