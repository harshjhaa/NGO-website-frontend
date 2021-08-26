import React, { useEffect } from "react";
import { Link } from "react-router-dom";

//components
import Slider from "../image_slider/Slider";
import BoxCube from "./BoxCube";
import DonateBanner from "../common_components/donate_banner/DonateBanner";
import Acknowledgement from "../common_components/acknowlwdgement/Acknowledgement";
import LatestUpdates from "../common_components/latest_updates/LatestUpdates";

import hungerDonateImg from "../assets/images/donate-us-container/donate-hunger.jpg";

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

  const donateImgTitle = "Help us Fight Hunger in Rural Areas";
  const donateImgDescription =
    "Some rural residents and households are food insecure,meaning they cannot rely on access to sufficient affordable and nutritious food at all times, increasing the risk of poor health outcomes.";

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
            spaceBetween={30}
            slidesPerGroup={3}
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
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
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
                  <button className="bttn bttn-red">
                    <Link to="/education">EXPLORE</Link>
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box box-border-green">
                <div className="content">
                  <img src="/gif/health-5.gif" alt="home_img-2" />
                  <h4>HEALTHCARE</h4>
                  <p>
                    Good health makes people strong, increaes thier efficient
                    and inturn benefits society!
                  </p>
                  <button className="bttn bttn-green">
                    <Link to="/healthcare">EXPLORE</Link>
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box box-border-voilet">
                <div className="content">
                  <img src="/gif/liveli-4.gif" alt="home_img-2" />
                  <h4>LIVELIHOODS</h4>
                  <p>
                    Imporvement in the livelihood lead to the upgradation of the
                    standard of living!
                  </p>
                  <button className="bttn bttn-voilet">
                    <Link to="/livelihoods">EXPLORE</Link>
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box box-border-blue">
                <div className="content">
                  <img src="/gif/human-2.gif" alt="home_img-2" />
                  <h4>HUMANITARIAN</h4>
                  <p>
                    Human wlfare is one of the important factor in keeping the
                    society balanced, evolving from time to time!
                  </p>
                  <button className="bttn bttn-blue">
                    <Link to="/humanitarian">EXPLORE</Link>
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box box-border-orange">
                <div className="content">
                  <img src="/gif/sports-2.gif" alt="home_img-2" />
                  <h4>SPORTS</h4>
                  <p>
                    Sports helps to evolve the overall mentality of the person
                    by making them active, alert and friendly!
                  </p>
                  <button className="bttn bttn-orange">
                    <Link to="/sports">EXPLORE</Link>
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box box-border-red">
                <div className="content">
                  <img src="/gif/edu-2.gif" alt="home_img-1" />
                  <h4>EDUCATION</h4>
                  <p>
                    Education is one of the main piller of the society, without
                    it India's future is lost!
                  </p>
                  <button className="bttn bttn-red">
                    <Link to="/education">EXPLORE</Link>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
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
          <button className="bttn">
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
              From the very begining, our founding members understood that the
              in-depth we require the collective will, knowledge and
              participation of all society. THF built on this vision and
              creating countless opportunities for India's poor to live
              successful, productive lices while creating impactful change at an
              unprecendented scale, changing the lives of many people.
            </p>
          </div>
          <button className="bttn">
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
              THF is committed to meet long-term social and economic change in
              India and building a lasting bridge between the community and
              children through high-impact interventions in education,
              livelihoods, healthcare, sports and leadership development.
              Working closely with local partners. We aim to systematically
              address and resolvethese deterrents.
            </p>
          </div>
          <button className="bttn">
            <Link to="/our-work">SEE OUR WORK</Link>
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
              Truly Help Foundation believes that until and unless all people
              come together and get involved actively in the process of
              remodeling and evolution, nothing can happen. To make this
              transformational change happen, we would like to request you to
              come and join us – to work for the well-being of underprivileged
              children and the community.
            </p>
          </div>
          <button className="bttn bttn-red">
            <Link to="/thf-fellowship">START NOW</Link>
          </button>
        </div>
      </div>
      <div className="hr-line">
        <hr />
      </div>
      {/* <div
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
            <button className="bttn bttn-red">
              <Link to="/education">READ MORE</Link>
            </button>
          </div>
          <div className="program-content sec-2" data-aos-duration="1600">
            <img src="/images/health-n-nutrition-1.jpg" alt="home_img-2" />
            <p className="title">HEALTH AND NUTRITION</p>
            <p className="info">
              Adequate nutrition and quality primary care play’s an essential
              role in a child's...
            </p>
            <button className="bttn bttn-green">
              <Link to="/healthcare">READ MORE</Link>
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
            <button className="bttn bttn-voilet">
              <Link to="/sports">READ MORE</Link>
            </button>
          </div>
          <div className="program-content sec-4" data-aos-duration="1600">
            <img src="/images/food-distribution-1.jpg" alt="home_img-2" />
            <p className="title">COVID-19 FOOD DISTRIBUTION</p>
            <p className="info">
              THF helps the people who are deprived of food due to the COVID-19
              situation, we distribute...
            </p>
            <button className="bttn bttn-orange">
              <Link to="/covid-19-relief">READ MORE</Link>
            </button>
          </div>
        </div>
      </div> */}
      <div className="hr-line">
        <hr />
      </div>
      <section>
        <h1 className="title">CURRENTLY RUNNING PROGRAMES</h1>
        <div
          className="overview-container"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="box">
            <h2 className="box-title">PROVIDE FOOD TO HUNGRY</h2>
            <span className="span-line"></span>
            <div className="img-container">
              <img
                src="/images/currently-running-programs/food-donate-1.jpg"
                alt="ing"
              />
            </div>
            <div className="contents">
              <p>
                Help those who are in need of food. We distribute food in slum
                areas and to homeless peoples.
              </p>
            </div>
            <button className="bttn">
              <Link to="/donate">DONATE</Link>
            </button>
          </div>
          <div className="box">
            <h2 className="box-title">DONATE HYGIENE KIT</h2>
            <span className="span-line"></span>
            <div className="img-container">
              <img
                src="/images/currently-running-programs/hygiene-kit-1.jpg"
                alt="ing"
              />
            </div>
            <div className="contents">
              <p>
                Hygiene is one of the most basic need of everyone. Support us by
                donating hygiene kit.
              </p>
            </div>
            <button className="bttn">
              <Link to="/donate">DONATE</Link>
            </button>
          </div>
          <div className="box">
            <h2 className="box-title">DONATE EDUCATIONAL KIT</h2>
            <span className="span-line"></span>
            <div className="img-container">
              <img
                src="/images/currently-running-programs/education-kit-donate-1.jpg"
                alt="ing"
              />
            </div>
            <div className="contents">
              <p>
                Most of the children in rural areas still lack the basic kit for
                education. Support us by donating education kit.
              </p>
            </div>
            <button className="bttn bttn-red">
              <Link to="/donate">DONATE</Link>
            </button>
          </div>
          <div className="box">
            <h2 className="box-title">DONATE CLOTHS</h2>
            <span className="span-line"></span>
            <div className="img-container">
              <img
                src="/images/currently-running-programs/donate-cloths-1.jpg"
                alt="ing"
              />
            </div>
            <div className="contents">
              <p>
                Many homeless persons lacks proper clothing, we help them by
                donating cloths.
              </p>
            </div>
            <button className="bttn">
              <Link to="/donate">DONATE</Link>
            </button>
          </div>
          <div className="box">
            <h2 className="box-title">EVERYONE ENJOY FESTIVAL</h2>
            <span className="span-line"></span>
            <div className="img-container">
              <img
                src="/images/currently-running-programs/enjoy-festival-1.jpg"
                alt="ing"
              />
            </div>
            <div className="contents">
              <p>
                Evryone has wishes to enjoy their favorite festival. We give
                them the chance to do so.
              </p>
            </div>
            <button className="bttn">
              <Link to="/donate">DONATE</Link>
            </button>
          </div>
          <div className="box">
            <h2 className="box-title">DONATE SPORTS KIT FOR CHILDREN</h2>
            <span className="span-line"></span>
            <div className="img-container">
              <img
                src="/images/currently-running-programs/sports-kit-1.jpg"
                alt="ing"
              />
            </div>
            <div className="contents">
              <p>
                Most of the rural kids who are good in sports are not able to
                perform well because of the lack of proper sports kit.
              </p>
            </div>
            <button className="bttn">
              <Link to="/donate">DONATE</Link>
            </button>
          </div>
        </div>
      </section>
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
      {/* <div
        className="home-testimonial-container"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1 className="title">TESTIMONIALS</h1>
        <Slider contentName={sliderContent["testimonialContent"]} />
      </div> */}
      <div className="hr-line">
        <hr />
      </div>
      <LatestUpdates />
      <div className="hr-line">
        <hr />
      </div>
      {/* <DonateBanner
        contentImage={hungerDonateImg}
        title={donateImgTitle}
        description={donateImgDescription}
      /> */}
      <Acknowledgement />
    </div>
  );
};

export default Home;
