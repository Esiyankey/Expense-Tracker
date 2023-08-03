import React from "react";
import "../styles/footer.css";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="footer">
      {/* Contact Us Section */}
      <div className="footer-section">
        <h4>Contact Us</h4>
        <p>Email: owusuelvisgyasi@gmail.com</p>
        <p>Phone: +233 552 778 748</p>
      </div>

      {/* Navigation Links Section */}
      <div className="footer-section">
        {/* Links to Privacy Policy, Terms of Service, and FAQs */}
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-service">Terms of Service</a>
        <a href="/faq">FAQs</a>

        {/* Links to social media profiles (Facebook and Twitter) */}
        <a
          href="https://www.example.com/facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsFacebook />
        </a>
        <a
          href="https://www.example.com/twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsTwitter />
        </a>
      </div>

      {/* Copyright Section */}
      <div className="footer-section">
        <p>&copy; 2023 Your Expense Tracker. All rights reserved.</p>
      </div>
    </footer>
  );
};
