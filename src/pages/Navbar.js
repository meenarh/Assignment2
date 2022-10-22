import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">

      <div className="nav-links">
        <NavLink
          className="link"
          style={({ isActive }) => ({
            color: isActive ? "#301F77" : "",
          })}
          to="/"
        >
          Home
        </NavLink>

        <NavLink className="link"
        style={({ isActive }) => ({
          color: isActive ? "#301F77" : "",
        })}
        to="/about"
        >
          About
        </NavLink>

        <NavLink
          className="link"
          style={({ isActive }) => ({
            color: isActive ? "#301F77" : "",
          })}
          to="/user"
        >
          Users
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
