"use client";

import CustomImage from "../../atoms/CustomImage";
import Image from "next/image";
import { Lexend_Mega } from "next/font/google";
import React from "react";

const lexend = Lexend_Mega({
  weight: ["400"],
  subsets: ["latin"],
});

const Schedule = () => {
  return (
    <section className="px-6 pt-12 relative flex flex-col items-center overflow-hidden">
      <div className="text-center uppercase text-4xl">¡Te esperamos!</div>

      <div
        className={`grid text-xl  max-w-2xl grid-cols-2 uppercase ${lexend.className} py-7`}
      >
        <div className="text-center p-3 pt-1">
          <p className="mb-2">Elsa Pineda</p>
        </div>

        <div className="text-center p-3 pt-1">
          <p className="mb-2">David Recinos</p>
        </div>
      </div>

      <p className="text-2xl max-w-xl text-center">
        En compañía de nuestras familias tenemos el gusto de invitarle a
        celebrar nuestro matrimonio.
      </p>

      <div className="sm:py-8 relative z-10">
        <CustomImage
          src="/image1.jpg"
          height={400}
          width={500}
          rotateImage={-3}
          rotateBorder={10}
        />
      </div>

      <Image
        src="/leaf1.svg"
        className="absolute top-60 -left-9 z-30"
        height={200}
        width={130}
        alt="Leaf 1"
      />

      <Image
        src="/leaf2.svg"
        className="absolute bottom-10 -right-9 z-30"
        height={200}
        width={170}
        alt="Leaf 2"
      />

      {/* <div className="w-20 h-20 bg-red-500 absolute bottom-0"></div> */}
    </section>
  );
};

export default Schedule;
