import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import "../styles/navbar.css";
import { Modal } from "./Modal";

export const Navbar = ({ handleShowLinks, handleCloseLinks, showLinks,handleCloseModal,handleShowModal,showModal }) => {
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

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showModal && <Modal handleCloseModal={handleCloseModal} />}
      <div className={`Navbar ${scroll ? "navbar-Active" : ""}`}>
        <div className="logo">
          <h2>Expenso</h2>
        </div>
        <button className="bars">
          {showLinks ? (
            <AiOutlineClose className="closeBar" onClick={handleCloseLinks} />
          ) : (
            <FaBars onClick={handleShowLinks} />
          )}
        </button>

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
            <button className="getStarted-btn" onClick={handleShowModal}>
              Get started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
