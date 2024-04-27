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
      <div
        className={style.image}
        style={{
          transform: `rotate(${rotateImage || 0}deg)`,
        }}
      >
        <Image
          src={src}
          height={height}
          width={width}
          alt="Custom Image"
          className="z-10"
        />
      </div>
      <div
        className={`absolute top-0 left-0 w-full h-full z-20 border-custom-gold `}
        style={{
          borderWidth: "2px",
          transform: `rotate(${rotateBorder || 0}deg)`,
        }}
      ></div>
    </div>
  );
};

export default CustomImage;
