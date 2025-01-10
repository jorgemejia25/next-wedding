import { Abhaya_Libre } from "next/font/google";
import Image from "next/image";
import InvitationDetails from "../molecules/InvitationDetails";
import React from "react";
const Header: React.FC = () => {
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
