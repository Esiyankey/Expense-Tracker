import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import "../styles/navbar.css";
import { Modal } from "./modal";

export const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [showModal, setshowModal] = useState(false);
  const handleCloseModal = () => {
    setshowModal(false);
  };

  const handleShowModal = () => {
    setshowModal(true);
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
      {showModal && <Modal handleCloseModal={handleCloseModal}/>}
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
            <button className="btn" onClick={handleShowModal}>
              Get started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
