import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";

import "../../CommonCSS.scss";
import "./SupportUs.scss";

function SupportUs() {
  useEffect(() => {
    AOS.init();
    window.scrollTo({
      top: 0,
      left: 0,
    });
    document.getElementById("get-involved-tab-id").style.color = "#0096ff";
    document.getElementById("get-involved-arrow-id").style.color = "#0096ff";
    return () => {
      document.getElementById("get-involved-tab-id").style.color = "#000";
      document.getElementById("get-involved-arrow-id").style.color = "#000";
    };
  }, []);

  return (
    <div className="support-us-tab margin-top-4px">
      <div className="banner">
        <img
          className="banner-img"
          src="/images/support-us-tab/support-us-banner-3.jpg"
        />
        <h1 className="banner-text">SUPPORT US</h1>
      </div>
      <div className="bread-crum">
        <Link className="active-link" to="/">
          Home
        </Link>
        <span className="right-arrow">&#62;</span>
        <p>Get Involved</p>
        <span className="right-arrow">&#62;</span>
        <p>Support Us</p>
      </div>
      <hr style={{ margin: "0px 10px" }} />

      <section
        className="support-us-top-container"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1 className="title">We Need Your Help</h1>
        <div className="container">
          <div className="button-container">
            <div className="fellowshilp-content">
              <Link className="link-btn" to="/thf-fellowship">
                <button className="fellowship-btn">FELLOWSHIP</button>
              </Link>
              <p>Join our team and support us.</p>
            </div>
            <div className="donate-content">
              <Link className="link-btn" to="/donate">
                <button className="donate-btn">DONATE</button>
              </Link>
              <p>Help us by donating for a good cause.</p>
            </div>
          </div>
          <div className="scan-pay-container">
            <p>Scan and Pay</p>
            <img
              className="banner-img"
              src="/images/support-us-tab/qr-code-1.png"
            />
          </div>
        </div>
      </section>
      <div className="hr-line">
        <hr />
      </div>
      <section
        className="only-text-container"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1 className="title">LEGAL AND FINANCIAL INFORMATION</h1>
        <div className="contents">
          <div className="text-list-container">
            <ul className="text-container">
              <li className="text">
                Truly Help Foundation India is a registered Non-profit under
                Section 8 of the Indian Companies Act, 2013.
              </li>
              <li className="text">Pan No. - AAATK6911A</li>
              <li className="text">
                Truly Help Foundation is registered U/s 12A of Income Tax Act,
                1961.
              </li>
              <li className="text">
                Support Truly Help Foundation to stand up for persons with
                intellectual and developmental challenges.
              </li>
              <li className="text">
                FCRA has been applied for. For the time being, we can accept
                donations only in Indian Rupees (INR).
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="hr-line">
        <hr />
      </div>
      <section
        className="bank-box-container"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1 className="title">Bank Account Details</h1>
        <div className="contents">
          <div className="box">
            <img className="twitter-icon-footer" src="/svg/axis-logo-1.svg" />
            <div className="text-info">
              TRULY HELP FOUNDATION
              <br />
              AXIS BANK
              <br />
              Branch Code -003156
              <br />
              Account Number - 921020028281887
              <br />
              IFSC Code -UTIB0003156
              <br />
              MICR Code -110211192
            </div>
          </div>
        </div>
        <p className="text text-bold">WE SALUATE YOUR DONATION</p>
      </section>
      <div className="hr-line">
        <hr />
      </div>
      <br />
    </div>
  );
}

export default SupportUs;
