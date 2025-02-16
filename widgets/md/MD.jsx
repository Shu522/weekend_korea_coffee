import Title from "./ui/Title";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const MD = () => {
  return (
    <section className="w-full max-w-screen-xl m-auto pt-10">
      <Title />
      <Swiper modules={[Navigation]} slidesPerView={4} navigation={true}>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1577805947697-89e18249d767?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNTgwfDB8MXxzZWFyY2h8NTl8fGRyaW5rfGVufDB8fHx8MTczOTYxMjUzMXww&ixlib=rb-4.0.3&q=80&w=400"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <div>2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div>3</div>
        </SwiperSlide>
        <SwiperSlide>
          <div>4</div>
        </SwiperSlide>
        <SwiperSlide>
          <div>5</div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default MD;
