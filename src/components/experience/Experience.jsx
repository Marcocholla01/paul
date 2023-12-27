import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

function Experience() {
  return (
    <section id="experience">
      <h5>Skills I Have</h5>
      <h2>My Expereinces</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div className="experince__ditails-info">
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div className="experince__ditails-info">
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div className="experince__ditails-info">
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div className="experince__ditails-info">
                <h4>Tailwind</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div className="experince__ditails-info">
                <h4>Bootsrtap</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div className="experince__ditails-info">
                <h4>React JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div className="experince__ditails-info">
                <h4>Node JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div className="experince__ditails-info">
                <h4>Mongo DB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div className="experince__ditails-info">
                <h4>Django</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div className="experince__ditails-info">
                <h4>Express JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div className="experince__ditails-info">
                <h4>Flask</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div className="experince__ditails-info">
                <h4>SQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div className="experince__ditails-info">
                <h4>Firebase</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div className="experince__ditails-info">
                <h4>PHP</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <h2>Other Skills & Hobbies</h2>
      <div className="container experience__container">
        <div className="experience__backend">
          <h3>Soft Skills</h3>
          <div className="experience__contentg">
            <article className="experience__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div className="experince__ditails-info">
                <h4>Communication Skills</h4>
                {/* <small className="text-light">
                  Ability to articulate technical concepts to non-technical
                  stakeholders. <br /> Effective communication with team
                  members, clients, and other collaborators.
                </small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div className="experince__ditails-info">
                <h4>Problem-Solving Skills</h4>
                {/* <small className="text-light">
                  Critical thinking and creative problem-solving ability. <br />
                  Capacity to troubleshoot and debug issues efficiently.
                </small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div className="experince__ditails-info">
                <h4>Adaptability</h4>
                {/* <small className="text-light">
                  Willingness and ability to adapt to new technologies, tools,
                  and methodologies. <br /> Flexibility to work in a dynamic and
                  fast-changing environment.
                </small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div className="experince__ditails-info">
                <h4>Team Collaboration</h4>
                {/* <small className="text-light">
                  Teamwork and collaboration skills to work effectively with
                  other developers, designers, and stakeholders. Openness to
                  feedback and constructive criticism.
                </small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div className="experince__ditails-info">
                <h4>Time Management</h4>
                {/* <small className="text-light">
                  Efficient time management to meet project deadlines and handle
                  multiple tasks simultaneously.
                </small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div className="experince__ditails-info">
                <h4>Attention to Detail</h4>
                {/* <small className="text-light">
                  Thoroughness and attention to detail in coding, testing, and
                  debugging. Consideration of edge cases and potential issues.
                </small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div className="experince__ditails-info">
                <h4>Creativity</h4>
                {/* <small className="text-light">
                  Creativity in finding innovative solutions and optimizing code
                  for performance. Ability to contribute to UI/UX discussions
                  and improvements.
                </small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div className="experince__ditails-info">
                <h4>Continuous Learning</h4>
                {/* <small className="text-light">
                A growth mindset and a commitment to continuous learning.
Keeping up-to-date with industry trends, best practices, and emerging technologies.
                </small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div className="experince__ditails-info">
                <h4>Client-Focused</h4>
                {/* <small className="text-light">
                 Understanding and responsiveness to client needs and requirements.
Ability to translate client requirements into technical solutions.
                </small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div className="experince__ditails-info">
                <h4>Empathy</h4>
                {/* <small className="text-light">
                 Empathy towards end-users to create user-friendly and accessible applications.
Understanding the needs and perspectives of different stakeholders.
                </small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div className="experince__ditails-info">
                <h4>Leadership Skills</h4>
                {/* <small className="text-light">
                  A growth mindset and a commitment to continuous learning.
                  Keeping up-to-date with industry trends, best practices, and
                  emerging technologies.
                </small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div className="experince__ditails-info">
                <h4>Continuous Learning</h4>
                {/* <small className="text-light">
                  Leadership skills to guide and mentor junior developers.
Ability to take ownership of projects and make informed decisions.
                </small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div className="experince__ditails-info">
                <h4>Documentation</h4>
                {/* <small className="text-light">
                  Effective documentation skills for code, APIs, and project
                  documentation. Clarity in expressing ideas through written
                  documentation.
                </small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div className="experince__ditails-info">
                <h4>Version Control (e.g., Git)</h4>
                {/* <small className="text-light">
                  Proficiency in using version control systems like Git.
                  Understanding of branching strategies and collaborative
                  workflows.
                </small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div className="experince__ditails-info">
                <h4>Customer Service Orientation</h4>
                {/* <small className="text-light">
                  A customer-centric mindset, especially if working on
                  client-facing projects. Prompt and helpful communication with
                  clients or end-users.
                </small> */}
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Hobbies</h3>
          <div className="experience__contentg">
            <article className="experience__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div className="experince__ditails-info">
                <h4>Collaborative Coding</h4>
                {/* <small className="text-light">
                  Engaging in pair programming or coding challenges with others
                  fosters collaboration and helps you learn different approaches
                  to problem-solving.
                </small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div className="experince__ditails-info">
                <h4>UI/UX Design Exploration</h4>
                {/* <small className="text-light">
                  Exploring user interface (UI) and user experience (UX) design
                  principles can enhance your frontend development skills and
                  contribute to creating more user-friendly applications.
                </small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div className="experince__ditails-info">
                <h4>Version Control Management</h4>
                {/* <small className="text-light">
                  Practicing version control, such as Git, not only helps with
                  your technical skills but is a valuable practice for
                  collaboration in real-world development projects.
                </small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div className="experince__ditails-info">
                <h4>Contributing to Tech Communities</h4>
                {/* <small className="text-light">
                  Active participation in online forums, discussion groups, or
                  social media communities related to the MERN stack allows you
                  to share knowledge and learn from others.
                </small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div className="experince__ditails-info">
                <h4>Attending Meetups and Conferences</h4>
                {/* <small className="text-light">
                  Participating in developer meetups, conferences, or webinars
                  allows you to network with other professionals, learn from
                  experts, and stay connected to the developer community.
                </small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div className="experince__ditails-info">
                <h4>Building Personal Projects</h4>
                {/* <small className="text-light">
                  Staying updated on the latest technologies, libraries, and
                  frameworks within the MERN stack demonstrates a commitment to
                  continuous learning.
                </small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div className="experince__ditails-info">
                <h4>Open Source Contributions</h4>
                {/* <small className="text-light">
                  Actively participating in open source projects allows you to
                  collaborate with other developers, contribute to real-world
                  projects, and gain valuable experience.
                </small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div className="experince__ditails-info">
                <h4>Continuous Learning</h4>
                {/* <small className="text-light">
                  Staying updated on the latest technologies, libraries, and
                  frameworks within the MERN stack demonstrates a commitment to
                  continuous learning.
                </small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div className="experince__ditails-info">
                <h4>Listening to music & watching movies</h4>
                {/* <small className="text-light">
                  Staying updated on the latest technologies, libraries, and
                  frameworks within the MERN stack demonstrates a commitment to
                  continuous learning.
                </small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div className="experince__ditails-info">
                <h4>Ridding bicycle</h4>
                {/* <small className="text-light">
                  Staying updated on the latest technologies, libraries, and
                  frameworks within the MERN stack demonstrates a commitment to
                  continuous learning.
                </small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div className="experince__ditails-info">
                <h4>Eating and talking</h4>
                {/* <small className="text-light">
                  Staying updated on the latest technologies, libraries, and
                  frameworks within the MERN stack demonstrates a commitment to
                  continuous learning.
                </small> */}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
