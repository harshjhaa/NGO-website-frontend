import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";

import "./Education.scss";

function Education() {
  useEffect(() => {
    AOS.init();
    document.getElementsByTagName("marquee")[0].style.display = "none";
    document.getElementsByClassName("donate-footer")[0].style.display = "none";
  }, []);

  return (
    <div className="education-tab margin-top-80">
      <div className="banner">
        <img
          className="edu-banner-img"
          src="/images/education-tab/edu-banners-3.jpg"
          alt="education-banner-img"
        />
        <h1 className="banner-text">EDUCATION</h1>
      </div>
      <div className="page-routing">
        <Link className="active-link" to="/">
          Home
        </Link>
        <span class="right-arrow">&#62;</span>
        <Link className="active-link" to="/overview">
          Our Work
        </Link>
        <span class="right-arrow">&#62;</span>
        <p>Education</p>
      </div>
      <hr style={{ margin: "0px 10px" }} />
      <div className="feature-content-1">
        <h1 className="title">EDUCATION: For a Brighter Future</h1>
        <p className="text" data-aos="fade-up" data-aos-duration="1000">
          Education is one of the essential tools that impart knowledge and
          every child has a right to Education.
          <br /> Education gives a chance to every child to empowers himself and
          break the vicious cycle of poverty, inequality, discrimination and
          lack of livelihood opportunities.
          <br />
          Truly Help Foundation ensures overall development of children by
          giving them an opportunity to enroll them back into schools – thereby
          ensuring child rights.
        </p>
      </div>
      <div className="quote-text-container">
        <span className="opening-quote"></span>
        <p className="quote-text">
          Truly Help Foundation believe that every child has an opportunity to
          empower himself &#38; understand the social behavior one's rights, and
          in the process evolve as a better citizen.
        </p>
      </div>
      <div className="feature-content-2">
        <h1 className="title">WHAT WE HAVE DONE</h1>
        <ul className="text-container">
          <li className="text" data-aos="fade-up" data-aos-duration="1000">
            Truly Help Foundation's has taken an educational initiative to
            provide education to all include Pre-school (3-6 yrs) and Non-Formal
            Education (6-14 yrs non-school going/ drop outs).
          </li>
          <br />
          <li className="text" data-aos="fade-up" data-aos-duration="1200">
            We work for education for underprivileged children who are under
            difficult circumstances, such as child labor, children of poorest of
            the parents, street and runaway children, children with rare
            disabilities, disaster struck children and slum children.
          </li>
          <br />
          <li className="text" data-aos="fade-up" data-aos-duration="1200">
            Special emphasis is given on girl education and women education, so
            that they and their families get empowered.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Education;
