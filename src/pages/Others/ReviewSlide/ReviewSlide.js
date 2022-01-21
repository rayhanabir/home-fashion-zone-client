import React from "react";
import camera from '../../../images/camera4.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import "./ReviewSlide.css";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination } from "swiper";
// install Swiper modules
SwiperCore.use([Pagination]);

const ReviewSlide = () => {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide><div>
                <h3>Bangladesh</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui blanditiis sit doloribus sapiente, eligendi iure voluptatum illo ab atque alias in velit voluptatibus vel quidem ducimus voluptatem! Repudiandae, ex facilis.</p>
            </div></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        
      </Swiper>
    </>
  );
};

export default ReviewSlide;
