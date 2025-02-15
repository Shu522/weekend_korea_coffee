"use client";

import { Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { constants } from "./data/constant";
import "swiper/css/scrollbar";

const MainSwiper = () => {
  return (
    <section>
      <Swiper
        modules={[Scrollbar]}
        slidesPerView={1}
        loop={true}
        scrollbar={{ draggable: true }}
      >
        {constants.images.map((v, i) => (
          <SwiperSlide key={i}>
            <img src={v} alt="" className="w-screen h-[600px] object-cover " />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default MainSwiper;
