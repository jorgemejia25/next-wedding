import Button from "../atoms/Button";
import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";
import React from "react";

const InvitationDetails: React.FC = () => {
  return (
    <>
      <Heading level={1} className="font-regular text-2xl w-60 md:w-auto">
        Tenemos el placer de invitarte.
      </Heading>
      <Heading level={2} className="text-8xl my-9 font-regular">
        Gabriel & Joyce
      </Heading>
      <Paragraph className="text-2xl mb-5">
        Hotel Camino Real, Salón La Ronda y Terraza
      </Paragraph>
      <Paragraph className="text-2xl mb-7">Sábado 8 de marzo, 2025</Paragraph>
      <Button className="bg-white text-2xl py-2 px-4 border border-dark-brown rounded-lg">
        Asistiré
      </Button>
    </>
  );
};

export default InvitationDetails;
