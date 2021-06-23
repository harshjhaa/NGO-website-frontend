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
            {/* <div className="img-txt-container"> */}
            <img src="/images/img_1.jpg" alt="home_img-1" />
            {/* <div className="txt-container">
              <h4>Help Senior Citizens</h4>
              <p>
                The “new” old age means that people are living longer than ever
                before. As this New York Times blog states: “Adults over age 80
                are the fastest growing segment of the population; most will
                spend years dependent on others for the most basic needs. That
                burden falls to their baby boomer children.”
              </p>
            </div> */}
            {/* </div> */}
          </div>
          <div className="home-feature-content-2-container">
            {/* <div className="img-txt-container"> */}
            <img src="/images/img_2.jpg" alt="home_img-1" />
            {/* <div className="txt-container">
              <h4>Help Senior Citizens</h4>
              <p>
                The “new” old age means that people are living longer than ever
                before. As this New York Times blog states: “Adults over age 80
                are the fastest growing segment of the population; most will
                spend years dependent on others for the most basic needs. That
                burden falls to their baby boomer children.”
              </p>
            </div> */}
            {/* </div> */}
          </div>
          <div className="home-feature-content-2-container">
            {/* <div className="img-txt-container"> */}
            <img src="/images/img_3.jpg" alt="home_img-1" />
            {/* <div className="txt-container">
              <h4>Help Senior Citizens</h4>
              <p>
                The “new” old age means that people are living longer than ever
                before. As this New York Times blog states: “Adults over age 80
                are the fastest growing segment of the population; most will
                spend years dependent on others for the most basic needs. That
                burden falls to their baby boomer children.”
              </p>
            </div> */}
            {/* </div> */}
          </div>
        </div>
        <div className="col-right" data-aos="fade-up" data-aos-duration="1600">
          <h1>WE HELP EACH</h1>
          <div>
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
      {/* <div className="home-feature-content-row-container">
        <img src="/images/img_2.jpg" alt="image" />
        <div className="home-feature-content-info-container">
          <div class="home-feature-content-info-box">
            <p class="home-feature-content-info-heading">EDUCATING CHILDREN</p>
            <br />
            <h3 class="home-feature-content-info-subheading">
              Discover why Gartner named us a Magic Quadrant Leader
            </h3>
            <p>
              Cognizant’s excellence in public cloud services revolves around
              our ability to deliver high-quality professional and managed
              services that optimize the capabilities of the cloud platform.
            </p>
            <a href="#" class="home-feature-content-button">
              VIEW MORE
            </a>
          </div>
        </div>
      </div>
      <div className="home-feature-content-column-container">
        <div class="home-feature-content-column-container">
          <div class="home-feature-content-column home-feature-content-col-1">
            <div class="home-feature-content-3-img">
              <img
                src="/images/img_2.jpg"
                height="320"
                width="100%"
                alt="image"
              />
            </div>
            <div class="home-feature-content-info">
              <p class="home-feature-content-info-heading">SPECIAL REPORT</p>
              <br />
              <h3 class="home-feature-content-info-subheading">
                Responding to COVID-19
              </h3>
              <p>
                Keeping people healthy (and businesses running) requires these
                three essential tools: information, preparedness and compassion.
              </p>
              <a href="#" class="home-feature-content-button">
                LEARN MORE
              </a>
            </div>
          </div>
          <div class="home-feature-content-column home-feature-content-col-2">
            <div class="home-feature-content-3-img">
              <img
                src="/images/img_2.jpg"
                height="320"
                width="100%"
                alt="image"
              />
            </div>
            <div class="home-feature-content-info">
              <p class="home-feature-content-info-heading">PERSPECTIVES</p>
              <br />
              <h3 class="home-feature-content-info-subheading">
                Tomorrow’s jobs, shaped by COVID-19
              </h3>
              <p>
                Across the U.S. the labor market has experienced a
                pandemic-induced course correction. Our Jobs of the Future Index
                highlights those changes.
              </p>
              <a href="#" class="home-feature-content-button">
                LEARN MORE
              </a>
              
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Home;