import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Aminat.jpg";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <img src={logo} alt="" style={{ width: "50px", height: "50px" }} />
      </div>

      <div className="nav-links">
        <NavLink
          className="link"
          style={({ isActive }) => ({
            color: isActive ? "green" : "#00A6A6",
          })}
          to="/"
        >
          <p>Home</p>
        </NavLink>

        <NavLink
          className="link"
          style={({ isActive }) => ({
            color: isActive ? "green" : "#00A6A6",
          })}
          to="/user"
        >
          People
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
