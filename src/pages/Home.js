import React from "react";
import Navbar from "./Navbar";
import User from "./User";

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>Welcome to Profiles</h1>
      
      <User />
    </div>
  );
};

export default Home;
