import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";

import "../CommonOurWork.scss";
import "./Livelihoods.scss";

function Livelihoods() {
  useEffect(() => {
    AOS.init();
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  return (
    <div className="livelihood-tab margin-top-80">
      <div className="banner">
        <h1 className="banner-text">LIVELIHOODS</h1>
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
        <p>Livelihoods</p>
      </div>
      <hr style={{ margin: "0px 10px" }} />
      <div className="feature-content-1">
        <h1 className="title">YOUTH AND SKILL</h1>
        <div className="contents" data-aos="fade-up" data-aos-duration="1000">
          <div className="img-container">
            <img src="/images/livelihoods-tab/liveli-2.jpg" alt="health-img" />
          </div>
          <div className="text-container">
            <p className="text">
              The youth comprises over one-third of the Indian population which
              in turn constitutes a major part of the labour force of the
              country. The number of underprivileged youth in India who lacks
              education and proper guidance is so huge that according to the
              reports of the Financial Express only 15% of the young graduates
              passing out of colleges are employable; the rest are branded
              unemployable.
            </p>
          </div>
        </div>
      </div>
      <div className="feature-content-2">
        <div className="contents" data-aos="fade-up" data-aos-duration="1000">
          <div className="text-container">
            <p className="text">
              It is not their lack of theoretical knowledge that causes this.
              Instead, it is the lack of right skills and attitude. There is
              thus, an increasing concern among the leading employers of the
              country, about the dearth of ready-to-deliver employees. In
              addition, the macro perspective affirms that, it is crucial for
              the energy of the underprivileged youth to be channelized properly
              with proper direction to aid economic growth and nation building
              to elude their addition to family woes, social stress and national
              misery.
            </p>
          </div>
          <div className="img-container">
            <img src="/images/livelihoods-tab/liveli-4.jpg" alt="health-img" />
          </div>
        </div>
      </div>
      <div className="quote-text-container">
        <span className="opening-quote-svg"></span>
        <p className="quote-text">
          But if you can create an honorable livelihood, where you take your
          skills and use them and you earn a living from it, it gives you a
          sense of freedom and allows you to balance your life the way you want.
          <p style={{ textAlign: "right", marginRight: "50px" }}>
            – Anita Roddick
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

export default Livelihoods;
