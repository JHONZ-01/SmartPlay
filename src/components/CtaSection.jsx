import React, { useState } from 'react';

const CtaSection = () => {
  const [form, setForm] = useState({ nombre: '', negocio: '', ciudad: '', telefono: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!form.nombre || !form.telefono) {
      alert("⚠️ Por favor completa nombre y teléfono.");
      return;
    }
    const mensaje = `Hola, quiero afiliarme a Smart Pay!%0A%0A👤 Nombre: ${encodeURIComponent(form.nombre)}%0A🏪 Negocio: ${encodeURIComponent(form.negocio)}%0A📍 Ciudad: ${encodeURIComponent(form.ciudad)}%0A📞 Teléfono: ${encodeURIComponent(form.telefono)}`;
    window.open(`https://api.whatsapp.com/send/?phone=593997518833&text=${mensaje}`, '_blank');
    setForm({ nombre: '', negocio: '', ciudad: '', telefono: '' });
  };

  return (
    <section className="cta-section" aria-labelledby="cta-heading">
      <div className="cta-section__bg" aria-hidden="true"></div>
      <div className="container">
        <div className="cta-section__inner">

          {/* Título */}
          <h2 className="cta-section__title" id="cta-heading" style={{
            background: 'var(--color-acid)', display: 'inline-block',
            padding: 'var(--space-2) var(--space-8)',
            borderRadius: 'var(--radius-sm)', fontStyle: 'italic'
          }}>
            ¡Afíliate ya!
          </h2>
          <p className="cta-section__subtitle">
            Únete a nuestra red de comercios aliados y empieza a ofrecer
            televisores a crédito con respaldo total. ¡Es gratis y sin riesgos!
          </p>

          {/* Layout 2 columnas */}
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1.4fr',
            gap: 'var(--space-12)', marginTop: 'var(--space-10)',
            alignItems: 'center', textAlign: 'left'
          }}>

            {/* Animación para los iconos 3D */}
            <style>{`
              @keyframes float3d {
                0% { transform: translateY(0px) scale(1); filter: drop-shadow(0 5px 5px rgba(255,98,0,0.1)); }
                50% { transform: translateY(-5px) scale(1.05); filter: drop-shadow(0 15px 15px rgba(255,98,0,0.3)); }
                100% { transform: translateY(0px) scale(1); filter: drop-shadow(0 5px 5px rgba(255,98,0,0.1)); }
              }
              .icon-3d {
                animation: float3d 3s ease-in-out infinite;
                width: 35px;
                height: 35px;
                object-fit: contain;
              }
            `}</style>

            {/* Columna izquierda: Beneficios */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              {[
                { iconUrl: 'https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Rocket/3D/rocket_3d.png', texto: 'Registro rápido y sin papeleos', delay: '0s' },
                { iconUrl: 'https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Money%20bag/3D/money_bag_3d.png', texto: 'Aumenta tus ventas sin asumir riesgos', delay: '0.2s' },
                { iconUrl: 'https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Shield/3D/shield_3d.png', texto: 'Respaldo tecnológico y financiero', delay: '0.4s' },
                { iconUrl: 'https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Mobile%20phone/3D/mobile_phone_3d.png', texto: 'Control total desde tu celular', delay: '0.6s' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'center' }}>
                  <div style={{
                    minWidth: '56px', height: '56px',
                    background: 'rgba(255,98,0,0.05)',
                    borderRadius: '50%',
                    display: 'flex', alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <img src={item.iconUrl} alt="icon 3d" className="icon-3d" style={{ animationDelay: item.delay }} />
                  </div>
                  <p style={{ fontWeight: '600', fontSize: 'var(--text-base)' }}>{item.texto}</p>
                </div>
              ))}
            </div>

            {/* Columna derecha: Formulario */}
            <div style={{
              background: '#1a237e',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-12) var(--space-10)',
              transform: 'skewX(-3deg)',
              boxShadow: '0 8px 40px rgba(0,0,0,0.4)',
            }}>
              <div style={{ transform: 'skewX(3deg)', display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
                <h3 style={{
                  color: '#fff', fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-xl)', fontWeight: '700', marginBottom: 'var(--space-2)'
                }}>Datos de contacto</h3>

                {[
                  { name: 'nombre', placeholder: 'Nombre completo' },
                  { name: 'negocio', placeholder: 'Nombre del negocio' },
                  { name: 'ciudad', placeholder: 'Ciudad' },
                  { name: 'telefono', placeholder: 'Teléfono / WhatsApp' },
                ].map((field) => (
                  <input
                    key={field.name}
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    style={{
                      background: 'rgba(255,255,255,0.12)',
                      border: '1px solid rgba(255,255,255,0.25)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'white',
                      padding: 'var(--space-4) var(--space-4)',
                      fontSize: 'var(--text-base)',
                      outline: 'none',
                      width: '100%',
                      fontFamily: 'var(--font-body)',
                      letterSpacing: '0.02em',
                    }}
                    onFocus={e => e.target.style.borderColor = 'var(--color-acid)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.25)'}
                  />
                ))}

                <button
                  onClick={handleSubmit}
                  className="btn btn--primary btn--lg"
                  style={{ marginTop: 'var(--space-3)', width: '100%', gap: 'var(--space-3)' }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.121 1.533 5.854L.057 23.571l5.86-1.54A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.36-.214-3.722.976.994-3.62-.235-.372A9.818 9.818 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
                  </svg>
                  Enviar por WhatsApp
                </button>
              </div>
            </div>

          </div>

          {/* Badges de descarga (Comentado según petición) */}
          {/*
          <div className="download-badges" style={{ marginTop: 'var(--space-12)' }}>
            <a className="download-badge" href="#" aria-label="Download on the App Store">
              <span className="download-badge__icon" aria-hidden="true">🍎</span>
              <div className="download-badge__text">
                <div className="download-badge__sub">Download on the</div>
                <div className="download-badge__name">App Store</div>
              </div>
            </a>
            <a className="download-badge" href="#" aria-label="Get it on Google Play">
              <span className="download-badge__icon" aria-hidden="true">▶</span>
              <div className="download-badge__text">
                <div className="download-badge__sub">Get it on</div>
                <div className="download-badge__name">Google Play</div>
              </div>
            </a>
          </div>
          */}

        </div>
      </div>
    </section>
  );
};

export default CtaSection;