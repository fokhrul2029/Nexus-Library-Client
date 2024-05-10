import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Slider from "../Slider/Slider";

function Banner() {
  return (
    <div>
      <Swiper
        className="mySwiper"
        pagination={true}
        navigation={true}
        autoplay={true}
        modules={[Pagination, Navigation, Autoplay]}
      >
        <SwiperSlide>
          <Slider />
        </SwiperSlide>
        <SwiperSlide>
          <Slider />
        </SwiperSlide>
        <SwiperSlide>
          <Slider />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner;
