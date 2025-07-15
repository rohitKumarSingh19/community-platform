import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-section about">
          <h2 className="logo-text">Community<span>Hub</span></h2>
          <p>Your go-to place for sharing ideas, collaborating, and learning together.</p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/register">Register</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/share">Share Ideas</a></li>
            <li><a href="/collaborate">Collaborate</a></li>
            <li><a href="/learn">Learn & Grow</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: support@communityhub.com</p>
          <p>Phone: +91-9876543210</p>
          <div className="socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/rohit-kumar-singh-98658a198/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 Community Collaboration Platform. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
