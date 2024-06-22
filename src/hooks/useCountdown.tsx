import { useEffect, useState } from "react";

type UseCountdownProps = {
  targetDate: Date;
};

type UseCountdownResult = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

// Asegúrate de pasar `UseCountdownProps` como parámetro para recibir `targetDate`
const useCountdown = ({
  targetDate,
}: UseCountdownProps): UseCountdownResult => {
  const [countdown, setCountdown] = useState<UseCountdownResult>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      // Asegúrate de que `targetDate` es un objeto Date válido
      const distance = targetDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return countdown;
};

export default useCountdown;
