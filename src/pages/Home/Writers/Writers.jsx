import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

import WriterCard from "../WriterCard/WriterCard";
import axios from "axios";
import { useState } from "react";

function Writers() {
  const [writers, setWriter] = useState(null);

  axios
    .get("http://localhost:3000/writers")
    .then((res) => {
      setWriter(res.data);
    })
    .catch((error) => console.error(error));

  return (
    <div className="py-14 bg-slate-200 rounded-md">
      <h1 className="text-center text-4xl font-semibold  ">Top Writers</h1>

      <div className="py-10">
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={30}
          autoplay={{ delay: 3000 }}
          modules={[Autoplay]}
          className="mySwiper"
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            900: {
              slidesPerView: 3,
            },
          }}
        >
          {writers?.map((writer) => (
            <SwiperSlide key={writer._id}>
              <WriterCard writer={writer} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Writers;
