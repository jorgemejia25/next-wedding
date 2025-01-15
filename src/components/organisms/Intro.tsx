"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useRef, useState } from "react";

import { Abhaya_Libre } from "next/font/google";

const abhayaLibre = Abhaya_Libre({
  weight: ["400"],
  subsets: ["latin"],
});

const Intro = () => {
  const [isVisible, setIsVisible] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleClick = () => {
    setIsVisible(false);
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        if (error.name === "NotAllowedError") {
          console.log("User interaction required to play audio");
        }
      });
    }
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center">
              <h1
                className={`${abhayaLibre.className} text-6xl md:text-9xl md:max-w-3xl my-5 text-center  font-regular uppercase`}
              >
                Gabriel & Joyce
              </h1>
              <h2 className="text-xl md:text-3xl">Te invitan a su boda</h2>
              <button
                onClick={handleClick}
                className="mt-8 text-lg md:text-xl py-2 px-6 md:py-4 border border-dark-brown rounded-full"
              >
                Ver invitación
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <audio ref={audioRef}>
        <source src="/fondo.mp3" type="audio/mpeg" />
      </audio>
    </>
  );
};

export default Intro;
