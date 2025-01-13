"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`navbar ${
        open ? "open" : ""
      } flex justify-between items-center px-8 md:px-32 py-7 text-xl fixed top-0 w-full z-50 bg-white bg-opacity-90 backdrop-blur-md border-b border-white border-opacity-30`}
    >
      <div className="logo">
        <Link href="/">G&J</Link>
      </div>
      <ul className="flex list-none gap-6">
        <li>
          <Link href="/#story">Historia</Link>
        </li>
        <li>
          <Link href="/rsvp">Asistencia</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
