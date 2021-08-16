import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import DonateBanner from "../../common_components/donate_banner/DonateBanner";
import SubscribeNewsletter from "../../common_components/subscribe_newsletter/SubscribeNewsletter";
import AOS from "aos";

import hungerDonateImg from "../../assets/images/donate-us-container/donate-hunger.jpg";

import "../../CommonCSS.scss";
import "../CommonOurWork.scss";
import "./Overview.scss";

function Overview() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    AOS.init();
    document.getElementById("our-work-tab-id").style.color = "#0096ff";
    document.getElementById("our-work-arrow-id").style.color = "#0096ff";

    return () => {
      document.getElementById("our-work-tab-id").style.color = "#000";
      document.getElementById("our-work-arrow-id").style.color = "#000";
    };
  }, []);

  const donateImgTitle = "Help us Fight Hunger in Rural Areas";
  const donateImgDescription =
    "Some rural residents and households are food insecure,meaning they cannot rely on access to sufficient affordable and nutritious food at all times, increasing the risk of poor health outcomes.";

  return (
    <div className="overview-tab margin-top-4px">
      <div className="banner">
        <img
          className="banner-img"
          src="/images/overview-tab/overview-banner-3.jpg"
        />
        <h1 className="banner-text">OVERVIEW</h1>
      </div>
      <div className="bread-crum">
        <Link className="active-link" to="/">
          Home
        </Link>
        <span className="right-arrow">&#62;</span>
        <p>Overview</p>
      </div>
      <hr style={{ margin: "0px 10px" }} />
      <div className="feature-content-1 only-text-container">
        <h1 className="title">OUR GEN</h1>
        <div className="contents" data-aos="fade-up" data-aos-duration="1000">
          <div className="text-container">
            <p className="text">
              Truly Help Foundation is a registered Non-profit organization
              under section 8 company in india and a Members of THF
              confederation present in PAN India which works with the most
              marginalised people to alleviate poverty and reduce social
              injustice through comprehensive programmes in healthcare,
              education, livelihoods, sports and humanitarian assistance and
              rehabilitation.
            </p>
          </div>
        </div>
      </div>
      <div className="hr-line">
        <hr />
      </div>
      <h1 className="title">WE ARE WORKING ON</h1>
      <div
        className="overview-container"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="education-container">
          <h2 className="title">EDUCATION</h2>
          <span className="span-line"></span>
          <div className="img-container">
            <img src="/images/overview-tab/edu-1.jpg" />
          </div>
          <div className="contents">
            <p>
              True education is beyond earning degrees it is more than bookish
              knowledge. Education means inculcating moral values, positive
              thinking, attitude of helping, attitude of giving to society.
            </p>
          </div>
          <button className="bttn">
            <Link to="/education">VISIT</Link>
          </button>
        </div>
        <div className="healthcare-container">
          <h2 className="title">HEALTHCARE</h2>
          <span className="span-line"></span>
          <div className="img-container">
            <img src="/images/overview-tab/health-1.jpg" />
          </div>
          <div className="contents">
            <p>
              Access to health care may vary across countries, communities, and
              individuals, influenced by social and economic conditions as well
              as health policies. As we all know health is wealth.
            </p>
          </div>
          <button className="bttn">
            <Link to="/healthcare">VISIT</Link>
          </button>
        </div>
        <div className="livelihoods-container">
          <h2 className="title">LIVELIHOODS</h2>
          <span className="span-line"></span>
          <div className="img-container">
            <img src="/images/overview-tab/liveli-1.jpg" />
          </div>
          <div className="contents">
            <p>
              A livelihood is a means of making a living. It encompasses
              people's capabilities, assets, income and activities required to
              secure the necessities of life.
            </p>
          </div>
          <button className="bttn bttn-red">
            <Link to="/livelihoods">VISIT</Link>
          </button>
        </div>
        <div className="sports-container">
          <h2 className="title">SPORTS</h2>
          <span className="span-line"></span>
          <div className="img-container">
            <img src="/images/overview-tab/sports-1.jpg" />
          </div>
          <div className="contents">
            <p>
              Sport pertains to any form of competitive physical activity or
              game that aims to use, maintain or improve physical ability and
              skills. It upskills the social and metal state of a person.
            </p>
          </div>
          <button className="bttn">
            <Link to="/sports">VISIT</Link>
          </button>
        </div>
        <div className="humanitarian-container">
          <h2 className="title">HUMANITARIAN</h2>
          <span className="span-line"></span>
          <div className="img-container">
            <img src="/images/overview-tab/human-1.jpg" />
          </div>
          <div className="contents">
            <p>
              A humanitarian actively engages in promoting human welfare and
              social reforms, and has no prejudice with human suffering on
              grounds of gender, religious, or national divisions.
            </p>
          </div>
          <button className="bttn">
            <Link to="/humanitarian">VISIT</Link>
          </button>
        </div>
        <div className="humanitarian-container">
          <h2 className="title">COVID-13 RELIEF</h2>
          <span className="span-line"></span>
          <div className="img-container">
            <img src="/images/overview-tab/covid-1.jpeg" />
          </div>
          <div className="contents">
            <p>
              Our world has undergone a crisis due to COVID-19. Humanity is
              fighting one of its biggest crises, and it’s our time to come
              together and support each other inorder to make world a better
              place to live.
            </p>
          </div>
          <button className="bttn">
            <Link to="/covid-19-relief">VISIT</Link>
          </button>
        </div>
      </div>
      <div className="hr-line">
        <hr />
      </div>
      <SubscribeNewsletter />
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

export default Overview;
