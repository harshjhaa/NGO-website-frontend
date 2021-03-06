import React from "react";

function SliderContent({ activeIndex, contentName, contentComponet }) {
  const renderContent = () => {
    if (
      contentName === "testimonialContent" ||
      contentName === "valuesContent"
    ) {
      return (
        contentComponet &&
        contentComponet.map((slide, index) => (
          <div
            key={index}
            className={index === activeIndex ? "slides active" : "inactive"}
          >
            <div className="testimonial-row">
              {contentName === "valuesContent" && (
                <h1 className="content-title">{slide.title}</h1>
              )}
              <div className="contents">
                <div className="testimonial-img">
                  <img src={slide.image} alt="testimonial-person-img" />
                </div>
                <div className="testimonial-data">
                  <div className="testimonial-text">{slide.description}</div>
                  <br />
                  {contentName === "testimonialContent" && (
                    <div className="testimonial-name">- {slide.name}</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))
      );
    } else {
      return (
        contentComponet &&
        contentComponet.map((slide, index) => (
          <div
            key={index}
            className={index === activeIndex ? "slides active" : "inactive"}
          >
            <img className="slide-image" src={slide.urls} alt="" />
            <div className="banner-contents">
              <h1>{slide.title}</h1>
              <br />
              <h3>{slide.description}</h3>
            </div>
          </div>
        ))
      );
    }
  };

  return (
    <section>
      {renderContent()}
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
