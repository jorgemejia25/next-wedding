import Button from "@/components/Button";
import CustomImage from "@/components/atoms/CustomImage";
import Image from "next/image";
import { Lexend_Mega } from "next/font/google";
import React from "react";

const lexend = Lexend_Mega({
  weight: ["400"],
  subsets: ["latin"],
});

const Colors = () => {
  return (
    <section className="py-8 flex flex-col items-center justify-center">
      <div className="flex flex-row items-center justify-center ">
        <div
          className={`${lexend.className} border-custom-gold col-span-4 flex items-center justify-center border-b-2 border-t-2 p-2 w-auto sm:w-32 text-xl text-right`}
        >
          SEPT
        </div>
        <div className="text-center text-5xl col-span-1 px-4">28</div>
        <div
          className={`${lexend.className} border-custom-gold col-span-4 flex items-center justify-center border-b-2 border-t-2 p-2 w-auto sm:w-32 text-xl text-left`}
        >
          2024
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-5 w-full max-w-2xl uppercase text-center">
        <div className="p-6 pt-0 flex flex-col justify-center items-center border-custom-gold sm:border-r-2">
          <div className="h-32 flex items-center justify-center">
            <Image src="/church.svg" height={200} width={70} alt="Church" />
          </div>
          <div
            className={`${lexend.className} text-custom-gold mb-2 mt-5 h-auto md:h-24`}
          >
            Parroquia Santo Tomás de Aquino - Tívoli
          </div>
          <div className="mt-2 text-3xl">4:30 PM</div>

          <a href="https://maps.app.goo.gl/Vmik2ZdTYgjeYSD78">
            <button
              className={`bg-custom-gold text-white text-sm rounded-lg py-2 px-4 mt-6 ${lexend.className}`}
            >
              ABRIR MAPA
            </button>
          </a>
        </div>
        <div className="p-6 pt-0 flex flex-col justify-center items-center border-custom-gold sm:border-l-2">
          <div className="h-32 flex items-center justify-center">
            <Image src="/cups.svg" height={200} width={70} alt="Cups" />
          </div>
          <div
            className={`${lexend.className} text-custom-gold  mb-2 mt-5 h-auto md:h-24 tracking-wider`}
          >
            Hotel Real Intercontinental <br />
            <span className="text-sm leading-loose">Gran Salón Roble</span>
          </div>
          <div className="mt-2 text-3xl">7:00 PM</div>
          <a href="https://maps.app.goo.gl/8ijUNKdgEUYwUyf49">
            <button
              className={`bg-custom-gold text-white text-sm rounded-lg py-2 px-4 mt-6 ${lexend.className}`}
            >
              ABRIR MAPA
            </button>
          </a>
        </div>
      </div>

      <div className="py-9 my-2 bg-custom-gold-light w-full">
        <div className="text-center text-2xl">Código de Vestimenta</div>
        <div className="text-center text-5xl mt-2 font-regular">Formal</div>

        <div className="grid text-xl  mx-auto max-w-2xl grid-cols-2 uppercase py-7">
          <div className="text-center p-3 pt-1">
            <p className="mb-2">MUJERES VESTIDO LARGO</p>
            <Image
              src="/dress-woman.svg"
              height={100}
              width={100}
              alt="Dress"
              className="mx-auto mt-8"
            />
          </div>

          <div className="text-center p-3 pt-1">
            <p className="mb-2">HOMBRES TRAJE</p>
            <Image
              src="/dress-man.svg"
              className="mx-auto mt-8"
              height={100}
              width={100}
              alt="Suit"
            />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <CustomImage
          src={"/image2.jpg"}
          width={500}
          height={400}
          rotateImage={2}
          rotateBorder={-12}
        ></CustomImage>
      </div>
    </section>
  );
};

export default Colors;
