import React from "react";

import Slider from "./Slider";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Block1.scss";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { sliderdb } from "../../../consts";
const Block1 = () => {
    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={5}
                loop={true}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                {sliderdb.map((item) => (
                    <SwiperSlide key={item.id}>
                        <Slider item={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Block1;
