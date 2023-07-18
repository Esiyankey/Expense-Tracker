import React from "react";
import { FaBars } from 'react-icons/fa';
import "../styles/navbar.css";
export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
       <h2>Expense</h2>
      </div>
      <div className="bars">
        <FaBars/>
      </div>
      <div className="links">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">How it works</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">information</a>
          </li>
        </ul>
        <div className="right-navbar">
          <button className="btn">Get started</button>
        </div>
      </div>
    </div>
  );
};
