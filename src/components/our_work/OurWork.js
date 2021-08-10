import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import Slider from "../image_slider/Slider";

import "../CommonCSS.scss";
import "./OurWork.scss";

const OurWork = (props) => {
  useEffect(() => {
    AOS.init();
    window.scrollTo({
      top: 0,
      left: 0,
    });
    document.getElementById("our-work-tab-id").style.color = "#0096ff";
    document.getElementById("our-work-arrow-id").style.color = "#0096ff";

    return () => {
      document.getElementById("our-work-tab-id").style.color = "#000";
      document.getElementById("our-work-arrow-id").style.color = "#000";
    };
  }, []);

  const sliderContent = {
    topBannerContent: "topBannerContent",
    covidBannerContent: "covidBannerContent",
    testimonialContent: "testimonialContent",
  };

  return (
    <div className="our-work-tab margin-top-80">
      <div className="home-img-banner">
        <Slider contentName={sliderContent["topBannerContent"]} />
      </div>
      <div className="bread-crum">
        <Link className="active-link" to="/">
          Home
        </Link>
        <span className="right-arrow">&#62;</span>
        <p>Our Work</p>
      </div>
      <hr style={{ margin: "0px 10px 20px 10px" }} />
      <h1 className="title">OUR WORK</h1>
      <div
        className="home-feature-content-1"
        data-aos="fade-up"
        data-aos-duration="700"
      >
        <div className="home-feature-content-1-container">
          <div className="home-feature-content-1-vid">
            <video
              src="/videos/feature_content_1_vid.mp4"
              width="400"
              height="300"
              autoplay="true"
              muted="true"
              loop="true"
            />
          </div>
          <div className="home-feature-content-1-content">
            <p className="info">
              Truly Help Foundation has been on the forefront, reshaping the
              lives of millions children, women and youth. Be it nutiriton,
              healthcare, education, sports and response in the time.
            </p>
          </div>
        </div>
      </div>
      <div className="hr-line">
        <hr />
      </div>
      <p className="title">We Are Constantly Wokring Upon</p>
      <section className="causes-we-are-serving-contents">
        <div className="box box-border-red">
          <div className="content">
            <img src="/gif/edu-2.gif" alt="home_img-1" />
            <h4>EDUCATION</h4>
            <p>
              Education is one of the main piller of the society, without it
              India's future is lost!
            </p>
            <button className="btn btn-red">
              <Link to="/education">EXPLORE</Link>
            </button>
          </div>
        </div>
        <div className="box box-border-green">
          <div className="content">
            <img src="/gif/health-5.gif" alt="home_img-2" />
            <h4>HEALTHCARE</h4>
            <p>
              Good health makes people strong, increaes thier efficient and
              inturn benefits society!
            </p>
            <button className="btn btn-green">
              <Link to="/healthcare">EXPLORE</Link>
            </button>
          </div>
        </div>
        <div className="box box-border-voilet">
          <div className="content">
            <img src="/gif/liveli-4.gif" alt="home_img-2" />
            <h4>LIVELIHOODS</h4>
            <p>
              Imporvement in the livelihood lead to the upgradation of the
              standard of living!
            </p>
            <button className="btn btn-voilet">
              <Link to="/livelihoods">EXPLORE</Link>
            </button>
          </div>
        </div>
        <div className="box box-border-orange">
          <div className="content">
            <img src="/gif/sports-2.gif" alt="home_img-2" />
            <h4>SPORTS</h4>
            <p>
              Sports helps to evolve the overall mentality of the person by
              making them active, alert and friendly!
            </p>
            <button className="btn btn-orange">
              <Link to="/sports">EXPLORE</Link>
            </button>
          </div>
        </div>
        <div className="box box-border-blue">
          <div className="content">
            <img src="/gif/human-2.gif" alt="home_img-2" />
            <h4>HUMANITARIAN</h4>
            <p>
              Human wlfare is one of the important factor in keeping the society
              balanced, evolving!
            </p>
            <button className="btn btn-blue">
              <Link to="/humanitarian">EXPLORE</Link>
            </button>
          </div>
        </div>
        <div className="box box-border-orange">
          <div className="content">
            <img src="/gif/covid-gif-1.gif" alt="covid_gif" />
            <h4>COVID-19</h4>
            <p>
              We all need to get vaccinated and follow the government
              regulations to rid of this virus!
            </p>
            <button className="btn btn-blue">
              <Link to="/humanitarian">EXPLORE</Link>
            </button>
          </div>
        </div>
      </section>
      <div className="hr-line">
        <hr />
      </div>
      <section className="volunteer-container">
        <p className="title">VOLUNTEER: Be Our Front Leader</p>
        <div className="volunteer-content">
          <img
            className="one-edge-shadow"
            src="/images/our-work-tab/volunteer-1.jpg"
            alt="volunteer_img"
          />
          <div className="volunteer-content">
            <p className="info">
              Truly Help Foundation has been on the forefront, reshaping the
              lives of millions children, women and youth. Be it nutiriton,
              healthcare, education, sports and response in the time.
            </p>
          </div>
        </div>
      </section>
      <div className="hr-line">
        <hr />
      </div>
    </div>
  );
};

export default OurWork;
