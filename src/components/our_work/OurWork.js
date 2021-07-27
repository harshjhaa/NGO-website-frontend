import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from '../image_slider/Slider'
import Carousel from "react-elastic-carousel";
import gsap from "gsap";
import AOS from 'aos';
import "./OurWork.scss";

const OurWork = (props) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 769, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  useEffect(() => {
    const div = document.querySelectorAll(".home-feature-content-3-container");

    gsap.set(div[1], { x: 100, opacity: 1 });
    gsap
      .timeline({ repeat: -1, defaults: { duration: 3 } })

      .add("one")
      .to(div[0], { y: 600, x: 0, opacity: 0.05 }, "one")
      .to(div[1], { y: -350, x: 0, opacity: 0.05 }, "one")
      .to(div[2], { y: -300, x: 100, opacity: 1 }, "one")

      .add("two")
      .to(div[0], { y: 300, x: 100, opacity: 1 }, "two")
      .to(div[1], { y: 300, x: 0, opacity: 0.05 }, "two")
      .to(div[2], { y: -600, x: 0, opacity: 0.05 }, "two")

      .add("three")
      .to(div[0], { y: 0, x: 0, opacity: 0.05 }, "three")
      .to(div[1], { y: 0, x: 100, opacity: 1 }, "three")
      .to(div[2], { y: 0, x: 0, opacity: 0.05 }, "three");
  });

  useEffect(()=>{
    AOS.init();
  },[])

  return (
    <div className="our-work">
      <div className="home-img-banner"><Slider/></div>
      <div className="home-feature-content-1">
        <div className="home-feature-content-1-container">
          {/* <div className="home-feature-content-1-vid">
            <video src="/videos/feature_content_1_vid.mp4" width="400" height="300" autoplay="true" muted="true" loop="true"/>
          </div> */}
          <div className="home-feature-content-1-content">
            <h1>Dreaming of a Brighter Future</h1>
            <p>
                Be it nutiriton, healthcare, education, 
                <br/>
                sports and response in the time,
                <br/>
                Truly Help Foundation 
                <br/>
                has been on the forefront, reshaping the lives 
                <br/>
                of millions children, women and youth.
            </p>
          </div>
        </div>
      </div>
      <div className="hr-line">
        <hr/>
        <hr/>
      </div>
      <span className="span-line"></span>
      {/* <div className="home-feature-content-2" data-aos="zoom-out-up" data-aos-duration="1000">
        <h1>Causes We Are Serving</h1>
        <div className="home-causes-we-serving-container" id="style-1">
          <Carousel breakPoints={breakPoints} pagination={false}>
            <div className="img-txt">
              <img src="/images/img_1.jpg" alt="home_img-1" />
              <h4>EDUCATION</h4>
              <button className="btn"><Link className="btn" to="/education">EXPLORE</Link></button>
            </div>
            <div className="img-txt">
              <img src="/images/img_2.jpg" alt="home_img-2" />
              <h4>HEALTHCARE</h4>
              <button className="btn"><Link className="btn" to="/healthcare">EXPLORE</Link></button>
            </div>
            <div className="img-txt">
              <img src="/images/img_3.jpg" alt="home_img-3" />
              <h4>LIVELIHOODS</h4>
              <button className="btn"><Link className="btn" to="/livelihoods">EXPLORE</Link></button>
            </div>
            <div className="img-txt">
              <img src="/images/img_1.jpg" alt="home_img-1" />
              <h4>SPORTS</h4>
              <button className="btn"><Link className="btn" to="/sports">EXPLORE</Link></button>
            </div>
            <div className="img-txt">
              <img src="/images/img_2.jpg" alt="home_img-2" />
              <h4>HUMANITARIAN</h4>
              <button className="btn"><Link className="btn" to="/humanitarian">EXPLORE</Link></button>
            </div>
          </Carousel>
        </div>
      </div> */}
      <div className="causes-we-are-serving-container" data-aos="fade-up" data-aos-duration="1000">
        <h1>CAUSES WE ARE SERVING</h1> 
        <div className="causes-we-are-serving-contents">
          <div className="box box-up box-border-red" >
            <div className="content">
              <img src="/gif/edu-2.gif" alt="home_img-1" />
              <h4>EDUCATION</h4>
              <p>
                Education is one of the main piller of the society, without it
                India's future is lost!
              </p>
              <button className="btn btn-red"><Link to="/education">EXPLORE</Link></button>
            </div>
          </div>
          <div className="box box-down box-border-green" >
            <div className="content">
              <img src="/gif/health-5.gif" alt="home_img-2" />
              <h4>HEALTHCARE</h4>
              <p>
               Good health makes people strong, increaes thier efficient and
               inturn benefits society!
              </p>
              <button className="btn btn-green"><Link to="/healthcare">EXPLORE</Link></button>
            </div>
          </div>
          <div className="box box-up box-border-voilet" >
            <div className="content">
              <img src="/gif/liveli-4.gif" alt="home_img-2" />
              <h4>LIVELIHOODS</h4>
              <p>
               Imporvement in the livelihood lead to the upgradation of the standard
               of living!
              </p>
              <button className="btn btn-voilet"><Link to="/livelihoods">EXPLORE</Link></button>
            </div>
          </div>
          <div className="box box-down box-border-orange" >
            <div className="content">
              <img src="/gif/sports-2.gif" alt="home_img-2" />
              <h4>SPORTS</h4>
              <p>
               Sports helps to evolve the overall mentality of the person by making them
               active, alert and friendly!
              </p>
              <button className="btn btn-orange"><Link to="/sports">EXPLORE</Link></button>
            </div>
          </div>
          <div className="box box-up box-border-blue" >
            <div className="content">
              <img src="/gif/human-2.gif" alt="home_img-2" />
              <h4>HUMANITARIAN</h4>
              <p>
               Human wlfare is one of the important factor in keeping the society balanced,
               evolving from time to time!
              </p>
              <button className="btn btn-blue"><Link to="/humanitarian">EXPLORE</Link></button>
            </div>
          </div>
        </div>
      </div>
      <div className="hr-line">
        <hr/>
      </div>
      <div className="home-feature-content-3 flex-col">
        <div className="col-left">
          <div className="home-feature-content-3-container">
            <img src="/images/img_1.jpg" alt="home_img-1" />
          </div>
          <div className="home-feature-content-3-container">
            <img src="/images/img_2.jpg" alt="home_img-1" />
          </div>
          <div className="home-feature-content-3-container">
            <img src="/images/img_3.jpg" alt="home_img-1" />
          </div>
        </div>
        <div className="col-right">
          <h1 data-aos="fade-down" data-aos-duration="1800">WE HELP EACH</h1>
          <div data-aos="fade-up" data-aos-duration="1800">
            <p>
            We strategically emphasize on promoting quality healthcare, inclusive education, gender equitable and 
            sustainable livelihood opportunities and disaster relief and preparedness. Our efforts are focused to 
            fight against underlying causes of poverty and ensuring a life of dignity for all women and girls from 
            the most marginalised and vulnerable communities, especially from the backward casts.
            <br/>
            <br/>
            Our key programming approaches include social analysis and action, gender transformative change, building 
            secure and resilient communities, promoting inclusive governance, advocacy on national and international 
            platforms and facilitating links and dialogues between public, private and civil society.
            </p>
          </div>
        </div>
      </div>
      <div className="hr-line">
        <hr/>
      </div>
      <div className="about-us-container">
        <div className="img-sec">
          <img className="img-1" src="/images/img_1.jpg" alt="home_img-1" />
          <img className="img-2" src="/images/img_2.jpg" alt="home_img-2" />
          <img className="img-3" src="/images/img_3.jpg" alt="home_img-3" />
        </div>
        <div className="header-text-container">
          <h1>ABOUT US</h1>
          <p>
            Be it nutiriton, healthcare, education,
            sports and response in the time,
            Truly Help Foundation
            has been on the forefront, reshaping the lives
            of millions children, women and youth.            
            Be it nutiriton, healthcare, education,
            sports and response in the time,
            Truly Help Foundation
            has been on the forefront, reshaping the lives 
            of millions children, women and youth.
          </p>
          <button className="btn"><Link to="/about-us">EXPLORE</Link></button>
        </div>
      </div>
      <div className="hr-line">
        <hr/>
      </div>
      <div className="our-legacy-container">
        <div className="who-we-are-container">
          <h2>WHO WE ARE</h2>
          <span className="span-line"></span>
          <div className="img-container">
            <img src="/images/img_1.jpg" alt="home_img-2" />
          </div>
          <div className="contents">
            <p>
              Be it nutiriton, healthcare, education,
              sports and response in the time,
              Truly Help Foundation
              has been on the forefront, reshaping the lives
              of millions children, women and youth. 
            </p>
          </div>
          <button className="btn"><Link to="/about-us">EXPLORE</Link></button>
        </div>
        <div className="what-we-do-container">
          <h2>WHAT WE DO</h2>
          <span className="span-line"></span>
          <div className="img-container">
            <img src="/images/img_2.jpg" alt="home_img-2" />
          </div>
          <div className="contents">
            <p>
              Be it nutiriton, healthcare, education,
              sports and response in the time,
              Truly Help Foundation
              has been on the forefront, reshaping the lives
              of millions children, women and youth. 
            </p>
          </div>
          <button className="btn"><Link to="/our-approach">EXPLORE</Link></button>
        </div>
        <div className="get-involved-container">
          <h2>GET INVOLVED</h2>
          <span className="span-line"></span>
          <div className="img-container">
            <img src="/images/img_3.jpg" alt="home_img-2" />
          </div>
          <div className="contents">
            <p>
              Be it nutiriton, healthcare, education,
              sports and response in the time,
              Truly Help Foundation
              has been on the forefront, reshaping the lives
              of millions children, women and youth. 
            </p>
          </div>
          <button className="btn btn-red"><Link to="/our-campaigns">EXPLORE</Link></button>
        </div>
      </div>
      <div className="hr-line">
        <hr/>
      </div>
      <div className="home-currently-running-programs">
        <h1 
        // data-aos="fade-up"
        // data-aos-anchor-placement="bottom-bottom"
        data-aos-duration="1600">CURRENTLY RUNNING PROGRAMS</h1>
        <div className="program-contents">
            <div className="program-content sec-1" data-aos-duration="1600">
              <img src="/images/img_3.jpg" alt="home_img-2" />
              <h3 className="title">EDUCATION</h3>
              <br/>
              <p className="info">Thrust into large-scale work-from-home programs by
                  COVID-19...</p>
              <button className="btn btn-red"><Link to="/our-campaigns">EXPLORE</Link></button>
            </div>
            <div className="program-content sec-2" data-aos-duration="1600">
              <img src="/images/img_3.jpg" alt="home_img-2" />
              <h3 className="title">HEALTH AND NUTRITION</h3>
              <p className="info">Thrust into large-scale work-from-home programs by
                  COVID-19...</p>
              <button className="btn btn-green"><Link to="/our-campaigns">EXPLORE</Link></button>
            </div>
            <div className="program-content sec-3" data-aos-duration="1600">
              <img src="/images/img_3.jpg" alt="home_img-2" />
              <h3 className="title">SPORTS</h3>
              <br/>
              <p className="info">Thrust into large-scale work-from-home programs by
                  COVID-19...</p>
              <button className="btn btn-voilet"><Link to="/our-campaigns">EXPLORE</Link></button>
            </div>
            <div className="program-content sec-4" data-aos-duration="1600">
              <img src="/images/img_3.jpg" alt="home_img-2" />
              <h3 className="title">COVID-19 FOOD DISTRIBUTION</h3>
              <p className="info">Thrust into large-scale work-from-home programs by
                  COVID-19...</p>
              <button className="btn btn-orange"><Link to="/our-campaigns">EXPLORE</Link></button>
            </div>
        </div>
      </div>
      <div className="hr-line">
        <hr/>
      </div>
      <div className="our-partners-and-supporters-container">
        <h2>OUR PARTNERS AND SUPPORTERS</h2>
        <div className="content">
          <img src="/images/company-1.png" alt="home_img-2" />
          <img src="/images/company-2.jpg" alt="home_img-2" />
          <img src="/images/company-3.png" alt="home_img-2" />
          <img src="/images/company-4.png" alt="home_img-2" />
        </div>
      </div>
      <div className="testimonial-and-twitter-contaienr">
        <div className="home-testimonial-list-container">
          <h1 className="title">TESTIMONIALS</h1>
          <div className="testimonial-row">
            <div className="testimonial-contents" data-aos="fade-right" data-aos-duration="1800">
              {/* <div className="testimonial-img">
                <img src="/images/person1.jpg" alt="testimonial-person-img" />
              </div> */}
              <div className="testimonial-text">
                Truly Help Foundation is one of the most orgnaised and well mentained NGO.
                Their Covid Care India Program has helped many needful people during the pandemic.
                I feel very obliged to be a part of such reputed NGO.
              </div>
              <div className="testimonial-name">
                - Jhon Doe
              </div>
            </div>
            <span className="span-line"></span>
            <div className="testimonial-contents" data-aos="fade-left" data-aos-duration="1800">
              {/* <div className="testimonial-img">
                <img src="/images/person1.jpg" alt="testimonial-person-img" />
              </div> */}
              <div className="testimonial-text">
                Truly Help Foundation is one of the most orgnaised and well mentained NGO.
                Their Covid Care India Program has helped many needful people during the pandemic.
                I feel very obliged to be a part of such reputed NGO.
              </div>
              <div className="testimonial-name">
                - Jhon Doe
              </div>
            </div>
            <span className="span-line"></span>
            <div className="testimonial-contents" data-aos="fade-right" data-aos-duration="1800">
              {/* <div className="testimonial-img">
                <img src="/images/person1.jpg" alt="testimonial-person-img" />
              </div> */}
              <div className="testimonial-text">
                Truly Help Foundation is one of the most orgnaised and well mentained NGO.
                Their Covid Care India Program has helped many needful people during the pandemic.
                I feel very obliged to be a part of such reputed NGO.
              </div>
              <div className="testimonial-name">
                - Jhon Doe
              </div>
            </div>
            <span className="span-line"></span>
            <div className="testimonial-contents" data-aos="fade-left" data-aos-duration="1800">
              {/* <div className="testimonial-img">
                <img src="/images/person1.jpg" alt="testimonial-person-img" />
              </div> */}
              <div className="testimonial-text">
                Truly Help Foundation is one of the most orgnaised and well mentained NGO.
                Their Covid Care India Program has helped many needful people during the pandemic.
                I feel very obliged to be a part of such reputed NGO.
              </div>
              <div className="testimonial-name">
                - Jhon Doe
              </div>
          </div>
            <span className="span-line"></span>
          </div>
        </div>
        <div className="twitter-list-container">
          <h1 className="title">TWITTER NEWS</h1>
          <div className="testimonial-row">
            <div className="testimonial-contents" data-aos="fade-right" data-aos-duration="1800">
              {/* <div className="testimonial-img">
                <img src="/images/person1.jpg" alt="testimonial-person-img" />
              </div> */}
              <div className="testimonial-text">
                Truly Help Foundation is one of the most orgnaised and well mentained NGO.
                Their Covid Care India Program has helped many needful people during the pandemic.
                I feel very obliged to be a part of such reputed NGO.
              </div>
              <div className="testimonial-name">
                - Jhon Doe
              </div>
            </div>
            <span className="span-line"></span>
            <div className="testimonial-contents" data-aos="fade-left" data-aos-duration="1800">
              {/* <div className="testimonial-img">
                <img src="/images/person1.jpg" alt="testimonial-person-img" />
              </div> */}
              <div className="testimonial-text">
                Truly Help Foundation is one of the most orgnaised and well mentained NGO.
                Their Covid Care India Program has helped many needful people during the pandemic.
                I feel very obliged to be a part of such reputed NGO.
              </div>
              <div className="testimonial-name">
                - Jhon Doe
              </div>
            </div>
            <span className="span-line"></span>
            <div className="testimonial-contents" data-aos="fade-right" data-aos-duration="1800">
              {/* <div className="testimonial-img">
                <img src="/images/person1.jpg" alt="testimonial-person-img" />
              </div> */}
              <div className="testimonial-text">
                Truly Help Foundation is one of the most orgnaised and well mentained NGO.
                Their Covid Care India Program has helped many needful people during the pandemic.
                I feel very obliged to be a part of such reputed NGO.
              </div>
              <div className="testimonial-name">
                - Jhon Doe
              </div>
            </div>
            <span className="span-line"></span>
            <div className="testimonial-contents" data-aos="fade-left" data-aos-duration="1800">
              {/* <div className="testimonial-img">
                <img src="/images/person1.jpg" alt="testimonial-person-img" />
              </div> */}
              <div className="testimonial-text">
                Truly Help Foundation is one of the most orgnaised and well mentained NGO.
                Their Covid Care India Program has helped many needful people during the pandemic.
                I feel very obliged to be a part of such reputed NGO.
              </div>
              <div className="testimonial-name">
                - Jhon Doe
              </div>
          </div>
            <span className="span-line"></span>
          </div>
        </div>
      </div>
      <div className="subscribe-us-container">
        <div className="contents">
          <div className="contact-no">
            <p>Helpline Number: <span>1800-xxxx-xx</span></p>
          </div>
          <div className="email-id">
            <input className="inp-email" type="email" placeholder="Enter Email-Id to Subscribe to News Letter"></input>
            <button className="btn">SUBSCRIBE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
