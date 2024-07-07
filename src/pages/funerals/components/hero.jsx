import React from 'react';

import { funFive, funFour, funOne, funThree, funTwo } from "../../../assets";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();
    return (
        <div className="relative h-screen">
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
                    <img src={funFive} alt="Funeral Five" className="object-cover w-full h-full" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={funOne} alt="Funeral One" className="object-cover w-full h-full" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={funThree} alt="Funeral Three" className="object-cover w-full h-full" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={funFour} alt="Funeral Four" className="object-cover w-full h-full" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={funTwo} alt="Funeral Two" className="object-cover w-full h-full" />
                </SwiperSlide>
            </Swiper>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white bg-black bg-opacity-50">
                <h1 className="mb-4 text-4xl font-bold text-center">
                    Honoring Lives, Celebrating Memories <br /> Compassionate Funeral Services
                </h1>
                <div className="flex space-x-4">
                    <button className="px-6 py-2 font-semibold text-white bg-transparent border border-white rounded hover:bg-blue-700" onClick={() => navigate("/create-event")}>
                        Plan a Service
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
