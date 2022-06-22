import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import {Keyboard, Pagination, Navigation} from "swiper";
import {useState} from "react";
import {useEffect} from "react";
const Carousel = ({imageUrl}) => {
  return (
    <>
      {imageUrl !== null ? (
        <div className="w-imagePostWidth h-imagePostHeight rounded">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            keyboard={{
              enabled: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Keyboard, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className="rounded">
              <img
                src={imageUrl}
                alt="anh"
                className="rounded w-imagePostWidth h-imagePostHeight object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      ) : null}
    </>
  );
};

export default Carousel;
