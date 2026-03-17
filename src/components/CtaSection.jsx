import React, { useState } from 'react';
import { useToast } from './ToastProvider';

const CtaSection = () => {
  const { showToast } = useToast();
  const [form, setForm] = useState({ ruc: '', nombre: '', direccion: '', correo: '', telefono: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!form.nombre || !form.correo) {
      showToast("⚠️ Por favor completa los campos requeridos.");
      return;
    }
    showToast("✅ Mensaje enviado, pronto nos contactaremos contigo.");
    setForm({ ruc: '', nombre: '', direccion: '', correo: '', telefono: '' });
  };

  return (
    <section className="cta-section" aria-labelledby="cta-heading">
      <div className="cta-section__bg" aria-hidden="true"></div>
      <div className="container">
        <div className="cta-section__inner">

          {/* Título */}
          <h2 className="cta-section__title" id="cta-heading" style={{
            background: '#FF6200', display: 'inline-block',
            padding: '8px 32px', borderRadius: '6px', fontStyle: 'italic'
          }}>
            Contáctanos
          </h2>
          <p className="cta-section__subtitle">
            ¿Tienes dudas o quieres más información? Escríbenos y descubre cómo
            proteger tu negocio de forma sencilla y segura.
          </p>

          {/* Layout 2 columnas */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', marginTop: '40px', alignItems: 'start', textAlign: 'left' }}>

            {/* Columna izquierda: Info de contacto */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {[
                { icon: '📍', title: 'Dirección', lines: ['Edificio Empresarial Unicornio II, Piso 15-04'] },
                { icon: '📞', title: 'Teléfono', lines: ['096 903 1988', '096 019 2561'] },
                { icon: '✉️', title: 'Correo', lines: ['ventas@lockplay.org'] },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    minWidth: '44px', height: '44px', background: '#FF6200',
                    clipPath: 'polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px'
                  }}>{item.icon}</div>
                  <div>
                    <p style={{ fontWeight: 'bold', fontSize: '1rem', marginBottom: '4px' }}>{item.title}</p>
                    {item.lines.map((line, j) => (
                      <p key={j} style={{ opacity: 0.75, fontSize: '0.9rem' }}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Columna derecha: Formulario */}
            <div style={{
              background: '#1a237e', borderRadius: '12px', padding: '32px',
              transform: 'skewX(-3deg)', boxShadow: '0 8px 40px rgba(0,0,0,0.4)'
            }}>
              <div style={{ transform: 'skewX(3deg)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { name: 'ruc', placeholder: 'Ruc' },
                  { name: 'nombre', placeholder: 'Nombre' },
                  { name: 'direccion', placeholder: 'Dirección' },
                  { name: 'correo', placeholder: 'Correo electrónico' },
                  { name: 'telefono', placeholder: 'Teléfono' },
                ].map((field) => (
                  <input
                    key={field.name}
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    style={{
                      background: 'transparent', border: 'none',
                      borderBottom: '1px solid rgba(255,255,255,0.4)',
                      color: 'white', padding: '8px 0', fontSize: '0.95rem',
                      outline: 'none', width: '100%',
                    }}
                  />
                ))}
                <button
                  onClick={handleSubmit}
                  className="btn btn--primary btn--lg"
                  style={{ marginTop: '8px', display: 'flex', alignItems: 'center', gap: '8px', width: 'fit-content' }}
                >
                  ✈ Enviar
                </button>
              </div>
            </div>

          </div>

          {/* Badges de descarga */}
          <div className="download-badges" style={{ marginTop: '48px' }}>
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

        </div>
      </div>
    </section>
  );
};

export default CtaSection;