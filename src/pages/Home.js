import React from "react";
import { Link, NavLink } from "react-router-dom";
import User from "./User";

const Home = () => {
  return (
    <div>
      <h1>This is the homepage</h1>
      <div className="nav">
        <NavLink
          className="link"
          style={({ isActive }) => ({
            color: isActive ? "green" : "",
          })}
          to="/about"
        >
          <p>About</p>
        </NavLink>
        <NavLink
          className="link"
          style={({ isActive }) => ({
            color: isActive ? "green" : "",
          })}
          to="/"
        >
          <p>Home</p>
        </NavLink>
      </div>

      <User />
    </div>
  );
};

export default Home;
