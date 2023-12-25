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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus aliquid tenetur, optio voluptates minus sit, perferendis
            fugit nisi saepe aliquam consectetur, a vitae mollitia consequatur
            voluptate maxime! Non, recusandae accusamus?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            debitis, tempore hic eaque accusantium placeat in iste iusto eius
            aliquam vitae quibusdam voluptates, porro modi. Minus asperiores
            eligendi consequatur obcaecati.
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
