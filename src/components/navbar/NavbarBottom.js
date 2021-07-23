import React from "react";
// import Slider from '../image_slider/Slider'
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import "./Navbar.scss";

const NavbarBottom = () => {
  return (
    <div className="nav-bottom-container">
      <div className="nav-bottom">
        <Link to="/">
          {/* <img className="nav-logo" alt="logo" /> */}
          <img className="nav-logo" src="/images/logo_header2.svg" alt="Logo" />
        </Link>
        <ul className="nav-bottom-list">
          <div className="nav-bottom-list-content">
            <div className="nav-tabs">
              <li>
                <Link>OUR WORK</Link>
                <i className="fa fa-caret-down"></i>
              </li>
              <div className="nav-dropdown-menu">
                <li>
                  <Link to="/">OVERVIEW</Link>
                </li>
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
            <div className="nav-tabs">
              <li>
                <Link to="/about-us">ABOUT US</Link>
                <i className="fa fa-caret-down"></i>
              </li>
              <div className="nav-dropdown-menu">
                <li>
                  <Link to="/mission-vision-values">MISSION, VISION AND VALUES</Link>
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
                <li>
                  <Link to="/stories-of-change">STORIES OF CHANGE</Link>
                </li>
                <li>
                  <Link to="/success-story">SUCCESS STORY</Link>
                </li>
              </div>
            </div>
            <div className="nav-tabs">
              <li>
                <Link to="/thf-fellowship">THF FELLOWSHIP</Link>
                <i className="fa fa-caret-down"></i>
              </li>
              <div className="nav-dropdown-menu">
                <li>
                  <Link to="/volunteering">VOLUNTEERING</Link>
                </li>
                <li>
                  <Link to="/internships">INTERNSHIPS</Link>
                </li>
              </div>
            </div>
            <div className="nav-tabs">
              <li>
                <Link to="/emergency">EMERGENCY</Link>
                <i className="fa fa-caret-down"></i>
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
            <div className="nav-tabs">
              <li>
                <Link to="/get-involved">GET INVOLVED</Link>
                <i className="fa fa-caret-down"></i>
              </li>
              <div className="nav-dropdown-menu">
                <li>
                  <Link to="/donate">DONATE</Link>
                </li>
                <li>
                  <Link to="/our-donor">OUR DONOR</Link>
                </li>
                <li>
                  <Link to="/legacy">LEGACY</Link>
                </li>
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
                <li>
                  <Link to="/events">EVENTS</Link>
                </li>
                <li>
                  <Link to="/careers">CAREERS</Link>
                </li>
                <li>
                  <Link to="/contact-us">CONTACT US</Link>
                </li>
              </div>
            </div>
            <div className="nav-tabs">
              <li>
                <Link to="/donate" id="nav-donate">
                  Donate
                </Link>
              </li>
            </div>
            <div className="nav-tab-social">
              <div className="social-media-icons">
                <a className="social-icons icon-twitter" href="https://twitter.com/trulyhelp" target="_blank"></a>
                <a className="social-icons icon-facebook" href="https://www.facebook.com/trulyhelpfoundation" target="_blank"></a>
                <a className="social-icons icon-linkedin" href="https://www.linkedin.com/company/truly-help-foundation5aba50213" target="_blank"></a>
                <a className="social-icons icon-instagram" href="https://www.instagram.com/trulyhelpfoundation" target="_blank"></a>
                <a className="social-icons icon-youtube" href="https://www.youtube.com/channel/UCRIQBzF05ms8IF13-2ER8VA/featured" target="_blank"></a>
              </div>
            </div>
          </div>
        </ul>
      </div>
      {/* <div className="home-img-banner"><Slider/></div> */}
      <marquee className="home-marquee margin-top-80" direction="left" scrollamount="5" behavior="scroll">
        <p>
          Truly Help Foundation is a registered NGO under Section 8 in India Members 
          of THF Confederation. It is present in PAN India which works with the most marginalised 
          people to alleviate poverty and reduce social injustice through comprehensive 
          programmes in health, education, sports, livelihoods and humanitarian assistance
          and rehabilitation. We are responding to the second wave of COVID-19 by setting 
          up temporary COVID Care Facilities and supporting marginalized communities by 
          providing dry ration and hygiene kits . | We are also awaring and preparing communities 
          for covid third wave.
        </p>
      </marquee>
    </div>
  );
};

export default NavbarBottom;
