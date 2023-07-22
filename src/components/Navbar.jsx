import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FaBars } from "react-icons/fa";
import "../styles/navbar.css";

export const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [showLogin, setshowLogin] = useState(false);
  const handleCloseLogin = () => {
    setshowLogin(false);
  };

  const handleShowLogin = () => {
    setshowLogin(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 70;
      if (isScrolled) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showLogin && (
        <div className="login-modal">
          <div className="login">
            <div className="top">
              <h3 className="log">Log in </h3>
              <div className="close" onClick={handleCloseLogin}>
                <AiOutlineClose />
              </div>
            </div>
            <button className="google">
              <FcGoogle />
              Log in with Google
            </button>
            <div className="underline"></div>
            <form>
              <label className="label" htmlFor="email">
                Email
              </label>
              <input type="text" placeholder="hahaha@gmail.com" />
              <label className="label" htmlFor="password">
                Password
              </label>
              <input type="password" />
              <button className="loginbtn">Log in</button>
              <span className="forgot">Forgot Password?</span>
              <div className="underline"></div>
              <div className="account">
              <span>Don't have an account?</span>
              <a href="#">Sign up</a>
              </div>
            </form>
          </div>
        </div>
      )}
      <div className={`navbar ${scroll ? "navbar-active" : ""}`}>
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
          </ul>
          <div className="right-navbar">
            <button className="btn" onClick={handleShowLogin}>
              Get started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
