import React, { useEffect } from "react";
import Carousel from "react-elastic-carousel";
import gsap from "gsap";
import AOS from 'aos';
import "./Home.scss";

const Home = (props) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 769, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  useEffect(() => {
    const div = document.querySelectorAll(".home-feature-content-2-container");

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
    <div>
      <div className="home-img-banner"></div>
      <marquee className="home-marquee" direction="left">
        <h2>Your donation and contribution can make a huge difference.</h2>
      </marquee>
      <div className="home-feature-content-1" data-aos="zoom-out-up" data-aos-duration="1000">
        <h2>Causes We Are Serving</h2>
        <div className="home-causes-we-serving-container" id="style-1">
          <Carousel breakPoints={breakPoints} pagination={false}>
            <div className="img-txt">
              <img src="/images/img_1.jpg" alt="home_img-1" />
              <h4>Help Senior Citizens</h4>
            </div>
            <div className="img-txt">
              <img src="/images/img_2.jpg" alt="home_img-2" />
              <h4>Help Children Education</h4>
            </div>
            <div className="img-txt">
              <img src="/images/img_3.jpg" alt="home_img-3" />
              <h4>Help Ecosystem</h4>
            </div>
            <div className="img-txt">
              <img src="/images/img_1.jpg" alt="home_img-1" />
              <h4>Help Senior Citizens</h4>
            </div>
            <div className="img-txt">
              <img src="/images/img_2.jpg" alt="home_img-2" />
              <h4>Help Children Education</h4>
            </div>
            <div className="img-txt">
              <img src="/images/img_3.jpg" alt="home_img-3" />
              <h4>Help Ecosystem</h4>
            </div>
          </Carousel>
        </div>
      </div>
      <div className="home-feature-content-2 flex-col">
        <div className="col-left">
          <div className="home-feature-content-2-container">
            <img src="/images/img_1.jpg" alt="home_img-1" />
          </div>
          <div className="home-feature-content-2-container">
            <img src="/images/img_2.jpg" alt="home_img-1" />
          </div>
          <div className="home-feature-content-2-container">
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
      <div class="home-currently-running-programs">
        <h1 
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-duration="1600">CURRENTLY RUNNING PROGRAMS</h1>
        <div class="program-contents">
            <div class="program-content" data-aos="flip-left" data-aos-duration="1600">
                <div class="latest-thinking-image" style={{"background-image": "url(./video-call.jpg);"}}>
                    <p class="feature-content-info-heading">PRESPECTIVES</p>
                </div>
                <div class="latest-thinking-info">
                    <h3 class="latest-thinking-info-heading">Reinfrocing Productivity in the Age of Remote...</h3>
                    <p class="latest-thinking-info-data">Thrust into large-scale work-from-home programs by
                        COVID-19...</p>
                </div>
                <hr />
                <div class="latest-thinking-footer">
                    <div class="latest-thinking-footer-icons">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                    </div>
                    <div class="latest-thinking-footer-arrow">
                        <img src="triangle-right.PNG" />
                    </div>
                </div>
            </div>
            <div class="program-content" data-aos="flip-right" data-aos-duration="1600">
                <div class="latest-thinking-image" style={{"background-image": "url(./video-call.jpg);"}}>
                    <p class="feature-content-info-heading">WHITEPAPERS</p>
                </div>
                <div class="latest-thinking-info">
                    <h3 class="latest-thinking-info-heading">Acceletate Healthy Outcome with Data and AI...</h3>
                    <p class="latest-thinking-info-data">Learn how leading healthcare organizations are
                        accelerating...</p>
                </div>
                <hr />
                <div class="latest-thinking-footer">
                    <div class="latest-thinking-footer-icons">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                    </div>
                    <div class="latest-thinking-footer-arrow">
                        <img src="triangle-right.PNG" />
                    </div>
                </div>
            </div>
            <div class="program-content" data-aos="flip-left" data-aos-duration="1600">
                <div class="latest-thinking-image" style={{"background-image": "url(./video-call.jpg);"}}>
                    <p class="feature-content-info-heading">PRESPECTIVES</p>
                </div>
                <div class="latest-thinking-info">
                    <h3 class="latest-thinking-info-heading">Reinventing Clinical Trial for a New...</h3>
                    <p class="latest-thinking-info-data">As curent social distancing guidelines prevent
                        face-to-face...</p>
                </div>
                <hr />
                <div class="latest-thinking-footer">
                    <div class="latest-thinking-footer-icons">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                    </div>
                    <div class="latest-thinking-footer-arrow">
                        <img src="triangle-right.PNG" />
                    </div>
                </div>
            </div>
            <div class="program-content" data-aos="flip-right" data-aos-duration="1600">
                <div class="latest-thinking-image" style={{"background-image": "url(./video-call.jpg);"}}>
                    <p class="feature-content-info-heading">WHITEPAPERS</p>
                </div>
                <div class="latest-thinking-info">
                    <h3 class="latest-thinking-info-heading">Decision-Making a New Frontier for...</h3>
                    <p class="latest-thinking-info-data">Digital process automation is a forward-looking,
                        practical...</p>
                </div>
                <hr />
                <div class="latest-thinking-footer">
                    <div class="latest-thinking-footer-icons">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                    </div>
                    <div class="latest-thinking-footer-arrow">
                        <img src="triangle-right.PNG" />
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className="home-testimonial-container">
        <h1 data-aos="fade-down" data-aos-duration="1500">TESTIMONIALS</h1>
        <div className="testimonial-row">
          <div className="testimonial-contents" data-aos="fade-right" data-aos-duration="1800">
            <div className="testimonial-img">
              <img src="/images/person1.jpg" alt="testimonial-person-img" />
            </div>
            <div className="testimonial-text">
              Truly Help Foundation is one of the most orgnaised and well mentained NGO.
              Their Covid Care India Program has helped many needful people during the pandemic.
              I feel very obliged to be a part of such reputed NGO.
            </div>
          </div>
          <div className="testimonial-contents" data-aos="fade-left" data-aos-duration="1800">
            <div className="testimonial-img">
              <img src="/images/person1.jpg" alt="testimonial-person-img" />
            </div>
            <div className="testimonial-text">
              Truly Help Foundation is one of the most orgnaised and well mentained NGO.
              Their Covid Care India Program has helped many needful people during the pandemic.
              I feel very obliged to be a part of such reputed NGO.
            </div>
          </div>
        </div>
        <div className="testimonial-row">
        <div className="testimonial-contents" data-aos="fade-right" data-aos-duration="1800">
            <div className="testimonial-img">
              <img src="/images/person1.jpg" alt="testimonial-person-img" />
            </div>
            <div className="testimonial-text">
              Truly Help Foundation is one of the most orgnaised and well mentained NGO.
              Their Covid Care India Program has helped many needful people during the pandemic.
              I feel very obliged to be a part of such reputed NGO.
            </div>
          </div>
          <div className="testimonial-contents" data-aos="fade-left" data-aos-duration="1800">
            <div className="testimonial-img">
              <img src="/images/person1.jpg" alt="testimonial-person-img" />
            </div>
            <div className="testimonial-text">
              Truly Help Foundation is one of the most orgnaised and well mentained NGO.
              Their Covid Care India Program has helped many needful people during the pandemic.
              I feel very obliged to be a part of such reputed NGO.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
