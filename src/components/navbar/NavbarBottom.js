import React, { useEffect, useState } from "react";
// import Slider from '../image_slider/Slider'
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import "./Navbar.scss";

const NavbarBottom = () => {
  // const [navNotshow, setNavNotShow] = useState(false);

  // const [lastScroll, setLastScroll] = useState(0);
  // const [currentScroll, setCurrentScroll] = useState(0);

  // const handleScroll = () => {
  //   console.log("Page Scrolled", window.pageYOffset);
  //   setCurrentScroll(window.pageYOffset);
  // };

  // useEffect(() => {
  //   if (currentScroll > lastScroll) {
  //     setNavNotShow(true);
  //   } else {
  //     setNavNotShow(false);
  //   }
  //   setLastScroll(currentScroll);
  // }, [currentScroll]);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div id="navbar-id" className="nav-bottom-container">
      {/* <div className={`nav-bottom ${navNotshow && "nav-not-show"}`}> */}
      <div className="nav-bottom">
        <Link to="/">
          {/* <img className="nav-logo" alt="logo" /> */}
          <img className="nav-logo" src="/images/logo_header2.svg" alt="Logo" />
        </Link>
        <ul className="nav-bottom-list">
          <div className="nav-bottom-list-content">
            <div className="nav-tab">
              <li>
                <Link id="our-work-tab-id">OUR WORK</Link>
                <i id="our-work-arrow-id" className="fa fa-caret-down"></i>
              </li>
              <div className="nav-dropdown-menu">
                <li>
                  <Link to="/our-work">OUR WORK</Link>
                </li>
                {/* <li>
                  <Link to="/overview">OVERVIEW</Link>
                </li> */}
                <li>
                  <Link to="/education">EDUCATION</Link>
                </li>
                <li>
                  <Link to="/healthcare">HEALTHCARE</Link>
                </li>
                <li>
                  <Link to="/livelihoods">LIVELIHOODS</Link>
                </li>
                <li>
                  <Link to="/sports">SPORTS</Link>
                </li>
                <li>
                  <Link to="/humanitarian">HUMANITARIAN</Link>
                </li>
              </div>
            </div>
            <div className="nav-tab">
              <li>
                <Link id="about-us-tab-id">ABOUT US</Link>
                <i id="about-us-arrow-id" className="fa fa-caret-down"></i>
              </li>
              <div className="nav-dropdown-menu">
                <li>
                  <Link to="/about-us">ABOUT US</Link>
                </li>
                <li>
                  <Link to="/mission-vision-values">
                    MISSION, VISION AND VALUES
                  </Link>
                </li>
                <li>
                  <Link to="/our-approach">OUR APPROACH</Link>
                </li>
                <li>
                  <Link to="/our-team">OUR TEAM</Link>
                </li>
                <li>
                  <Link to="/financials">FINANCIALS</Link>
                </li>
                <li>
                  <Link to="/documents">DOCUMENTS</Link>
                </li>
                <li>
                  <Link to="/latest-news">LATEST NEWS</Link>
                </li>
                {/* <li>
                  <Link to="/stories-of-change">STORIES OF CHANGE</Link>
                </li> */}
                {/* <li>
                  <Link to="/success-story">SUCCESS STORY</Link>
                </li> */}
              </div>
            </div>
            <div className="nav-tab">
              <li>
                <Link id="thf-fellowship-tab-id" to="/thf-fellowship">
                  THF FELLOWSHIP
                </Link>
                {/* <i
                  id="thf-fellowship-arrow-id"
                  className="fa fa-caret-down"
                ></i> */}
              </li>
              {/* <div className="nav-dropdown-menu">
                <li>
                  <Link to="/volunteering">VOLUNTEERING</Link>
                </li>
                <li>
                  <Link to="/internships">INTERNSHIPS</Link>
                </li>
              </div> */}
            </div>
            <div className="nav-tab">
              <li>
                <Link id="emergency-tab-id" to="/emergency">
                  EMERGENCY
                </Link>
                <i id="emergency-arrow-id" className="fa fa-caret-down"></i>
              </li>
              <div className="nav-dropdown-menu">
                <li>
                  <Link to="/emergency-case">EMERGENCY CASE</Link>
                </li>
                <li>
                  <Link to="/covid-19-relief">COVID-19 RELIEF</Link>
                </li>
              </div>
            </div>
            <div className="nav-tab">
              <li>
                <Link id="get-involved-tab-id" to="/get-involved">
                  GET INVOLVED
                </Link>
                <i id="get-involved-arrow-id" className="fa fa-caret-down"></i>
              </li>
              <div className="nav-dropdown-menu">
                <li>
                  <Link to="/donate">DONATE</Link>
                </li>
                {/* <li>
                  <Link to="/our-donor">OUR DONOR</Link>
                </li> */}
                {/* <li>
                  <Link to="/legacy">LEGACY</Link>
                </li> */}
                <li>
                  <Link to="/partnerships">PARTNERSHIPS</Link>
                </li>
                <li>
                  <Link to="/other-ways-to-help">OTHER WAYS TO HELP</Link>
                </li>
                <li>
                  <Link to="/our-programmes">OUR PROGRAMMES</Link>
                </li>
                <li>
                  <Link to="/our-campaigns">OUR CAMPAIGNS</Link>
                </li>
                {/* <li>
                  <Link to="/events">EVENTS</Link>
                </li> */}
                <li>
                  <Link to="/careers">CAREERS</Link>
                </li>
                <li>
                  <Link to="/contact-us">CONTACT US</Link>
                </li>
              </div>
            </div>
            <div className="nav-tab">
              <li>
                <Link to="/donate" id="nav-donate">
                  Donate
                </Link>
              </li>
            </div>
            <div className="nav-tab-social">
              <div className="social-media-icons">
                <a
                  className="social-icons icon-twitter"
                  href="https://twitter.com/trulyhelp"
                  target="_blank"
                ></a>
                <a
                  className="social-icons icon-facebook"
                  href="https://www.facebook.com/trulyhelpfoundation"
                  target="_blank"
                ></a>
                <a
                  className="social-icons icon-linkedin"
                  href="https://www.linkedin.com/company/truly-help-foundation5aba50213"
                  target="_blank"
                ></a>
                <a
                  className="social-icons icon-instagram"
                  href="https://www.instagram.com/trulyhelpfoundation"
                  target="_blank"
                ></a>
                <a
                  className="social-icons icon-youtube"
                  href="https://www.youtube.com/channel/UCRIQBzF05ms8IF13-2ER8VA/featured"
                  target="_blank"
                ></a>
              </div>
            </div>
          </div>
        </ul>
      </div>
      <marquee
        className="marquee-container margin-top-80"
        direction="left"
        scrollamount="5"
        behavior="scroll"
      >
        <p>
          Truly Help Foundation is a registered Non-profit organization under
          section 8 company in india and a Members of THF confederation present
          in PAN India which works with the most marginalised people to
          alleviate poverty and reduce social injustice through comprehensive
          programmes in healthcare, education, livelihoods, sports and
          humanitarian assistance and rehabilitation. | We are responding to the
          second wave of COVID-19 by setting up temporary COVID Care Facilities
          and supporting marginalized communities by providing dry ration and
          hygiene kits . We are also awaring and preparing communities for covid
          third wave.
        </p>
      </marquee>
    </div>
  );
};

export default NavbarBottom;
