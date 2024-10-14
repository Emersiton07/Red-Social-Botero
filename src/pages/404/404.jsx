import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  // Función para volver a la página anterior
  const handleGoBack = () => {
    navigate(-1); // Volver a la página anterior
  };

  return (
    <div className="text-center">
      <h1>Error 404</h1>
      <p>La página que buscas no existe.</p>
      <button
        onClick={handleGoBack}
        className="px-4 py-2 mt-4 bg-blue-500 text-white rounded-lg"
      >
        Volver
      </button>
    </div>
  );
};

export default NotFound;
