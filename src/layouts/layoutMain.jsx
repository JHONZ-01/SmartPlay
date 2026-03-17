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
      <div className="relative min-h-screen">
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
