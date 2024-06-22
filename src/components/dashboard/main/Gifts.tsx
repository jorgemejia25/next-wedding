import { Lexend } from "next/font/google";
import React from "react";

const lexend = Lexend({
  weight: ["400"],
  subsets: ["latin"],
});

const Gifts = () => {
  return (
    <section className="flex flex-col p-12 items-center justify-center relative overflow-hidden">
      <div className="border-custom-gold text-center p-2 border-y-2">
        <p className={`${lexend.className} text-sm`}>LISTA DE</p>
        <p className={` text-4xl`}>Regalos</p>
      </div>

      <p className="mt-10 text-center text-xl max-w-md mx-auto">
        Tu presencia es nuestro mayor regalo, pero si deseas obsequiarnos algo
        te adjuntamos algunas sugerencias.
      </p>

      <a href="https://www.casacasaregalos.com/gt/users/9429/recinos-pineda#profile-registro_de_boda">
        <button
          className={`bg-custom-gold text-white text-sm rounded-lg py-2 w-48 mt-10 ${lexend.className}`}
        >
          Lista Casa Casa
        </button>
      </a>
      <a href="https://www.cemaco.com/list/bodarecinospineda ">
        <button
          className={`bg-custom-gold text-white text-sm rounded-lg py-2 w-48 mt-8 ${lexend.className}`}
        >
          Lista Cemaco
        </button>
      </a>
    </section>
  );
};

export default Gifts;
