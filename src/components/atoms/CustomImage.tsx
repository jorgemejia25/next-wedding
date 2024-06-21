import Image from "next/image";
import React from "react";
import style from "./CustomImage.module.css";

type CustomImageProps = {
  src: string;
  height: number;
  width: number;
  className?: string;
  rotateImage?: number;
  rotateBorder?: number;
};

const CustomImage = ({
  src,
  height,
  width,
  className,
  rotateImage,
  rotateBorder,
}: CustomImageProps) => {
  return (
    <div className={`relative m-4 mx-10 sm:mx-24 z-10 overflow-visible`}>
      <div className={style.image} style={{}}>
        <Image
          src={src}
          height={height}
          width={width}
          alt="Custom Image"
          className="z-10"
        />
      </div>
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 border-custom-gold `}
        style={{
          width: `95%`,
          height: `95%`,
          borderWidth: "4px",
        }}
      ></div>
    </div>
  );
};

export default CustomImage;
