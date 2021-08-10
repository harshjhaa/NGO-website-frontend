import React, { useEffect } from "react";
import { Link } from "react-router-dom";

//components
import Slider from "../image_slider/Slider";
import BoxCube from "./BoxCube";
import HungerRuralDonate from "../common_components/hunger_rural_donate/HungerRuralDonate";
import SubscribeNewsletter from "../common_components/subscribe_newsletter/SubscribeNewsletter";
import Acknowledgement from "../common_components/acknowlwdgement/Acknowledgement";
import WeHelpEach from "../common_components/we_help_each/WeHelpEach";
import LatestUpdates from "../common_components/latest_updates/LatestUpdates";

import Carousel from "react-elastic-carousel";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import AOS from "aos";

import "../CommonCSS.scss";
import "./Home.scss";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);
const Home = () => {
  const sliderContent = {
    topBannerContent: "topBannerContent",
    covidBannerContent: "covidBannerContent",
    testimonialContent: "testimonialContent",
  };

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 769, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    AOS.init();
    //for handelling twitter
    const anchor = document.createElement("a");
    anchor.setAttribute("class", "twitter-timeline");
    anchor.setAttribute("data-theme", "dark");
    anchor.setAttribute("data-tweet-limit", "5");
    anchor.setAttribute("data-chrome", "noheader nofooter noborders");
    anchor.setAttribute("href", "https://twitter.com/trulyhelp");
    document.getElementsByClassName("twitter-embed")[0].appendChild(anchor);
    const script = document.createElement("script");
    script.setAttribute("src", "https://platform.twitter.com/widgets.js");
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  }, []);

  return (
    <div className="home-tab">
      <marquee
        className="home-marquee margin-top-80"
        direction="left"
        scrollamount="5"
        behavior="scroll"
      >
        <p>
          Truly Help Foundation is a registered Non-profit organization under
          section 8 company in india and a Members of THF confederation present
          in PAN India which works with the most marginalised people to
          alleviate poverty and reduce social injustice through comprehensive
          programmes in healthcare, education, livelihoods, sports and
          humanitarian assistance and rehabilitation. | We are responding to the
          second wave of COVID-19 by setting up temporary COVID Care Facilities
          and supporting marginalized communities by providing dry ration and
          hygiene kits . We are also awaring and preparing communities for covid
          third wave.
        </p>
      </marquee>
      <div className="home-img-banner">
        <Slider contentName={sliderContent["topBannerContent"]} />
      </div>
      <div className="hr-line">
        <hr />
      </div>
      <div
        className="home-feature-content-1"
        data-aos="fade-up"
        data-aos-duration="700"
      >
        <p className="title">Dreaming of a Brighter Future</p>
        <div className="home-feature-content-1-container">
          {/* <div className="home-feature-content-1-vid">
            <video src="/videos/feature_content_1_vid.mp4" width="400" height="300" autoplay="true" muted="true" loop="true"/>
          </div> */}
          <div className="box-animation">
            <BoxCube />
          </div>
          <div className="home-feature-content-1-content">
            <p className="info">
              Truly Help Foundation has been on the forefront, reshaping the
              lives of millions children, women and youth. Be it nutiriton,
              healthcare, education, sports and response in the time.
            </p>
          </div>
        </div>
      </div>
      <div className="hr-line">
        <hr />
      </div>
      <span className="span-line"></span>
      {/* <div
        className="home-feature-content-2"
        data-aos="zoom-out-up"
        data-aos-duration="1000"
      >
        <h1>Causes We Are Serving</h1>
        <div className="home-causes-we-serving-container" id="style-1">
          <Carousel
            breakPoints={breakPoints}
            pagination={false}
            infiniteLoop={true}
          >
            <div className="img-txt">
              <img src="/images/img_1.jpg" alt="home_img-1" />
              <h4>EDUCATION</h4>
              <button className="btn">
                <Link className="btn" to="/education">
                  EXPLORE
                </Link>
              </button>
            </div>
            <div className="img-txt">
              <img src="/images/img_2.jpg" alt="home_img-2" />
              <h4>HEALTHCARE</h4>
              <button className="btn">
                <Link className="btn" to="/healthcare">
                  EXPLORE
                </Link>
              </button>
            </div>
            <div className="img-txt">
              <img src="/images/img_3.jpg" alt="home_img-3" />
              <h4>LIVELIHOODS</h4>
              <button className="btn">
                <Link className="btn" to="/livelihoods">
                  EXPLORE
                </Link>
              </button>
            </div>
            <div className="img-txt">
              <img src="/images/img_1.jpg" alt="home_img-1" />
              <h4>SPORTS</h4>
              <button className="btn">
                <Link className="btn" to="/sports">
                  EXPLORE
                </Link>
              </button>
            </div>
            <div className="img-txt">
              <img src="/images/img_2.jpg" alt="home_img-2" />
              <h4>HUMANITARIAN</h4>
              <button className="btn">
                <Link className="btn" to="/humanitarian">
                  EXPLORE
                </Link>
              </button>
            </div>
          </Carousel>
        </div>
      </div> */}
      <div
        className="causes-we-are-serving-container"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <p className="title">CAUSES WE ARE SERVING</p>
        <div
          className="causes-we-are-serving-contents"
          style={{ position: "relative" }}
        >
          <Swiper
            slidesPerView={3}
            slidesPerGroup={3}
            spaceBetween={10}
            breakpoints={{
              960: {
                slidesPerView: 3,
                spaceBetween: 8,
                slidesPerGroup: 3,
              },
              720: {
                slidesPerView: 2,
                spaceBetween: 10,
                slidesPerGroup: 2,
              },
              540: {
                slidesPerView: 1,
                spaceBetween: 2,
                slidesPerGroup: 1,
              },
              320: {
                slidesPerView: 1,
                spaceBetween: 2,
                slidesPerGroup: 1,
              },
            }}
            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
            }}
            centeredSlides={true}
            loop={true}
            loopFillGroupWithBlank={false}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="box box-border-red">
                <div className="content">
                  <img src="/gif/edu-2.gif" alt="home_img-1" />
                  <h4>EDUCATION</h4>
                  <p>
                    Education is one of the main piller of the society, without
                    it India's future is lost!
                  </p>
                  <button className="btn btn-red">
                    <Link to="/education">EXPLORE</Link>
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="box box-border-green">
                <div className="content">
                  <img src="/gif/health-5.gif" alt="home_img-2" />
                  <h4>HEALTHCARE</h4>
                  <p>
                    Good health makes people strong, increaes thier efficient
                    and inturn benefits society!
                  </p>
                  <button className="btn btn-green">
                    <Link to="/healthcare">EXPLORE</Link>
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="box box-border-voilet">
                <div className="content">
                  <img src="/gif/liveli-4.gif" alt="home_img-2" />
                  <h4>LIVELIHOODS</h4>
                  <p>
                    Imporvement in the livelihood lead to the upgradation of the
                    standard of living!
                  </p>
                  <button className="btn btn-voilet">
                    <Link to="/livelihoods">EXPLORE</Link>
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="box box-border-orange">
                <div className="content">
                  <img src="/gif/sports-2.gif" alt="home_img-2" />
                  <h4>SPORTS</h4>
                  <p>
                    Sports helps to evolve the overall mentality of the person
                    by making them active, alert and friendly!
                  </p>
                  <button className="btn btn-orange">
                    <Link to="/sports">EXPLORE</Link>
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="box box-border-blue">
                <div className="content">
                  <img src="/gif/human-2.gif" alt="home_img-2" />
                  <h4>HUMANITARIAN</h4>
                  <p>
                    Human wlfare is one of the important factor in keeping the
                    society balanced, evolving from time to time!
                  </p>
                  <button className="btn btn-blue">
                    <Link to="/humanitarian">EXPLORE</Link>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* <Slider contentName={sliderContent["causesServingContent"]} /> */}
          {/* <div className="box box-up box-border-red">
            <div className="content">
              <img src="/gif/edu-2.gif" alt="home_img-1" />
              <h4>EDUCATION</h4>
              <p>
                Education is one of the main piller of the society, without it
                India's future is lost!
              </p>
              <button className="btn btn-red">
                <Link to="/education">EXPLORE</Link>
              </button>
            </div>
          </div>
          <div className="box box-down box-border-green">
            <div className="content">
              <img src="/gif/health-5.gif" alt="home_img-2" />
              <h4>HEALTHCARE</h4>
              <p>
                Good health makes people strong, increaes thier efficient and
                inturn benefits society!
              </p>
              <button className="btn btn-green">
                <Link to="/healthcare">EXPLORE</Link>
              </button>
            </div>
          </div>
          <div className="box box-up box-border-voilet">
            <div className="content">
              <img src="/gif/liveli-4.gif" alt="home_img-2" />
              <h4>LIVELIHOODS</h4>
              <p>
                Imporvement in the livelihood lead to the upgradation of the
                standard of living!
              </p>
              <button className="btn btn-voilet">
                <Link to="/livelihoods">EXPLORE</Link>
              </button>
            </div>
          </div>
          <div className="box box-down box-border-orange">
            <div className="content">
              <img src="/gif/sports-2.gif" alt="home_img-2" />
              <h4>SPORTS</h4>
              <p>
                Sports helps to evolve the overall mentality of the person by
                making them active, alert and friendly!
              </p>
              <button className="btn btn-orange">
                <Link to="/sports">EXPLORE</Link>
              </button>
            </div>
          </div>
          <div className="box box-up box-border-blue">
            <div className="content">
              <img src="/gif/human-2.gif" alt="home_img-2" />
              <h4>HUMANITARIAN</h4>
              <p>
                Human wlfare is one of the important factor in keeping the
                society balanced, evolving from time to time!
              </p>
              <button className="btn btn-blue">
                <Link to="/humanitarian">EXPLORE</Link>
              </button>
            </div>
          </div> */}
        </div>
      </div>
      <div className="hr-line">
        <hr />
      </div>
      <WeHelpEach />
      <div className="hr-line">
        <hr />
      </div>
      <div
        className="about-us-container"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="img-sec">
          <img
            className="img-1"
            src="/images/about-us-2.jpg"
            alt="home_img-1"
          />
          <img
            className="img-2"
            src="/images/about-us-1.jpg"
            alt="home_img-2"
          />
          <img
            className="img-3"
            src="/images/about-us-3.jpg"
            alt="home_img-3"
          />
        </div>
        <div className="header-text-container">
          <h1 className="title">ABOUT US</h1>
          <p>
            Truly Help Foundation is the independent organization creating
            lasting change in the life of children's in the India. We are
            recognized for our commitment towards accountability, innovation and
            collaboration, we believe in bringing change by empowering children
            and families so that they can help themselves.
          </p>
          <button className="btn">
            <Link to="/about-us">EXPLORE</Link>
          </button>
        </div>
      </div>
      <div className="hr-line">
        <hr />
      </div>
      <div
        className="home-covid-banner"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1 className="title">COVID-19 GUIDANCE</h1>
        <Slider contentName={sliderContent["covidBannerContent"]} />
      </div>
      <div className="hr-line">
        <hr />
      </div>
      <div
        className="our-legacy-container"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="who-we-are-container">
          <h2 className="title">WHO WE ARE</h2>
          <span className="span-line"></span>
          <div className="img-container">
            <img src="/images/who-we-are.jpg" />
          </div>
          <div className="contents">
            <p>
              Be it nutiriton, healthcare, education, sports and response in the
              time, Truly Help Foundation has been on the forefront, reshaping
              the lives of millions children, women and youth.
            </p>
          </div>
          <button className="btn">
            <Link to="/about-us">LEARN MORE</Link>
          </button>
        </div>
        <div className="what-we-do-container">
          <h2 className="title">WHAT WE DO</h2>
          <span className="span-line"></span>
          <div className="img-container">
            <img src="/images/what-we-do-1.webp" alt="home_img-2" />
          </div>
          <div className="contents">
            <p>
              Be it nutiriton, healthcare, education, sports and response in the
              time, Truly Help Foundation has been on the forefront, reshaping
              the lives of millions children, women and youth.
            </p>
          </div>
          <button className="btn">
            <Link to="/our-approach">SEE OUR WORK</Link>
          </button>
        </div>
        <div className="get-involved-container">
          <h2 className="title">GET INVOLVED</h2>
          <span className="span-line"></span>
          <div className="img-container">
            <img src="/images/join-us.jpg" alt="home_img-2" />
          </div>
          <div className="contents">
            <p>
              Be it nutiriton, healthcare, education, sports and response in the
              time, Truly Help Foundation has been on the forefront, reshaping
              the lives of millions children, women and youth.
            </p>
          </div>
          <button className="btn btn-red">
            <Link to="/our-campaigns">START NOW</Link>
          </button>
        </div>
      </div>
      <div className="hr-line">
        <hr />
      </div>
      <div
        className="home-currently-running-programs"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <p className="head-title">CURRENTLY RUNNING PROGRAMES</p>
        <div className="program-contents">
          <div className="program-content sec-1" data-aos-duration="1600">
            <img src="/images/educ-1.jpg" alt="home_img-2" />
            <p className="title">EDUCATION</p>
            <br />
            <p className="info">
              Education gives a chance to every child to empowers himself and
              break the vicious...
            </p>
            <button className="btn btn-red">
              <Link to="/our-campaigns">READ MORE</Link>
            </button>
          </div>
          <div className="program-content sec-2" data-aos-duration="1600">
            <img src="/images/health-n-nutrition-1.jpg" alt="home_img-2" />
            <p className="title">HEALTH AND NUTRITION</p>
            <p className="info">
              Adequate nutrition and quality primary care play’s an essential
              role in a child's...
            </p>
            <button className="btn btn-green">
              <Link to="/our-campaigns">READ MORE</Link>
            </button>
          </div>
          <div className="program-content sec-3" data-aos-duration="1600">
            <img src="/images/sports-1.jpg" alt="home_img-2" />
            <p className="title">SPORTS</p>
            <br />
            <p className="info">
              We wish to use sports to make a healthy future generation. Our
              mission to create inclusive...
            </p>
            <button className="btn btn-voilet">
              <Link to="/our-campaigns">READ MORE</Link>
            </button>
          </div>
          <div className="program-content sec-4" data-aos-duration="1600">
            <img src="/images/food-distribution-1.jpg" alt="home_img-2" />
            <p className="title">COVID-19 FOOD DISTRIBUTION</p>
            <p className="info">
              THF helps the people who are deprived of food due to the COVID-19
              situation, we distribute...
            </p>
            <button className="btn btn-orange">
              <Link to="/our-campaigns">READ MORE</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="hr-line">
        <hr />
      </div>
      <div
        className="our-partners-and-supporters-container"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1 className="title">OUR PARTNERS AND SUPPORTERS</h1>
        <div className="content">
          <img src="/images/company-1.png" alt="home_img-2" />
          <img src="/images/company-2.jpg" alt="home_img-2" />
          <img src="/images/company-3.png" alt="home_img-2" />
          <img src="/images/company-4.png" alt="home_img-2" />
        </div>
      </div>
      <div className="hr-line">
        <hr />
      </div>
      <div
        className="home-testimonial-container"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1 className="title">TESTIMONIALS</h1>
        <Slider contentName={sliderContent["testimonialContent"]} />
      </div>
      <div className="hr-line">
        <hr />
      </div>
      <LatestUpdates/>
      <div className="hr-line">
        <hr />
      </div>
      <SubscribeNewsletter />
      <div className="hr-line">
        <hr />
      </div>
      <HungerRuralDonate />
      <Acknowledgement />
    </div>
  );
};

export default Home;
