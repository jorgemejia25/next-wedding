import Image from "next/image";
import React from "react";

type CardProps = {
  src: string;
  label: string;
};

const Card: React.FC<CardProps> = ({ src, label }) => {
  return (
    <div className="p-4 w-64 flex justify-center items-center flex-col">
      <div className="w-48 relative h-48 rounded-full">
        <Image className="rounded-full" fill={true} src={src} alt={label} />
      </div>
      <h5 className="font-semibold text-center mt-4 text-lg tracking-2 uppercase mb-2">
        {label}
      </h5>
    </div>
  );
};

export default Card;
