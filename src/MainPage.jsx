import React from 'react';
import Footer from './components/footer/footer';
import Header from './components/header/header';
const MainPage = () => {
  return (

    <>
    <Header />
      <div className="relative flex justify-center text-center">
        {/* Contenedor de los títulos sobre la imagen */}
        <div className="absolute top-1/2 transform -translate-y-1/2 text-white">
          <h1 className="text-4xl font-bold">Arte Urbano</h1>
          <h2 className="text-2xl mt-2">Colombia</h2>
        </div>

        {/* Imagen del mapa */}
        <img
          src="https://images.vexels.com/media/users/3/314252/isolated/preview/b7a16d577eb6f05ffbbbef9423fb72cb-una-silueta-del-mapa-de-colombia.png"
          alt="Mapa de Colombia"
          className="max-w-4/5 h-auto"
        />
      </div>
      <Footer />
    </>
  );
};

export default MainPage;
