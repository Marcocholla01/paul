import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Frontend Development</h3>
          </div>
          <div className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Responsive Web Design: Crafting visually appealing and
                user-friendly interfaces that seamlessly adapt to various
                devices.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                User Interface (UI) Development: Designing and implementing
                interactive and intuitive user interfaces for enhanced user
                experiences.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Web Accessibility: Ensuring websites comply with accessibility
                standards to make them usable for people with diverse needs.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Cross-Browser Compatibility: Writing code that functions
                consistently across different web browsers for a broad user
                reach.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Performance Optimization: Improving website speed and
                performance through efficient coding practices.
              </p>
            </li>
          </div>
        </article>
        {/* End of UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>
          <div className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Server-Side Scripting: Developing robust server-side scripts to
                handle data processing, server logic, and database interactions.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Database Management: Designing and managing databases, including
                data modeling, optimization, and maintenance.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                API Development: Creating RESTful APIs to enable seamless
                communication between the frontend and backend systems.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Authentication and Authorization: Implementing secure user
                authentication and authorization systems to protect sensitive
                data.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Server Deployment and Maintenance: Deploying applications to
                servers and ensuring smooth server operations and maintenance.
              </p>
            </li>
            {/* <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur sit amet consectetur
                elit.
              </p>
            </li> */}
          </div>
        </article>
        {/* End  Web Development*/}
        <article className="service">
          <div className="service__head">
            <h3>Full Stack Development</h3>
          </div>
          <div className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                End-to-End Application Development: Taking a project from
                conception to completion, covering both frontend and backend
                aspects.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Database Integration: Connecting frontend interfaces with
                backend databases, ensuring efficient data flow and retrieval.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                System Architecture Design: Planning and implementing scalable
                and modular architecture for robust and extensible applications.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Version Control: Utilizing version control systems like Git to
                manage and track changes in code collaboratively.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Continuous Integration/Continuous Deployment (CI/CD):
                Implementing CI/CD pipelines for automated testing, integration,
                and deployment.
              </p>
            </li>
          </div>
        </article>
        {/* End of content Creation */}
      </div>
    </section>
  );
}

export default Services;
