"use client";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
// import required modules
import React from "react";

// Import Swiper React components

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
    <Swiper
      style={
        {
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        } as any
      }
      pagination={true}
      modules={[Pagination, Navigation, Autoplay]}
      navigation={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className="w-full md:w-[800px] top-50 h-80 sm:h-[490px] md:h-[620px] relative mt-12 2xl:mt-0"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className="w-full h-full relative">
          <Image
            src={image}
            alt="Picture of the author"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
