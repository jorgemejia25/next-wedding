import React from 'react';
import '../styles/home.css';

import Slider from '../components/Slider';

const Page = () => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Aclonica&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700&display=swap" rel="stylesheet" />
      <div className="home">
        <main className="content">
          <section className="hero">
            <h1 className="invitation-title">Tenemos el placer de invitarte.</h1>
            <h2 className="couple-names">Gabriel & Joyce</h2>
            <p className="event-location">Hotel Camino Real, Salón La Ronda y Terraza</p>
            <p className="event-date">Sábado 8 de marzo, 2025</p>
            <button className="rsvp-button">Asistiré</button>
          </section>
          <div className="slider">
            <Slider />
          </div>
        </main>
      </div>
    </>
  );
};

export default Page;
