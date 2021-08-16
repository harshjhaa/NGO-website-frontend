import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "../../image_slider/Slider";
import AOS from "aos";

import "../../CommonCSS.scss";
import "../CommonAboutUs.scss";
import "./Mission.scss";

function Mission() {
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
    <div className="mission-tab margin-top-4px">
      <div className="banner">
        <img
          className="banner-img"
          src="/images/mission-tab/mission-banner-1.jpg"
        />
        <h1 className="banner-text">MISSION, VISION AND VALUES</h1>
      </div>
      <div className="bread-crum">
        <Link className="active-link" to="/">
          Home
        </Link>
        <span className="right-arrow">&#62;</span>
        <Link className="active-link" to="/about-us">
          About Us
        </Link>
        <span className="right-arrow">&#62;</span>
        <p>Mission, Vision and Values</p>
      </div>
      <hr style={{ margin: "0px 10px" }} />
      <div className="feature-content-1">
        <h1 className="title">OUR MISSION</h1>
        <div className="contents" data-aos="fade-up" data-aos-duration="1000">
          <div className="img-container">
            <img
              className="one-edge-shadow"
              src="/images/mission-tab/mission-1.jpg"
              alt="mission-img"
            />
          </div>
          <div className="text-container">
            <p className="text">
              Our prime purpose is to create a world where all communities have
              equal opportunities, no discrimination and encourage healthcare
              development and health promotion to everyone.
              <br />
              We want to break the vicious cycle of society and work for the
              social developments of all groups (individuals, underprivileged
              children’s and communities). Truly Help Foundation needs more
              hands to join us in Reshaping the society to empower our Nation.
            </p>
          </div>
        </div>
      </div>
      <div className="hr-line">
        <hr />
      </div>
      <div className="feature-content-1">
        <h1 className="title">OUR VISION</h1>
        <div className="contents" data-aos="fade-up" data-aos-duration="1000">
          <div className="img-container">
            <img
              className="one-edge-shadow"
              src="/images/mission-tab/vision-1.jpg"
              alt="vision-img"
            />
          </div>
          <div className="text-container">
            <p className="text">
              Our vision is to make a world in which everyone can get the equal
              opportunity, healthcare and education which they need. These are
              the basic needs for an individual and they should not be deprived
              of these basic needs.
              <br />
              Through this apporach only every individual will become capable of
              uplift themselves and make change in the society, which will
              latter bring thrive the nation.
            </p>
          </div>
        </div>
      </div>
      <div className="hr-line">
        <hr />
      </div>
      <div className="feature-content-1">
        <h1 className="title">OUR VALUES</h1>
        <div className="contents" data-aos="fade-up" data-aos-duration="1000">
          <div className="img-container">
            <img
              className="one-edge-shadow"
              src="/images/mission-tab/value-1.jpg"
              alt="values-img"
            />
          </div>
          <div className="text-container">
            <p className="text">
              Values are one of the important part to be considered in the
              process of creating a better world. If you lack it, you can thrive
              but can never succeed. Sooner or later you will encounter failure
              only.
              <br />
              So we focus on our values more than we focus on anything else.
            </p>
          </div>
        </div>
      </div>
      <div className="hr-line">
        <hr />
      </div>
      <div
        className="mission-our-core-values-container"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1 className="title">OUR CORE VALUES</h1>
        <Slider contentName={"valuesContent"} />
      </div>
      <div className="hr-line">
        <hr />
      </div>
      <br />
    </div>
  );
}

export default Mission;
