import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import AOS from "aos";
import { Link } from "react-router-dom";
import "../../CommonCSS.scss";
import "./ContactUs.scss";
import { writeToUsFormDataAdd, setInitialState } from "./ContactUs.Action";

const ContactUs = ({
  writeToUsFormDataAdd,
  setInitialState,
  contactUsAddDataResponse,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile_no: "",
    query_type: "",
    query_message: "",
    preffered_time: "",
  });

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
      setFormData({
        name: "",
        email: "",
        mobile_no: "",
        query_type: "",
        query_message: "",
        preffered_time: "",
      });
    };
  }, []);

  useEffect(() => {
    if (contactUsAddDataResponse.success === 1) {
      //cleanup
      setFormData({
        name: "",
        email: "",
        mobile_no: "",
        query_type: "",
        query_message: "",
        preffered_time: "",
      });
      setTimeout(() => {
        setInitialState();
      }, 5000);
    } else if (contactUsAddDataResponse.success === 0) {
      setTimeout(() => {
        setInitialState();
      }, 5000);
    }
  }, [contactUsAddDataResponse]);

  // useEffect(() => {
  //   console.log("formData: ", formData);
  // }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    writeToUsFormDataAdd(formData);
  };

  const handleChangeEvent = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="contact-us-tab margin-top-4px">
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
        WRITE TO US
      </p>
      <form
        data-aos="fade-up"
        data-aos-duration="700"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="form-group row">
          <label className="col-sm-3 col-form-label">
            NAME <span className="mandatory-red">*</span>
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Full Name"
              value={formData.name}
              required
              onChange={(e) => handleChangeEvent(e)}
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-3 col-form-label">
            EMAIL <span className="mandatory-red">*</span>
          </label>
          <div className="col-sm-9">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter Email"
              value={formData.email}
              required
              onChange={(e) => handleChangeEvent(e)}
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-3 col-form-label">
            MOBILE <span className="mandatory-red">*</span>
          </label>
          <div className="col-sm-9">
            <input
              type="number"
              id="inp_mobile_no-wtsf"
              name="mobile_no"
              className="form-control"
              placeholder="Enter Mobile Number"
              value={formData.mobile_no}
              required
              onChange={(e) => handleChangeEvent(e)}
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-3 col-form-label">
            QUERY TYPE <span className="mandatory-red">*</span>
          </label>
          <div className="col-sm-9 drop-down">
            <select
              onChange={(e) => handleChangeEvent(e)}
              name="query_type"
              className="form-control"
              value={formData.query_type}
              required
            >
              {[
                "Select Here",
                "Donation Related",
                "Volunteering & Internships",
                "Media Queries",
                "Others",
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
            Query Message <span className="mandatory-red">*</span>
          </label>
          <textarea
            className="form-control col-sm-9"
            id="query-message-id"
            name="query_message"
            placeholder="Enter Query Message"
            value={formData.query_message}
            onChange={(e) => handleChangeEvent(e)}
            required
          ></textarea>
        </div>
        <div className="form-group row">
          <label className="col-sm-3 col-form-label">
            PREFERRED TIME <span className="mandatory-red">*</span>
            <br />
            <span className="font-12">To receive call</span>
          </label>
          <div className="col-sm-9 drop-down">
            <select
              onChange={(e) => handleChangeEvent(e)}
              name="preffered_time"
              className="form-control"
              value={formData.preffered_time}
              required
            >
              {[
                "Select Here",
                "10:00 am to 12:00 pm",
                "12:00 pm to 02:00 pm",
                "02:00 pm to 04:00 pm",
                "04:00 pm to 06:00 pm",
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
        <div style={{ marginTop: "10px" }} className="form-group row">
          <div className="col-sm-3">
            <button type="submit" className="btn btn-danger">
              SUBMIT
            </button>
          </div>
          {Object.keys(contactUsAddDataResponse).length === 0 &&
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
          )}
        </div>
      </form>
      <div className="contact-us-agreement">
        <p className="agreement-text">
          By sharing your details, you agree to receive stories and updates from
          Truly Help foundation via mobile, Whatsap, email and post. If you’d
          like to change this, please send us an email{" "}
          <a
            style={{ color: "red" }}
            href="mailto:writetous@trulyhelpfoundation.org"
          >
            writetous@trulyhelpfoundation.org
          </a>
        </p>
      </div>
      <div className="hr-line">
        <hr />
      </div>
      <section className="contact-address-container">
        <p className="title">
          For More Information on Truly Help Foundation, India, Contact -
        </p>
        <div className="address-container text text-bold">
          TRULY HELP FOUNDATION HEAD OFFICE,
          <br />
          A-229/1, GROUND FLOOR, SHANTI COLONY,
          <br />
          MANDI PAHARI DELHI, SOUTH WEST DELHI, DL-110047, INDIA
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
        to view job opportunities with Truly Help Foundation.
        <br />
        You may also write into{" "}
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

const mapStateToProps = (state) => ({
  contactUsAddDataResponse: state.contactUsReducer.contactUsAddDataResponse,
});

const mapDispatchToProps = (dispatch) => ({
  writeToUsFormDataAdd: (value) => dispatch(writeToUsFormDataAdd(value)),
  setInitialState: () => dispatch(setInitialState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);
