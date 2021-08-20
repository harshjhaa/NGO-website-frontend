import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import AOS from "aos";
import { Link } from "react-router-dom";
import "../CommonCSS.scss";
import "./ThfFellowship.scss";
import { joinFormDataAdd } from "./ThfFellowship.Action";

const ThfFellowship = ({ joinFormDataAdd, addDataResponse }) => {
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
    return () => {
      document.getElementById("thf-fellowship-tab-id").style.color = "#000";
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formData: ", formData);
    joinFormDataAdd(formData);
    console.log("addDataResponse: ", addDataResponse);
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
      <section className="two-col-text-container">
        <h1 className="title">BECOME A PART OF THF</h1>
        <div className="contents" data-aos="fade-up" data-aos-duration="700">
          <div className="only-text-container col-1-container">
            <h1 className="title">Volunteer</h1>
            <p className="text">
              Truly Help Foundation believes that until and unless all people
              come together and get involved actively in the process of
              remodeling and evolution, nothing can happen. To make this
              transformational change happen, we would like to request you to
              come and join us – to work for the well-being of underprivileged
              children and the community. We truly believe that volunteers are
              the face of every organization – not only there learning
              experience and skills help the organization in implementing them
              on the ground, they also spread the message far and beyond, enable
              you to make a difference in the society. Volunteers are the true
              heroes of the organization.
            </p>
          </div>
          <div className="only-text-container col-2-container">
            <h1 className="title">Internship</h1>
            <p className="text">
              Truly Help Foundation Intership Programme is a Skill development
              model for young passionate who have a keen interest in working in
              the development area, and are dedicated to build a world in which
              marginalized communities and underprivileged children are able to
              live a life of diginity and security.
              <br />
              Through the internship Programme, the interns are able to develop
              their leadership abilities, professional skills and social
              conscientiousness.
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
        Be yourself a life changer in someone’s life!
      </p>
      <form
        data-aos="fade-up"
        data-aos-duration="700"
        onSubmit={(e) => handleSubmit(e)}
      >
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
              <label className="form-check-label">VOLUNTEER</label>
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
                <label className="form-check-label">INTERNSHIP</label>
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
              name="mobile_no"
              className="form-control"
              placeholder="Enter Mobile Number"
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
        <div className="form-group row">
          <div className="col-sm-12">
            <button type="submit" className="btn btn-danger">
              SUBMIT
            </button>
          </div>
        </div>
      </form>
      <p className="text text-bold">
        For any query regarding volunteering opportunities, reach out to us{" "}
        <a
          style={{ color: "red" }}
          href="mailto:volunteers@trulyhelpfoundation.org"
        >
          volunteers@trulyhelpfoundation.org
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
});

// export default ThfFellowship;
export default connect(mapStateToProps, mapDispatchToProps)(ThfFellowship);
