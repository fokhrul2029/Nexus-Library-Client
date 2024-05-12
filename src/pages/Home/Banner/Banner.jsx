import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Slider from "../Slider/Slider";
import { useLoaderData } from "react-router-dom";

function Banner() {
  const categories = useLoaderData();
  return (
    <div>
      <Swiper
        className="mySwiper"
        pagination={true}
        navigation={true}
        autoplay={true}
        modules={[Pagination, Navigation, Autoplay]}
      >
        {categories?.map((data) => (
          <SwiperSlide key={data._id}>
            <Slider data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Banner;
