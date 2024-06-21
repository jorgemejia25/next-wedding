"use client";

import { Lexend_Mega, Luxurious_Script } from "next/font/google";

import Countdown from "../../../../public/Countdown";
import React from "react";
import styles from "./Header.module.css";

const lexend = Lexend_Mega({
  weight: ["400"],
  subsets: ["latin"],
});

const luxurious = Luxurious_Script({
  weight: ["400"],
  subsets: ["latin"],
});

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="px-12 py-20 flex flex-col items-center justify-between h-full text-white">
        <div className={`${lexend.className} text-center uppercase`}>
          <p className="text-sm mb-2">Save the Date</p>
          <p className="text-xl">28 sept 2024</p>
        </div>

        <div className={`${styles.titleContainer} p-4 text-center`}>
          <div className={`${styles.name1}`}>Elsa</div>
          <div className={`${luxurious.className} ${styles.separator}`}>&</div>
          <div className={`${styles.name2}`}>David</div>
        </div>

        <Countdown />
      </div>
    </header>
  );
};

export default Header;
