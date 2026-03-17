import React, { useState, useEffect } from 'react';
import { useToast } from './ToastProvider';

const Header = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const { showToast } = useToast();
  const [activeSection, setActiveSection] = useState('hero');

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

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`nav ${isScrolled ? 'nav--scrolled' : ''}`} id="site-nav" role="navigation" aria-label="Main navigation">
        <div className="container">
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
                { id: 'hero', label: 'Inicio' },
                { id: 'discover', label: 'Afiliate' },
                { id: 'tokens', label: 'Sobre Nosotros' },
                { id: 'cta-heading', label: 'Contacto' }
              ].map((link) => (
                <li key={link.id}>
                  <a
                    className={`nav__link ${activeSection === link.id ? 'nav__link--active' : ''}`}
                    href={`#${link.id}`}
                    aria-current={activeSection === link.id ? "page" : undefined}
                    onClick={(e) => {
                      if (link.id === 'cta-heading') {
                        // Just smooth scroll to cta section
                        handleNavClick(e, 'cta-heading');
                      } else {
                        handleNavClick(e, link.id);
                      }
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="nav__cta">
              {/* Desktop CTAs (conditionally rendered mimicking vida.js) */}
              {isDesktop && (
                <>
                  <button
                    className="btn btn--ghost btn--sm"
                    id="connect-btn"
                  >
                    Connect Wallet
                  </button>
                  <button
                    className="btn btn--primary btn--sm"
                    id="launch-btn"
                    onClick={() => showToast("✅ Launching Glyph App…")}
                  >
                    Launch App
                  </button>
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
            { id: 'hero', label: 'Features' },
            { id: 'discover', label: 'Discover' },
            { id: 'tokens', label: 'Markets' },
            { id: 'cta-heading', label: 'Get Started' }
          ].map((link) => (
            <li key={`mob-${link.id}`}>
              <a
                className={`nav__mobile-link ${activeSection === link.id ? 'nav__mobile-link--active' : ''}`}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
              >
                {link.label}
              </a>
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
          <button className="btn btn--ghost btn--lg w-full" onClick={() => setIsMobileMenuOpen(false)}>Connect Wallet</button>
        </div>
      </div>
    </>
  );
};

export default Header;
