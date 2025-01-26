"use client";

import Heading from "../atoms/Heading";
import React from "react";
import useCountdown from "@/hooks/useCountdown";

const Countdown = () => {
  const { days, hours, minutes } = useCountdown({
    targetDate: new Date("2025-03-08T00:00:00Z"),
  });

  return (
    <section className="pb-8 mt-12 flex flex-col items-center justify-center">
      <Heading level={2} className={`font-bold text-3xl`}>
        Tiempo restante
      </Heading>

      <div className="flex gap-10 w-[250px] mt-6">
        <div className="text-center w-20">
          <div className="text-5xl">{days}</div>
          <div className="text-xl mt-2">Días</div>
        </div>
        <div className="text-center w-20">
          <div className="text-5xl">{hours}</div>
          <div className="text-xl mt-2">Horas</div>
        </div>
        <div className="text-center w-20">
          <div className="text-5xl">{minutes}</div>
          <div className="text-xl mt-2">Min</div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
