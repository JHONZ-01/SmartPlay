import React, { useState, useEffect } from 'react';
import { useToast } from './ToastProvider';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images2/logo.webp';

const Header = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const { showToast } = useToast();
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();

  // Active state observer
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.getAttribute("id"));
          }
        });
      },
      { rootMargin: `-72px 0px -60% 0px`, threshold: 0 }
    );

    sections.forEach((s) => navObserver.observe(s));
    return () => sections.forEach((s) => navObserver.unobserve(s));
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 900px)");
    const handleMQ = (e) => {
      setIsDesktop(e.matches);
      if (e.matches) setIsMobileMenuOpen(false);
    };
    mq.addEventListener("change", handleMQ);
    handleMQ(mq);
    return () => mq.removeEventListener("change", handleMQ);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
  }, [isMobileMenuOpen]);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (location.pathname !== '/') {
      window.location.href = `/${targetId ? '#' + targetId : ''}`;
    } else {
      const elem = document.getElementById(targetId);
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'hero', label: 'Inicio', path: '/', scroll: true },
    { id: 'cta-heading', label: 'Afíliate', path: '/', scroll: true },
    { id: 'tokens', label: 'Cómo Vender', path: '/sobre-nosotros', scroll: false },
    { id: 'contacto-section', label: 'Contacto', path: '/contacto', scroll: false },
  ];

  return (
    <>
      <nav
        className={`nav ${isScrolled ? 'nav--scrolled' : ''}`}
        id="site-nav"
        style={{
          position: 'fixed', top: '16px', left: '50%', transform: 'translateX(-50%)',
          width: 'calc(100% - 48px)', maxWidth: '1100px',
          borderRadius: '24px',
          /* Efecto Glassmorphism Potenciado */
          background: isScrolled ? 'rgba(255, 255, 255, 0.03)' : 'rgba(15, 15, 20, 0.4)',
          backdropFilter: 'blur(16px) saturate(180%)',
          WebkitBackdropFilter: 'blur(16px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          padding: '0 24px',
          zIndex: 1000,
        }}
      >
        <div style={{ width: '100%' }}>
          <div className="nav__inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>

            {/* LOGO */}
            <a className="nav__logo" href="#hero" onClick={(e) => handleNavClick(e, 'hero')} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>
              <img src={logo} alt="Smart Pay" style={{ width: '30px', height: '30px', objectFit: 'contain' }} />
              <span style={{ fontSize: '1.1rem', letterSpacing: '-0.5px' }}>Smart Pay</span>
            </a>

            {/* LINKS CENTRALES (Se mantienen a la izquierda del espacio restante) */}
            <ul style={{ display: isDesktop ? 'flex' : 'none', listStyle: 'none', gap: '24px', margin: 0, padding: 0, flex: 1, marginLeft: '40px' }}>
              {navLinks.map((link) => (
                <li key={link.id}>
                  {link.scroll ? (
                    <a
                      className={`nav__link ${activeSection === link.id ? 'nav__link--active' : ''}`}
                      href={`#${link.id}`}
                      onClick={(e) => handleNavClick(e, link.id)}
                      style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.9rem' }}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      className={`nav__link ${location.pathname === link.path ? 'nav__link--active' : ''}`}
                      to={link.path}
                      style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.9rem' }}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* BOTONES DERECHA (WhatsApp y Empieza Hoy - Separados del resto) */}
            <div className="nav__cta" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {isDesktop && (
                <>
                  <a
                    href="https://api.whatsapp.com/send/?phone=593997518833"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      width: '40px', height: '40px', borderRadius: '12px',
                      background: 'rgba(255,255,255,0.08)', color: 'white',
                      transition: 'all 0.3s ease', border: '1px solid rgba(255,255,255,0.1)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                  </a>
                  <a
                    className="btn"
                    href="#hero"
                    onClick={(e) => handleNavClick(e, 'hero')}
                    style={{
                      background: 'linear-gradient(135deg, #FF8a40 0%, #D15000 100%)',
                      color: '#fff', padding: '10px 20px', borderRadius: '12px',
                      fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none',
                      boxShadow: '0 4px 15px rgba(209, 80, 0, 0.3)', border: 'none'
                    }}
                  >
                    Empieza hoy
                  </a>
                </>
              )}

              {/* Burger para móvil */}
              {!isDesktop && (
                <button
                  className={`nav__burger ${isMobileMenuOpen ? 'is-open' : ''}`}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
                >
                  {isMobileMenuOpen ? '✕' : '☰'}
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Menú móvil simplificado */}
      <div className={`nav__mobile-menu ${isMobileMenuOpen ? 'is-open' : ''}`} style={{ display: isMobileMenuOpen ? 'block' : 'none', position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', background: 'rgba(10,10,12,0.98)', zIndex: 999, paddingTop: '100px', paddingLeft: '40px' }}>
        {/* ... Contenido del menú móvil (opcional) ... */}
      </div>
    </>
  );
};

export default Header;