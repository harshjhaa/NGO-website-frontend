import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";

import "../../CommonCSS.scss";
import "./Careers.scss";

function Careers() {
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
    <div className="careers-tab margin-top-4px">
      <div className="banner">
        <img
          className="banner-img"
          src="/images/careers-tab/careers-banner-3.jpg"
        />
        <h1 className="banner-text">CAREERS</h1>
      </div>
      <div className="bread-crum">
        <Link className="active-link" to="/">
          Home
        </Link>
        <span className="right-arrow">&#62;</span>
        <p>Get Involved</p>
        <span className="right-arrow">&#62;</span>
        <p>Careers</p>
      </div>
      <hr style={{ margin: "0px 10px" }} />
      <div className="only-text-container" style={{ marginTop: "30px" }}>
        <h1 className="title">CAREER</h1>
        <div className="contents" data-aos="fade-up" data-aos-duration="1000">
          <div className="text-container">
            <p className="text top-para">
              At THF, our initiative{" "}
              <span style={{ fontWeight: "bold" }}>“WE CARE, WE HELP”</span> is
              our ethos. We work towards bringing positive and long-lasting
              change in the lives of children and their families.
            </p>
          </div>
        </div>
      </div>
      <div className="hr-line">
        <hr />
      </div>
      <section className="only-text-container text-form-container">
        <div className="contents" data-aos="fade-up" data-aos-duration="1000">
          <div className="text-container">
            <p className="text career-form-header">
              We are looking to fill the below-mentioned positions at Truly Help
              Foundation.
            </p>
          </div>
          <form
            data-aos="fade-up"
            data-aos-duration="700"
            // onSubmit={(e) => handleSubmit(e)}
          >
            <h4
              style={{ textAlign: "center", paddingBottom: "10px" }}
              className="text text-danger"
            >
              Select Each Link to Know More About the Job Profile
            </h4>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">
                CATEGORY <span className="mandatory-red">*</span>
              </label>
              <div className="col-sm-9 drop-down">
                <select
                  //   onChange={(e) => handleChangeEvent(e)}
                  name="query_type"
                  className="form-control"
                  //   value={formData.query_type}
                  required
                >
                  {[
                    "Select Here",
                    "Accounts",
                    "Human Resources",
                    "IT",
                    "Resource Mobilisation",
                    "Social Media",
                  ].map((n) =>
                    n === "Select Here" ? (
                      <option value="" key={n}>
                        {n}
                      </option>
                    ) : (
                      <option value={n} key={n}>
                        {n}
                      </option>
                    )
                  )}
                </select>
                <i id="our-work-arrow-id" className="fa fa-caret-down"></i>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">
                LOCATION <span className="mandatory-red">*</span>
                <br />
              </label>
              <div className="col-sm-9 drop-down">
                <select
                  //   onChange={(e) => handleChangeEvent(e)}
                  name="preffered_time"
                  className="form-control"
                  //   value={formData.preffered_time}
                  required
                >
                  {["Select Here", "Delhi"].map((n) =>
                    n === "Select Here" ? (
                      <option value="" key={n}>
                        {n}
                      </option>
                    ) : (
                      <option value={n} key={n}>
                        {n}
                      </option>
                    )
                  )}
                </select>
                <i id="our-work-arrow-id" className="fa fa-caret-down"></i>
              </div>
            </div>
            <div style={{ marginTop: "10px" }} className="form-group row">
              <div className="col-sm-3">
                <button type="submit" className="btn btn-danger">
                  SUBMIT
                </button>
              </div>
              {/* {Object.keys(contactUsAddDataResponse).length === 0 &&
              contactUsAddDataResponse.constructor === Object ? (
                ""
              ) : (
                <div
                  className="col-sm-9"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <p
                    style={{ marginBottom: "30px", padding: "5px" }}
                    className={`${
                      contactUsAddDataResponse.success === 0
                        ? "btn-danger"
                        : "btn-success"
                    }`}
                  >
                    {contactUsAddDataResponse.message}
                  </p>
                </div>
              )} */}
            </div>
          </form>
          <p className="text text-bold">
            Additionally, write to us{" "}
            <a
              style={{ color: "red" }}
              href="mailto:careers@trulyhelpfoundation.org"
            >
              careers@trulyhelpfoundation.org
            </a>{" "}
            for any queries you may have about career opportunities with Truly
            Help Foundation.
          </p>
        </div>
      </section>
      <div className="hr-line">
        <hr />
      </div>
      <br />
    </div>
  );
}

export default Careers;
