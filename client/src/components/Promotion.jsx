import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import axios from "axios";

const Promotion = () => {
  const [promotions, setPromotions] = useState(null);
  const [posters, setPosters] = useState(null);

  /* This function fetches data from the "/banner" endpoint using axios and sets the promotions and
     posters state variables with the response data. */
  const fetchBanners = async () => {
    await axios.get("/banner").then((res) => {
      setPromotions(res.data.promotions);
      setPosters(res.data.posters);
    });
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  return (
    <>
      {promotions && posters && (
        <div className="flex">
          <Swiper
            spaceBetween={30}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
            className="mySwiper w-full h-full"
            style={{ margin: "2rem", flex: "0.7" }}
          >
            {promotions?.map((item) => (
              <SwiperSlide>
                <img src={item.url} className="w-full h-[25rem] object-cover" />
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
            className="mySwiper"
          >
            {posters?.map((item) => (
              <SwiperSlide>
                <img src={item.url} className="w-full h-[25rem] object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default Promotion;
