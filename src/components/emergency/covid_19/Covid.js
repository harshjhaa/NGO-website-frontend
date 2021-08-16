import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import DonateBanner from "../../common_components/donate_banner/DonateBanner";
import covidDonateImg from "../../assets/images/donate-us-container/donate-covid.jpg";

import "../../CommonCSS.scss";
import "./Covid.scss";

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
  
  const donateImgTitle = "Help us Fight Covid-19";
  const donateImgDescription =
    "Some rural residents and households are food insecure,meaning they cannot rely on access to sufficient affordable and nutritious food at all times, increasing the risk of poor health outcomes.";

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
        <h1 className="title">
          FIGHTING COVID-19: Why Health is Our First Priority
        </h1>
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
              The second wave of the Covid-19 pandemic has shaken up the entire
              country and seems to be even more devastating than the first. We
              are fighting with new, more infectious variant of the virus,
              frontline health workers are working round the clock even as
              hospitals run out of beds and oxygen supply, and thousands succumb
              to preventable deaths.
            </p>
          </div>
        </div>
      </div>
      <div className="feature-content-2">
        <div className="contents" data-aos="fade-up" data-aos-duration="1000">
          <div className="text-container">
            <p className="text">
              As we have seen the situation worsens with every passing day, the
              need of the hour is to provide urgent necessities like PPE kits to
              health workers, strengthening the existing public health
              infrastructure through supply of oxygen and medicines, reducing
              the load of primary healthcare facilities, providing hygiene kits
              to masses, and spreading awareness to contain the spread of the
              virus. We are running awareness campaigns on the precautionary
              measures against COVID-19 as well as distributing dry ration and
              hygiene kits to assist the communities in this hour of need.
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
      <br />
      <p className="text p-tag" style={{ fontWeight: "bold" }}>
        With your help we can be able to reachout those families and children
        who need the most – their health is our first priority! They need your
        support NOW.
      </p>
      <div className="hr-line">
        <hr />
      </div>
      <section className="two-col-text-container">
        <h1 className="title">COVID-19 RELIEF</h1>
        <div className="contents" data-aos="fade-up" data-aos-duration="700">
          <div className="only-text-container col-1-container">
            <p className="text" style={{ textAlign: "justify" }}>
              Truly Help Foundation&#39;s work in COVID-19 relief included
              provision of &#39;food and daily essentials&#39; kits, cooked
              meals, Hygiene kit and medical equipment’s. Our world has
              undergone a crisis due to COVID-19. Humanity is fighting one of
              its biggest crises, and it’s our time to come together and support
              each other.
            </p>
          </div>
          <div className="only-text-container col-2-container">
            <p className="text" style={{ textAlign: "justify" }}>
              People surviving on daily wages were the most impacted as they
              have no opportunity to earn amid lockdown and to add to it, no
              savings, making it worse for them. Truly help foundation working
              on ground level since June and putting efforts to minimize the
              impact that this lockdown has on people living in rural &amp;
              urban parts of India.
            </p>
          </div>
        </div>
      </section>
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
      <div className="only-text-container">
        <h1 className="title">DONATE NOW</h1>
        <div className="contents" data-aos="fade-up" data-aos-duration="1000">
          <div className="text-container">
            <p className="text">
              When you contribute to THF, you make a significant and lasting
              impact on the lives of Indians. Through our professional
              management and organizational resources in India, we maximize the
              value of your support and multiply its effect. The resurgence of
              the COVID19 in India is deadlier than ever. Join us in phase 2 of
              #THFCOVID19Response, we need your help now more than ever.
            </p>
          </div>
        </div>
      </div>
      <br />
      <DonateBanner
        contentImage={covidDonateImg}
        title={donateImgTitle}
        description={donateImgDescription}
      />
    </div>
  );
}

export default Covid;
