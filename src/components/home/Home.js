import React from "react";
import "./Home.scss";

const Home = (props) => {
  return (
    <div>
      <div className="home-img-banner"></div>
      <marquee width="60%" direction="right" height="10px"><h4>Hi there</h4></marquee>
      <div className="home-feature-content-1">
        <h3>Causes We Are Sering</h3>
        <div className="home-causes-we-serving-container" id="style-1">
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
        </div>
      </div>
    </div>
  );
};

export default Home;
