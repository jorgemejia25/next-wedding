import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";
import Slider from "../organisms/Slider";
import React from "react";

const Story: React.FC = () => {
  return (
    <div className="custom-bg margin-0 flex flex-col justify-center items-center">
      <main className="content flex flex-col items-center justify-center text-center p-8 ">
        <Paragraph className="text-lg mb-7 w-3/4 md:w-1/2">
            No existe un índice en el principio de la vida, ya ha pasado algo de tiempo desde que nos encontramos en el momento indicado.
            Hoy queremos compartir con cada uno de ustedes esta celebración, así como lo han hecho estos años acompañando en nuestra historia de amor.
        </Paragraph>
        <Heading level={1} className="text-4xl my-8 font-regular md:text-6xl">
            Nuestra historia.
        </Heading>
        <Slider />
        <Paragraph className="text-lg mb-7 w-3/4 md:w-1/2">
            En la radio, hay un pollitoEn la radio, hay un pollitoEl pollito pío, el pollito píoEl pollito pío, el pollito píoEl pollito pío, el pollito pío
            En la radio, hay una gallinaEn la radio, hay una gallinaY la gallina coo, y el pollito píoY el pollito pío, y el pollito píoY el pollito pío, y el pollito pío
        </Paragraph>
      </main>
    </div>
  );
};

export default Story;