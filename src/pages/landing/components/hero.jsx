import React from "react";
import {
  confOne,
  confTwo,
  funOne,
  funTwo,
  partyOne,
  partyTwo,
  weddOne,
  weddTwo,
} from "../../../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";

const Hero = () => {
const navigate = useNavigate();

  return (
    <div className="relative h-screen" id="home">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="absolute inset-0 w-full h-full"
      >
        <SwiperSlide>
          <img
            src={partyOne}
            alt="Party One"
            className="object-cover w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={weddOne}
            alt="Wedding One"
            className="object-cover w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={partyTwo}
            alt="Party Two"
            className="object-cover w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={weddTwo}
            alt="Wedding Two"
            className="object-cover w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={confOne}
            alt="Conference One"
            className="object-cover w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={funOne}
            alt="Funeral One"
            className="object-cover w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={confTwo}
            alt="Conference Two"
            className="object-cover w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={funTwo}
            alt="Funeral Two"
            className="object-cover w-full h-full"
          />
        </SwiperSlide>
      </Swiper>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white bg-black bg-opacity-50">
        <span className="mb-4 text-4xl font-bold">
          Join Us and Discover More
        </span>

        <div className="flex space-x-4">
          <button
            className="px-6 py-2 font-semibold text-white bg-transparent rounded border hover:bg-blue-700"
            onClick={() => navigate("/login")}
          >
            LOG IN
          </button>
          <button className="px-6 py-2 font-semibold text-white bg-transparent rounded border hover:bg-green-700" 
          onClick={() => navigate("/signup")}
          >
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
