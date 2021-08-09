import React, { useEffect } from "react";
import "./WeHelpEach.scss";
import AOS from "aos";

function WeHelpEach() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="we-help-each-container"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="col-left">
        <h1 className="title">WE HELP EACH</h1>
        <div>
          <p>
            We place a strategic emphasis on promoting quality health care,
            inclusive education, sustainable and gender-fair livelihood
            opportunities, and disaster preparedness and relief. Our efforts are
            focused on combating the root causes of poverty and on ensuring a
            dignified life for all women and girls in the most marginalized and
            vulnerable communities, especially the most backward populations.
            <br />
            Our key programming approaches include social analysis and action,
            transformative gender change, building safe and resilient
            communities, promoting inclusive governance, supporting national and
            international platforms and facilitating connections and dialogues
            between the public, private and civil society.
          </p>
        </div>
      </div>
      <div className="col-right">
        {/* <div className="we-help-each-contents">
            <img src="/images/img_1.jpg" alt="home_img-1" />
          </div>
          <div className="we-help-each-contents">
            <img src="/images/img_2.jpg" alt="home_img-1" />
          </div>
          <div className="we-help-each-contents">
            <img src="/images/img_3.jpg" alt="home_img-1" />
          </div> */}
        {/* Hi */}
        <div className="grid-container">
          <div className="grid">
            <div className="cell cell-1">
              <img src="/images/family-1.png" alt="family_img" />
              <p>FAMILY</p>
            </div>
            <div className="cell cell-2"></div>
            <div className="cell cell-3">
              <img src="/images/community-1.png" alt="community_img" />
              <p>COMMUNITY</p>
            </div>
            <div className="cell cell-4"></div>
            <div className="cell cell-5">
              <img
                className="grid-img-center"
                src="/images/children-1.jpg"
                alt="children_img"
              />
              <p>CHILDREN</p>
            </div>
            <div className="cell cell-6"></div>
            <div className="cell cell-7">
              <img src="/images/home-1.png" alt="home_img" />
              <p>HOME</p>
            </div>
            <div className="cell cell-8"></div>
            <div className="cell cell-9">
              <img src="/images/government-1.png" alt="government_img" />
              <p>GOVERNMENT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeHelpEach;
