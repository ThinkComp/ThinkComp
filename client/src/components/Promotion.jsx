import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import { posters } from "../data";
import { promotions } from "../data";

const Promotion = () => {
  return (
    <div className='flex'>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className='mySwiper w-full h-full'
        style={{ margin: "2rem", flex: "0.7" }}
      >
        {posters.map((item) => (
          <SwiperSlide>
            <img src={item} className='w-full h-[25rem] object-cover' />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        style={{ margin: "2rem", flex: "0.3" }}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className='mySwiper'
      >
        {promotions.map((item) => (
          <SwiperSlide>
            <img src={item} className='w-full h-[25rem] object-cover' />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Promotion;
