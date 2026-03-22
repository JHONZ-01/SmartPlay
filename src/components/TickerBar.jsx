import React from 'react';

// Cargar automáticamente todas las imágenes
const images = import.meta.glob('../assets/images/*', { eager: true });

// Convertir a array usable
const brands = Object.entries(images).map(([path, module]) => {
  const fileName = path.split('/').pop().split('.')[0];

  return {
    name: fileName,
    src: module.default,
  };
});

const TickerBar = () => {
  return (
    <div style={{
      overflow: 'hidden',
      paddingBlock: 'var(--space-16)',
      display: 'flex', flexDirection: 'column', gap: 'var(--space-8)',
      background: 'linear-gradient(135deg, rgba(255, 98, 0, 1) 0%, rgba(255,149,84,0.04) 50%, rgba(255, 98, 0, 1) 100%)',
      borderTop: '1px solid rgba(255,98,0,0.1)',
      borderBottom: '1px solid rgba(255, 98, 0, 0.14)',
    }}>

      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .ticker-track--left {
          animation: marquee-left 45s linear infinite;
        }
        .ticker-track--right {
          animation: marquee-right 45s linear infinite;
        }
        .ticker-brand {
          transition: transform var(--dur-mid) var(--ease-spring);
          cursor: pointer;
        }
        .ticker-brand:hover {
          transform: translateY(-8px) scale(1.1);
        }
      `}</style>

      {/* Título */}
      <div style={{ textAlign: 'center' }}>
        <span className="section__eyebrow">// Marcas</span>
        <h2 className="section__title" style={{ marginTop: 'var(--space-3)' }}>
          Las mejores marcas<br />trabajan con nosotros
        </h2>
      </div>

      {/* Carrusel 1 — izquierda */}
      <div style={{ overflow: 'hidden', paddingBlock: 'var(--space-6)' }}>
        <div className="ticker-track--left" style={{
          display: 'flex', gap: 'var(--space-16)',
          width: 'max-content', alignItems: 'center'
        }}>
          {[...brands, ...brands].map((brand, i) => (
            <React.Fragment key={`a-${i}`}>
              <div className="ticker-brand" style={{
                display: 'flex', alignItems: 'center',
                padding: 'var(--space-3) var(--space-6)',
                background: '#ffffff',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-card)',
              }}>
                <img
                  src={brand.src}
                  alt={brand.name}
                  style={{ height: '70px', width: 'auto' }}
                />
              </div>
              <div style={{
                width: '8px', height: '8px', borderRadius: '50%',
                background: 'var(--color-acid)', opacity: 0.3, flexShrink: 0
              }} />
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Carrusel 2 — derecha */}
      <div style={{ overflow: 'hidden', paddingBlock: 'var(--space-6)' }}>
        <div className="ticker-track--right" style={{
          display: 'flex', gap: 'var(--space-16)',
          width: 'max-content', alignItems: 'center'
        }}>
          {[...brands, ...brands].map((brand, i) => (
            <React.Fragment key={`b-${i}`}>
              <div className="ticker-brand" style={{
                display: 'flex', alignItems: 'center',
                padding: 'var(--space-3) var(--space-6)',
                background: '#ffffff',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-card)',
              }}>
                <img
                  src={brand.src}
                  alt={brand.name}
                  style={{ height: '70px', width: 'auto' }}
                />
              </div>
              <div style={{
                width: '8px', height: '8px', borderRadius: '50%',
                background: 'var(--color-acid)', opacity: 0.3, flexShrink: 0
              }} />
            </React.Fragment>
          ))}
        </div>
      </div>

    </div>
  );
};

export default TickerBar;