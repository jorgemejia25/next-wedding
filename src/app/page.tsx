import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/home.css';

const Page = () => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Aclonica&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
      <div className="home">
        <Navbar />
        <main className="content">
          <section className="hero">
            <img src="/PORTADA.jpg" alt="Gaby & Freddy" className="hero-image" />
            <h1 className='hero-h1'>Nuestra boda</h1>
            <h2 className='hero-h2'>Gaby & Freddy</h2>
            <div className="event-details">
              <div>
                <div>Sábado</div>
                <div>8 de febrero, 2025</div>
              </div>
              <div className="separator"></div>
              <div>
                <div>Hotel Jardines del Lago,</div>
                <div>Panajachel</div>
              </div>
            </div>
          </section> 
          <section className="details">
            <h3 className='details-h3'>Día de la boda</h3>
            <p>Sábado, 8 de febrero</p>
            <p>15:00hrs - 21:00hrs</p>
            <p>Tiempo Restante</p>
            <div className="countdown">
              <div className="time-unit">
                <div className="number">30</div>
                <div className="label">días</div>
              </div>
              <div className="time-unit">
                <div className="number">10</div>
                <div className="label">hrs</div>
              </div>
              <div className="time-unit">
                <div className="number">20</div>
                <div className="label">min</div>
              </div>
            </div>
            <div className="event-details-2">
              <div className='separator-div'></div>
              <h1>Hotel Jardines del Lago</h1>
              <p className="address">Calle Monterrey, Panajachel, Guatemala</p>
              <a href="https://www.waze.com/ul" className="waze-button" target="_blank">Abrir en Waze</a>
              <div className='separator-div'></div>
              <div className="schedule">
                <div className="schedule-item">
                  <span className="time">15:00hrs</span>
                  <span className="activity">Ceremonia</span>
                </div>
                <div className="schedule-item">
                  <span className="time">16:00hrs</span>
                  <span className="activity">Coctel</span>
                </div>
                <div className="schedule-item">
                  <span className="time">17:00hrs</span>
                  <span className="activity">Recepción</span>
                </div>
                <div className="schedule-item">
                  <span className="time">17:15hrs</span>
                  <span className="activity">Comida</span>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Page;