import Button from "../atoms/Button";
import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";
import React from "react";

const InvitationDetails: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center custom-bg p-8">
      <Heading level={1} className="text-4xl font-regular mb-6 md:text-6xl">
        Fecha y Lugar
      </Heading>

      {/* Fecha */}
      <div className="mb-8">
        <Heading level={2} className="text-2xl font-bold mb-2">
          Fecha
        </Heading>
        <Paragraph className="text-lg mb-2">
          Sábado 8 de marzo, 18:00hrs
        </Paragraph>
        <Button className="underline text-base">
          Agendar en calendario
        </Button>
      </div>

      {/* Lugar */}
      <div>
        <Heading level={2} className="text-2xl font-bold mb-2">
          Lugar
        </Heading>
        <Paragraph className="text-lg mb-2">
          Hotel Camino Real, Salón La Ronda y Terraza
        </Paragraph>
        <Button className="underline text-base mb-2">
          Reservar habitación
        </Button>
        <br/>
        <Button className="underline text-base">
          Abrir en Waze
        </Button>
      </div>
    </div>
  );
};

export default InvitationDetails;
