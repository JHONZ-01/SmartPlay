import React from 'react';

const TokensMarket = () => {
  return (
    <section className="section tokens-section" id="tokens" aria-labelledby="tokens-heading">
      <div className="glow-orb glow-orb--purple glow-orb--tokens-center" aria-hidden="true"></div>
      <div className="container">
        <div className="section__header">
          <span className="section__eyebrow" aria-hidden="true">// Sobre Nosotros</span>
          <h2 className="section__title" id="tokens-heading">Sobre Nosotros</h2>
          <p className="section__desc">
            Somos una empresa Ecuatoriana fundada en 2022, inmediatamente después de la pandemia,
            con el objetivo de brindar soluciones financieras accesibles para que más personas
            puedan acceder a tecnologías y servicios digitales.
          </p>
        </div>
      </div>
      <div className="container">
        <style>{`
    .info-card {
      background: rgba(0, 0, 0, 0.63);
      border: 1px solid rgba(255,98,0,0.15);
      border-radius: 16px;
      padding: 28px;
      cursor: pointer;
      transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
      position: relative;
      overflow: hidden;
    }
    .info-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0;
      width: 4px; height: 100%;
      background: #FF6200;
      transform: scaleY(0);
      transition: transform 0.3s ease;
      transform-origin: bottom;
    }
    .info-card:hover {
      transform: translateY(-6px);
      border-color: rgba(255,98,0,0.5);
      box-shadow: 0 12px 40px rgba(255,98,0,0.15);
    }
    .info-card:hover::before {
      transform: scaleY(1);
    }
    .info-card__icon {
      font-size: 2rem;
      margin-bottom: 16px;
      display: block;
    }
    .info-card__title {
      color: #FF6200;
      font-weight: bold;
      font-size: 1rem;
      margin-bottom: 10px;
    }
    .info-card__desc {
      opacity: 0.75;
      font-size: 0.92rem;
      line-height: 1.6;
    }
    .info-cards-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;
      margin-top: 48px;
    }
    @media (max-width: 700px) {
      .info-cards-grid { grid-template-columns: 1fr; }
    }
  `}</style>
        <div className="info-cards-grid">
          {[
            {
              icono: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              ),
              titulo: 'Nuestro Compromiso',
              desc: 'Nuestro principal compromiso es impulsar la inclusión financiera a través de herramientas innovadoras y modelos de financiamiento flexibles.'
            },
            {
              icono: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12c0-2.76 1.12-5.26 2.93-7.07" />
                  <path d="M12 6v6l4 2" />
                  <path d="M2 2l4 4" />
                </svg>
              ),
              titulo: 'Nuestro Origen',
              desc: 'Nacimos de la necesidad de ofrecer alternativas de pago que se ajusten a la realidad de cada cliente, especialmente para quienes no cuentan con historial crediticio sólido o facilidades bancarias tradicionales.'
            },
            {
              icono: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <line x1="12" y1="18" x2="12.01" y2="18" />
                </svg>
              ),
              titulo: 'Nuestra Misión',
              desc: 'A través de nuestro sistema de financiamiento, buscamos que todos, sin importar su nivel socioeconómico, puedan adquirir teléfonos inteligentes y dispositivos que les permitan conectarse con el mundo digital.'
            },
            {
              icono: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ),
              titulo: 'Nuestra Visión',
              desc: 'Creemos en el poder de la tecnología para transformar vidas y reducir brechas. Seguimos innovando y expandiendo nuestro portafolio, enfocados en la satisfacción de nuestros clientes y el desarrollo sostenible de nuestras comunidades.'
            },
          ].map((item, i) => (
            <article className="info-card" key={i} tabIndex="0">
              <div style={{
                width: '56px', height: '56px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(255,98,0,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--color-acid)',
                marginBottom: 'var(--space-5)',
                transition: 'background var(--dur-mid) ease',
              }}>
                {item.icono}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontWeight: '800',
                fontSize: 'var(--text-xl)',
                color: 'var(--color-acid)',
                marginBottom: 'var(--space-4)',
                letterSpacing: '-0.01em',
              }}>
                {item.titulo}
              </h3>
              <p style={{
                color: 'var(--color-white)',
                fontSize: 'var(--text-base)',
                lineHeight: 1.8,
                opacity: 0.9,
              }}>
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TokensMarket;
