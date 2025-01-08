"use client";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { EffectCards } from "swiper/modules";
import React from "react";

export default function Slider() {
  const images = [
    "/1.jpeg",
    "/2.jpeg",
    "/3.jpeg",
    "/4.jpeg",
    "/5.jpeg",
    "/6.jpeg",
    "/7.jpeg",
  ];

  return (
    <section className="p-8">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="w-64 h-96 md:w-96 md:h-[520px]"
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center rounded-lg bg-cover bg-center bg-no-repeat w-full h-80 overflow-hidden"
            style={{ backgroundImage: `url(${image})` }}
          ></SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
