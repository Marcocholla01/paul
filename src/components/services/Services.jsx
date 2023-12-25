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
            <h3>UI/UX Design</h3>
          </div>
          <div className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur sit amet consectetur
                elit.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur sit amet consectetur
                elit.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur sit amet consectetur
                elit.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur sit amet consectetur
                elit.
              </p>
            </li>
          </div>
        </article>
        {/* End of UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <div className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur sit amet consectetur
                elit.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur sit amet consectetur
                elit.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur sit amet consectetur
                elit.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur sit amet consectetur
                elit.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur sit amet consectetur
                elit.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur sit amet consectetur
                elit.
              </p>
            </li>
          </div>
        </article>
        {/* End  Web Development*/}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <div className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur sit amet consectetur
                elit.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur sit amet consectetur
                elit.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur sit amet consectetur
                elit.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur sit amet consectetur
                elit.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur sit amet consectetur
                elit.
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