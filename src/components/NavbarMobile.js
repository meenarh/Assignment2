import React from "react";
import { NavLink } from "react-router-dom";

const NavbarMobile = () => {
  return (
    <div className="nav-mobile">

      <div className="nav-links-mobile">
        <NavLink
          className="link-mobile"
          style={({ isActive }) => ({
            color: isActive ? "#301F77" : "",
          })}
          to="/"
        >
          Home
        </NavLink>

        <NavLink className="link-mobile"
        style={({ isActive }) => ({
          color: isActive ? "#301F77" : "",
        })}
        to="/about"
        >
          About
        </NavLink>

        <NavLink
          className="link-mobile"
          style={({ isActive }) => ({
            color: isActive ? "#301F77" : "",
          })}
          to="/users"
        >
          Users
        </NavLink>
      </div>
    </div>
  );
};

export default NavbarMobile;
