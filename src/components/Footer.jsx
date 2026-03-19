import React from 'react';
import logo from '../assets/images2/logo.webp';

const Footer = ({ showScrollTop }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="footer" role="contentinfo" aria-label="Site footer">
        <div className="container">

          {/* Logo y tagline superior */}
          <div style={{ textAlign: 'center', paddingBottom: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <img src={logo} alt="Smart Pay" style={{ width: '64px', height: '64px', objectFit: 'contain', marginBottom: '12px' }} />
            <p style={{ color: '#FF6200', fontWeight: 'bold', fontStyle: 'italic' }}>
              Gestión inteligente para dispositivos Android
            </p>
          </div>

          {/* 3 columnas */}
          <div className="footer__inner" style={{ paddingTop: '32px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '48px', alignItems: 'start' }}>

            {/* Columna 1: Acerca de */}
            <div>
              <div className="footer__links-title">Acerca de Nosotros</div>
              <p style={{ color: '#FF6200', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '12px' }}>
                <span style={{ color: '#FF6200' }}>SMART</span><span style={{ color: 'white' }}>PAY</span>
              </p>
              <p style={{ opacity: 0.7, fontSize: '0.9rem', lineHeight: '1.7' }}>
                Nacimos de la necesidad de ofrecer alternativas de pago que se
                ajusten a la realidad de cada cliente, especialmente para los que no
                cuentan con un historial crediticio o con facilidades bancarias.
              </p>
            </div>

            {/* Columna 2: Contáctanos */}
            <div>
              <div className="footer__links-title">Contáctanos</div>
              <ul className="footer__links-list" role="list" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', opacity: 0.8, fontSize: '0.9rem' }}>
                  <span>📍</span> Edificio Empresarial Unicornio II, Piso 15-04
                </li>
                <li style={{ display: 'flex', gap: '10px', alignItems: 'center', opacity: 0.8, fontSize: '0.9rem' }}>
                  <span>📞</span> 096 903 1988 - 096 019 2561
                </li>
                <li style={{ display: 'flex', gap: '10px', alignItems: 'center', opacity: 0.8, fontSize: '0.9rem' }}>
                  <span>✉️</span> ventas@lockplay.org
                </li>
              </ul>
            </div>

            {/* Columna 3: Mapa */}
            <div>
              <iframe
                title="Ubicación Smart Pay"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1994.899645628837!2d-78.486106!3d-0.17695800000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a858f56d4d1%3A0xafe084d8581292c2!2sUnicornio%20II%20Edificio%20Empresarial!5e0!3m2!1sen!2sec!4v1773725040511!5m2!1sen!2sec"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

          {/* Barra inferior */}
          <div className="footer__bottom" style={{ marginTop: '32px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ opacity: 0.6, fontSize: '0.85rem' }}>Copyright © 2025 SmartPay. Todos los derechos reservados.</span>

            {/* Redes sociales */}
            <div style={{ display: 'flex', gap: '16px', fontSize: '1.3rem' }}>
              <a href="#" aria-label="Facebook" style={{ opacity: 0.7, transition: 'opacity 0.2s' }} onMouseEnter={e => e.target.style.opacity = 1} onMouseLeave={e => e.target.style.opacity = 0.7}>📘</a>
              <a href="#" aria-label="TikTok" style={{ opacity: 0.7, transition: 'opacity 0.2s' }} onMouseEnter={e => e.target.style.opacity = 1} onMouseLeave={e => e.target.style.opacity = 0.7}>🎵</a>
              <a href="#" aria-label="WhatsApp" style={{ opacity: 0.7, transition: 'opacity 0.2s' }} onMouseEnter={e => e.target.style.opacity = 1} onMouseLeave={e => e.target.style.opacity = 0.7}>💬</a>
              <a href="#" aria-label="Instagram" style={{ opacity: 0.7, transition: 'opacity 0.2s' }} onMouseEnter={e => e.target.style.opacity = 1} onMouseLeave={e => e.target.style.opacity = 0.7}>📷</a>
            </div>
          </div>

        </div>
      </footer>

      {/* Scroll to Top */}
      <button
        className={`scroll-top ${showScrollTop ? 'is-visible' : ''}`}
        id="scroll-top-btn"
        aria-label="Volver arriba"
        onClick={scrollToTop}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <path d="M9 14V4M4 9L9 4L14 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </>
  );
};

export default Footer;