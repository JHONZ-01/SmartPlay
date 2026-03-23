import React from 'react';
import imagenPaso1 from '../assets/images2/3d-render-secure-login-password-illustration.png';
import imagenPaso2 from '../assets/images2/5143422.png';
import imagenPaso3 from '../assets/images2/Wavy_Bus-16_Single-07.png';

const SobreNosotros = () => {
    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh' }}>

            {/* Encabezado */}
            <div className="container" style={{ textAlign: 'center', paddingBottom: 'var(--space-16)' }}>
                <span className="section__eyebrow">// Sobre Nosotros</span>
                <h1 className="section__title" style={{ marginTop: 'var(--space-4)' }}>
                    ¿CÓMO VENDER CON NOSOTROS?
                </h1>
                <div style={{
                    width: '60px', height: '3px',
                    background: 'var(--color-acid)',
                    margin: 'var(--space-4) auto',
                    borderRadius: 'var(--radius-pill)'
                }} />
                <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-muted)', marginTop: 'var(--space-4)' }}>
                    Conoce nuestro aplicativo, su{' '}
                    <strong style={{ color: 'var(--color-acid)' }}>funcionalidad y rentabilidad</strong>
                </p>
            </div>

            {/* Pasos */}
            <div className="container">
                {/* Fila 1: paso 1 y paso 2 */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', // Adaptable a pantallas
                    gap: 'var(--space-8)',
                    marginBottom: 'var(--space-8)'
                }}>

                    {/* Paso 1 */}
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)' }}>
                        <span style={{
                            fontSize: '5rem', fontWeight: '900', lineHeight: 1,
                            color: 'rgba(255, 255, 255, 0.92)', fontFamily: 'var(--font-display)',
                            flexShrink: 0, WebkitTextStroke: '1px rgba(255,255,255,0.1)'
                        }}>1</span>
                        <div style={{ flex: 1 }}>
                            <div style={{
                                background: 'rgba(20, 20, 25, 0.85)',
                                border: '1px solid rgba(255, 98, 0, 0.3)',
                                borderRadius: 'var(--radius-lg)',
                                padding: 'var(--space-6)',
                                display: 'flex', alignItems: 'center', gap: 'var(--space-6)',
                                backdropFilter: 'blur(12px)',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
                                transition: 'all 0.3s ease',
                            }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.borderColor = 'rgba(255, 98, 0, 0.6)';
                                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(255, 98, 0, 0.15)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.borderColor = 'rgba(255, 98, 0, 0.3)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.4)';
                                }}
                            >
                                <div style={{ flex: 1 }}>
                                    <h3 style={{ color: '#FF8a40', fontWeight: '700', marginBottom: '8px', fontSize: '1.2rem' }}>Regístrate</h3>
                                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                                        Déjanos tus datos e inmediatamente te informaremos cómo vender con nosotros.
                                    </p>
                                </div>

                                {/* Espacio para imagen Paso 1 */}
                                <div style={{
                                    width: '120px', height: '100px', flexShrink: 0,
                                    borderRadius: 'var(--radius-md)',
                                    background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    overflow: 'hidden', position: 'relative'
                                }}>
                                    <img src={imagenPaso1} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Paso 1" />
                                </div>
                            </div>
                            <p style={{ textAlign: 'center', marginTop: '12px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)' }}>Sin riesgos y sin papeleos</p>
                        </div>
                    </div>

                    {/* Paso 2 */}
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)' }}>
                        <span style={{
                            fontSize: '5rem', fontWeight: '900', lineHeight: 1,
                            color: 'rgba(255, 255, 255, 0.9)', fontFamily: 'var(--font-display)',
                            flexShrink: 0, WebkitTextStroke: '1px rgba(255,255,255,0.1)'
                        }}>2</span>
                        <div style={{ flex: 1 }}>
                            <div style={{
                                background: 'rgba(20, 20, 25, 0.85)',
                                border: '1px solid rgba(255, 98, 0, 0.3)',
                                borderRadius: 'var(--radius-lg)',
                                padding: 'var(--space-6)',
                                display: 'flex', alignItems: 'center', gap: 'var(--space-6)',
                                backdropFilter: 'blur(12px)',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
                                transition: 'all 0.3s ease',
                            }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.borderColor = 'rgba(255, 98, 0, 0.6)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.borderColor = 'rgba(255, 98, 0, 0.3)';
                                }}
                            >
                                <div style={{ flex: 1 }}>
                                    <h3 style={{ color: '#FF8a40', fontWeight: '700', marginBottom: '8px', fontSize: '1.2rem' }}>Vende más</h3>
                                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                                        Tus clientes pueden recibir productos a crédito directo con <strong style={{ color: '#FF8a40' }}>Smart Pay</strong>.
                                    </p>
                                </div>

                                {/* Espacio para imagen Paso 2 */}
                                <div style={{
                                    width: '120px', height: '100px', flexShrink: 0,
                                    borderRadius: 'var(--radius-md)',
                                    background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    overflow: 'hidden'
                                }}>
                                    <img src={imagenPaso2} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Paso 2" />
                                </div>
                            </div>
                            <p style={{ textAlign: 'center', marginTop: '12px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)' }}>Recibe tus pagos al 100%</p>
                        </div>
                    </div>
                </div>

                {/* Fila 2: paso 3 centrado */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--space-16)' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)', maxWidth: '580px', width: '100%' }}>
                        <span style={{
                            fontSize: '5rem', fontWeight: '900', lineHeight: 1,
                            color: 'rgba(255, 255, 255, 0.89)', fontFamily: 'var(--font-display)',
                            flexShrink: 0, WebkitTextStroke: '1px rgba(255,255,255,0.1)'
                        }}>3</span>
                        <div style={{ flex: 1 }}>
                            <div style={{
                                background: 'rgba(20, 20, 25, 0.85)',
                                border: '1px solid rgba(255, 98, 0, 0.3)',
                                borderRadius: 'var(--radius-lg)',
                                padding: 'var(--space-6)',
                                display: 'flex', alignItems: 'center', gap: 'var(--space-6)',
                                backdropFilter: 'blur(12px)',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
                                transition: 'all 0.3s ease',
                            }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.borderColor = 'rgba(255, 98, 0, 0.6)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.borderColor = 'rgba(255, 98, 0, 0.3)';
                                }}
                            >
                                <div style={{ flex: 1 }}>
                                    <h3 style={{ color: '#FF8a40', fontWeight: '700', marginBottom: '8px', fontSize: '1.2rem' }}>Gana más</h3>
                                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                                        Mejora la rentabilidad de tu negocio vendiendo más volumen cada mes.
                                    </p>
                                </div>

                                {/* Espacio para imagen Paso 3 */}
                                <div style={{
                                    width: '120px', height: '100px', flexShrink: 0,
                                    borderRadius: 'var(--radius-md)',
                                    background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    overflow: 'hidden'
                                }}>
                                    <img src={imagenPaso3} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Paso 3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ background: 'var(--color-surface)', paddingBlock: 'var(--space-20)' }}>
                <div className="container">

                    <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
                        <span className="section__eyebrow">// Contacto</span>
                        <h2 className="section__title" style={{ marginTop: 'var(--space-4)', fontSize: 'clamp(2rem, 4vw, 2.5rem)' }}>
                            ¿Tienes dudas?
                        </h2>
                    </div>

                    {/* ── GRID ADAPTABLE (Llamando a index.css) ── */}
                    <div className="contact-cards-grid">

                        {/* Atención al cliente */}
                        <div className="contact-card">
                            <div className="contact-card__icon-badge">🎧</div>
                            <div className="contact-card__content">
                                <h3 className="contact-card__title">Atención al cliente</h3>
                                <p className="contact-card__desc">
                                    Para dudas y sugerencias sobre pagos y desbloqueos, haz clic en el botón.
                                </p>
                            </div>

                            <a
                                href="https://wa.me/593959728822?text=Hola,%20tengo%20una%20duda%20sobre%20mi%20pago"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn--primary contact-card__btn"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.121 1.533 5.854L.057 23.571l5.86-1.54A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.36-.214-3.722.976.994-3.62-.235-.372A9.818 9.818 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
                                </svg>
                                Escríbenos
                            </a>
                        </div>

                        {/* Registro de pagos */}
                        <div className="contact-card">
                            <div className="contact-card__icon-badge">💳</div>
                            <div className="contact-card__content">
                                <h3 className="contact-card__title">Registro de pagos</h3>
                                <p className="contact-card__desc">
                                    Para registrar los pagos de tu cuota de forma segura, haz clic aquí.
                                </p>
                            </div>

                            <a
                                href="https://wa.me/593979103229?text=Hola,%20necesito%20registrar%20mi%20pago"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn--primary contact-card__btn"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.121 1.533 5.854L.057 23.571l5.86-1.54A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.36-.214-3.722.976.994-3.62-.235-.372A9.818 9.818 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
                                </svg>
                                Registrar Pago
                            </a>
                        </div>

                        {/* Soporte técnico */}
                        <div className="contact-card">
                            <div className="contact-card__icon-badge">🔧</div>
                            <div className="contact-card__content">
                                <h3 className="contact-card__title">Soporte técnico</h3>
                                <p className="contact-card__desc">
                                    Para soporte técnico y desbloqueos remotos de tu celular, haz clic aquí.
                                </p>
                            </div>

                            <a
                                href="https://wa.me/593995071589?text=Hola,%20necesito%20soporte%20técnico"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn--primary contact-card__btn"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.121 1.533 5.854L.057 23.571l5.86-1.54A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.36-.214-3.722.976.994-3.62-.235-.372A9.818 9.818 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
                                </svg>
                                Soporte Técnico
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SobreNosotros;