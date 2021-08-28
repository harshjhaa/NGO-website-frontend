import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";

import "../../CommonCSS.scss";
import "./OurProgrammes.scss";

function OurProgrammes() {
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
    <div className="our-program-tab margin-top-4px">
      <div className="banner">
        <img
          className="banner-img"
          src="/images/our-program-tab/our-program-banner-2.jpg"
        />
        <h1 className="banner-text">OUR PROGRAMMES</h1>
      </div>
      <div className="bread-crum">
        <Link className="active-link" to="/">
          Home
        </Link>
        <span className="right-arrow">&#62;</span>
        <p>Get Involved</p>
        <span className="right-arrow">&#62;</span>
        <p>Our Programmes</p>
      </div>
      <hr style={{ margin: "0px 10px" }} />
      <div className="only-text-container" style={{ marginTop: "30px" }}>
        <h1 className="title">OUR PROGRAM</h1>
        <div className="contents" data-aos="fade-up" data-aos-duration="1000">
          <div className="text-container">
            <p className="text top-para">
              By keeping this vision “Dreaming of a Brighter Future” Truly Help
              Foundation, an NGO which works for underprivileged and upliftment
              of marginalized community.
              <br />
              Our programs are designed to address the obstacles and needs of
              children and their communities, which are in observance with all
              norms of child safety. We connected with the local, state, and
              national government agencies to further our reach and our
              endeavor.
            </p>
          </div>
        </div>
      </div>
      <div className="feature-content-1">
        <h1 className="title">FEED POOR, FEED HUNGRY</h1>
        <div className="contents" data-aos="fade-up" data-aos-duration="1000">
          <div className="img-container">
            <img
              className="one-edge-shadow"
              src="/images/our-program-tab/our-prgram-1.webp"
              alt="education-img"
            />
          </div>
          <div className="text-container">
            <p className="text">
              Our initiative{" "}
              <span style={{ fontWeight: "bold" }}>
                “FEED POOR, FEED HUNGARY”
              </span>{" "}
              by Truly Help Foundation which started in 2021 have vision to food
              for all people. We all have desire to work for those
              underprivileged children and marginalized community who are facing
              challenges and their caregivers, beyond our prayers. Sometimes,
              the family members do not have money, not even have the time to
              have food, which is the basic necessity as they are always around
              taking care of their families. Majority of the marginalized
              community don’t have work, home to live and they decide to stay
              hungry to save money.
            </p>
            <br />
          </div>
        </div>
        <p className="text">
          Truly Help Foundation serves free, but wholesome, food to families of
          underprivileged children and help to uplift the community.
        </p>
      </div>
      <div className="hr-line">
        <hr />
      </div>
      <div className="feature-content-1">
        <h1 className="title">SPARK LIGHT</h1>
        <div className="contents" data-aos="fade-up" data-aos-duration="1000">
          <div className="img-container">
            <img
              className="one-edge-shadow"
              src="/images/our-program-tab/our-prgram-2.webp"
              alt="education-img"
            />
          </div>
          <div className="text-container">
            <p className="text">
              Underprivileged children are mostly disengaged from main stream
              education, disruptive or withdrawn and mostly avoid going to
              school. We work at municipal schools, balwadis and Vidyaalay to
              encourage the children for not skipping school and that learning
              can be fun. In keeping mind that a caring and creative
              environment, can bring the change into problematic child’s life to
              learn and achieve their dreams.
            </p>
            <br />
          </div>
        </div>
      </div>
      <div className="feature-content-2">
        <div className="contents" data-aos="fade-up" data-aos-duration="1000">
          <div className="text-container">
            <p className="text">
              THF believes that learning and knowledge is the key to success, as
              we say{" "}
              <span style={{ fontWeight: "bold" }}>“Give wings to fly”</span>.
              We provide study material for students going to school even help
              with admission where required. Vocational Training programs are
              conducted in-house through skill development program and
              supporting education for older students.
            </p>
          </div>
          <div className="img-container">
            <img
              className="one-edge-shadow"
              src="/images/our-program-tab/our-program-3.jpg"
              alt="education-img"
            />
          </div>
        </div>
      </div>
      <div className="hr-line">
        <hr />
      </div>
      <div className="only-text-container">
        <h1 className="title">SALUTE DELHI </h1>
        <div className="contents" data-aos="fade-up" data-aos-duration="1000">
          <div className="text-container">
            <p className="text">
              The main aim of Salute Delhi is not to only saving and serving the
              community. The main aim is to connect to people through
              understanding their needs, it brings a positive change in their
              mindset. Educating through banners, pamphlets and announcements
              about the importance of Children's Education, empowering Women,
              creating Job opportunities for Youth, Cleanliness, Dry Ration,
              Hygiene, Sanitation, Waste Management- say No to Plastic &
              Children health in Slums & Villages. Our focus is to give life to
              the children’s and marginalized community and keep it clean and
              hygienic. Everything will be better and changing gradually. We
              merely want to create interventions, that hopefully ignite some
              other change. At last, we hope our Project “SALUTE DELHI” will
              help others to motivate themselves to help each other, be it Delhi
              or anywhere else in India.
            </p>
          </div>
        </div>
      </div>
      <div className="hr-line">
        <hr />
      </div>
      <br />
    </div>
  );
}

export default OurProgrammes;
