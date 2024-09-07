import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper/modules";
import React from "react";

const LogoSlider = ({ logos }) => {
  return (
    <div className="w-full xl:hidden justify-center font-pops">
      <div className="px-3  xl:max-w-screen-xl w-full">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay]}
          className="my-7"
        >
          {logos?.map((logo, index) => (
            <React.Fragment key={index}>
              <SwiperSlide className="flex justify-center items-center">
                <img
                  src={logo}
                  alt="logo"
                  className={`rounded-md min-w-[200px]`}
                />
              </SwiperSlide>
            </React.Fragment>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LogoSlider;
