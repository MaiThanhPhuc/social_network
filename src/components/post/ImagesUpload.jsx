import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import {Navigation} from "swiper";
import {BsTrash} from "react-icons/bs";

const ImagesUpload = ({imageURL, setImages}) => {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper rounded"
      >
        <SwiperSlide>
          <div
            onClick={() => setImages("")}
            className=" cursor-pointer p-2 absolute top-0 right-0 bg-red/100 rounded"
          >
            <BsTrash />
          </div>
          <img src={imageURL} alt="anh" className="rounded" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ImagesUpload;
