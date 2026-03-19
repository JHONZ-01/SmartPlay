import React from 'react';

const Contacto = () => {
    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh' }}>

            {/* Encabezado */}
            <div className="container" style={{ textAlign: 'center', paddingBottom: 'var(--space-16)' }}>
                <span className="section__eyebrow">// Canales Oficiales</span>
                <h1 className="section__title" style={{ marginTop: 'var(--space-4)' }}>
                    ¿Cómo podemos <span style={{ color: 'var(--color-acid)' }}>ayudarte?</span>
                </h1>
                <div style={{
                    width: '60px', height: '3px', background: 'var(--color-acid)',
                    margin: 'var(--space-4) auto', borderRadius: 'var(--radius-pill)'
                }} />
                <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-muted)', maxWidth: '540px', margin: '0 auto', lineHeight: 1.7 }}>
                    Nuestro equipo de soporte y ventas está listo para atenderte.
                    Encuéntranos en nuestras oficinas o contáctanos por canales digitales.
                </p>
            </div>

            {/* Layout principal */}
            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-10)', alignItems: 'start', paddingBottom: 'var(--space-24)' }}>

                {/* Columna izquierda */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>

                    {/* Grid de tarjetas info */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>

                        {[
                            {
                                icono: '📍',
                                titulo: 'UBICACIÓN',
                                lineas: ['Av. Naciones Unidas y Av. Río Amazonas,', 'Edificio Unicornio II, Piso 15-04']
                            },
                            {
                                icono: '📞',
                                titulo: 'TELÉFONOS',
                                lineas: ['096 903 1988 / 096 019 2561']
                            },
                            {
                                icono: '✉️',
                                titulo: 'CORREO',
                                lineas: ['ventas@lockplay.org']
                            },
                            {
                                icono: '🕐',
                                titulo: 'ATENCIÓN',
                                lineas: ['Lun - Vie: 09:30 - 18:30']
                            },
                        ].map((item, i) => (
                            <div key={i} style={{
                                background: 'var(--color-deep)',
                                border: '1px solid var(--color-border)',
                                borderRadius: 'var(--radius-lg)',
                                padding: 'var(--space-6)',
                                display: 'flex', flexDirection: 'column', gap: 'var(--space-4)',
                                transition: 'transform var(--dur-mid) ease, box-shadow var(--dur-mid) ease',
                            }}
                                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-acid)'; }}
                                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                            >
                                <div style={{
                                    width: '44px', height: '44px', borderRadius: '50%',
                                    background: 'rgba(255,98,0,0.1)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '20px'
                                }}>{item.icono}</div>
                                <div>
                                    <p style={{ fontFamily: 'var(--font-display)', fontWeight: '700', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-2)', color: 'var(--color-white)' }}>
                                        {item.titulo}
                                    </p>
                                    {item.lineas.map((linea, j) => (
                                        <p key={j} style={{ color: 'var(--color-muted)', fontSize: 'var(--text-sm)', lineHeight: 1.6 }}>{linea}</p>
                                    ))}
                                </div>
                            </div>
                        ))}

                    </div>

                    {/* Botón WhatsApp */}
                    <a
                        href="https://wa.me/593969031988?text=Hola,%20quiero%20hablar%20con%20un%20asesor"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            gap: 'var(--space-3)', padding: 'var(--space-5) var(--space-8)',
                            background: '#25D366', color: '#fff',
                            borderRadius: 'var(--radius-pill)', fontFamily: 'var(--font-display)',
                            fontWeight: '700', fontSize: 'var(--text-base)',
                            textDecoration: 'none', transition: 'transform var(--dur-mid) ease, box-shadow var(--dur-mid) ease',
                            boxShadow: '0 4px 20px rgba(37,211,102,0.3)',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(37,211,102,0.4)'; }}
                        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,211,102,0.3)'; }}
                    >
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.121 1.533 5.854L.057 23.571l5.86-1.54A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.36-.214-3.722.976.994-3.62-.235-.372A9.818 9.818 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
                        </svg>
                        Hablar con un asesor por WhatsApp
                    </a>

                </div>

                {/* Columna derecha: Mapa */}
                <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-card)', border: '1px solid var(--color-border)' }}>
                    <iframe
                        title="Ubicación Smart Pay"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1994.899645628837!2d-78.486106!3d-0.17695800000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a858f56d4d1%3A0xafe084d8581292c2!2sUnicornio%20II%20Edificio%20Empresarial!5e0!3m2!1sen!2sec!4v1773725040511!5m2!1sen!2sec"
                        width="100%"
                        height="460"
                        style={{ border: 0, display: 'block' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>

            </div>
        </div >
    );
};

export default Contacto;