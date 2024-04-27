import { Variants, motion } from "framer-motion";

import Image from "next/image";
import React from "react";

type TitleProps = {
  src: string;
  label: string;
};

const titleTopVariants: Variants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 1.5,
      type: "spring",
      bounce: 0.5,
    },
  },
};

const Title = ({ src, label }: TitleProps) => {
  return (
    <div className="w-full">
      <motion.h3
        variants={titleTopVariants}
        className={`uppercase tracking-3 font-semibold text-3xl text-center`}
      >
        {label}
      </motion.h3>
    </div>
  );
};

export default Title;
