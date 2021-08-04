import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";

import "../CommonOurWork.scss";
import "./Sports.scss";

function Sports() {
  useEffect(() => {
    AOS.init();
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  return (
    <div className="sports-tab margin-top-80">
      <div className="banner">
        <img
          className="edu-banner-img one-edge-shadow"
          src="/images/sports-tab/sport-banner.jpg"
          alt="sport-banner-img"
        />
        <h1 className="banner-text">SPORTS</h1>
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
        <p>Sports</p>
      </div>
      <hr style={{ margin: "0px 10px" }} />
      <div className="feature-content-1">
        <h1 className="title">SPORTS: Shaping Future</h1>
        <div className="contents" data-aos="fade-up" data-aos-duration="1000">
          <div className="img-container">
            <img src="/images/sports-tab/sport-1.jpg" alt="sport-img" />
          </div>
          <div className="text-container">
            <p className="text">
              Truly Help Foundation, strongly believe that sports is a very
              effective tool for the overall development of the children. We
              wish to use sports to make a healthy future generation. Our
              mission to create inclusive sports culture by enabling people with
              disability and abled bodied individuals to participate in sports
              program together.
            </p>
          </div>
        </div>
      </div>
      <div className="feature-content-2">
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
      </div>
      <div className="quote-text-container">
        <span className="opening-quote-svg"></span>
        <p className="quote-text">
          You dream. You plan. You reach. There will be obstacles. There will be
          doubters. There will be mistakes. But with hard work, with belief,
          with confidence and trust in yourself and those around you, there are
          no limits.
          <p style={{ textAlign: "right", marginRight: "50px" }}>
            – Michael Phelps
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
            THF first program, we have curated a progressive, year-long sports
            program for youth and underprivileged children with Intellectual
            Disabilities and Special Needs.
          </li>
          <br />
          <li className="text">
            We believe sports create pathways of opportunities for mental and
            physical development of individual.
          </li>
        </ul>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Sports;
