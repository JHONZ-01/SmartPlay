import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ToastProvider } from '../components/ToastProvider';

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
      <div className="relative min-h-screen" style={{ isolation: 'isolate' }}>

        {/* Círculos decorativos de fondo */}
        <div aria-hidden="true" style={{
          position: 'fixed', inset: 0, zIndex: -1, overflow: 'hidden', pointerEvents: 'none'
        }}>
          {/* Superior derecha */}
          <div style={{
            position: 'absolute', top: '-150px', right: '-150px',
            width: '500px', height: '500px', borderRadius: '50%',
            background: 'var(--color-glow-acid)',
            filter: 'blur(1px)',
          }} />

          {/* Inferior izquierda */}
          <div style={{
            position: 'absolute', bottom: '-100px', left: '-100px',
            width: '400px', height: '400px', borderRadius: '50%',
            background: 'var(--color-glow-purple)',
            filter: 'blur(1px)',
          }} />
        </div>

        <Header isScrolled={isScrolled} />

        <main id="main-content" tabIndex="-1">
          {children}
        </main>

        <Footer showScrollTop={showScrollTop} />
      </div>
    </ToastProvider>
  );
};

export default LayoutMain;