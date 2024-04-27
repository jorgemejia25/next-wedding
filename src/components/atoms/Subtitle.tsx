import React from "react";

type SubtitleProps = {
  label: string;
};

const Subtitle: React.FC<SubtitleProps> = ({ label }) => {
  return (
    <h3 className="uppercase text-center text-lg font-bold tracking-2">
      {label}
    </h3>
  );
};

export default Subtitle;
