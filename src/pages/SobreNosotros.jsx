import React from 'react';

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
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: 'var(--space-8)',
                    marginBottom: 'var(--space-8)'
                }}>

                    {/* Paso 1 */}
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-6)' }}>
                        <span style={{
                            fontSize: '5rem', fontWeight: '900', lineHeight: 1,
                            color: 'var(--color-black)', fontFamily: 'var(--font-display)',
                            flexShrink: 0,
                        }}>1</span>
                        <div style={{ flex: 1 }}>
                            <div style={{
                                background: 'rgba(255,98,0,0.06)',
                                border: '1px solid rgba(255,98,0,0.15)',
                                borderRadius: 'var(--radius-lg)',
                                padding: 'var(--space-6)',
                                display: 'flex', gap: 'var(--space-4)',
                                transition: 'transform var(--dur-mid) ease, box-shadow var(--dur-mid) ease',
                            }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.transform = 'translateY(-4px)';
                                    e.currentTarget.style.boxShadow = 'var(--shadow-acid)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                <div style={{ flex: 1 }}>
                                    <h3 style={{
                                        color: 'var(--color-acid)', fontWeight: '700',
                                        marginBottom: 'var(--space-3)', fontSize: 'var(--text-base)'
                                    }}>Regístrate</h3>
                                    <p style={{ color: 'var(--color-muted)', fontSize: 'var(--text-sm)', lineHeight: 1.7 }}>
                                        Déjanos tus datos e inmediatamente te informaremos cómo vender con nosotros.
                                    </p>
                                </div>
                                {/* Espacio para imagen */}
                                <div style={{
                                    width: '120px', height: '100px', flexShrink: 0,
                                    borderRadius: 'var(--radius-md)', background: 'var(--color-surface)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: 'var(--color-muted)', fontSize: 'var(--text-xs)'
                                }}>
                                    {/* <img src="" alt="Regístrate" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'var(--radius-md)' }} /> */}
                                    img aquí
                                </div>
                            </div>
                            <p style={{
                                textAlign: 'center', marginTop: 'var(--space-3)',
                                fontSize: 'var(--text-sm)', color: 'var(--color-muted)'
                            }}>
                                Sin riesgos y sin papeleos
                            </p>
                        </div>
                    </div>

                    {/* Paso 2 */}
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-6)' }}>
                        <span style={{
                            fontSize: '5rem', fontWeight: '900', lineHeight: 1,
                            color: 'var(--color-black)', fontFamily: 'var(--font-display)',
                            flexShrink: 0,
                        }}>2</span>
                        <div style={{ flex: 1 }}>
                            <div style={{
                                background: 'rgba(255,98,0,0.06)',
                                border: '1px solid rgba(255,98,0,0.15)',
                                borderRadius: 'var(--radius-lg)',
                                padding: 'var(--space-6)',
                                display: 'flex', gap: 'var(--space-4)',
                                transition: 'transform var(--dur-mid) ease, box-shadow var(--dur-mid) ease',
                            }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.transform = 'translateY(-4px)';
                                    e.currentTarget.style.boxShadow = 'var(--shadow-acid)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                <div style={{ flex: 1 }}>
                                    <h3 style={{
                                        color: 'var(--color-acid)', fontWeight: '700',
                                        marginBottom: 'var(--space-3)', fontSize: 'var(--text-base)'
                                    }}>Vende más televisores</h3>
                                    <p style={{ color: 'var(--color-muted)', fontSize: 'var(--text-sm)', lineHeight: 1.7 }}>
                                        Todos tus clientes pueden recibir un televisor nuevo a crédito directo con{' '}
                                        <strong style={{ color: 'var(--color-acid)' }}>Smart Pay</strong>.
                                    </p>
                                </div>
                                {/* Espacio para imagen */}
                                <div style={{
                                    width: '120px', height: '100px', flexShrink: 0,
                                    borderRadius: 'var(--radius-md)', background: 'var(--color-surface)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: 'var(--color-muted)', fontSize: 'var(--text-xs)'
                                }}>
                                    {/* <img src="" alt="Vende más" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'var(--radius-md)' }} /> */}
                                    img aquí
                                </div>
                            </div>
                            <p style={{
                                textAlign: 'center', marginTop: 'var(--space-3)',
                                fontSize: 'var(--text-sm)', color: 'var(--color-muted)'
                            }}>
                                Recibe tus pagos al 100%
                            </p>
                        </div>
                    </div>

                </div>

                {/* Fila 2: paso 3 centrado */}
                <div style={{
                    display: 'flex', justifyContent: 'center',
                    marginBottom: 'var(--space-16)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-6)', maxWidth: '560px', width: '100%' }}>
                        <span style={{
                            fontSize: '5rem', fontWeight: '900', lineHeight: 1,
                            color: 'var(--color-black)', fontFamily: 'var(--font-display)',
                            flexShrink: 0,
                        }}>3</span>
                        <div style={{ flex: 1 }}>
                            <div style={{
                                background: 'rgba(255,98,0,0.06)',
                                border: '1px solid rgba(255,98,0,0.15)',
                                borderRadius: 'var(--radius-lg)',
                                padding: 'var(--space-6)',
                                display: 'flex', gap: 'var(--space-4)',
                                transition: 'transform var(--dur-mid) ease, box-shadow var(--dur-mid) ease',
                            }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.transform = 'translateY(-4px)';
                                    e.currentTarget.style.boxShadow = 'var(--shadow-acid)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                <div style={{ flex: 1 }}>
                                    <h3 style={{
                                        color: 'var(--color-acid)', fontWeight: '700',
                                        marginBottom: 'var(--space-3)', fontSize: 'var(--text-base)'
                                    }}>Aumenta tu ganancia</h3>
                                    <p style={{ color: 'var(--color-muted)', fontSize: 'var(--text-sm)', lineHeight: 1.7 }}>
                                        Con <strong style={{ color: 'var(--color-acid)' }}>Smart Pay</strong> lograrás
                                        vender más y mejorar la rentabilidad de tu negocio.
                                    </p>
                                </div>
                                {/* Espacio para imagen */}
                                <div style={{
                                    width: '120px', height: '100px', flexShrink: 0,
                                    borderRadius: 'var(--radius-md)', background: 'var(--color-surface)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: 'var(--color-muted)', fontSize: 'var(--text-xs)'
                                }}>
                                    {/* <img src="" alt="Aumenta ganancia" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'var(--radius-md)' }} /> */}
                                    img aquí
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* Sección ¿Tienes dudas? */}
            <div style={{ background: 'var(--color-surface)', paddingBlock: 'var(--space-24)' }}>
                <div className="container">

                    <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
                        <span className="section__eyebrow">// Contacto</span>
                        <h2 className="section__title" style={{ marginTop: 'var(--space-4)' }}>
                            ¿Tienes dudas?
                        </h2>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: 'var(--space-6)',
                    }}>

                        {/* Atención al cliente */}
                        <div style={{
                            background: 'var(--color-deep)',
                            border: '1px solid var(--color-border)',
                            borderRadius: 'var(--radius-xl)',
                            padding: 'var(--space-8)',
                            display: 'flex', flexDirection: 'column',
                            alignItems: 'center', textAlign: 'center', gap: 'var(--space-6)',
                            transition: 'transform var(--dur-mid) ease, box-shadow var(--dur-mid) ease',
                        }}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = 'translateY(-6px)';
                                e.currentTarget.style.boxShadow = 'var(--shadow-acid)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <div style={{
                                width: '64px', height: '64px', borderRadius: '50%',
                                background: 'rgba(255,98,0,0.1)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: '28px'
                            }}>🎧</div>
                            <div>
                                <h3 style={{
                                    fontFamily: 'var(--font-display)', fontWeight: '700',
                                    fontSize: 'var(--text-base)', marginBottom: 'var(--space-3)',
                                    color: 'var(--color-acid)'
                                }}>ATENCIÓN AL CLIENTE</h3>
                                <p style={{ color: 'var(--color-muted)', fontSize: 'var(--text-sm)', lineHeight: 1.7 }}>
                                    Para dudas y sugerencias sobre pagos y desbloqueos, haz click en el botón.
                                </p>
                            </div>

                            <a
                                href="https://wa.me/593XXXXXXXXX?text=Hola,%20tengo%20una%20duda%20sobre%20mi%20pago"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn--primary btn--lg"
                                style={{ width: '100%', gap: 'var(--space-3)' }}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.121 1.533 5.854L.057 23.571l5.86-1.54A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.36-.214-3.722.976.994-3.62-.235-.372A9.818 9.818 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
                                </svg>
                                Escríbenos
                            </a>
                        </div>

                        {/* Registro de pagos */}
                        <div style={{
                            background: 'var(--color-deep)',
                            border: '1px solid var(--color-border)',
                            borderRadius: 'var(--radius-xl)',
                            padding: 'var(--space-8)',
                            display: 'flex', flexDirection: 'column',
                            alignItems: 'center', textAlign: 'center', gap: 'var(--space-6)',
                            transition: 'transform var(--dur-mid) ease, box-shadow var(--dur-mid) ease',
                        }}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = 'translateY(-6px)';
                                e.currentTarget.style.boxShadow = 'var(--shadow-acid)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <div style={{
                                width: '64px', height: '64px', borderRadius: '50%',
                                background: 'rgba(255,98,0,0.1)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: '28px'
                            }}>💳</div>
                            <div>
                                <h3 style={{
                                    fontFamily: 'var(--font-display)', fontWeight: '700',
                                    fontSize: 'var(--text-base)', marginBottom: 'var(--space-3)',
                                    color: 'var(--color-acid)'
                                }}>REGISTRO DE PAGOS</h3>
                                <p style={{ color: 'var(--color-muted)', fontSize: 'var(--text-sm)', lineHeight: 1.7 }}>
                                    Para registro de pagos de tu cuota, haz click aquí.
                                </p>
                            </div>

                            <a
                                href="https://wa.me/593XXXXXXXXX?text=Hola,%20quiero%20registrar%20mi%20pago"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn--primary btn--lg"
                                style={{ width: '100%', gap: 'var(--space-3)' }}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.121 1.533 5.854L.057 23.571l5.86-1.54A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.36-.214-3.722.976.994-3.62-.235-.372A9.818 9.818 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
                                </svg>
                                Registrar Pago
                            </a>
                        </div>

                        {/* Soporte técnico */}
                        <div style={{
                            background: 'var(--color-deep)',
                            border: '1px solid var(--color-border)',
                            borderRadius: 'var(--radius-xl)',
                            padding: 'var(--space-8)',
                            display: 'flex', flexDirection: 'column',
                            alignItems: 'center', textAlign: 'center', gap: 'var(--space-6)',
                            transition: 'transform var(--dur-mid) ease, box-shadow var(--dur-mid) ease',
                        }}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = 'translateY(-6px)';
                                e.currentTarget.style.boxShadow = 'var(--shadow-acid)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <div style={{
                                width: '64px', height: '64px', borderRadius: '50%',
                                background: 'rgba(255,98,0,0.1)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: '28px'
                            }}>🔧</div>
                            <div>
                                <h3 style={{
                                    fontFamily: 'var(--font-display)', fontWeight: '700',
                                    fontSize: 'var(--text-base)', marginBottom: 'var(--space-3)',
                                    color: 'var(--color-acid)'
                                }}>SOPORTE TÉCNICO Y DESBLOQUEOS</h3>
                                <p style={{ color: 'var(--color-muted)', fontSize: 'var(--text-sm)', lineHeight: 1.7 }}>
                                    Para soporte técnico y desbloqueos de tu celular, haz click aquí.
                                </p>
                            </div>

                            <a
                                href="https://wa.me/593XXXXXXXXX?text=Hola,%20necesito%20soporte%20técnico"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn--primary btn--lg"
                                style={{ width: '100%', gap: 'var(--space-3)' }}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
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