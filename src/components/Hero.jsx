import React from 'react';
import { useToast } from './ToastProvider';
import tvHero from '../assets/images2/dispositivos.png';

const Hero = () => {
  const { showToast } = useToast();

  return (
    <section className="hero stacking-root" id="hero" aria-labelledby="hero-title" style={{ paddingBottom: 'var(--space-12)' }}>
      <div className="hero__bg" aria-hidden="true"></div>
      <div className="hero__grid" aria-hidden="true"></div>

      {/* ── GLOWS MEJORADOS ── */}
      <div className="glow-orb glow-orb--acid glow-orb--hero-purple" style={{
        opacity: 0.5, width: '900px', height: '900px',
        top: '-25%', left: '-15%', filter: 'blur(140px)',
        background: 'radial-gradient(circle, rgba(255,98,0,0.4) 0%, transparent 70%)',
      }} aria-hidden="true" />

      <div className="glow-orb glow-orb--acid glow-orb--hero-acid" style={{
        opacity: 0.35, width: '700px', height: '700px',
        filter: 'blur(120px)',
        background: 'radial-gradient(circle, rgba(255,60,0,0.5) 0%, transparent 70%)',
      }} aria-hidden="true" />

      {/* Glow extra derecha */}
      <div style={{
        position: 'absolute', top: '10%', right: '-5%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,130,0,0.2) 0%, transparent 70%)',
        filter: 'blur(80px)', pointerEvents: 'none',
      }} aria-hidden="true" />

      <div className="container">
        <div className="hero__inner" style={{ alignItems: 'center' }}>

          {/* ── COLUMNA IZQUIERDA ── */}
          <div className="hero__content" style={{ flex: 1 }}>
            <h1 className="hero__title" id="hero-title" style={{
              lineHeight: 1.1,
              fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', // Tamaño de letra más controlado
              marginBottom: 'var(--space-4)'
            }}>
              Impulsa tu negocio<br />
              y <span className="hero__title-line--acid" style={{ color: '#FF8a40' }}>vende más</span> sin límites.
            </h1>

            <p className="hero__subtitle" style={{ marginBottom: 'var(--space-6)', color: 'var(--color-white)', opacity: 0.9 }}>
              Afíliate y ofrece <strong>facilidades de pago</strong> a tus clientes de forma rápida y segura.
            </p>
            <p className="hero__subtitle" style={{ marginBottom: 'var(--space-10)', fontSize: 'var(--text-base)', opacity: 0.7 }}>
              Aumenta tus ventas, atrae más clientes y deja la gestión de pagos en manos de expertos.
            </p>

            {/* ── BOTONES ── */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-6)', flexWrap: 'wrap' }}>

              {/* Botón principal */}
              <a
                href="#cta-heading"
                className="btn btn--primary btn--lg"
                id="get-started-btn"
                style={{
                  boxShadow: '0 0 50px rgba(255,98,0,0.6), inset 0 2px 10px rgba(255,255,255,0.4)',
                  border: '1px solid rgba(255,180,120,0.6)',
                  background: 'linear-gradient(180deg, #FF8a40, #D15000)',
                  color: '#fff',
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                  padding: 'var(--space-4) var(--space-8)',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 0 70px rgba(255,98,0,0.8), inset 0 2px 10px rgba(255,255,255,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 50px rgba(255,98,0,0.6), inset 0 2px 10px rgba(255,255,255,0.4)'; }}
              >
                Quiero afiliarme
              </a>

              {/* Separador visual */}
              <div style={{ width: 1, height: 36, background: 'rgba(255,255,255,0.12)', flexShrink: 0 }} />

              {/* Botón WhatsApp glass */}
              <a
                href="https://wa.me/593969031988"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: 'var(--space-4) var(--space-6)',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 'var(--radius-pill)',
                  color: 'rgba(255,255,255,0.85)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: '600', fontSize: 'var(--text-base)',
                  textDecoration: 'none',
                  backdropFilter: 'blur(16px) saturate(160%)',
                  WebkitBackdropFilter: 'blur(16px) saturate(160%)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.1)',
                  transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
                  position: 'relative', overflow: 'hidden',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-3px) scale(1.03)';
                  e.currentTarget.style.background = 'rgba(37,211,102,0.15)';
                  e.currentTarget.style.borderColor = 'rgba(37,211,102,0.4)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(37,211,102,0.3), inset 0 1px 0 rgba(255,255,255,0.15)';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.1)';
                  e.currentTarget.style.color = 'rgba(255,255,255,0.85)';
                }}
              >
                {/* Reflejo cristal */}
                <div style={{
                  position: 'absolute', inset: '0 0 50% 0',
                  background: 'linear-gradient(to bottom, rgba(255,255,255,0.08) 0%, transparent 100%)',
                  pointerEvents: 'none', borderRadius: 'inherit',
                }} />
                <div style={{
                  width: 28, height: 28, borderRadius: '50%',
                  background: '#25D366',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, boxShadow: '0 0 12px rgba(37,211,102,0.5)',
                  position: 'relative', zIndex: 1,
                }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.121 1.533 5.854L.057 23.571l5.86-1.54A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.36-.214-3.722.976.994-3.62-.235-.372A9.818 9.818 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
                  </svg>
                </div>
                <span style={{ position: 'relative', zIndex: 1 }}>Contáctanos por WhatsApp</span>
              </a>

            </div>
          </div>

          {/* ── COLUMNA DERECHA — intacta ── */}
          <div className="hero__phones float-anim" aria-hidden="true" style={{ position: 'relative' }}>
            <img
              src={tvHero}
              alt="Smart Pay Mockups"
              style={{
                width: '100%', maxHeight: '650px', objectFit: 'contain',
                filter: 'drop-shadow(0 0 80px rgba(255,98,0,0.6)) drop-shadow(0 30px 60px rgba(0,0,0,0.8))',
                zIndex: 10, position: 'relative',
              }}
            />
            <div style={{
              position: 'absolute', top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '350px', height: '350px',
              background: 'rgba(255,98,0,0.5)', filter: 'blur(120px)',
              zIndex: 1, borderRadius: '50%',
            }} />
          </div>
        </div>

        {/* ── FEATURE CARDS — intactas ── */}
        <div style={{ marginTop: 'var(--space-16)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-6)' }}>
          {[
            { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" /></svg>, title: 'Aumenta tus ventas', desc: 'Atrae más clientes con facilidades de pago' },
            { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>, title: 'Más clientes', desc: 'Facilita las compras en tu negocio.' },
            { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>, title: 'Proceso rápido', desc: 'Aprobación y gestión en minutos.' },
          ].map((card, i) => (
            <div key={i} style={{ background: 'rgba(20,20,30,0.6)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-6)', display: 'flex', alignItems: 'center', gap: 'var(--space-4)', backdropFilter: 'blur(16px)', boxShadow: '0 12px 32px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.05)' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'linear-gradient(135deg, #FF8a40, #D15000)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 0 20px rgba(255,98,0,0.4)', border: '1px solid rgba(255,255,255,0.2)' }}>
                {card.icon}
              </div>
              <div>
                <h3 style={{ color: 'white', fontWeight: '700', fontSize: 'var(--text-lg)', marginBottom: '4px', fontFamily: 'var(--font-display)' }}>{card.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 'var(--text-sm)', lineHeight: 1.4 }}>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── TRUST BADGES — intactos ── */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-8)', marginTop: 'var(--space-8)', flexWrap: 'wrap' }}>
          {['+100 tiendas activas', 'Miles de facilidades aprobadas'].map((label, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.5)', fontSize: 'var(--text-sm)', fontWeight: '600' }}>
              <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              {label}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;