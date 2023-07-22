import React from "react";
import "../styles/footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Contact Us</h4>
        <p>Email: example@example.com</p>
        <p>Phone: 123-456-7890</p>
      </div>
      <div className="footer-section">
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-service">Terms of Service</a>

        <a href="/faq">FAQs</a>
        <a
          href="https://www.example.com/facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a
          href="https://www.example.com/twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </div>
      <div className="footer-section">
        <p>&copy; 2023 Your Expense Tracker. All rights reserved.</p>
      </div>
    </footer>
  );
};
