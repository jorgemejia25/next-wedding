import InvitationDetails from "../molecules/InvitationDetails";
import React from "react";

const Header: React.FC = () => {
  return (
    <div className="bg-custom h-screen margin-0 flex flex-col justify-center items-center">
      <main className="content flex flex-col items-end justify-end text-right p-8 md:items-center md:justify-center md:text-center">
        <InvitationDetails />
      </main>
    </div>
  );
};

export default Header;
