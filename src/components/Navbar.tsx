"use client"

import Link from 'next/link';
import { useState } from 'react';
import '../styles/navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Aclonica&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
      <nav className={`navbar ${open ? 'open' : ''}`}>
        <div className="logo">G&F</div>
        <button className="menu-toggle" onClick={() => setOpen(!open)}>
          ☰
        </button>
        <ul className="nav-links">
          <li><Link href="/">Inicio</Link></li>
          <li><Link href="/fotos">Fotos</Link></li>
          <li><Link href="/turismo">Turismo</Link></li>
          <li><Link href="/hospedaje">Hospedaje</Link></li>
          <li><Link href="/vestuario">Vestuario</Link></li>
          <li><Link href="/regalos">Regalos</Link></li>
          <li><Link href="/asistencia">Asistencia</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
