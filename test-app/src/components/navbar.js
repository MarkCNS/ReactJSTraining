import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <header>
        <ul
          style={{
            listStyle: "none",
            width: "90vw",
            margin: "0 auto",
            padding: "20px",
            display: "flex",
            gap: "3rem",
            fontSize: "18px",
            colors: "black",
          }}
        >
          <li>
            <NavLink style={{ textDecoration: "none" }} exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink style={{ textDecoration: "none" }} exact to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink style={{ textDecoration: "none" }} exact to="/contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink style={{ textDecoration: "none" }} exact to="/user">
              User
            </NavLink>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Nav;
