import React, { useState, useEffect } from 'react';
import { useToast } from './ToastProvider';
import { Link, useLocation } from 'react-router-dom';

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

  // matchMedia to align with vida.js logic
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 900px)");
    const handleMQ = (e) => {
      setIsDesktop(e.matches);
      if (e.matches) {
        setIsMobileMenuOpen(false); // auto-close mobile menu if desktop size
      }
    };
    mq.addEventListener("change", handleMQ);
    handleMQ(mq);
    return () => mq.removeEventListener("change", handleMQ);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";

    const handleEscape = (e) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMobileMenuOpen]);

  const handleNavClick = (e, targetId, path) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (location.pathname !== '/') {
      // Si no estamos en home, navegar primero y luego hacer scroll
      window.location.href = `/${targetId ? '#' + targetId : ''}`;
    } else {
      const elem = document.getElementById(targetId);
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'hero', label: 'Inicio', path: '/', scroll: true },
    { id: 'cta-heading', label: 'Afíliate', path: '/', scroll: true },
    { id: 'tokens', label: 'Sobre Nosotros', path: '/sobre-nosotros', scroll: false },
    { id: 'cta-heading', label: 'Contacto', path: '/contacto', scroll: false },
  ];

  return (
    <>
      <nav className={`nav ${isScrolled ? 'nav--scrolled' : ''}`} id="site-nav" role="navigation" aria-label="Main navigation"
        style={{
          position: 'fixed', top: '16px', left: '50%', transform: 'translateX(-50%)',
          width: 'calc(100% - 48px)', maxWidth: '1100px',
          borderRadius: 'var(--radius-pill)',
          background: isScrolled ? 'rgba(252,252,252,0.92)' : 'rgba(252,252,252,0.75)',
          backdropFilter: 'blur(16px)',
          border: '1px solid var(--color-border)',
          boxShadow: 'var(--shadow-card)',
          transition: 'all var(--dur-mid) ease',
          padding: '0 var(--space-6)',
          zIndex: 'var(--z-nav)',
        }}
      >
        <div style={{ maxWidth: '100%' }}>
          <div className="nav__inner">
            <a className="nav__logo" href="#hero" onClick={(e) => handleNavClick(e, 'hero')} aria-label="Smart Pay — Home">
              <span className="nav__logo-mark" aria-hidden="true">
                <img src="/src/assets/images/logo.webp" alt="Smart Pay" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
              </span>
              Smart Pay
            </a>
            {/* Desktop links */}
            <ul className="nav__links" role="list">
              {[
                { id: 'hero', label: 'Inicio', path: '/', scroll: true },
                { id: 'cta-heading', label: 'Afíliate', path: '/', scroll: true },
                { id: 'tokens', label: 'Cómo Vender', path: '/sobre-nosotros', scroll: false },
                { id: 'cta-heading', label: 'Contacto', path: '/contacto', scroll: false },
              ].map((link) => (
                <li key={link.id}>
                  {link.scroll ? (
                    <a
                      className={`nav__link ${activeSection === link.id ? 'nav__link--active' : ''}`}
                      href={`#${link.id}`}
                      aria-current={activeSection === link.id ? "page" : undefined}
                      onClick={(e) => handleNavClick(e, link.id)}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      className={`nav__link ${location.pathname === link.path ? 'nav__link--active' : ''}`}
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <div className="nav__cta">
              {/* Desktop CTAs (conditionally rendered mimicking vida.js) */}
              {isDesktop && (
                <>
                  <a
                    className="btn btn--ghost btn--sm"
                    href="#cta-heading"
                    onClick={(e) => handleNavClick(e, 'cta-heading')}
                    id="connect-btn"
                  >
                    Afíliate ya
                  </a>
                  <Link
                    className="btn btn--primary btn--sm"
                    to="/contacto"
                    id="launch-btn"
                  >
                    Contáctanos
                  </Link>
                </>
              )}

              {/* Burger (Mobile) */}
              <button
                className={`nav__burger ${isMobileMenuOpen ? 'is-open' : ''}`}
                id="nav-burger"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label="Open menu"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu (Overlay) */}
      <div
        className={`nav__mobile-menu ${isMobileMenuOpen ? 'is-open' : ''}`}
        id="mobile-menu"
        role="dialog"
        aria-label="Navigation menu"
        aria-hidden={!isMobileMenuOpen}
      >
        <ul role="list">
          {[
            { id: 'hero', label: 'Inicio', path: '/', scroll: true },
            { id: 'cta-heading', label: 'Afíliate', path: '/', scroll: true },
            { id: 'tokens', label: 'Sobre Nosotros', path: '/sobre-nosotros', scroll: false },
            { id: 'cta-heading', label: 'Contacto', path: '/contacto', scroll: false },
          ].map((link) => (
            <li key={`mob-${link.id}`}>
              {link.scroll ? (
                <a
                  className={`nav__mobile-link ${activeSection === link.id ? 'nav__mobile-link--active' : ''}`}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  className={`nav__mobile-link ${location.pathname === link.path ? 'nav__mobile-link--active' : ''}`}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <div className="nav__mobile-actions">
          <button
            className="btn btn--primary btn--lg w-full"
            onClick={() => {
              setIsMobileMenuOpen(false);
              showToast("✅ Launching Glyph App…");
            }}
          >
            Launch App →
          </button>
          <button className="btn btn--ghost btn--lg w-full" onClick={() => setIsMobileMenuOpen(false)}>Conectar Billetera</button>
        </div>
      </div>
    </>
  );
};

export default Header;
