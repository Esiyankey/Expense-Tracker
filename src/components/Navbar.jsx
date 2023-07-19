import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import "../styles/navbar.css";




export const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  
 
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 70;
      if (isScrolled) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);






  return (
    <div className={`navbar ${scroll? 'navbar-active':''}`}>
      <div className="logo">
        <h2>Expense</h2>
      </div>
      <div className="bars">
        <FaBars />
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
