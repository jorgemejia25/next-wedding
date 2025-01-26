import Countdown from "./Countdown";
import Heading from "../atoms/Heading";
import React from "react";

const Schedule = () => {
  return (
    <section className="bg-custom-bg p-8 md:p-48 flex items-center justify-center">
      <div>
        <Heading
          level={2}
          className="text-5xl md:text-6xl font-regular mb-2 leading-snug"
        >
          Itinerario
        </Heading>
        <p className="text-xl font-regular  mb-6">
          Fecha: Sábado 8 de marzo de 2025
        </p>

        <a
          href="https://calendar.app.google/QLLh7Wxrafma5aQw8"
          className="underline md:text-xl block mb-6"
        >
          Agregar al calendario
        </a>

        <ul>
          <li className="text-xl font-regular mb-6">
            <strong>Boda Civil: &nbsp;</strong>
            18:00 hrs
          </li>
          <li className="text-xl font-regular mb-6">
            <strong>Recepción: &nbsp;</strong>
            19:00 hrs
          </li>
        </ul>

        <Countdown />

        <Heading
          level={2}
          className="text-5xl md:text-6xl font-regular mt-12 mb-2 leading-snug"
        >
          Lugar
        </Heading>
        <p className="text-xl font-regular mb-6">
          Hotel Camino Real, Salón La Ronda y Terraza
        </p>
        <a
          href="https://ul.waze.com/ul?ll=14.59777475%2C-90.51616625&navigate=yes&zoom=17&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
          className="underline block mb-6 md:text-xl"
        >
          Abrir en Waze
        </a>
        <a href="https://www.marriott.com/es/event-reservations/reservation-link.mi?id=1734448209357&key=GRP&guestreslink2=true&app=resvlink">
          <button className="text-lg md:text-xl py-2 px-6 md:py-4 border border-dark-brown rounded-full">
            Reservar habitación
          </button>
        </a>

        <Heading
          level={2}
          className="text-3xl md:text-4xl font-regular mt-12 mb-2 leading-snug"
        >
          Código de Vestimenta
        </Heading>
        <p className="text-xl font-regular mb-6">Formal (no fuscia)</p>
      </div>
    </section>
  );
};

export default Schedule;
