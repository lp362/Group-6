import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Courses</h4>
        <ul>
          <li>C++</li>
          <li>Python</li>
          <li>JavaScript</li>
          <li>Java</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Support</h4>
        <ul>
          <li>Pricing Plan</li>
          <li>Documentation</li>
          <li>Guide</li>
          <li>Tutorial</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Subscribe to Newsletter</h4>
        <div className="subscribe">
          <input
            type="email"
            placeholder="Your email address"
            aria-label="Email address"
          />
          <button>Subscribe</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
