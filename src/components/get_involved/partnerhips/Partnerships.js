import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import "../../CommonCSS.scss";
import "./Partnerships.scss";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

function Partnerships() {
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
    <div className="partnership-tab margin-top-4px">
      <div className="banner">
        <img
          className="banner-img"
          src="/images/partnership-tab/partnership-banner-3.jpg"
        />
        <h1 className="banner-text">PARTNERSHIP</h1>
      </div>
      <div className="bread-crum">
        <Link className="active-link" to="/">
          Home
        </Link>
        <span className="right-arrow">&#62;</span>
        <p>Get Involved</p>
        <span className="right-arrow">&#62;</span>
        <p>Partnership</p>
      </div>
      <hr style={{ margin: "0px 10px" }} />
      <section className="page-content-container">
        <section className="only-text-container">
          <h1 className="title">OUR PARTNERSHIP</h1>
          <div className="contents" data-aos="fade-up" data-aos-duration="1000">
            <div className="text-container">
              <p className="text">
                We work with children, supporters, and partners like trusts,
                companies, media and artists. Who help us build a better world
                for the everyone who deserve it. Together we can become a bridge
                to reach our goals and make a secure and safe life for every
                last child in India.
                <br />
                <br />
                Truly Help Foundation was built on the belief that every child
                has the potential to change the world; this is entirely what we
                focus to do through the Building Partnerships approach by
                collaborating with corporate and institution to implement
                programmes that ensure and sustain children???s overall growth and
                development.
              </p>
            </div>
          </div>
        </section>
        <div className="hr-line">
          <hr />
        </div>
        <section className="why-partner-with-us-contents">
          <h1 className="title">WHY PARTNER WITH US?</h1>
          <div className="box-container">
            {/* <div className="box box-border-blue">
              <div className="content">
                  <img
                    src="/images/partnership-tab/supporters-1.jpg"
                    alt="img"
                  />
                  <h4>ALL SUPPORTERS</h4>
                </div>
              </div> */}
            <div className="box box-border-red">
              <div className="content">
                <img
                  src="/images/partnership-tab/corp-partner-1.png"
                  alt="img"
                />
                <h4>CORPORATE PARTNERSHIP</h4>
              </div>
            </div>
            <div className="box box-border-green">
              <div className="content">
                <img src="/images/partnership-tab/tmp-1.png" alt="img" />
                <h4>INSTITUTIONAL PARTNERSHIP</h4>
              </div>
            </div>
            {/* <div className="bottom-box-container">
              <div className="box box-border-green">
                <div className="content">
                  <img
                    src="/images/partnership-tab/foundation-1.jpg"
                    alt="img"
                  />
                  <h4>FOUNDATIONS</h4>
                </div>
              </div>
              <div className="box box-border-orange">
                <div className="content">
                  <img
                    src="/images/partnership-tab/equipment-partner-1.webp"
                    alt="img"
                  />
                  <h4>EQUIPMENT PARTNERS</h4>
                </div>
              </div>
              <div className="box box-border-red">
                <div className="content">
                  <img src="/images/partnership-tab/tmp-3.jpg" alt="img" />
                  <h4>MEDIA</h4>
                </div>
              </div>
              <div className="box box-border-blue">
                <div className="content">
                  <img
                    src="/images/partnership-tab/event-sponsership-1.png"
                    alt="img"
                  />
                  <h4>EVENT SPONSORS</h4>
                </div>
              </div>
            </div>*/}
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
                delay: 2000,
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
                <img src="/images/home/partners/axis.png" alt="partner_img" />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/images/home/partners/fit-india.png"
                  alt="partner_img"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/home/partners/gyans.jpg" alt="partner_img" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/home/partners/paytm.jpg" alt="partner_img" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/home/partners/pay-u.png" alt="partner_img" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/home/partners/rbl.png" alt="partner_img" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/home/partners/sai.jpg" alt="partner_img" />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/images/home/partners/trination.jpg"
                  alt="partner_img"
                />
              </SwiperSlide>
            </Swiper>
            {/* <img src="/images/home/partners/axis.png" alt="partner_img" />
          <img src="/images/home/partners/fit-india.png" alt="partner_img" />
          <img src="/images/home/partners/gyans.jpg" alt="partner_img" />
          <img src="/images/home/partners/paytm.jpg" alt="partner_img" />
        </div>
        <div className="content">
          <img src="/images/home/partners/pay-u.png" alt="partner_img" />
          <img src="/images/home/partners/rbl.png" alt="partner_img" />
          <img src="/images/home/partners/sai.jpg" alt="partner_img" />
          <img src="/images/home/partners/trination.jpg" alt="partner_img" /> */}
          </div>
        </div>
        <div className="hr-line">
          <hr />
        </div>
        <br />
      </section>
    </div>
  );
}

export default Partnerships;
