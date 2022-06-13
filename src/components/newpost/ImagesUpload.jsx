import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import {Navigation} from "swiper";

const ImagesUpload = ({key}) => {
  const postImages = [
    "https://images.unsplash.com/photo-1605791141812-35237abf684e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80",
    "https://images.unsplash.com/photo-1654859583998-0856157255c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    "https://images.unsplash.com/photo-1644982647869-e1337f992828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    "https://images.unsplash.com/photo-1654885506947-fe5280d8e0ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  ];
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
        {postImages.map((img) => (
          <SwiperSlide>
            <img src={img} alt="anh" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ImagesUpload;
