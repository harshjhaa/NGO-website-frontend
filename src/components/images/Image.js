// import React, { useState, useEffect } from "react";

// // import EduBannerImg from "/images/education-tab/edu-banners-3.jpg";
// // import HealthBannerImg from "/images/healthcare-tab/healthcare-banner.jpg";
// // import HumanBannerImg from "/images/humanitarian-tab/humanitarian-banner.jpg";
// // import LiveliBannerImg from '/images/education-tab/edu-banners-3.jpg';
// // import SportsBannerImg from "/images/sports-tab/sport-banner.jpg";

// function Image({classNm, componentName }) {

//   const [img, setImg] = useState();

//   useEffect(() => {
//     if (componentName === "Education") {
//       setImg("/images/education-tab/edu-banners-3.jpg");
//     } else if (componentName === "Healthcare") {
//       setImg("/images/healthcare-tab/healthcare-banner.jpg");
//     } else if (componentName === "Humanitarian") {
//       setImg("/images/humanitarian-tab/humanitarian-banner.jpg");
//     } else if (componentName === "Sports") {
//       setImg("/images/sports-tab/sport-banner.jpg");
//     }
//   }, [componentName]);

//   const renderImage = () => {
//     return <img className={classNm} src={img} alt="banner_img" />;
//   };

//   return renderImage();
// }

// export default Image;

import React, { useEffect } from "react";
import AOS from "aos";

function Image({ classNm, source }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <img
    //   data-aos="fade-zoom-in"
    //   data-aos-easing="ease-in-back"
    //   data-aos-delay="300"
    //   data-aos-offset="0"
      className={classNm}
      src={source}
    />
  );
}

export default Image;
