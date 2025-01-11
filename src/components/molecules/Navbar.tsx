"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        className={`navbar ${
          open ? "open" : ""
        } flex justify-between items-center px-8 md:px-32 py-7 text-xl`}
      >
        <div className="logo">G&J</div>
        {/* <button className="menu-toggle " onClick={() => setOpen(!open)}>
          ☰
        </button> */}
        <ul className="flex list-none gap-6">
          <li>
            <Link href="/fotos">Historia</Link>
          </li>
          <li>
            <Link href="/turismo">Asistencia</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
