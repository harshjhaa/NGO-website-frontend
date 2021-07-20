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
      <div
        className="donate-footer"
        data-aos="zoom-in-down"
        data-aos-duration="1500"
      >
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
      <div className="footer-container">
        <div className="footer-logo">
          <img className="foot-logo" src="/images/logo_footer1.svg" alt="Logo" />
        </div>
        <div className="footer-info">
          <div className="footer-info-contents">
            <ul className="footer-list">
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <div className="gap">|</div>
              <li>
                <Link to="/protection-policy">T.H.F. Protection Policy</Link>
              </li>
              <div className="gap">|</div>
              <li>
                <Link to="/resource">Resource</Link>
              </li>
              <div className="gap">|</div>
              <li>
                <Link to="/contact-us">Cotact Us</Link>
              </li>
            </ul>
            <div className="footer-email">
              <a href="mailto:info@trulyhelpfoundation.org">
                Mail Us: info@trulyhelpfoundation.org
              </a>
            </div>
            <div className="copyright">
              <p>© Truly Help Foundation India is a registered Non-profit under Section 8 of the Indian Companies Act, 2013</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
