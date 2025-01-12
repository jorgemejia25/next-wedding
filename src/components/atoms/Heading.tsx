import React, { JSX } from "react";

import { Abhaya_Libre } from "next/font/google";

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  children: React.ReactNode;
}

const abhayaLibre = Abhaya_Libre({
  weight: ["400"],
  subsets: ["latin"],
});
const Heading: React.FC<HeadingProps> = ({ level, className, children }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <Tag className={`${abhayaLibre.className} ${className}`}>{children}</Tag>
  );
};

export default Heading;
