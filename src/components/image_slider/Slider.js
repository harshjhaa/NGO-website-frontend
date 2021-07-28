import React, { useEffect, useState, useCallback } from "react";
import SliderContent from "./SliderContent";
import Dots from "./Dots";
import Arrows from "./Arrows";
import topBannerContent from "./topBannerContent";
import covidBannerContent from "./covidBannerContent";
import "./slider.scss";

const sliderContent = {
  "topBanner" : topBannerContent,
  "covidBanner" : covidBannerContent
}

function Slider({content}) {
  
  const [contetntComp, setContentComp] = useState();
  const [len, setLen] = useState(0);

  useEffect(() => {
    if(content === "topBanner"){
      setContentComp(sliderContent["topBanner"]);
    }else if(content === "covidBanner"){
      setContentComp(sliderContent["covidBanner"]);
    }
  },[])

  useEffect(() => {
    console.log("contetntComp: ", contetntComp);
    if(contetntComp){
      setLen(contetntComp.length-1)
    }
  },[contetntComp])

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} contentComponet={contetntComp} />
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1) //0->2->1->0->2...
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1) //0->1->2->0->1...
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
