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
                <img src={item.url} className="w-full h-[15rem] xl:h-[25rem] object-cover" />
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
                <img src={item.url} className="w-full h-[15rem] xl:h-[25rem] object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
      <div className="flex  divide-x divide-black/30 border border-black/20 py-4 px-8 justify-evenly mx-6 xl:mx-10">
        <div className="flex items-center px-2 xl:px-4">
          <i class="uil uil-rocket text-[#fcb800] text-3xl xl:text-5xl mr-4"></i>
          <div className="flex flex-col">
            <span className="font-bold text-sm xl:base">Free Delivery</span>
            <span className="text-xs xl:text-sm">For all orders over $99</span>
          </div>
        </div>
        <div className="flex items-center px-2 xl:px-4">
          <i class="uil uil-redo text-[#fcb800] text-3xl xl:text-5xl mr-4"></i>
          <div className="flex flex-col">
            <span className="font-bold text-sm xl:base">90 Days return</span>
            <span className="text-xs xl:text-sm">If good have problem</span>
          </div>
        </div>
        <div className="flex items-center px-2 xl:px-4">
          <i class="uil uil-credit-card text-[#fcb800] text-3xl xl:text-5xl mr-4"></i>
          <div className="flex flex-col">
            <span className="font-bold text-sm xl:base">Secure Payment</span>
            <span className="text-xs xl:text-sm">100% secure payment</span>
          </div>
        </div>
        <div className="flex items-center px-2 xl:px-4">
          <i class="uil uil-hipchat text-[#fcb800] text-3xl xl:text-5xl mr-4"></i>
          <div className="flex flex-col">
            <span className="font-bold text-sm xl:base">24/7 Support</span>
            <span className="text-xs xl:text-sm">Dedicated support</span>
          </div>
        </div>
        <div className="flex items-center px-2 xl:px-4">
          <i class="uil uil-gift text-[#fcb800] text-3xl xl:text-5xl mr-4"></i>
          <div className="flex flex-col">
            <span className="font-bold text-sm xl:base">Gift Service</span>
            <span className="text-xs xl:text-sm">Support gift service</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Promotion;
