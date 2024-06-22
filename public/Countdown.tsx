import { Lexend_Mega } from "next/font/google";
import React from "react";
import useCountdown from "@/hooks/useCountdown";

const lexend = Lexend_Mega({
  weight: ["400"],
  subsets: ["latin"],
});

const Countdown = () => {
  const { days, hours, minutes } = useCountdown({
    targetDate: new Date("2024-09-28T00:00:00Z"),
  });

  return (
    <section className="py-16 flex flex-col items-center text-white justify-center">
      <p className={`${lexend.className} uppercase text-sm mt-12`}>
        Tiempo restante
      </p>

      <div className="flex gap-10 w-52 mt-6">
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
