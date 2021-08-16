import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
// import covidDonate from '../../assets/images/donate-us-container/covid.jpg'

import "../../CommonCSS.scss";
import "./Covid.scss";
import HungerRuralDonate from "../../common_components/hunger_rural_donate/HungerRuralDonate";

function Covid() {
  useEffect(() => {
    AOS.init();
    window.scrollTo({
      top: 0,
      left: 0,
    });
    document.getElementById("emergency-tab-id").style.color = "#0096ff";
    document.getElementById("emergency-arrow-id").style.color = "#0096ff";
    return () => {
      document.getElementById("emergency-tab-id").style.color = "#000";
      document.getElementById("emergency-arrow-id").style.color = "#000";
    };
  }, []);

  return (
    <div className="aboutus-tab margin-top-4px">
      <div className="banner">
        <img className="banner-img" src="/images/covid-tab/covid-2.jpg" />
        <h1 className="banner-text">COVID-19 RELIEF</h1>
      </div>
      <div className="bread-crum">
        <Link className="active-link" to="/">
          Home
        </Link>
        <span className="right-arrow">&#62;</span>
        <p>Emergency Case</p>
        <span className="right-arrow">&#62;</span>
        <p>Covid-19 Relief</p>
      </div>
      <hr style={{ margin: "0px 10px" }} />
      <div className="feature-content-1">
        <h1 className="title">FIGHTING COVID-19</h1>
        <div className="contents" data-aos="fade-up" data-aos-duration="1000">
          <div className="img-container">
            <img
              className="one-edge-shadow"
              src="/images/covid-tab/covid-4.jpg"
              alt="education-img"
            />
          </div>
          <div className="text-container">
            <p className="text">
              Truly Help Foundation's work in COVID-19 relief included provision
              of 'food and daily essentials' kits, cooked meals, Hygiene kit and
              medical equipment’s. Our world has undergone a crisis due to
              COVID-19. Humanity is fighting one of its biggest crises, and it’s
              our time to come together and support each other.
            </p>
          </div>
        </div>
      </div>
      <div className="feature-content-2">
        <div className="contents" data-aos="fade-up" data-aos-duration="1000">
          <div className="text-container">
            <p className="text">
              People surviving on daily wages were the most impacted as they
              have no opportunity to earn amid lockdown and to add to it, no
              savings, making it worse for them. THF is working on ground level
              since June and putting efforts to minimize the impact that this
              lockdown has on people living in rural & urban parts of India.
            </p>
          </div>
          <div className="img-container">
            <img
              className="one-edge-shadow"
              src="/images/covid-tab/covid-3.webp"
              alt="education-img"
            />
          </div>
        </div>
      </div>
      <div className="hr-line">
        <hr />
      </div>
      <div className="feature-content-1">
        <h1 className="title">
          Food Distribution to Homeless and Migrant Workers
        </h1>
        <div className="contents" data-aos="fade-up" data-aos-duration="1000">
          <div className="img-container">
            <img
              className="one-edge-shadow"
              src="/images/covid-tab/covid-5.jpg"
              alt="education-img"
            />
          </div>
          <div className="text-container">
            <p className="text">
              Truly Help Foundation's work in COVID-19 relief included provision
              of 'food and daily essentials' kits, cooked meals, Hygiene kit and
              medical equipment’s. Our world has undergone a crisis due to
              COVID-19. Humanity is fighting one of its biggest crises, and it’s
              our time to come together and support each other.
            </p>
          </div>
        </div>
      </div>
      <div className="feature-content-2">
        <div className="contents" data-aos="fade-up" data-aos-duration="1000">
          <div className="text-container">
            <p className="text">
              The Dry Ration is packed by taking all safety measures and
              delivered in mapped location as soon as we can, we ensure safe
              delivery safe. We are continuing the provision of kits as these
              families will need support for at least 2 to 3 months. And with
              your Help we ensure to reach out more number of families in order
              to make our country happy place for everyone we can.
            </p>
          </div>
          <div className="img-container">
            <img
              className="one-edge-shadow"
              src="/images/covid-tab/covid-6.jpg"
              alt="education-img"
            />
          </div>
        </div>
      </div>
      <div className="hr-line">
        <hr />
      </div>
      {/* <HungerRuralDonate contentImage={covidDonate} title={"Covid-19"} description={"Help Us Fight Covid-19 by Donating."}/> */}
    </div>
  );
}

export default Covid;
