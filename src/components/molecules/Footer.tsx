import Button from "../atoms/Button";
import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";
import React from "react";

const InvitationDetails: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center custom-bg p-8">
      <Heading level={2} className="text-5xl font-regular mb-6 md:text-6xl">
        Fecha y Lugar
      </Heading>

      {/* Fecha */}
      <div className="mb-8">
        <h2 className="text-3xl  font-semibold mb-2">Fecha</h2>
        <Paragraph className="text-xl mb-2">
          Sábado 8 de marzo, 18:00hrs
        </Paragraph>
        <Button className="underline text-xl">Agendar en calendario</Button>
      </div>

      {/* Lugar */}
      <div>
        <h2 className="text-3xl   font-semibold mb-2">Lugar</h2>
        <Paragraph className="text-xl mb-2">
          Hotel Camino Real, Salón La Ronda y Terraza
        </Paragraph>
        <Button className="underline text-xl mb-2">Reservar habitación</Button>
        <br />
        <Button className="underline text-xl">Abrir en Waze</Button>
      </div>
    </div>
  );
};

export default InvitationDetails;
