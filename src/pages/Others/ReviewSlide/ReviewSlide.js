import React,{useEffect, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./ReviewSlide.css";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination } from "swiper";
// install Swiper modules
SwiperCore.use([Pagination]);

const ReviewSlide = () => {
  const[reviews, setReviews] = useState([])
  useEffect(()=>{
    fetch('https://aqueous-journey-65504.herokuapp.com/reviews')
    .then(res => res.json())
    .then(data => setReviews(data))
  },[])

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {
          reviews.map(review =><SwiperSlide key={review._id}>
            <div className='p-3'>
              <p>{review.customerReview}</p>
              <h4>{review.customerName}</h4>
            </div>
          </SwiperSlide> )
        }
        
      </Swiper>
    </>
  );
};

export default ReviewSlide;
