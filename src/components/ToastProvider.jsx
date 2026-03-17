import React, { createContext, useContext, useState, useEffect } from 'react';

// Creamos un contexto para los Toasts ya que pueden ser llamados desde múltiples componentes
const ToastContext = createContext(null);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export const ToastProvider = ({ children }) => {
  const [toastConfig, setToastConfig] = useState({
    isVisible: false,
    message: ''
  });

  const showToast = (message, duration = 3000) => {
    setToastConfig({ isVisible: true, message });
    setTimeout(() => {
      setToastConfig(prev => ({ ...prev, isVisible: false }));
    }, duration);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {/* Toast UI */}
      <div 
        className={`toast ${toastConfig.isVisible ? 'is-visible' : ''}`} 
        id="toast" 
        role="status" 
        aria-live="polite" 
        aria-atomic="true"
      >
        <span className="toast__dot" aria-hidden="true"></span>
        <span id="toast-msg">{toastConfig.message}</span>
      </div>
    </ToastContext.Provider>
  );
};
