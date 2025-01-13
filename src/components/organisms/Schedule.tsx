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
          Fecha y hora
        </Heading>
        <p className="text-xl font-regular  mb-6">
          18:00hrs, sábado 8 de marzo de 2025
        </p>
        <a
          href="https://calendar.app.google/QLLh7Wxrafma5aQw8"
          className="underline md:text-xl block mb-6"
        >
          Agregar al calendario
        </a>
        <Heading
          level={2}
          className="text-5xl md:text-6xl font-regular mb-2 leading-snug"
        >
          Lugar
        </Heading>
        <p className="text-xl font-regular mb-6">
          Hotel Camino Real, Salón La Ronda y Terraza
        </p>
        <a
          href="https://www.marriott.com/es/hotels/guawi-the-westin-camino-real-guatemala/overview/"
          className="underline block mb-6 md:text-xl"
        >
          Reservar habitación
        </a>
        <a
          href="https://ul.waze.com/ul?ll=14.59777475%2C-90.51616625&navigate=yes&zoom=17&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
          className="underline block mb-6 md:text-xl"
        >
          Abrir en Waze
        </a>
      </div>
    </section>
  );
};

export default Schedule;
