"use client";

import { Abhaya_Libre } from "next/font/google";
import Button from "../atoms/Button";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import React from "react";
import Slider from "../organisms/Slider";
import Swiper from "swiper";
import { SwiperSlide } from "swiper/react";

const abhayaLibre = Abhaya_Libre({
  weight: ["400"],
  subsets: ["latin"],
});

const images = [
  "/1.jpeg",
  "/2.jpeg",
  "/3.jpeg",
  "/4.jpeg",
  "/5.jpeg",
  "/6.jpeg",
  "/7.jpeg",
];

const InvitationDetails: React.FC = () => {
  return (
    <>
      <div className="px-8 md:px-32">
        <h1
          className={`${abhayaLibre.className} font-regular  w-90 md:w-auto text-2xl md:text-3xl`}
        >
          Nuestra boda
        </h1>
        <h2
          className={`${abhayaLibre.className} text-6xl md:text-9xl md:max-w-3xl my-5  font-regular uppercase`}
        >
          Gabriel & Joyce
        </h2>
      </div>
      <div className="grid grid-cols-1 2xl:grid-cols-2 w-screen">
        <div className="px-8 md:px-32">
          <p className="text-xl mb-3 md:text-2xl">Sábado 8 de marzo, 2025</p>
          <p className="text-xl md:text-2xl mb-5">Hotel Camino Real</p>
          <Button className="mt-3 text-lg md:text-xl py-2 px-6 md:py-4 border border-dark-brown rounded-full">
            Ver detalles
          </Button>
        </div>

        <Slider />
      </div>
    </>
  );
};

export default InvitationDetails;
