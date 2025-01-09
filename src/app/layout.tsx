"use client";

import "./globals.css";

import React, { useEffect, useRef } from "react";

import { Abhaya_Libre } from "next/font/google";
import type { Metadata } from "next";
import SessionProvider from "./SessionProvider";

// const gfsDidot = GFS_Didot({
//   weight: ["400"],
//   subsets: ["greek"],
// });
const abhayaLibre = Abhaya_Libre({
  weight: ["400"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const playAudio = () => {
        audio.play().catch((error) => {
          console.error("Error al reproducir el audio:", error);
        });
      };
      document.addEventListener("click", playAudio);
      return () => {
        document.removeEventListener("click", playAudio);
      };
    }
  }, []);

  return (
    <html lang="en">
      <SessionProvider>
        <body className={`${abhayaLibre.className} text-dark-brown`}>
          <audio ref={audioRef} src="/fondo.mp3" autoPlay loop />
          {children}
        </body>
      </SessionProvider>
    </html>
  );
}
