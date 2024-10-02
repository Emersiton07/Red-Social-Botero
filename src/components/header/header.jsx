import React, { useState, useEffect, useRef } from 'react';
import './header.css'
import MenuComponent from './MenuComponent';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <header className=" p-4 flex justify-between items-center">
            {/* Icono del menú desplegable */}
            <MenuComponent />

            <div className="relative" ref={dropdownRef}>
               <div className='flex flex-row justify-between items-center'>
               <div className="text-white mr-2">
                    <img
                        src="src/assets/avatar.png"
                        alt="Avatar"
                        className="w-10 h-10 rounded-full cursor-pointer mr-3"
                        onClick={toggleDropdown}
                    />
                    
                </div>
                <div className='mr-8'>
                <p className='text-black'>Bienvenido</p>
                <a href="/login" className="py-2 text-blue-500">Iniciar sesión</a>
            </div>
               </div>
              
                {isOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10 transition-all duration-200 ease-in-out">
                        <ul className="py-2">
                            <li>
                                <a
                                    href="/profile"
                                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                >
                                    Perfil
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/settings"
                                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                >
                                    Configuración
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/login"
                                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                >
                                    Iniciar sesión
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
                 
            </div>
           



        </header>
    );
};

export default Header;
