import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ToastProvider } from '../components/ToastProvider';
import lavaBg from '../assets/images2/lava.jpg';

const LayoutMain = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 20);
      setShowScrollTop(y > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ToastProvider>
      <div
        className="relative min-h-screen text-white overflow-x-hidden"
        style={{ isolation: 'isolate', background: '#05050718' }}
      >
        {/* ── FONDO JPG FIJO ── */}
        <div
          aria-hidden="true"
          className="fixed inset-0 -z-10 pointer-events-none"
          style={{ height: '100vh', width: '100vw' }}
        >
          {/* Imagen lava */}
          <img
            src={lavaBg}
            alt=""
            style={{
              position: 'absolute', inset: 1,
              top: 10, left: 0,
              width: '100%', height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              opacity: 0.45,                    // sutil — sube a 0.25 si quieres más presencia
              filter: 'saturate(1.2) brightness(0.9)',
            }}
          />

          {/* Overlay oscuro base — preserva legibilidad */}
          <div
            style={{
              position: 'relative', inset: 0,
              background: 'linear-gradient(to bottom, rgba(5, 5, 7, 0.14) 0%, rgba(5,5,7,0.35) 50%, rgba(5,5,7,0.7) 100%)',
            }}
          />

          {/* Viñeta lateral — oscurece los bordes */}
          <div
            style={{
              position: 'relative', inset: 0,
              background: 'radial-gradient(ellipse at center, transparent 40%, rgba(5,5,7,0.6) 100%)',
            }}
          />

          {/* Tinte naranja sutil para mantener la paleta lava */}
          <div
            style={{
              position: 'relative', inset: 0,
              background: 'linear-gradient(135deg, rgba(255,98,0,0.06) 0%, transparent 50%, rgba(209,80,0,0.05) 100%)',
            }}
          />
        </div>

        <Header isScrolled={isScrolled} />

        <main
          id="main-content"
          tabIndex="-1"
          className="max-w-7xl mx-auto px-6 pt-28 pb-16"
        >
          {children}
        </main>

        <Footer showScrollTop={showScrollTop} />
      </div>
    </ToastProvider>
  );
};

export default LayoutMain;