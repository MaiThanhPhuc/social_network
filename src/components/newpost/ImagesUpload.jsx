import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import {Navigation} from "swiper";
import {BsTrash} from "react-icons/bs";

const ImagesUpload = ({imageURLs, setImages}) => {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper rounded"
      >
        {imageURLs.map((img) => (
          <SwiperSlide>
            <div
              onClick={() => setImages(imageURLs.filter((tmp) => tmp !== img))}
              className=" cursor-pointer p-2 absolute top-0 right-0 bg-red/100 rounded"
            >
              <BsTrash />
            </div>
            <img src={img} alt="anh" className="rounded" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ImagesUpload;
