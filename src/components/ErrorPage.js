import React from "react";
import { Link } from "react-router-dom";
import error from '../assets/lottie/404.json'
import Lottie from 'react-lottie'


const ErrorPage = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: error,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="error-page">
          
        <Lottie options={defaultOptions} width={400} height={400}  />

          <Link to="/home">
            <button className="error-btn">Go back Home</button>
          </Link>
        </div>
  );
};

export default ErrorPage;
