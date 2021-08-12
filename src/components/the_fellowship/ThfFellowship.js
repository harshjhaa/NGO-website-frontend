import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../CommonCSS.scss";
import "./ThfFellowship.scss";

const ThfFellowship = () => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
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
    <div className="thf-fellowship-tab margin-top-80">
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
      <form onSubmit={(e) => handleSubmit(e)}>
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
            SERVE AS <span className="mandatory-red">*</span>
          </label>
          <div class="col-sm-9 drop-down">
            <select ref={serveAsField} className="form-control" required>
              {["Select Here", "Volunteer", "Internship"].map((n) =>
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
    </div>
  );
};

export default ThfFellowship;
