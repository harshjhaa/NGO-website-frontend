import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import DonateBanner from "../../common_components/donate_banner/DonateBanner";
import WeHelpEach from "../../common_components/we_help_each/WeHelpEach";
import hungerDonateImg from "../../assets/images/donate-us-container/donate-hunger.jpg";

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

  const donateImgTitle = "Help us Fight Hunger in Rural Areas";
  const donateImgDescription =
    "Some rural residents and households are food insecure,meaning they cannot rely on access to sufficient affordable and nutritious food at all times, increasing the risk of poor health outcomes.";

  return (
    <div className="our-approach-tab margin-top-4px">
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
        className="only-text-container"
      >
        <h1 className="title">OUR NICHE</h1>
        <div className="contents">
          <p className="text">
            Truly Help Foundation's approach is structured arround bringing
            change at all the levels.
          </p>
        </div>
        <div className="niche-contents">
          <div className="circle circle-1">
            <p>Create local & partnerships</p>
          </div>
          <div className="circle circle-2">
            <p>Child participation</p>
          </div>
          <div className="circle circle-3">
            <p>Innovation idea</p>
          </div>
          <div className="circle circle-4">
            <p>Evidence & Development</p>
          </div>
        </div>
      </div>
      <div className="hr-line">
        <hr />
      </div>
      <DonateBanner
        contentImage={hungerDonateImg}
        title={donateImgTitle}
        description={donateImgDescription}
      />
    </div>
  );
}

export default OurApproach;
