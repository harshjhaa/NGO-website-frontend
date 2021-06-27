import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const NavbarBottom = () => {
  return (
    <div className="nav-bottom-container">
      <div className="nav-bottom">
        <Link to="/">
          <img className="nav-logo" alt="logo" src="images/logo.png" /> 
        </Link>      
        <ul className="nav-bottom-list">
          <div className="nav-bottom-list-content">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/active-cases-emergency">Active Cases</Link>
            </li>
            <li>
              <Link to="/volunteer">Volunteer</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/contact-us">Cotact Us</Link>
            </li>
            <li>
              <Link to="/our-partners">Our Partners</Link>
            </li>
            <li>
              <Link to="/donate" id="nav-donate">
                Donate
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavbarBottom;
