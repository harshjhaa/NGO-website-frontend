import React, { useEffect } from "react";
import AOS from 'aos';
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {

  useEffect(()=>{
      AOS.init();
    },[])   

  return (
    <div>
      <div className="donate-footer" data-aos="zoom-in-down" data-aos-duration="1500">
          <div className="contents">
          <h2>HELP US FIGNT THE HUNGER IN RURAL AREAS</h2>
          <br/><br/>
          <div className="inp-btn">
            <input className="input-donate" type="number" placeholder="DONATE ANY AMOUNT (INR)"></input>
            <button className="donate-inp-btn">PROCEED</button> 
          </div>
          <br/><br/>
          <h3>Some rural residents and households are food insecure,<br/>
            meaning they cannot rely on access to sufficient<br/>
            affordable and nutritious food at all times,<br/> 
            increasing the risk of poor 
            health outcomes.
            </h3>
          </div>
      </div>
      <div className="footer-container">
        <div className="footer-contents">
          <ul className="footer-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <div className="gap">|</div>
            <li>
              <Link to="/active-cases-emergency">Active Cases</Link>
            </li>
            <div className="gap">|</div>
            <li>
              <Link to="/volunteer">Volunteer</Link>
            </li>
            <div className="gap">|</div>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <div className="gap">|</div>
            <li>
              <Link to="/contact-us">Cotact Us</Link>
            </li>
            <div className="gap">|</div>
            <li>
              <Link to="/our-partners">Our Partners</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <div className="gap">|</div>
            <li>
              <Link to="/terms-and-contditions">Terms and Conditions</Link>
            </li>
            <div className="gap">|</div>
            <li>
              <Link to="/faq">FAQs</Link>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2021 Truly Help Foundation India. All Rights Reserved | Website Designing By Vision</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
