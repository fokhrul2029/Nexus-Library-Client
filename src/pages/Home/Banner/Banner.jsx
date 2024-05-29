import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation, Autoplay } from "swiper/modules";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Slider from "../Slider/Slider"; 
import axios from "axios";
import { useEffect, useState } from "react";

function Banner() {
  // const categories = useLoaderData([]);
const [categories, setCategories ] = useState(null)

  useEffect(() => {
    axios
      .get("https://b9-a11-jwt-battlefield-backend.vercel.app/books-categories")
      .then((res) => setCategories(res.data))
      .catch((error) => console.error(error));
  }, []);


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
