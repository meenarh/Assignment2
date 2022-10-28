import React from 'react'
import Lottie from 'react-lottie'
import { NavLink } from 'react-router-dom';
import hello from '../assets/lottie/plane.json'

const HomePage = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: hello,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className='hello'>
        <Lottie options={defaultOptions}  />
        <div>
          <button><NavLink to='/home'>Proceed</NavLink></button>
        </div>
    </div>
  )
}

export default HomePage