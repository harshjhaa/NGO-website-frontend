import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";

import "../CommonOurWork.scss";
import "./Humanitarian.scss";

function Humanitarian() {
  useEffect(() => {
    AOS.init();
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  return (
    <div className="humanitarian-tab margin-top-80">
      <div className="banner">
        <img
          className="edu-banner-img one-edge-shadow"
          src="/images/humanitarian-tab/humanitarian-banner.jpg"
          alt="sport-banner-img"
        />
        <h1 className="banner-text">HUMANITARIAN</h1>
      </div>
      <div className="page-routing">
        <Link className="active-link" to="/">
          Home
        </Link>
        <span class="right-arrow">&#62;</span>
        <Link className="active-link" to="/overview">
          Our Work
        </Link>
        <span class="right-arrow">&#62;</span>
        <p>Humanitarian</p>
      </div>
      <hr style={{ margin: "0px 10px" }} />
      <div className="feature-content-1">
        <h1 className="title">HUMANITARIAN: Helping is Caring</h1>
        <div className="contents" data-aos="fade-up" data-aos-duration="1000">
          <div className="img-container">
            <img src="/images/humanitarian-tab/humanitarian-1.jpg" alt="humanitarian-img" />
          </div>
          <div className="text-container">
            <p className="text">
              Truly Help Foundation, wants to focus on continually work on
              humanitarian action, which includes preparedness, mitigation, risk
              reduction, resilience building and disaster – hit regions where
              might be limited to immediate action because of connectivity
              issues.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="feature-content-2">
        <div className="contents" data-aos="fade-up" data-aos-duration="1000">
          <div className="text-container">
            <p className="text">
              Through our sports program we want to become one of the best NGO
              working in the area of promotion of sports among underprivileged
              children. Truly Help foundation benefits all children, youth and
              enable all the participants to not only improve their physical and
              social skills and promote healthy lifestyle but also builds health
              environment for everyone
            </p>
          </div>
          <div className="img-container">
            <img src="/images/sports-tab/sport-2.jpg" alt="sport-img" />
          </div>
        </div>
      </div> */}
      <div className="quote-text-container">
        <span className="opening-quote-svg"></span>
        <p className="quote-text">
          You must not lose faith in humanity. Humanity is an ocean; if a few
          drops of the ocean are dirty, the ocean does not become dirty.
          <p style={{ textAlign: "right", marginRight: "50px" }}>
            – Mahatma Gandhi
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
            THF emergency response ensure that basic necessities for survival
            like food, dry ration, safe &#38; clean drinking water, shelter and
            other utilities which they need on daily bases reaches to them at
            the time of disaster.
          </li>
          <br />
          <li className="text">
            Truly Help foundation also conducts Risk management &#38; awareness
            classes and training for all communities and volunteers all across
            the states so we can help each other on time.
          </li>
        </ul>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Humanitarian;
