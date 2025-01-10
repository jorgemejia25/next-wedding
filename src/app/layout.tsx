import "./globals.css";

import {
  Abhaya_Libre,
  Bodoni_Moda,
  Cormorant,
  Cormorant_Garamond,
  Lato,
  Lemon,
  Quicksand,
} from "next/font/google";

import type { Metadata } from "next";
import React from "react";
import SessionProvider from "./SessionProvider";

// const gfsDidot = GFS_Didot({
//   weight: ["400"],
//   subsets: ["greek"],
// });
const abhayaLibre = Quicksand({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gabriel y Joyce",
  description: "Invitación a la boda de Gabriel y Joyce",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SessionProvider>
        <body className={`${abhayaLibre.className} text-dark-brown `}>
          {children}
        </body>
      </SessionProvider>
    </html>
  );
}
