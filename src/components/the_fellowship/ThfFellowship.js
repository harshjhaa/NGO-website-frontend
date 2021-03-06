import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import AOS from "aos";
import { Link } from "react-router-dom";
import "../CommonCSS.scss";
import "./ThfFellowship.scss";
import { joinFormDataAdd, setInitialState } from "./ThfFellowship.Action";

const ThfFellowship = ({
  joinFormDataAdd,
  setInitialState,
  addDataResponse,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile_no: "",
    city: "",
    state: "",
    area_of_intrest: "",
    skill: "",
    availability: "",
    serve_as: "",
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    AOS.init();
    document.getElementById("thf-fellowship-tab-id").style.color = "#0096ff";
    document
      .getElementById("inp_mobile_no")
      .addEventListener("mousewheel", function (event) {
        this.blur();
      });
    return () => {
      document.getElementById("thf-fellowship-tab-id").style.color = "#000";
      setFormData({
        name: "",
        email: "",
        mobile_no: "",
        city: "",
        state: "",
        area_of_intrest: "",
        skill: "",
        availability: "",
        serve_as: "",
      });
    };
  }, []);

  // useEffect(() => {
  //   console.log("formData: ", formData);
  // }, [formData]);

  useEffect(() => {
    if (addDataResponse.success === 1) {
      //cleanup
      setFormData({
        name: "",
        email: "",
        mobile_no: "",
        city: "",
        state: "",
        area_of_intrest: "",
        skill: "",
        availability: "",
        serve_as: "",
      });
      document.getElementById("volunteer-radio").checked = false;
      document.getElementById("internship-radio").checked = false;
      setTimeout(() => {
        setInitialState();
      }, 5000);
    } else if (addDataResponse.success === 0) {
      setTimeout(() => {
        setInitialState();
      }, 5000);
    }
  }, [addDataResponse]);

  const handleSubmit = (e) => {
    e.preventDefault();
    joinFormDataAdd(formData);
  };

  const handleChangeEvent = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="thf-fellowship-tab margin-top-4px">
      <div className="banner">
        <img
          className="banner-img"
          src="/images/thf-fellowship-tab/fellowship-banner-1.png"
        />
        <h1 className="banner-text">JOIN US</h1>
      </div>
      <div className="bread-crum">
        <Link className="active-link" to="/">
          Home
        </Link>
        <span className="right-arrow">&#62;</span>
        <p>THF Fellowship</p>
      </div>
      <hr style={{ margin: "0px 10px" }} />
      <section>
        <h1 className="title margin-bottom-20">BECOME A PART OF THF</h1>
        <div className="contents" data-aos="fade-up" data-aos-duration="900">
          <div className="only-text-container margin-bottom-30">
            <h1 className="title">Volunteer</h1>
            <p className="text text-justify">
              Truly Help Foundation believes that until and unless all people
              come together and get involved actively in the process of
              remodeling and evolution, nothing can happen. To make this
              transformational change happen, we would like to request you to
              come and join us ??? to work for the well-being of underprivileged
              children and the community. We truly believe that volunteers are
              the face of every organization ??? not only there learning
              experience and skills help the organization in implementing them
              on the ground, they also spread the message far and beyond, enable
              you to make a difference in the society . Volunteers are the true
              heroes of the organization
            </p>
          </div>
          <div
            className="only-text-container"
            data-aos="fade-up"
            data-aos-duration="900"
          >
            <h1 className="title">Internship</h1>
            <p className="text text-justify">
              Truly Help Foundation Intership Programme is a Skill development
              model for young passionate who have a keen interest in working in
              the development area, and are dedicated to build a world in which
              marginalized communities and underprivileged children are able to
              live a life of diginity and security. Through the internship
              Programme, the interns are able to develop their leadership
              abilities, professional skills and social conscientiousness.
            </p>
          </div>
        </div>
      </section>
      <div className="hr-line">
        <hr />
      </div>
      <p style={{ margin: "10px 0px" }} className="text text-bold">
        Fill up the Truly Help Foundation registration form below to get
        started!
      </p>
      <br />
      <p className="text p-tag">
        Undertaking various initiatives in the field of education, health &
        nutrition, and Sports, we are constantly on the lookout for passionate,
        energetic individuals driven to make a difference in the society.
      </p>
      <br />
      <p style={{ margin: "10px 0px" }} className="text text-bold">
        Be yourself a life changemaker in someone???s life!!
      </p>
      <form
        data-aos="fade-up"
        data-aos-duration="700"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h4
          style={{ textAlign: "center", paddingBottom: "10px" }}
          className="text text-danger"
        >
          Registration Form
        </h4>
        <div className="form-group row">
          <label className="col-form-label col-sm-3 pt-0">
            SERVE AS <span className="mandatory-red">*</span>
          </label>
          <div className="col-sm-4">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="serve_as"
                id="volunteer-radio"
                value="Volunteer"
                onChange={(e) => handleChangeEvent(e)}
              />
              <label for="volunteer-radio" className="form-check-label">
                VOLUNTEER
              </label>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="form-check">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="serve_as"
                  id="internship-radio"
                  value="Internship"
                  onChange={(e) => handleChangeEvent(e)}
                />
                <label for="internship-radio" className="form-check-label">
                  INTERNSHIP
                </label>
              </div>
            </div>
          </div>
        </div>
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
              id="inp_mobile_no"
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
            CITY <span className="mandatory-red">*</span>
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              name="city"
              className="form-control"
              placeholder="Enter City"
              value={formData.city}
              required
              onChange={(e) => handleChangeEvent(e)}
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-3 col-form-label">
            STATE <span className="mandatory-red">*</span>
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              name="state"
              className="form-control"
              placeholder="Enter State"
              value={formData.state}
              required
              onChange={(e) => handleChangeEvent(e)}
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-3 col-form-label">
            AREAS OF INTREST <span className="mandatory-red">*</span>
          </label>
          <div className="col-sm-9 drop-down">
            <select
              onChange={(e) => handleChangeEvent(e)}
              name="area_of_intrest"
              className="form-control"
              value={formData.area_of_intrest}
              required
            >
              {[
                "Select Here",
                "Education",
                "Humanitarian Response",
                "Health and Nutrition",
                "Sports",
                "Livelihood Support",
                "Covid-19 Relief",
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
            SKILL SET <span className="mandatory-red">*</span>
          </label>
          <div className="col-sm-9 drop-down">
            <select
              onChange={(e) => handleChangeEvent(e)}
              name="skill"
              className="form-control"
              value={formData.skill}
              required
            >
              {[
                "Select Here",
                "Doctor",
                "Teacher",
                "Child Care Expert",
                "Healthcare Professional",
                "Bloger",
                "Fundraiser",
                "Activist",
                "Campaigner",
                "Ohters",
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
            AVAILABILITY <span className="mandatory-red">*</span>
          </label>
          <div className="col-sm-9 drop-down">
            <select
              onChange={(e) => handleChangeEvent(e)}
              name="availability"
              className="form-control"
              value={formData.availability}
              required
            >
              {["Select Here", "Part Time", "Full Time"].map((n) =>
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
          {Object.keys(addDataResponse).length === 0 &&
          addDataResponse.constructor === Object ? (
            ""
          ) : (
            <div
              className="col-sm-9"
              style={{ display: "flex", alignItems: "center" }}
            >
              <p
                style={{ marginBottom: "30px", padding: "5px" }}
                className={`${
                  addDataResponse.success === 0 ? "btn-danger" : "btn-success"
                }`}
              >
                {addDataResponse.message}
              </p>
            </div>
          )}
        </div>
      </form>
      <p className="text text-bold">
        For any query regarding Volunteering & Internships opportunities, reach
        out to{" "}
        <a
          style={{ color: "red" }}
          href="mailto:fellowship@trulyhelpfoundation.org"
        >
          fellowship@trulyhelpfoundation.org
        </a>
      </p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  addDataResponse: state.thfFellowshipReducer.addDataResponse,
});

const mapDispatchToProps = (dispatch) => ({
  joinFormDataAdd: (value) => dispatch(joinFormDataAdd(value)),
  setInitialState: () => dispatch(setInitialState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ThfFellowship);
