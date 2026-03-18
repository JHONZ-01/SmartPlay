import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutMain from './layouts/layoutMain';
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import SobreNosotros from './pages/SobreNosotros';

function App() {
  return (
    <BrowserRouter>
      <LayoutMain>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        </Routes>
      </LayoutMain>
    </BrowserRouter>
  );
}

export default App;