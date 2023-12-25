import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me2.png";
import HeaderSocials from "./HeaderSocials";

function Header() {
  return (
    <header>
      <div className="container haeder__container" id="home">
        <h5>Hello I'm</h5>
        <h1>Paul Ocholla</h1>
        <h5 className="text-light">Junior MERN Stack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" className="me_image" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
