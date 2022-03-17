import React from "react";
import "./services.css";
import { BsPatchCheck } from "react-icons/bs";
const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsPatchCheck className="service__list-icons" />
              <p> Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <BsPatchCheck className="service__list-icons" />
              <p> Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <BsPatchCheck className="service__list-icons" />
              <p> Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <BsPatchCheck className="service__list-icons" />
              <p> Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <BsPatchCheck className="service__list-icons" />
              <p> Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </article>

        {/* end of UI/UX design */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsPatchCheck className="service__list-icons" />
              <p> Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <BsPatchCheck className="service__list-icons" />
              <p> Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <BsPatchCheck className="service__list-icons" />
              <p> Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <BsPatchCheck className="service__list-icons" />
              <p> Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <BsPatchCheck className="service__list-icons" />
              <p> Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </article>

        {/* end of web development */}


        <article className="service">
          <div className="service__head">
            <h3> Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsPatchCheck className="service__list-icons" />
              <p> Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <BsPatchCheck className="service__list-icons" />
              <p> Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <BsPatchCheck className="service__list-icons" />
              <p> Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <BsPatchCheck className="service__list-icons" />
              <p> Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <BsPatchCheck className="service__list-icons" />
              <p> Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </article>

      {/* End of content creation */}
      </div>
    </section>
  );
};

export default Services;
