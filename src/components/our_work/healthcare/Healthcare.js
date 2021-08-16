import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Image from "../../images/Image";
import AOS from "aos";

import "../../CommonCSS.scss";
import "../CommonOurWork.scss";
import "./Healthcare.scss";

function Healthcare() {
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

  return (
    <div className="healthcare-tab margin-top-4px">
      <div className="banner">
        {/* <img
          className="banner-img one-edge-shadow"
          src="/images/healthcare-tab/healthcare-banner.jpg"
          alt="healthcare-banner-img"
        /> */}
        {/* <Image classNm={"banner-img"} componentName={"Healthcare"} /> */}
        <Image
          classNm="banner-img"
          source="/images/healthcare-tab/healthcare-banner.jpg"
        />
        <h1 className="banner-text">HEALTHCARE</h1>
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
        <p>Healthcare</p>
      </div>
      <hr style={{ margin: "0px 10px" }} />
      <div className="feature-content-1">
        <h1 className="title">HEALTH AND NUTRITION</h1>
        <div className="contents" data-aos="fade-up" data-aos-duration="1000">
          <div className="img-container">
            <img src="/images/healthcare-tab/health-1.jpg" alt="health-img" />
          </div>
          <div className="text-container">
            <p className="text">
              Adequate nutrition and quality primary care play’s an essential
              role in a child's physical, mental and emotional development. A
              proper diet is essential from very early age of life for growth,
              development, active life and unsustainable harm to the child's
              health. Malnutrition in India has adversely affected the lives of
              millions of children; it is home to 46.6 million stunted children,
              a third of the world’s total as per the Global Nutrition Report
              2018.
            </p>
          </div>
        </div>
        <div className="feature-content-2">
          <div className="contents" data-aos="fade-up" data-aos-duration="1000">
            <div className="text-container">
              <p className="text">
                Health statistics of rural India continue to be poor, the health
                status and access to health for the poor in urban slum dwellers
                has surfaced to be equally deplorable and have less than 4% of
                government primary public health care facilities. Uneducated
                parents in rural and urban areas belongs to weaker sections they
                are unaware of the risk lack of proper food. In India there are
                so many families can afford 1 time meal for themselves.
              </p>
            </div>
            <div className="img-container">
              <img src="/images/healthcare-tab/health-2.jpg" alt="health-img" />
            </div>
          </div>
        </div>
      </div>
      <div className="quote-text-container">
        <span className="opening-quote-svg"></span>
        <p className="quote-text">
          If we could give every individual the right amount of nourishment and
          exercise, not too little and not too much, we would have the safest
          way to health.
          <p style={{ textAlign: "right", marginRight: "50px" }}>
            – Hippocrates
          </p>
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
            Truly help foundation works to spread awareness among parents about
            how much health and nutrition plays a crucial role for their good
            health and longevity to instill in child’s life.
          </li>
          <br />
          <li className="text">
            We train, educate and empower a strong cadre of community health
            workers whom we call ‘Frontline Warriors’. They serve as bridge
            between community and various public and private health facilities
            besides providing paramedical aid to the villagers.
          </li>
          <br />
          <li className="text">
            We also closely work with private frontline health personnel
            including doctors, ASHA workers, Aganwadis workers and ANMs for last
            mile delivery of health and nutrition services. We believe that
            everyone lives a happy and healthy life.
          </li>
        </ul>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Healthcare;
