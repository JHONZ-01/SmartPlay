import React from 'react';
import { useToast } from './ToastProvider';

const Hero = () => {
  const { showToast } = useToast();

  return (
    <section className="hero stacking-root" id="hero" aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden="true"></div>
      <div className="hero__grid" aria-hidden="true"></div>
      <div className="glow-orb glow-orb--purple glow-orb--hero-purple" aria-hidden="true"></div>
      <div className="glow-orb glow-orb--acid glow-orb--hero-acid" aria-hidden="true"></div>

      <div className="container">
        <div className="hero__inner">
          <div className="hero__content">
            <div className="hero__badge" aria-label="Now live">
              <span className="hero__badge-dot" aria-hidden="true"></span>
              Smart Play — v2.0
            </div>

            <h1 className="hero__title" id="hero-title">
              <span className="hero__title-line--acid">Potencia</span><br />
              <span>Tu Negocio sin límites.</span><br />
            </h1>

            <p className="hero__subtitle">
              Ofrece televisores a crédito a tus clientes con total facilidad, sin complicaciones y con respaldo total para tu negocio.
            </p>

            <div className="hero__actions">
              <button
                className="btn btn--primary btn--lg"
                id="get-started-btn"
                onClick={() => showToast("📲 Redirigiendo…")}
              >
                Contáctanos
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Phone Mockups */}
          <div className="hero__phones float-anim" aria-hidden="true">

            {/* TV Izquierdo */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              transform: 'rotate(-3deg)',
            }}>
              <div style={{
                width: '280px',
                height: '175px',
                border: '10px solid #222',
                borderRadius: '12px',
                boxShadow: '0 0 30px rgba(255,98,0,0.15), 0 8px 32px rgba(0,0,0,0.6)',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, #0A0A0F, #5e3392ff, #0A0A0F)',
                backgroundSize: '400% 400%',
                animation: 'gradientWave 6s ease infinite',
              }}></div>
              <div style={{ width: '50px', height: '18px', background: '#222', borderRadius: '0 0 4px 4px' }}></div>
              <div style={{ width: '100px', height: '7px', background: '#1a1a1a', borderRadius: '4px' }}></div>
            </div>

            {/* TV Derecho */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              transform: 'rotate(3deg)',
              marginLeft: '32px',
            }}>
              <div style={{
                width: '280px',
                height: '175px',
                border: '10px solid #222',
                borderRadius: '12px',
                boxShadow: '0 0 30px rgba(255,98,0,0.15), 0 8px 32px rgba(0,0,0,0.6)',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, #1a0a2e, #884013ff, #0A0A0F)',
                backgroundSize: '400% 400%',
                animation: 'gradientWave 8s ease infinite reverse',
              }}></div>
              <div style={{ width: '50px', height: '18px', background: '#222', borderRadius: '0 0 4px 4px' }}></div>
              <div style={{ width: '100px', height: '7px', background: '#1a1a1a', borderRadius: '4px' }}></div>
            </div>
          </div>{/* /.hero__phones */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
