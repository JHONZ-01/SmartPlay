import React, { useEffect, useRef } from 'react';
import tvImage from '../assets/images2/tv.png';

const Stats = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
          }
        });
      },
      { threshold: 0.1 } // Se redujo levemente el threshold para que se dispare mejor en móvil
    );

    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => itemsRef.current.forEach((el) => { if (el) observer.unobserve(el); });
  }, []);

  let itemIndex = 0;

  const renderItems = (items, side) => items.map((item, i) => {
    const idx = itemIndex++;
    return (
      <div
        key={i}
        ref={(el) => (itemsRef.current[idx] = el)}
        style={{
          display: 'flex', gap: '16px', marginBottom: '24px', alignItems: 'flex-start',
          opacity: 0,
          transform: side === 'left' ? 'translateX(-30px)' : 'translateX(30px)',
          transition: `opacity 0.5s ease ${i * 0.15}s, transform 0.5s ease ${i * 0.15}s`,
        }}
      >
        <div style={{
          minWidth: '36px', height: '36px', // Levemente más compacto
          background: side === 'left' ? '#FF6200' : '#1a237e',
          clipPath: 'polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'white', fontSize: '14px', flexShrink: 0,
        }}>✓</div>
        <div>
          <p style={{ color: '#FF6200', fontWeight: 'bold', marginBottom: '4px', fontSize: '1rem' }}>{item.title}</p>
          {item.items.map((point, j) => (
            <p key={j} style={{ opacity: 0.75, fontSize: '0.88rem', marginBottom: '2px', color: 'white' }}>- {point}</p>
          ))}
        </div>
      </div>
    );
  });

  const empresaItems = [
    { title: 'Aprueba crédito.', items: ['Sin Buró de crédito.', 'Facilidad de ventas.'] },
    { title: 'Incrementa tus ganancias.', items: ['Emulador de crédito.', 'Control de pagos.'] },
    { title: 'Sin papeleos', items: ['Contratos automáticos.', 'Copia de cédula.'] },
    { title: 'Sin riesgo.', items: ['Económicos.'] },
  ];

  const clienteItems = [
    { title: 'Facilidad de pagos.', items: ['Semanales.', 'Mensuales.', 'Cuotas pequeñitas.'] },
    { title: 'Premios - Regalos sorpresas.', items: ['Cuotas sin retraso.', 'Sin entrada en tu próxima compra.'] },
    { title: 'Mejora tu historial.', items: ['Certificado de crédito.', 'Mejora de nivel crediticio.'] },
    { title: 'Variedad.', items: ['Marcas.', 'Modelos.'] },
  ];

  return (
    <section className="section section--alt" aria-labelledby="stats-heading" style={{ padding: 'var(--space-12) 0' }}>

      {/* Estilos de animaciones */}
      <style>{`
        @keyframes pulse-glow {
          0%   { box-shadow: 0 0 20px 4px rgba(255,98,0,0.2); }
          50%  { box-shadow: 0 0 40px 10px rgba(255,98,0,0.45); }
          100% { box-shadow: 0 0 20px 4px rgba(255,98,0,0.2); }
        }
        @keyframes tv-pulse {
          0%   { box-shadow: 0 0 15px 3px rgba(255,98,0,0.15); }
          50%  { box-shadow: 0 0 30px 8px rgba(255,98,0,0.35); }
          100% { box-shadow: 0 0 15px 3px rgba(255,98,0,0.15); }
        }
      `}</style>

      <div className="container">
        <div className="section__header">
          <span className="section__eyebrow" aria-hidden="true">// Smart Pay</span>
          <h2 className="section__title" id="stats-heading">¿Por qué Smart Pay?</h2>
          <p className="section__desc">
            De la sala de ventas al hogar de tus clientes, SmartPay te da el control para
            ofrecer televisores a crédito de forma segura, sencilla y sin complicaciones.
          </p>
        </div>

        {/* ── GRID ADAPTABLE INTELIGENTE ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', // Auto-layout sin romper
          gap: '48px',
          alignItems: 'center', // Centrado vertical de la TV con los textos
          marginTop: '48px'
        }}>

          {/* Columna 1: Empresa */}
          <div style={{ order: 1 }}>
            <h3 style={{ color: '#FF6200', fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '4px' }}>Empresa</h3>
            <p style={{ marginBottom: '32px', color: 'rgba(255,255,255,0.7)' }}>Aumenta tus ventas.</p>
            {renderItems(empresaItems, 'left')}
          </div>

          {/* Columna 2: TV (En medio en PC, entre Empresa y Cliente en móvil) */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            order: 2,
          }}>
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              borderRadius: '50%', width: 'clamp(280px, 100%, 340px)', height: 'clamp(280px, 100%, 340px)', padding: '30px',
              background: 'rgba(255,255,255,0.03)',
              animation: 'pulse-glow 3s ease-in-out infinite',
            }}>
              <div style={{
                width: '100%', height: '180px', maxWidth: '260px',
                border: '6px solid #222', borderRadius: '8px', background: '#000',
                overflow: 'hidden',
                animation: 'tv-pulse 3s ease-in-out infinite',
              }}>
                <img src={tvImage} alt="Smart Pay TV" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>

          {/* Columna 3: Cliente */}
          <div style={{ order: 3 }}>
            <h3 style={{ color: '#FF6200', fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '4px' }}>Cliente</h3>
            <p style={{ marginBottom: '32px', color: 'rgba(255,255,255,0.7)' }}>Mejora tu nivel crediticio.</p>
            {renderItems(clienteItems, 'right')}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;