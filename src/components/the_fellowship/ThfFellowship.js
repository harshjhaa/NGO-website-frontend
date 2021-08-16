import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";
import "../CommonCSS.scss";
import "./ThfFellowship.scss";

const ThfFellowship = () => {
  const [formData, setFormData] = useState({});

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

  const serveAsField = useRef(null);
  const areasOfIntrestField = useRef(null);
  const skillSetField = useRef(null);
  const availabilityField = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Submit Clicked");
    // console.log("serveAsField.current.value", serveAsField.current.value);
    // console.log("areasOfIntrestField.current.value", areasOfIntrestField.current.value);
    // console.log("skillSetField.current.value", skillSetField.current.value);
    // console.log("availabilityField.current.value", availabilityField.current.value);
    if (
      serveAsField.current.value === "Select Here" ||
      areasOfIntrestField.current.value === "Select Here" ||
      skillSetField.current.value === "Select Here" ||
      availabilityField.current.value === "Select Here"
    ) {
      // alert("Please fill all the fields!");
    } else {
      // if (departCityField.current.value === arrivalCityField.current.value) {
      //     alert("Departure City and Arrival City can't be same!")
      // } else {
      //     let journeyD = {
      //         departLoc: departCityField.current.value,
      //         arriveLoc: arrivalCityField.current.value,
      //         journeyDate: journeyDateField.current.value
      //     }
      //     setJourneyData(journeyD)
      //     console.log(journeyData)
      //     tooglePlanJourney(true)
      // }
    }
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
        <div class="form-group row">
          <label class="col-form-label col-sm-3 pt-0">
            SERVE AS <span className="mandatory-red">*</span>
          </label>
          <div class="col-sm-4">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="gridRadios"
                id="volunteer-radio"
                value="option1"
                checked
              />
              <label class="form-check-label" for="volunteer-radio">
                VOLUNTEER
              </label>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="form-check">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="internship-radio"
                  value="option2"
                />
                <label class="form-check-label" for="internship-radio">
                  INTERNSHIP
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-3 col-form-label">
            NAME <span className="mandatory-red">*</span>
          </label>
          <div class="col-sm-9">
            <input
              type="text"
              class="form-control"
              id="inputEmail3"
              placeholder="Enter Full Name"
              required
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-3 col-form-label">
            EMAIL <span className="mandatory-red">*</span>
          </label>
          <div class="col-sm-9">
            <input
              type="email"
              class="form-control"
              id="inputEmail3"
              placeholder="Enter Email"
              required
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-3 col-form-label">
            MOBILE <span className="mandatory-red">*</span>
          </label>
          <div class="col-sm-9">
            <input
              type="number"
              class="form-control"
              id="inputEmail3"
              placeholder="Enter Mobile Number"
              required
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-3 col-form-label">
            CITY <span className="mandatory-red">*</span>
          </label>
          <div class="col-sm-9">
            <input
              type="text"
              class="form-control"
              id="inputEmail3"
              placeholder="Enter City"
              required
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-3 col-form-label">
            STATE <span className="mandatory-red">*</span>
          </label>
          <div class="col-sm-9">
            <input
              type="text"
              class="form-control"
              id="inputEmail3"
              placeholder="Enter State"
              required
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-3 col-form-label">
            AREAS OF INTREST <span className="mandatory-red">*</span>
          </label>
          <div class="col-sm-9 drop-down">
            <select ref={areasOfIntrestField} className="form-control" required>
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
        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-3 col-form-label">
            SKILL SET <span className="mandatory-red">*</span>
          </label>
          <div class="col-sm-9 drop-down">
            <select ref={skillSetField} className="form-control" required>
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
        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-3 col-form-label">
            AVAILABILITY <span className="mandatory-red">*</span>
          </label>
          <div class="col-sm-9 drop-down">
            <select ref={availabilityField} className="form-control" required>
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
        <div class="form-group row">
          <div class="col-sm-12">
            <button type="submit" class="btn btn-danger">
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

export default ThfFellowship;
