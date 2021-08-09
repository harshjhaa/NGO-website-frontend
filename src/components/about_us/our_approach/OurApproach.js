import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HungerRuralDonate from "../../common_components/hunger_rural_donate/HungerRuralDonate";
import SubscribeNewsletter from "../../common_components/subscribe_newsletter/SubscribeNewsletter";
import WeHelpEach from "../../common_components/we_help_each/WeHelpEach";

import "./OurApproach.scss";

function OurApproach() {
  useEffect(() => {
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
    <div className="our-approach-tab margin-top-80">
      <div className="banner">
        <img
          className="banner-img"
          src="/images/our-approach-tab/our-approach-banner-1.jpg"
        />
        <h1 className="banner-text">OUR APPROACH</h1>
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
        <p>Our Approach</p>
      </div>
      <hr style={{ margin: "0px 10px" }} />
      <p className="title">OUR APPROACH AND WAYS</p>
      <WeHelpEach />
      <div className="hr-line">
        <hr />
      </div>
      <div
        data-aos="fade-up"
        // data-aos-duration="1000"
        className="feature-content-1 only-text-container"
      >
        <h1 className="title">OUR NICHE</h1>
        <div className="contents">
          <div className="text-container">
            <p className="text">
              Truly Help Foundation's approach is structured arround bringing
              change at all the levels.
            </p>
          </div>
        </div>
        <div className="niche-contents">
          <div className="circle">
            <p>CREATE PARTNERSHIPS</p>
          </div>
          <div className="circle">
            <p>CREATE PARTNERSHIPS</p>
          </div>
          <div className="circle">
            <p>CREATE PARTNERSHIPS</p>
          </div>
          <div className="circle">
            <p>CREATE PARTNERSHIPS</p>
          </div>
        </div>
      </div>
      <div className="hr-line">
        <hr />
      </div>
      <SubscribeNewsletter />
      <div className="hr-line">
        <hr />
      </div>
      <HungerRuralDonate />
    </div>
  );
}

export default OurApproach;
