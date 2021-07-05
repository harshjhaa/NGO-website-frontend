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
          <img className="nav-logo" src="/images/logo-3.jpg" alt="logo" />
        </Link>
        <ul className="nav-bottom-list">
          <div className="nav-bottom-list-content">
            <div className="nav-tabs">
              <li>
                <Link to="/">Our Work</Link>
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
                  <Link to="/public-health">PUBLIC HEALTH</Link>
                </li>
                <li>
                  <Link to="/nutraition">NUTRAITION</Link>
                </li>
                <li>
                  <Link to="/livelihoods">LIVELIHOODS</Link>
                </li>
                <li>
                  <Link to="/sports-and-activities">SPORTS AND ACTIVITIES</Link>
                </li>
                <li>
                  <Link to="/humanitarian">HUMANITARIAN</Link>
                </li>
                <li>
                  <Link to="/covid-relief">COVID-19 RELIEF</Link>
                </li>
              </div>
            </div>
            <div className="nav-tabs">
              <li>
                <Link to="/about-us">About Us</Link>
                <i className="fa fa-caret-down"></i>
              </li>
              <div className="nav-dropdown-menu">
                <li>
                  <Link to="/mission-and-vision">MISSION AND VISION</Link>
                </li>
                <li>
                  <Link to="/our-team">OUR TEAM</Link>
                </li>
                <li>
                  <Link to="/financial">FINANCIAL</Link>
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
              </div>
            </div>
            <div className="nav-tabs">
              <li>
                <Link to="/the-fellowship">The Fellowship</Link>
                <i className="fa fa-caret-down"></i>
              </li>
              <div className="nav-dropdown-menu">
                <li>
                  <Link to="/mission-and-vision">MISSION AND VISION</Link>
                </li>
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
                <Link to="/active-cases">Active Cases</Link>
                <i className="fa fa-caret-down"></i>
              </li>
              <div className="nav-dropdown-menu">
                <li>
                  <Link to="/emergency-causes">EMERGENCY CAUSES</Link>
                </li>
                <li>
                  <Link to="/success-stories">SUCCESS STORIES</Link>
                </li>
              </div>
            </div>
            <div className="nav-tabs">
              <li>
                <Link to="/get-involved">Get Involved</Link>
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
                  <Link to="/contact">CONTACT</Link>
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
          </div>
        </ul>
      </div>
      {/* <div className="home-img-banner"><Slider/></div> */}
    </div>
  );
};

export default NavbarBottom;
