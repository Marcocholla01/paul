import React from "react";
import "./about.css";
import me from "../../assets/In.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="About me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>300+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>80+ Projects Completed</small>
            </article>
          </div>
          <p>
            Hello, I'm Paul, a dedicated BSCIT student at Zetech University,
            where I am passionately immersing myself in the world of technology.
            As a Junior MERN stack developer, I channel my enthusiasm into
            creating dynamic and efficient web applications. My journey in the
            realm of IT is driven by an insatiable curiosity and a commitment to
            continuous learning.
          </p>
          <p>
            In the ever-evolving landscape of technology, I find joy in the
            challenges of being a MERN stack developer—navigating MongoDB,
            Express.js, React, and Node.js to craft seamless user experiences.
            Beyond the code, I bring a personalized touch to my work, infusing
            projects with precision and creativity. Join me as I embark on this
            exciting journey, where each line of code contributes to the
            narrative of my growth as a developer. Let's build tomorrow's
            digital landscapes together!
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
