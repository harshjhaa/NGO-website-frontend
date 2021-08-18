import React, { useEffect } from "react";
import AOS from "aos";

import "../../CommonCSS.scss";
import "./LatestUpdate.scss";

const LatestUpdates = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="latest-updates-container"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h1 className="head-title">LATEST UPDATES</h1>
      <div className="contents">
        <div className="events-list-container">
          <h1 className="title">EVENTS</h1>
          <div className="testimonial-row">Events Comming Soon</div>
        </div>
        <div className="twitter-list-container">
          <div className="twitter">
            <a
              className="twitter-timeline"
              href="https://twitter.com/trulyhelp"
              data-height="100%"
              data-chrome="nofooter"
              data-border-color="#a80000"
            >
              Tweets by @trulyhelp
            </a>
            <section className="twitterContainer" style={{ display: "none" }}>
              <div className="twitter-embed"></div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestUpdates;
