import React from "react";
import Heading from "../atoms/Heading";

const CTA: React.FC = () => {
  return (
    <section className="bg-custom-bg p-8 md:px-48 md:py-24 text-center">
      <Heading
        level={2}
        className="text-4xl md:text-5xl font-regular mb-6 leading-snug"
      >
        ¡Deseamos Verte!
      </Heading>
      <p className="text-lg mb-6">
        La celebracion no sera la misma sin ti. Por favor confirma tu asistencia a través del enlace de confirmacion a continuacion.
      </p>
      <p className="text-base mb-6">
        Reserva antes del 15 de febrero.
      </p>
      <a
        href="#"
        className="inline-block text-base md:text-lg py-4 px-6 border border-dark-brown rounded-full text-dark-brown bg-white hover:bg-dark-brown hover:text-white transition-all"
      >
        Asistiré!
      </a>
    </section>
  );
};

export default CTA;
