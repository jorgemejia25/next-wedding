import React from "react";

type Subtitle2Props = {
  label: string;
  icon?: React.ReactNode;
};

const Subtitle2: React.FC<Subtitle2Props> = ({ label, icon }) => {
  return (
    <div className="flex flex-col mt-5 items-center justify-center">
      <div className="relative mb-7 w-full">
        <div className="absolute top-0 left-0 w-custom-frac h-075"></div>
        <div className="absolute top-0 right-0 w-custom-frac h-075"></div>
        <div className="flex items-center text-white justify-center bg-fuchsia-300 rounded-full w-10 h-10 absolute -top-5 left-1/2 transform -translate-x-1/2">
          {icon}
        </div>
      </div>
      <h4 className="tracking-2 font-bold uppercase">{label}</h4>
      <div className="mt-2 w-full md:w-96 h-075"></div>
    </div>
  );
};

export default Subtitle2;
