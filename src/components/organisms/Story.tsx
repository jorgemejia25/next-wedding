import Heading from "../atoms/Heading";
// import Paragraph from "../atoms/Paragraph";
import React from "react";
import Slider from "../organisms/Slider";

const Story: React.FC = () => {
  return (
    <section className="margin-0 p-8 md:px-48 md:py-48">
      <Heading
        level={2}
        className="text-5xl md:text-6xl  font-regular mb-6 leading-snug"
      >
        Nuestra historia
      </Heading>
      <p className="text-lg mb-7 w-full md:w-1/2">
        No existe un índice en el principio de la vida, ya ha pasado algo de
        tiempo desde que nos encontramos en el momento indicado. Hoy queremos
        compartir con cada uno de ustedes esta celebración, así como lo han
        hecho estos años acompañando en nuestra historia de amor.
      </p>
    </section>
  );
};

export default Story;
