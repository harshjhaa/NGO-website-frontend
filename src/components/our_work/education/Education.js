import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Image from "../../images/Image";
import AOS from "aos";

import "../../CommonCSS.scss";
import "../CommonOurWork.scss";
import "./Education.scss";

function Education() {
  useEffect(() => {
    AOS.init();
    window.scrollTo({
      top: 0,
      left: 0,
    });
    document.getElementById("our-work-tab-id").style.color = "#a943a5";
    document.getElementById("our-work-arrow-id").style.color = "#a943a5";

    return () => {
      document.getElementById("our-work-tab-id").style.color = "#000";
      document.getElementById("our-work-arrow-id").style.color = "#000";
    };
  }, []);

  return (
    <div className="education-tab margin-top-80">
      <div className="banner">
        {/* <img
          className="banner-img"
          src="/images/education-tab/edu-banners-3.jpg"
          alt="education-banner-img"
        /> */}
        {/* <Image classNm={"banner-img"} componentName={"Education"} /> */}
        <Image
          classNm="banner-img"
          source="/images/education-tab/edu-banners-3.jpg"
        />
        <h1 className="banner-text">EDUCATION</h1>
      </div>
      <div className="bread-crum">
        <Link className="active-link" to="/">
          Home
        </Link>
        <span className="right-arrow">&#62;</span>
        <Link className="active-link" to="/overview">
          Our Work
        </Link>
        <span className="right-arrow">&#62;</span>
        <p>Education</p>
      </div>
      <hr style={{ margin: "0px 10px" }} />
      <div className="feature-content-1">
        <h1 className="title">EDUCATION: For a Brighter Future</h1>
        <div className="contents" data-aos="fade-up" data-aos-duration="1000">
          <div className="img-container">
            <img
              className="one-edge-shadow"
              src="/images/education-tab/edu-1.jpg"
              alt="education-img"
            />
          </div>
          <div className="text-container">
            <p className="text">
              Education is one of the essential tools that impart knowledge and
              every child has a right to Education. Education gives a chance to
              every child to empowers himself and break the vicious cycle of
              poverty, inequality, discrimination and lack of livelihood
              opportunities. Truly Help Foundation ensures overall development
              of children by giving them an opportunity to enroll them back into
              schools – thereby ensuring child rights.
            </p>
          </div>
        </div>
      </div>
      <div className="quote-text-container">
        <span className="opening-quote-svg"></span>
        <p className="quote-text">
          Truly Help Foundation believe that every child has an opportunity to
          empower himself &#38; understand the social behavior one's rights, and
          in the process evolve as a better citizen.
        </p>
        <span className="closing-quote-svg"></span>
      </div>
      <div className="what-we-have-done-container">
        <h1 className="title">WHAT WE HAVE DONE</h1>
        <ul
          className="text-container"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <li className="text">
            Truly Help Foundation's has taken an educational initiative to
            provide education to all include Pre-school (3-6 yrs) and Non-Formal
            Education (6-14 yrs non-school going/ drop outs).
          </li>
          <br />
          <li className="text">
            We work for education for underprivileged children who are under
            difficult circumstances, such as child labor, children of poorest of
            the parents, street and runaway children, children with rare
            disabilities, disaster struck children and slum children.
          </li>
          <br />
          <li className="text">
            Special emphasis is given on girl education and women education, so
            that they and their families get empowered.
          </li>
        </ul>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Education;
