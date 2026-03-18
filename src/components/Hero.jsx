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

            {/* Imagen TV */}
            <div className="hero__phones float-anim" aria-hidden="true">
              <img
                src="/src/assets/images/unnamed-removebg-preview.png"
                alt="Smart Pay TV"
                style={{
                  width: 'clamp(280px, 45vw, 560px)',
                  height: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 0 32px var(--color-glow-acid)) drop-shadow(0 16px 48px rgba(0,0,0,0.4))',
                }}
              />
            </div>
          </div>{/* /.hero__phones */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
