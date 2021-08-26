import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";

import "../../CommonCSS.scss";
import "./OtherWays.scss";

function OtherWays() {
  useEffect(() => {
    AOS.init();
    // window.scrollTo({
    //   top: 0,
    //   left: 0,
    // });
    document.getElementById("get-involved-tab-id").style.color = "#0096ff";
    document.getElementById("get-involved-arrow-id").style.color = "#0096ff";
    return () => {
      document.getElementById("get-involved-tab-id").style.color = "#000";
      document.getElementById("get-involved-arrow-id").style.color = "#000";
    };
  }, []);

  return (
    <div className="other-ways-tab margin-top-4px">
      <div className="banner">
        <img className="banner-img" src="/images/other-ways-tab/banner-1.jpg" />
        <h1 className="banner-text">OTHER WAYS TO HELP</h1>
      </div>
      <div className="bread-crum">
        <Link className="active-link" to="/">
          Home
        </Link>
        <span className="right-arrow">&#62;</span>
        <p>Get Involved</p>
        <span className="right-arrow">&#62;</span>
        <p>Other Ways To Help</p>
      </div>
      <hr style={{ margin: "0px 10px" }} />
      <div className="feature-content-1">
        <h1 className="title">OTHERS WAYS TO DONATE</h1>
        <div className="contents" data-aos="fade-up" data-aos-duration="1000">
          <div className="img-container">
            <img
              className="one-edge-shadow"
              src="/images/aboutus-tab/aboutus-1.jpg"
              alt="education-img"
            />
          </div>
          <div className="text-container">
            <p className="text">
              YOUR SUPPORT HELP US TO BUILD A WORLD WHERE ALL GET EQUAL
              OPPORTUNITY, NO DISCRIMINATION AND BRING A LASTING CHANGE IN THEIR
              LIVES. WHEN YOU CONTRIBUTE TO TRULY HELP FOUNDATION YOU’RE
              BECOMING A PART OF OUR FAMILY, WE’LL ENSURING YOU BE HERE TO CARRY
              OUT OUR MISSION FOR YEARS TO COME.
            </p>
          </div>
        </div>
      </div>
      <section className="only-text-container">
        <div className="contents" data-aos="fade-up" data-aos-duration="1000">
          <div className="text-container">
            <p className="text other-ways-text">
              Explore the many ways you can make a long-lasting impact on
              children who need your help.
            </p>
          </div>
          <div className="fa-container">
            <div className="conent">
              <i className="fa fa-phone-square" aria-hidden="true"></i>
              <p>CALL TO DONATE – 8800202933</p>
            </div>
            <div className="conent">
              <i className="fa fa-user-circle" aria-hidden="true"></i>
              <p>START OWN CAMPAIGN</p>
            </div>
            <div className="conent">
              <i className="fa fa-gift" aria-hidden="true"></i>
              <p>GIFT DISTRIBUTION ON SPECIAL OCCASIONS/FESTIVALS</p>
            </div>
            <div className="conent">
              <i className="fa fa-shopping-bag" aria-hidden="true"></i>
              <p>BUY HANDMADE GIFTS ITEMS</p>
            </div>
          </div>
        </div>
      </section>
      <div className="hr-line">
        <hr />
      </div>
      <div className="only-text-container">
        <div className="contents" data-aos="fade-up" data-aos-duration="1000">
          <div className="text-container">
            <h1 className="title">
              VISIT OUR CENTER AND SPEND SOME QUALITY TIME WITH THE CHILDREN WE
              SUPPORT
            </h1>
            <p className="text">
              Come and interact with the children we are supporting. You can
              either play some games with them or read out their favorite story
              from our huge collection of storybooks or help them to solve some
              maths problem or just spend some peaceful time talking to them.
            </p>
          </div>
          <p className="text other-ways-text margin-top-25">
            Small Gifts You Can Donate
          </p>
          <ul className="gift-content-text gift-text">
            <li className="conent">
              <p>Small Sweet Box</p>
            </li>
            <li className="conent">
              <p>Crayons, Colour Books, Pencils, Sketch Books</p>
            </li>
            <li className="conent">
              <p>Water Bottles, Small Plates, Mugs</p>
            </li>
            <li className="conent">
              <p>Small Biscuits Packets, Tetra Pack Juices, Soft Toffees</p>
            </li>
            <li className="conent">
              <p>
                Toys, Kids Clothes, Storybooks (New or Old but in Good
                Condition)
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="idea-text">
        <p>
          Through your generous contributions, we will fulfil our PRIORITIZED
          BIG IDEAS for 2021-2022!
        </p>
      </div>
      <div className="hr-line">
        <hr />
      </div>
      <br />
    </div>
  );
}

export default OtherWays;
