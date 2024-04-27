import { useEffect, useState } from "react";

type UseClimateResult = {
  temperature: number;
  description: string;
  icon: string;
};

const useClimate = (place: string): UseClimateResult => {
  const [climate, setClimate] = useState<UseClimateResult>({
    temperature: 0,
    description: "",
    icon: "",
  });

  useEffect(() => {
    const fetchClimate = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=1d81404ae33b9394fd181ea358dee7cb&units=metric`
        );
        const data = await response.json();

        setClimate({
          temperature: data.main.temp,
          description: data.weather[0].description,
          icon: `https://openweathermap.org/img/w/${data.weather[0].icon}.png`,
        });
      } catch (error) {
        // Handle error
      }
    };

    fetchClimate();
  }, [place]);

  return climate;
};

export default useClimate;
