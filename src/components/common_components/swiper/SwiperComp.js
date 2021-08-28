// import React from "react";
// import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// // Import Swiper styles
// import "swiper/swiper.min.css";
// import "swiper/components/pagination/pagination.min.css";
// import "swiper/components/navigation/navigation.min.css";
// // import Swiper core and required modules
// import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
// // install Swiper modules
// SwiperCore.use([Autoplay, Pagination, Navigation]);

// function SwiperComp({ name, data }) {
//   const renderDataByName = (name) => {
//     if (name === "CausesWeAreServing") {
//       return (
//         data &&
//         data.map((item) => {
//           console.log(item);
//           <SwiperSlide key={item.link}>
//             <div className="box box-border-red">
//               <div className="content">
//                 <img src={item.imgSrc} alt="home_img-1" />
//                 <h4>{item.title}</h4>
//                 <p>{item.description}</p>
//                 <button className="bttn bttn-red">
//                   <Link to={item.link}>EXPLORE</Link>
//                 </button>
//               </div>
//             </div>
//           </SwiperSlide>;
//         })
//       );
//     }
//   };
//   return (
//     <Swiper
//       slidesPerView={3}
//       spaceBetween={30}
//       slidesPerGroup={3}
//       breakpoints={{
//         960: {
//           slidesPerView: 3,
//           spaceBetween: 8,
//           slidesPerGroup: 3,
//         },
//         720: {
//           slidesPerView: 2,
//           spaceBetween: 10,
//           slidesPerGroup: 2,
//         },
//         540: {
//           slidesPerView: 1,
//           spaceBetween: 2,
//           slidesPerGroup: 1,
//         },
//         320: {
//           slidesPerView: 1,
//           spaceBetween: 2,
//           slidesPerGroup: 1,
//         },
//       }}
//       autoplay={{
//         delay: 5000,
//         disableOnInteraction: false,
//       }}
//       loop={true}
//       pagination={{
//         clickable: true,
//       }}
//       navigation={true}
//       className="mySwiper"
//     >
//       {renderDataByName(name)}
//     </Swiper>
//   );
// }

// export default SwiperComp;
