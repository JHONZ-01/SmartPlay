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
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--space-6)',
            paddingBottom: 'var(--space-10)',
            borderBottom: '1px solid var(--color-border)',
          }}>
            <img src={logo} alt="Smart Pay" style={{
              width: '80px', height: '80px', objectFit: 'contain',
              filter: 'drop-shadow(0 0 16px var(--color-glow-acid))',
            }} />
            <p style={{
              color: 'var(--color-acid)',
              fontWeight: '800',
              fontStyle: 'italic',
              fontSize: 'var(--text-xl)',
              fontFamily: 'var(--font-display)',
              letterSpacing: '0.02em',
            }}>
              Gestión inteligente para dispositivos Android
            </p>
          </div>

          {/* 3 columnas */}
          <div style={{
            paddingTop: 'var(--space-10)',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: 'var(--space-12)',
            alignItems: 'start'
          }}>

            {/* Columna 1: Acerca de */}
            <div>
              <div className="footer__links-title">Acerca de Nosotros</div>
              <p style={{
                fontWeight: '800', fontSize: 'var(--text-xl)',
                marginBottom: 'var(--space-4)',
                fontFamily: 'var(--font-display)',
              }}>
                <span style={{ color: 'var(--color-acid)' }}>SMART</span>
                <span style={{ color: 'var(--color-white)' }}>PAY</span>
              </p>
              <p style={{ color: 'var(--color-muted)', fontSize: 'var(--text-sm)', lineHeight: '1.7' }}>
                Nacimos de la necesidad de ofrecer alternativas de pago que se
                ajusten a la realidad de cada cliente, especialmente para los que no
                cuentan con un historial crediticio o con facilidades bancarias.
              </p>
            </div>

            {/* Columna 2: Contáctanos */}
            <div>
              <div className="footer__links-title">Contáctanos</div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
                {[
                  {
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    ),
                    text: 'Edificio Empresarial Unicornio II, Piso 15-04'
                  },
                  {
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.5 2 2 0 0 1 3.6 1.32h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    ),
                    text: '096 903 1988 - 096 019 2561'
                  },
                  {
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    ),
                    text: 'ventas@lockplay.org'
                  },
                ].map((item, i) => (
                  <li key={i} style={{
                    display: 'flex', gap: 'var(--space-3)',
                    alignItems: 'flex-start',
                    color: 'var(--color-muted)', fontSize: 'var(--text-sm)',
                  }}>
                    <span style={{
                      color: 'var(--color-acid)', flexShrink: 0, marginTop: '2px'
                    }}>{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Columna 3: Mapa */}
            <div>
              <div className="footer__links-title">Ubicación</div>
              <iframe
                title="Ubicación Smart Pay"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1994.899645628837!2d-78.486106!3d-0.17695800000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a858f56d4d1%3A0xafe084d8581292c2!2sUnicornio%20II%20Edificio%20Empresarial!5e0!3m2!1sen!2sec!4v1773725040511!5m2!1sen!2sec"
                width="100%"
                height="200"
                style={{
                  border: 0, borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-card)',
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

          {/* Barra inferior */}
          <div style={{
            marginTop: 'var(--space-10)',
            borderTop: '1px solid var(--color-border)',
            paddingTop: 'var(--space-6)',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            flexWrap: 'wrap', gap: 'var(--space-4)',
          }}>
            <span style={{ color: 'var(--color-muted)', fontSize: 'var(--text-xs)' }}>
              Copyright © 2025 SmartPay. Todos los derechos reservados.
            </span>

            {/* Redes sociales con SVGs */}
            <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
              {[
                {
                  label: 'Facebook', href: '#',
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                },
                {
                  label: 'TikTok', href: '#',
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" /></svg>
                },
                {
                  label: 'WhatsApp', href: '#',
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.121 1.533 5.854L.057 23.571l5.86-1.54A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.36-.214-3.722.976.994-3.62-.235-.372A9.818 9.818 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" /></svg>
                },
                {
                  label: 'Instagram', href: '#',
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                },
              ].map((red) => (
                <a
                  key={red.label}
                  href={red.href}
                  aria-label={red.label}
                  style={{
                    width: '38px', height: '38px', borderRadius: '50%',
                    border: '1px solid var(--color-border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--color-muted)',
                    transition: 'color var(--dur-fast) ease, border-color var(--dur-fast) ease, background var(--dur-fast) ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'var(--color-acid)';
                    e.currentTarget.style.borderColor = 'var(--color-acid)';
                    e.currentTarget.style.background = 'rgba(255,98,0,0.08)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'var(--color-muted)';
                    e.currentTarget.style.borderColor = 'var(--color-border)';
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  {red.icon}
                </a>
              ))}
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