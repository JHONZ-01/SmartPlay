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
    <section className="cta-section" id="contacto" aria-labelledby="cta-heading">
      <div className="cta-section__bg" aria-hidden="true"></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Usamos tus clases CSS nativas para el Header del CTA */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto var(--space-10)' }}>
          <h2 className="cta-section__title" id="cta-heading" style={{
            background: 'linear-gradient(135deg, #FF8a40, #D15000)',
            display: 'inline-block',
            padding: 'var(--space-2) var(--space-6)',
            borderRadius: 'var(--radius-sm)',
            fontStyle: 'italic',
            color: '#fff',
            textShadow: '0 1px 2px rgba(0,0,0,0.3)',
            marginBottom: 'var(--space-4)'
          }}>
            ¡Afíliate ya!
          </h2>
          <p className="cta-section__subtitle" style={{ marginBottom: 0 }}>
            Únete a nuestra red de comercios aliados y empieza a ofrecer
            televisores a crédito con respaldo total. ¡Es gratis y sin riesgos!
          </p>
        </div>

        {/* ── GRID ADAPTABLE DE 2 COLUMNAS ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
          gap: 'var(--space-12)',
          alignItems: 'center',
          marginTop: 'var(--space-10)'
        }}>

          <style>{`
            @keyframes float3d {
              0% { transform: translateY(0px) scale(1); filter: drop-shadow(0 5px 5px rgba(255,98,0,0.1)); }
              50% { transform: translateY(-5px) scale(1.05); filter: drop-shadow(0 15px 15px rgba(255,98,0,0.3)); }
              100% { transform: translateY(0px) scale(1); filter: drop-shadow(0 5px 5px rgba(255,98,0,0.1)); }
            }
            .icon-3d {
              animation: float3d 3s ease-in-out infinite;
              width: 32px;
              height: 32px;
              object-fit: contain;
            }
          `}</style>

          {/* Columna izquierda: Beneficios */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
            {[
              { iconUrl: 'https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Rocket/3D/rocket_3d.png', texto: 'Registro rápido y sin papeleos', delay: '0s' },
              { iconUrl: 'https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Money%20bag/3D/money_bag_3d.png', texto: 'Aumenta tus ventas sin asumir riesgos', delay: '0.2s' },
              { iconUrl: 'https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Shield/3D/shield_3d.png', texto: 'Respaldo tecnológico y financiero', delay: '0.4s' },
              { iconUrl: 'https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Mobile%20phone/3D/mobile_phone_3d.png', texto: 'Control total desde tu celular', delay: '0.6s' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 'var(--space-5)', alignItems: 'center' }}>
                <div style={{
                  minWidth: '52px', height: '52px',
                  background: 'rgba(255, 98, 0, 0.08)',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                }}>
                  <img src={item.iconUrl} alt="icon" className="icon-3d" style={{ animationDelay: item.delay }} />
                </div>
                <p style={{ fontWeight: '600', fontSize: 'var(--text-base)', color: 'white', margin: 0 }}>{item.texto}</p>
              </div>
            ))}
          </div>

          {/* Columna derecha: Formulario Glassmorphism adaptado */}
          <div style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-xl)',
            padding: 'var(--space-10) var(--space-8)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
            transform: 'skewX(-2deg)',
            backdropFilter: 'blur(12px)',
          }}>
            <div style={{ transform: 'skewX(2deg)', display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
              <h3 style={{
                color: 'white', fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-xl)', fontWeight: '700', marginBottom: 'var(--space-2)'
              }}>
                Datos de contacto
              </h3>

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
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 'var(--radius-md)',
                    color: 'white',
                    padding: 'var(--space-4)',
                    fontSize: 'var(--text-sm)',
                    outline: 'none',
                    width: '100%',
                    fontFamily: 'var(--font-body)',
                    transition: 'border-color 0.2s ease'
                  }}
                  onFocus={e => e.target.style.borderColor = 'var(--color-acid)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                />
              ))}

              <button
                onClick={handleSubmit}
                className="btn btn--primary"
                style={{
                  marginTop: 'var(--space-2)',
                  width: '100%',
                  padding: '14px',
                  borderRadius: 'var(--radius-md)',
                  background: 'linear-gradient(135deg, #FF8a40, #D15000)',
                  color: 'white',
                  fontWeight: '700',
                  border: 'none',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-2)',
                  cursor: 'pointer',
                  boxShadow: '0 10px 20px rgba(209, 80, 0, 0.3)'
                }}
              >
                Enviar por WhatsApp
              </button>
            </div>
          </div>

        </div>

        {/* Descomenta esto si quieres los badges de apps según tu index.css */}
        {/* <div className="download-badges" style={{ marginTop: 'var(--space-12)' }}>
          <a className="download-badge" href="#">
            <span className="download-badge__icon">🍎</span>
            <div className="download-badge__text">
              <div className="download-badge__sub">Download on the</div>
              <div className="download-badge__name">App Store</div>
            </div>
          </a>
          <a className="download-badge" href="#">
            <span className="download-badge__icon">▶</span>
            <div className="download-badge__text">
              <div className="download-badge__sub">Get it on</div>
              <div className="download-badge__name">Google Play</div>
            </div>
          </a>
        </div>
        */}

      </div>
    </section>
  );
};

export default CtaSection;