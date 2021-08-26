import React, { useEffect } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";

import "../CommonCSS.scss";
import "./Footer.scss";

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="footer-container">
        <div className="footer-logo">
          <img
            className="foot-logo"
            src="/images/logo_footer1.svg"
            alt="Logo"
          />
          <div className="contents">
            <p className="title">TRULY HELP FOUNDATION</p>
            <p className="company-line">
              Truly Help Foundation India is a registered Non-profit under
              Section 8 of the Indian Companies Act, 2013.
            </p>
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
                  <img className="twitter-icon-footer" src="/svg/twitter-sq-2.svg" />
                  <a
                    className="icons icon-facebook"
                    href="https://www.facebook.com/trulyhelpfoundation"
                    target="_blank"
                    rel="noreferrer"
                  ></a>
                  <a
                    className="icons icon-linkedin"
                    href="https://www.linkedin.com/company/truly-help-foundation5aba50213"
                    target="_blank"
                    rel="noreferrer"
                  ></a>
                  <a
                    className="icons icon-instagram"
                    href="https://www.instagram.com/trulyhelpfoundation"
                    target="_blank"
                    rel="noreferrer"
                  ></a>
                  <a
                    className="icons icon-youtube"
                    href="https://www.youtube.com/channel/UCRIQBzF05ms8IF13-2ER8VA/featured"
                    target="_blank"
                    rel="noreferrer"
                  ></a>
                </div>
              </div>
              <div className="support-us display-col">
                <p className="title">SUPPORT US</p>
                <Link className="bttn" to="/donate">
                  DONATE
                </Link>
              </div>
            </div>
            <div className="sec-2 display-col">
              <div className="work-with-us-container display-col">
                <p className="title">WORK WITH US</p>
                <div className="text-links  display-col">
                  <Link className="text-link" to="/careers">
                    Careers
                  </Link>
                  <Link className="text-link" to="/thf-fellowship">
                    Join Us
                  </Link>
                </div>
              </div>
              <div className="happenings-container display-col">
                <p className="title">HAPPENINGS</p>
                <div className="text-links  display-col">
                  {/* <Link className="text-link" to="/events">
                    Events
                  </Link> */}
                  <Link className="text-link" to="/our-campaigns">
                    Our Campaigns
                  </Link>
                  <Link className="text-link" to="/emergency-case">
                    Emergency Case
                  </Link>
                </div>
              </div>
            </div>
            <div className="sec-3">
              <p className="title">USEFUL LINKS</p>
              <div className="text-links">
                <Link className="text-link" to="/our-team">
                  Our Team
                </Link>
                <Link className="text-link" to="/documents">
                  Documents
                </Link>
                <Link className="text-link" to="/financails">
                  Financails
                </Link>
                <Link className="text-link" to="/emergency-info">
                  Emergency Info
                </Link>
                <Link className="text-link" to="/child-protection-policy">
                  Child Protection Policy
                </Link>
                <a
                  className="text-link footer-email"
                  href="mailto:info@trulyhelpfoundation.org"
                >
                  <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
                  info@trulyhelpfoundation.org
                </a>
                <div>
                  <a className="text-link footer-call" href="tel:+918800106833">
                    <i className="fa fa-phone" aria-hidden="true"></i> +91
                    8800202926
                  </a>
                  <span style={{ color: "#fff" }}> or </span>
                  <a className="text-link footer-call" href="tel:+918800106833">
                    +91 8800202933
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <ul className="footer-bottom-list">
          <li>
            <Link to="/copyright">
              © Copyright 2021 Truly Help Foundation All Rights Reserved Terms &
              Conditions
            </Link>
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
