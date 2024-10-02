import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MenuComponent from './components/header/MenuComponent';
import Header from './components/header/header';
import Mapa from './SocialPage';
import Gamificacion from './SocialPage';
import Obras from './SocialPage';
import GaleriaVirtual from './SocialPage';
import CerrarSesion from './SocialPage';
import MainPage from './MainPage';
import Login from './pages/login';

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
      </Routes>
    </div>
  );
}

export default App;
