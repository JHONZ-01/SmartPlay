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
      { threshold: 0.2 }
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
          minWidth: '40px', height: '40px',
          background: side === 'left' ? '#FF6200' : '#1a237e',
          clipPath: 'polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'white', fontSize: '16px', flexShrink: 0,
        }}>✓</div>
        <div>
          <p style={{ color: '#FF6200', fontWeight: 'bold', marginBottom: '4px' }}>{item.title}</p>
          {item.items.map((point, j) => (
            <p key={j} style={{ opacity: 0.75, fontSize: '0.9rem' }}>- {point}</p>
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
    <section className="section section--alt" aria-labelledby="stats-heading">

      {/* Estilos de animaciones */}
      <style>{`
        @keyframes pulse-glow {
          0%   { box-shadow: 0 0 20px 4px rgba(255,98,0,0.3); }
          50%  { box-shadow: 0 0 45px 12px rgba(255,98,0,0.6); }
          100% { box-shadow: 0 0 20px 4px rgba(255,98,0,0.3); }
        }
        @keyframes tv-pulse {
          0%   { box-shadow: 0 0 15px 3px rgba(255,98,0,0.2); }
          50%  { box-shadow: 0 0 35px 10px rgba(255,98,0,0.55); }
          100% { box-shadow: 0 0 15px 3px rgba(255,98,0,0.2); }
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

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px 1fr', gap: '48px', alignItems: 'start', marginTop: '48px' }}>
          {/* Columna izquierda: Empresa */}
          <div>
            <h3 style={{ color: '#FF6200', fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '4px' }}>Empresa</h3>
            <p style={{ marginBottom: '32px', opacity: 0.8 }}>Aumenta tus ventas.</p>
            {renderItems(empresaItems, 'left')}
          </div>

          {/* Columna central: TV */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            borderRadius: '50%', width: '340px', height: '340px', padding: '40px',
            background: 'rgba(255,255,255,0.04)',
            animation: 'pulse-glow 3s ease-in-out infinite',
            flexShrink: 0,
          }}>
            <div style={{
              width: '260px', height: '180px',
              border: '8px solid #333', borderRadius: '8px', background: '#111',
              overflow: 'hidden',
              animation: 'tv-pulse 3s ease-in-out infinite',
            }}>
              <img src={tvImage} alt="Smart Pay TV" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }} />
            </div>
          </div>

          {/* Columna derecha: Cliente */}
          <div>
            <h3 style={{ color: '#FF6200', fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '4px' }}>Cliente</h3>
            <p style={{ marginBottom: '32px', opacity: 0.8 }}>Mejora tu nivel crediticio.</p>
            {renderItems(clienteItems, 'right')}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;