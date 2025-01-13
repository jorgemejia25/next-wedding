"use client";

import React, { useEffect, useRef } from "react";

import InvitationDetails from "../molecules/InvitationDetails";

const Header: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const handleClick = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(error => {
          if (error.name === 'NotAllowedError') {
            console.log('User interaction required to play audio');
          }
        });
      }
    };

    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <header className="pt-44 margin-0 flex">
        <div className="content flex flex-col items-start justify-start text-left">
          <InvitationDetails />
        </div>
        <audio ref={audioRef}>
          <source src="/fondo.mp3" type="audio/mpeg" />
        </audio>
      </header>
    </>
  );
};

export default Header;
