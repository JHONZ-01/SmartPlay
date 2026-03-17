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
      background: rgba(255,255,255,0.03);
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
          <article className="info-card" tabIndex="0">
            <span className="info-card__icon">🎯</span>
            <h3 className="info-card__title">Nuestro Compromiso</h3>
            <p className="info-card__desc">
              Nuestro principal compromiso es impulsar la inclusión financiera a través
              de herramientas innovadoras y modelos de financiamiento flexibles.
            </p>
          </article>

          <article className="info-card" tabIndex="0">
            <span className="info-card__icon">🌱</span>
            <h3 className="info-card__title">Nuestro Origen</h3>
            <p className="info-card__desc">
              Nacimos de la necesidad de ofrecer alternativas de pago que se ajusten
              a la realidad de cada cliente, especialmente para quienes no cuentan con
              historial crediticio sólido o facilidades bancarias tradicionales.
            </p>
          </article>

          <article className="info-card" tabIndex="0">
            <span className="info-card__icon">📱</span>
            <h3 className="info-card__title">Nuestra Misión</h3>
            <p className="info-card__desc">
              A través de nuestro sistema de financiamiento, buscamos que todos, sin
              importar su nivel socioeconómico, puedan adquirir teléfonos inteligentes
              y dispositivos que les permitan conectarse con el mundo digital.
            </p>
          </article>

          <article className="info-card" tabIndex="0">
            <span className="info-card__icon">🚀</span>
            <h3 className="info-card__title">Nuestra Visión</h3>
            <p className="info-card__desc">
              Creemos en el poder de la tecnología para transformar vidas y reducir
              brechas. Seguimos innovando y expandiendo nuestro portafolio, enfocados
              en la satisfacción de nuestros clientes y el desarrollo sostenible de
              nuestras comunidades.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default TokensMarket;
