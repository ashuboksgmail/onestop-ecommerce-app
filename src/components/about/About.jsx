import React from "react";
import "./about.css";
import AboutImage from "../../assets/textures/my-photo.png";
import { BsAward } from "react-icons/bs";
import { RiUserSearchLine } from "react-icons/ri";
import { FiBookOpen } from "react-icons/fi";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know Me </h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={AboutImage} alt="About Image"></img>
          </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <BsAward className="about__icon" />
                <h5>Experience</h5>
                <small> 3+ years experience</small>
              </article>

              <article className="about__card">
                <RiUserSearchLine className="about__icon" />
                <h5>Clients</h5>
                <small> 30+ worldwide</small>
              </article>

              <article className="about__card">
                <FiBookOpen className="about__icon" />
                <h5>Projects</h5>
                <small> 30+ completed</small>
              </article>
            </div>
            <p>
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
              exercitationem, fugiat sequi quas quis cumque et tempora
              repudiandae delectus impedit provident beatae, id similique
              eligendi voluptatem eveniet praesentium ducimus recusandae.
            </p>
            <a href="#contact" className="btn btn-primary">
              Lets Talk
            </a>
          </div>
        </div>
      
    </section>
  );
};

export default About;
