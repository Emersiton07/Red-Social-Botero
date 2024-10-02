import React, { useState } from 'react';
import './header.css'; // Asegúrate de que esta ruta sea correcta

const MenuComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="text-white relative">
      <button onClick={toggleMenu} className="focus:outline-none">
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="black"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      {/* Menú desplegable */}
      {isOpen && (
        <div className="absolute top-0 left-10 w-full bg-white shadow-lg rounded-md transform -translate-x-full menu-slide-in">
          <ul className="py-1">
            <li>
              <a href="#" className=" px-4 py-2 text-gray-800 hover:bg-gray-100">
                Opción 1
              </a>
            </li>
            <li>
              <a href="#" className="px-4 py-2 text-gray-800 hover:bg-gray-100">
                Opción 2
              </a>
            </li>
            <li>
              <a href="#" className="px-4 py-2 text-gray-800 hover:bg-gray-100">
                Opción 3
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuComponent;
