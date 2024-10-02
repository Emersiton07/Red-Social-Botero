import React, { useState } from 'react';
import './header.css'
import MenuComponent from './MenuComponent';

const Header = () => {
    

    return (
        <header className=" p-4 flex justify-between items-center">
            {/* Icono del menú desplegable */}
            <MenuComponent />

            {/* Botón de iniciar sesión */}
            <div className="text-white flex items-center">
                <img src="src\assets\avatar.png" alt="Avatar" className="w-10 h-10 rounded-full mr-3" />
                <div>
                    <p className='text-black'>Bienvenido</p>
                    <a href="#" className="py-2 text-blue-500">Iniciar sesión</a>
                </div>
            </div>

        </header>
    );
};

export default Header;
