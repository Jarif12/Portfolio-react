import React from "react";
import "./About.css";
import about_theme from "../../assets/theme_pattern.svg";
import about_profile from "../../assets/about-profile.png";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={about_theme} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={about_profile} width={500} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am an experienced Frontend Developer with over a decade of
              professional expertise in the field. Throughout my career, I have
              had the privilege <br /> of collaborating with prestigious
              organizations, contributing to their success and growth.
            </p>
            <p>
              My passion for frontend development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>
                HTML & CSS
                <hr style={{ width: "60%" }} />
              </p>
              <p>
                JavaScript
                <hr style={{ width: "50%" }} />
              </p>
              <p>
                React JS
                <hr style={{ width: "30%" }} />
              </p>
              <p>
                Tailwind
                <hr style={{ width: "20%" }} />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>3+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>30+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
