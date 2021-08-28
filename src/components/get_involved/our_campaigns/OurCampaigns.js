import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";

import "../../CommonCSS.scss";
import "./OurCampaigns.scss";

function OurCampaigns() {
  useEffect(() => {
    AOS.init();
    window.scrollTo({
      top: 0,
      left: 0,
    });
    document.getElementById("get-involved-tab-id").style.color = "#0096ff";
    document.getElementById("get-involved-arrow-id").style.color = "#0096ff";
    return () => {
      document.getElementById("get-involved-tab-id").style.color = "#000";
      document.getElementById("get-involved-arrow-id").style.color = "#000";
    };
  }, []);

  return (
    <div className="our-campaign-tab margin-top-4px">
      <div className="banner">
        <img
          className="banner-img"
          src="/images/our-campaign-tab/our-camapign-banner-1.jpg"
        />
        <h1 className="banner-text">OUR CAMPAIGNS</h1>
      </div>
      <div className="bread-crum">
        <Link className="active-link" to="/">
          Home
        </Link>
        <span className="right-arrow">&#62;</span>
        <p>Get Involved</p>
        <span className="right-arrow">&#62;</span>
        <p>Our Campaign</p>
      </div>
      <hr style={{ margin: "0px 10px" }} />
      <div className="only-text-container" style={{ marginTop: "30px" }}>
        <h1 className="title">OUR CAMPAIGN</h1>
        <div className="contents" data-aos="fade-up" data-aos-duration="1000">
          <div className="text-container">
            <p className="text top-para">
              Our campaigns can be successful because of your help and support.
              We continue to seek your support which is important to bring about
              social change in the lives of children and their communities.
            </p>
          </div>
        </div>
      </div>
      <div className="feature-content-1">
        <h1 className="title">Food For All</h1>
        <div className="contents" data-aos="fade-up" data-aos-duration="1000">
          <div className="img-container">
            <img
              className="one-edge-shadow"
              src="/images/our-campaign-tab/our-campaign-1.jpg"
              alt="education-img"
            />
          </div>
          <div className="text-container">
            <p className="text">
              We are providing dry ration and basic utilities to homeless,
              migrant workers and slum dwellers across Delhi. We trying to reach
              out through, our local partners on-ground level which helped us
              deliver the dry ration with the help of volunteers. The Dry Ration
              is packed by taking all safety measures and delivered in mapped
              location as soon as we can, we ensure safe delivery safe.
            </p>
            <br />
          </div>
        </div>
      </div>
      <div className="feature-content-2">
        <div className="contents" data-aos="fade-up" data-aos-duration="1000">
          <div className="text-container">
            <p className="text">
              We are continuing the provision of kits as these families will
              need support for at least 2 to 3 months. And with your Help we
              ensure to reach out a greater number of families in order to make
              our country happy place for everyone we can.
            </p>
          </div>
          <div className="img-container">
            <img
              className="one-edge-shadow"
              src="/images/our-campaign-tab/our-campaign-2.jpg"
              alt="education-img"
            />
          </div>
        </div>
      </div>
      <div className="hr-line">
        <hr />
      </div>
      <br />
    </div>
  );
}

export default OurCampaigns;
