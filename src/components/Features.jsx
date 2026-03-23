import React from 'react';

const Features = () => {
  return (
    <section className="section" id="discover" aria-labelledby="features-heading">
      <div className="container">

        <div className="section__header">
          <span className="section__eyebrow" aria-hidden="true">// Smart Pay</span>
          <h2 className="section__title" id="features-heading">
            Gana más con<br />Smart Pay
          </h2>
          <p className="section__desc">
            Asóciate y obtén más beneficios para tu negocio y tus clientes.
            Con Smart Pay, tú te enfocas en vender y nosotros nos encargamos del resto.
          </p>
        </div>

        {/* ── Grid Responsivo Automático usando tus clases ── */}
        <div className="features-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))'
        }}>

          <article className="feature-card feature-card--highlight" tabIndex="0">
            <div className="feature-card__icon feature-card__icon--acid" role="img" aria-label="Ventas">
              💰
            </div>
            <h3 className="feature-card__title">Aumenta tus ventas sin asumir riesgos</h3>
            <p className="feature-card__desc">
              Afíliate a nuestra red y permite que tus clientes compren a crédito
              sin afectar tu liquidez. Sin riesgos para tu tienda.
            </p>
            <span className="feature-card__tag">↑ Sin Riesgos</span>
          </article>

          <article className="feature-card" tabIndex="0">
            <div className="feature-card__icon feature-card__icon--purple" role="img" aria-label="Cuotas">
              🛒
            </div>
            <h3 className="feature-card__title">Vende más con cuotas accesibles</h3>
            <p className="feature-card__desc">
              Facilita el acceso a televisores, celulares y más con pagos
              quincenales, semanales y mensuales. Manten el control del dispositivo.
            </p>
            <span className="feature-card__tag">Pagos Flexibles</span>
          </article>

          <article className="feature-card" tabIndex="0">
            <div className="feature-card__icon feature-card__icon--pink" role="img" aria-label="Seguridad">
              🛡
            </div>
            <h3 className="feature-card__title">Seguridad en cada venta</h3>
            <p className="feature-card__desc">
              Ofrece crédito sin miedo al impago. Nuestra tecnología permite
              bloquear remotamente los dispositivos en caso de incumplimiento.
            </p>
            <span className="feature-card__tag">100% Seguro</span>
          </article>

          <article className="feature-card" tabIndex="0">
            <div className="feature-card__icon feature-card__icon--teal" role="img" aria-label="Clientes">
              🤝
            </div>
            <h3 className="feature-card__title">Atrae más clientes con facilidades</h3>
            <p className="feature-card__desc">
              Amplía tu cartera de clientes con planes de pago flexibles. Más
              personas se animan a comprar cuando saben que pueden pagar en cuotas.
            </p>
            <span className="feature-card__tag">Más Clientes</span>
          </article>

          <article className="feature-card" tabIndex="0">
            <div className="feature-card__icon feature-card__icon--acid" role="img" aria-label="Respaldo">
              🏢
            </div>
            <h3 className="feature-card__title">Respaldo de una empresa sólida</h3>
            <p className="feature-card__desc">
              Tus clientes confían más cuando una empresa formal respalda el
              crédito. Tú te conviertes en una tienda aliada con respaldo tecnológico.
            </p>
            <span className="feature-card__tag">Respaldo Total</span>
          </article>

        </div>
      </div>
    </section>
  );
};

export default Features;