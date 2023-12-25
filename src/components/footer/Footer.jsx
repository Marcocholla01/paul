import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";

function Footer() {
  return (
    <footer id="footer">
      <a href="#home" className="footer__logo">
        MARCOCHOLLA
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experince</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfoli">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/">
          <FaFacebookF />{" "}
        </a>
        <a href="https://instagram.com/">
          <FiInstagram />{" "}
        </a>
        <a href="https://twitter.com/">
          <BsTwitterX />{" "}
        </a>
      </div>

      <div className="footer__copyright">
        <small>
          Developed with 💖 &copy; MARCOCHOLLA. All Rights are Reserved
        </small>
      </div>
    </footer>
  );
}

export default Footer;
