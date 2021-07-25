import React from "react";

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div key={index} className={index === activeIndex ? "slides active" : "inactive"}>
          <img className="slide-image" src={slide.urls} alt="" />
          <div className="banner-contents">
            <h1>{slide.title}</h1>
            <br />
            <h3>{slide.description}</h3>
          </div>
        </div>
      ))}
      {/* <br />
      <div className="inp-btn">
      <input
        className="input-donate"
        type="number"
        placeholder="DONATE ANY AMOUNT (INR)"
        ></input>
        <button className="donate-inp-btn">PROCEED</button>
      </div>
      <br />
      <br /> */}
    </section>
  );
}

export default SliderContent;
