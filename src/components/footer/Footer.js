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
          <div className="contents">
            <p className="title">TRULY HELP FOUNDATION</p>
            <p className="company-line">Truly Help Foundation India is a registered Non-profit under Section 8 of the Indian Companies Act, 2013.</p>
            {/* <p style={{borderTop: "1px solid #fff", paddingTop: "4px"}}>Blog | T.H.F. Protection Policy | Resource | Cotact Us</p> */}
            <div className="footer-links-1">
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
                  <Link className="text-link" to="/donate">Careers</Link>
                  <Link className="text-link" to="/donate">Volunteer</Link>
                </div>
              </div>
              <div className="happenings-container display-col">
                <p className="title">HAPPENINGS</p>
                <div className="text-links  display-col">
                  <Link className="text-link" to="/donate">Events</Link>
                  <Link className="text-link" to="/donate">Our Campaigns</Link>
                </div>
              </div>
            </div>
            <div className="sec-3">
              <p className="title">USEFUL LINKS</p>
              <div className="text-links">
                <Link className="text-link" to="/donate">Our Team</Link>
                <Link className="text-link" to="/donate">Documents</Link>
                <Link className="text-link" to="/donate">Financials</Link>
                <Link className="text-link" to="/donate">Covid-19 Relief</Link>
                <Link className="text-link" to="/donate">Partnerships</Link>
                <a className="text-link footer-email" href="mailto:info@trulyhelpfoundation.org">Mail Us: info@trulyhelpfoundation.org</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
