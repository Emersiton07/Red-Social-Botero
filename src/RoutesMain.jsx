import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Mapa from './SocialPage';
import Gamificacion from './SocialPage';
import Obras from './SocialPage';
import GaleriaVirtual from './SocialPage';
import CerrarSesion from './SocialPage';
import MainPage from './MainPage';
import Login from './pages/login';
import NotFound from './pages/404/404';

function App() {
  return (
    <div>
      <Routes>  {/* Definimos las rutas dentro de Routes */}
      <Route path="/" element={<MainPage />} />
        <Route path="/mapa" element={<Mapa />} />
        <Route path="/gamificacion" element={<Gamificacion />} />
        <Route path="/obras" element={<Obras />} />
        <Route path="/galeria-virtual" element={<GaleriaVirtual />} />
        <Route path="/cerrar-sesion" element={<CerrarSesion />} />
        <Route path='/login' element={<Login/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );  
}

export default App;
