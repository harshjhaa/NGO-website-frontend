import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import Dots from "./Dots";
import Arrows from "./Arrows";
import topBannerContent from "./topBannerContent";
import covidBannerContent from "./covidBannerContent";
import testimonialContent from "./testimonialContent";
import valuesContent from "./valuesContent";
import "./slider.scss";

const sliderContentComp = {
  topBannerContent: topBannerContent,
  covidBannerContent: covidBannerContent,
  testimonialContent: testimonialContent,
  valuesContent: valuesContent,
};

function Slider({ contentName }) {
  const [contetntComp, setContentComp] = useState();
  const [len, setLen] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (contentName === "topBannerContent") {
      setContentComp(sliderContentComp["topBannerContent"]);
    } else if (contentName === "covidBannerContent") {
      setContentComp(sliderContentComp["covidBannerContent"]);
    } else if (contentName === "testimonialContent") {
      setContentComp(sliderContentComp["testimonialContent"]);
    }
    else if (contentName === "valuesContent") {
      setContentComp(sliderContentComp["valuesContent"]);
    }
    setTimeout(() => {
      // console.log("Triggered")
      let first_next = document.getElementsByClassName("next")[0];
      let second_next = document.getElementsByClassName("next")[1];
      let third_next = document.getElementsByClassName("next")[2];
      if (first_next) {
        first_next.click();
      }
      if (second_next) {
        second_next.click();
      }
      if (third_next) {
        third_next.click();
      }
    }, 1000);
  }, []);

  useEffect(() => {
    if (contetntComp) {
      setLen(contetntComp.length - 1);
    }
  }, [contetntComp]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="slider-container">
      <SliderContent
        activeIndex={activeIndex}
        contentName={contentName}
        contentComponet={contetntComp}
      />
      <Arrows
        prevSlide={
          () => setActiveIndex(activeIndex < 1 ? len : activeIndex - 1) //0->2->1->0->2...
        }
        nextSlide={
          () => setActiveIndex(activeIndex === len ? 0 : activeIndex + 1) //0->1->2->0->1...
        }
      />
      <Dots
        activeIndex={activeIndex}
        contentComponet={contetntComp}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
}

export default Slider;
