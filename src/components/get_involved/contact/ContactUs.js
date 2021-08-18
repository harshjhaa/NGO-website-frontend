import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";
import "../../CommonCSS.scss";
import "./ContactUs.scss";

const ContactUs = () => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    AOS.init();
    document.getElementById("get-involved-tab-id").style.color = "#0096ff";
    document.getElementById("get-involved-arrow-id").style.color = "#0096ff";
    return () => {
      document.getElementById("get-involved-tab-id").style.color = "#000";
      document.getElementById("get-involved-arrow-id").style.color = "#000";
    };
  }, []);

  const serveAsField = useRef(null);
  const areasOfIntrestField = useRef(null);
  const skillSetField = useRef(null);
  const availabilityField = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      serveAsField.current.value === "Select Here" ||
      areasOfIntrestField.current.value === "Select Here" ||
      skillSetField.current.value === "Select Here" ||
      availabilityField.current.value === "Select Here"
    ) {
    } else {
    }
  };

  return (
    <div className="thf-fellowship-tab margin-top-4px">
      <div className="banner">
        <img
          className="banner-img"
          src="/images/contact-us-tab/contact-banner.jpg"
        />
        <h1 className="banner-text">CONTACT US</h1>
      </div>
      <div className="bread-crum">
        <Link className="active-link" to="/">
          Home
        </Link>
        <span className="right-arrow">&#62;</span>
        <p>Get Involved</p>
        <span className="right-arrow">&#62;</span>
        <p>Contact Us</p>
      </div>
      <hr style={{ margin: "0px 10px" }} />
      <p style={{ marginTop: "10px" }} className="title">
        HAVE ANY QUERY: Fill the form
      </p>
      <form
        data-aos="fade-up"
        data-aos-duration="700"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div class="form-group row">
          <label for="inp-name" class="col-sm-3 col-form-label">
            NAME <span className="mandatory-red">*</span>
          </label>
          <div class="col-sm-9">
            <input
              type="text"
              class="form-control"
              id="inp-name"
              placeholder="Enter Full Name"
              required
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="inp-email" class="col-sm-3 col-form-label">
            EMAIL <span className="mandatory-red">*</span>
          </label>
          <div class="col-sm-9">
            <input
              type="email"
              class="form-control"
              id="inp-email"
              placeholder="Enter Email"
              required
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="inp-contact-number" class="col-sm-3 col-form-label">
            MOBILE <span className="mandatory-red">*</span>
          </label>
          <div class="col-sm-9">
            <input
              type="number"
              class="form-control"
              id="inp-contact-number"
              placeholder="Enter Mobile Number"
              required
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-3 col-form-label">
            QUERY TYPE <span className="mandatory-red">*</span>
          </label>
          <div class="col-sm-9">
            <input
              type="text"
              class="form-control"
              id="inp-query-type"
              placeholder="Enter Query Type"
              required
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="inp-preffered-time" class="col-sm-3 col-form-label">
            PREFERRED TIME <span className="mandatory-red">*</span>
            <br />
            <span className="font-12">To receive call</span>
          </label>
          <div class="col-sm-9">
            <input
              type="text"
              class="form-control"
              id="inp-preffered-time"
              placeholder="Enter Time: 12am to 2pm"
              required
            />
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-12">
            <button type="submit" class="btn btn-danger">
              SUBMIT
            </button>
          </div>
        </div>
      </form>
      <div className="hr-line">
        <hr />
      </div>
      <section className="contact-address-container">
        <p className="title">
          For More Information on Truly Help Foundation, India, Contact -
        </p>
        <div className="address-container text text-bold width-60-prcnt">
          Truly Help Foundation Head Office,
          <br />
          A-229/1, GROUND FLOOR, SHANTI COLONY MANDI PAHARI
          <br />
          DELHI South West Delhi DL 110047 INDIA
          <br />{" "}
          <a
            style={{ color: "red" }}
            href="mailto:donorsupport@trulyhelpfoundation.org"
          >
            donorsupport@trulyhelpfoundation.org
          </a>{" "}
          <br />
          <a style={{ color: "red" }} href="tel:+918800202926">
            +91 8800202926
          </a>{" "}
          or{" "}
          <a style={{ color: "red" }} href="tel:+918800202933">
            +91 8800202933
          </a>
        </div>
      </section>
      <div className="hr-line">
        <hr />
      </div>
      <p className="text text-bold width-60-prcnt">
        <Link style={{ color: "red" }} to="thf-fellowship">
          Click here
        </Link>{" "}
        to view job opportunities with Truly Help Foundation. You may also write
        into{" "}
        <a
          style={{ color: "red" }}
          href="mailto:careers@trulyhelpfoundation.org"
        >
          careers@trulyhelpfoundation.org
        </a>{" "}
        for any queries you may have building a career with us.
      </p>
      <div className="hr-line">
        <hr />
      </div>
    </div>
  );
};

export default ContactUs;
