import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";

import "../CommonCSS.scss";
import "./CommonAboutUs.scss";
import "./AboutUs.scss";

function AboutUs() {
  useEffect(() => {
    AOS.init();
    window.scrollTo({
      top: 0,
      left: 0,
    });
    document.getElementById("about-us-tab-id").style.color = "#0096ff";
    document.getElementById("about-us-arrow-id").style.color = "#0096ff";

    return () => {
      document.getElementById("about-us-tab-id").style.color = "#000";
      document.getElementById("about-us-arrow-id").style.color = "#000";
    };
  }, []);

  return (
    <div className="aboutus-tab margin-top-4px">
      <div className="banner">
        <img
          className="banner-img"
          src="/images/aboutus-tab/about-us-banner-1.jpg"
        />
        <h1 className="banner-text">ABOUT US</h1>
      </div>
      <div className="bread-crum">
        <Link className="active-link" to="/">
          Home
        </Link>
        <span className="right-arrow">&#62;</span>
        <p>About Us</p>
      </div>
      <hr style={{ margin: "0px 10px" }} />
      <div className="feature-content-1">
        <h1 className="title">ABOUT US</h1>
        <div className="contents" data-aos="fade-up" data-aos-duration="1000">
          <div className="img-container">
            <img
              className="one-edge-shadow"
              src="/images/aboutus-tab/aboutus-1.jpg"
              alt="education-img"
            />
          </div>
          <div className="text-container">
            <p className="text">
              Truly Help Foundation is the independent organization creating
              lasting change in the life of children's in the India. We are
              recognized for our commitment towards accountability, innovation
              and collaboration, we believe in bringing change by empowering
              children and families so that they can help themselves.
            </p>
          </div>
        </div>
      </div>
      <div className="feature-content-2">
        <div className="contents" data-aos="fade-up" data-aos-duration="1000">
          <div className="text-container">
            <p className="text">
              We are committed to providing basic education and a healthy
              environment to underprivileged children. We work for poor child
              education believes that whether you are addressing healthcare,
              poverty, population control, unemployment or human rights, there's
              no better place to start than in the corridors of education.
            </p>
          </div>
          <div className="img-container">
            <img
              className="one-edge-shadow"
              src="/images/aboutus-tab/aboutus-2.jpg"
              alt="education-img"
            />
          </div>
        </div>
      </div>
      <div className="hr-line">
        <hr />
      </div>
      <div className="feature-content-1 only-text-container">
        <h1 className="title">OUR STRATEGY</h1>
        <div className="contents" data-aos="fade-up" data-aos-duration="1000">
          <div className="text-container">
            <p className="text">
              Our strategy is to Engage, Empower, Execute and Exit: To engage
              rural communities with corporates, young urban India,
              not-for-profit organizations and government to empower our
              communities to execute programs that transform their own lives.
            </p>
          </div>
        </div>
      </div>
      <div className="hr-line">
        <hr />
      </div>
      <div className="feature-content-1 only-text-container">
        <h1 className="title">OUR PHILOSOPHY</h1>
        <div className="contents" data-aos="fade-up" data-aos-duration="1000">
          <div className="text-container">
            <p className="text">
              At the Truly help foundation, we believe that the partnership of
              rural India with corporates, young urban India, the Government and
              other foundations is the key to create a permanent and
              irreversible change for good.
            </p>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}

export default AboutUs;
