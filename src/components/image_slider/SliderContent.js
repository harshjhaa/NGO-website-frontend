import React from "react";

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slide.urls} alt="" />
          <div className="banner-contents">
            <h1>{slide.title}</h1>
            <br />
            <br />
            <div className="inp-btn">
              <input
                className="input-donate"
                type="number"
                placeholder="DONATE ANY AMOUNT (INR)"
              ></input>
              <button className="donate-inp-btn">PROCEED</button>
            </div>
            <br />
            <br />
            {/* <h3>
              Some rural residents and households are food insecure,
              <br />
              meaning they cannot rely on access to sufficient
              <br />
              affordable and nutritious food at all times,
              <br />
              increasing the risk of poor health outcomes.
            </h3> */}
            <h3>{slide.description}</h3>
          </div>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
