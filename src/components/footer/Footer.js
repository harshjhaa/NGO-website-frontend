import React, { useEffect } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="donate-footer">
        <div className="contents">
          <h2>HELP US FIGNT THE HUNGER IN RURAL AREAS</h2>
          <br />
          <br />
          <div className="inp-btn">
            <input
              className="input-donate"
              type="number"
              placeholder="DONATE ANY AMOUNT (INR)"
            ></input>
            <button className="donate-inp-btn">PROCEED</button>
          </div>
          <br />
          <br />
          <h3>
            Some rural residents and households are food insecure,
            <br />
            meaning they cannot rely on access to sufficient
            <br />
            affordable and nutritious food at all times,
            <br />
            increasing the risk of poor health outcomes.
          </h3>
        </div>
      </div>
      <div className="acknowledgement-container">
        <div className="content display-row">
          <div className="sec-1">
            <img className="img-icon" src="/svg/heart.svg"/>
            <p>All our efforts are made possible because of your support.</p>
          </div>
          <div className="sec-2">
            <img className="img-icon" src="/svg/tax.svg"/>
            {/* <p>Your donation are Tax Exempted uder 80G of the Indian Income Tax Act.</p> */}
            <p>Your donations are under right hand.</p>
          </div>
          <div className="sec-3">
            <img className="img-icon" src="/svg/security-2.svg"/>
            <p>Your donations and transactions are completely safe and secure.</p>
          </div>
        </div>
      </div>
      <div className="footer-container">
        <div className="footer-logo">
          <img className="foot-logo" src="/images/logo_footer1.svg" alt="Logo" />
          <div className="contents">
            <p className="title">TRULY HELP FOUNDATION</p>
            <p className="company-line">Truly Help Foundation India is a registered Non-profit under Section 8 of the Indian Companies Act, 2013.</p>
            <div className="footer-links-1">
              <ul className="footer-list">
                <li>
                  <Link to="/blog">Blogs</Link>
                </li>
                <div className="gap">|</div>
                <li>
                  <Link to="/media">Media</Link>
                </li>
                <div className="gap">|</div>
                <li>
                  <Link to="/partnerships">Partnerships</Link>
                </li>
                <div className="gap">|</div>
                <li>
                  <Link to="/resource">Resource</Link>
                </li>
                <div className="gap">|</div>
                <li>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-info">
          <div className="footer-info-contents">
            <div className="sec-1 display-col">
              <div className="social-container display-col">
                <p className="title">FOLLOW US</p>
                <div className="social-icons display-row">
                  <a className="icons icon-twitter" href="https://twitter.com/trulyhelp" target="_blank"></a>
                  <a className="icons icon-facebook" href="https://www.facebook.com/trulyhelpfoundation" target="_blank"></a>
                  <a className="icons icon-linkedin" href="https://www.linkedin.com/company/truly-help-foundation5aba50213" target="_blank"></a>
                  <a className="icons icon-instagram" href="https://www.instagram.com/trulyhelpfoundation" target="_blank"></a>
                  <a className="icons icon-youtube" href="https://www.youtube.com/channel/UCRIQBzF05ms8IF13-2ER8VA/featured" target="_blank"></a>
                </div>
              </div>
              <div className="support-us display-col">
                <p className="title">SUPPORT US</p>
                <Link className="btn" to="/donate">DONATE</Link>
              </div>
            </div>
            <div className="sec-2 display-col">
              <div className="work-with-us-container display-col">
                <p className="title">WORK WITH US</p>
                <div className="text-links  display-col">
                  <Link className="text-link" to="/careers">Careers</Link>
                  <Link className="text-link" to="/volunteer">Volunteer</Link>
                </div>
              </div>
              <div className="happenings-container display-col">
                <p className="title">HAPPENINGS</p>
                <div className="text-links  display-col">
                  <Link className="text-link" to="/events">Events</Link>
                  <Link className="text-link" to="/our-campaigns">Our Campaigns</Link>
                </div>
              </div>
            </div>
            <div className="sec-3">
              <p className="title">USEFUL LINKS</p>
              <div className="text-links">
                <Link className="text-link" to="/our-team">Our Team</Link>
                <Link className="text-link" to="/documents">Documents</Link>
                <Link className="text-link" to="/financails">Financails</Link>
                <Link className="text-link" to="/emergency-info">Emergency Info</Link>
                <Link className="text-link" to="/child-protection-policy">Child Protection Policy</Link>
                <a className="text-link footer-email" href="mailto:info@trulyhelpfoundation.org"><i class="fa fa-envelope" aria-hidden="true"></i> info@trulyhelpfoundation.org</a>
                <a className="text-link footer-call" href="tel:+918800106833"><i class="fa fa-phone" aria-hidden="true"></i> +91 8800106833</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <ul className="footer-bottom-list">
          <li>
            <Link to="/copyright">© Copyright 2021 Truly Help Foundation All Rights Reserved Terms & Conditions</Link>
          </li>
          <div className="gap">|</div>
          <li>
            <Link to="/disclaimer">Disclaimer</Link>
          </li>
          <div className="gap">|</div>
          <li>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </li>
          <div className="gap">|</div>
          <li>
            <Link to="/refund-policy">Refund Policy</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
