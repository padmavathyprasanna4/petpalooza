import React, { useState } from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed with email:", email);
  };

  return (
    <footer className="footer">

      {/* Logo Row */}
      <div className="footer-top-logo">
        <img src={logo} alt="PetPalooza Logo" />
      </div>

      <div className="footer-content">

        {/* Column 1 - PetPalooza */}
        <div className="footer-logo">
          <h1>PetPalooza</h1>
          <div className="footer-menu">
            <span>About Us</span>
            <span>Contact Us</span>
            <span>Shop</span>
            <span>Blog</span>
            <span>FAQ</span>
          </div>
        </div>

        {/* Other Columns */}
        <div className="footer-links">

          <div className="footer-category">
            <h3>Categories</h3>
            <span>Dog</span>
            <span>Cat</span>
            <span>Fish</span>
            <span>Rats</span>
            <span>Rabbits</span>
            <span>Hamsters</span>
            <span>Guinea pigs</span>
          </div>

          <div className="footer-support">
            <h3>Support</h3>
            <span>Privacy policy</span>
            <span>Refund & returns policy</span>
            <span>Shipping policy</span>
            <span>Terms & conditions</span>
          </div>

          {/* Follow + Get in Touch */}
          <div className="footer-follow">
            <h3>Follow</h3>

            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
            </div>

            <div className="get-in">
              <h4>Get in Touch</h4>
              <p>Call: +91-1234567890</p>
              <p>Email: support@petpalooza.com</p>
            </div>
          </div>

          <div className="footer-subscribe">
            <h3>For Subscribe,</h3>
            <form onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe Now</button>
            </form>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
