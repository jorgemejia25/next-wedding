"use client";

import React, { useEffect, useRef } from "react";

import InvitationDetails from "../molecules/InvitationDetails";

const Header: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <>
      <header className="pt-44 margin-0 flex">
        <div className="content flex flex-col items-start justify-start text-left">
          <InvitationDetails />
        </div>
    
      </header>
    </>
  );
};

export default Header;
