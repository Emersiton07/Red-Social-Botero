import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";

import { CiMap } from "react-icons/ci";
import { LuGalleryHorizontalEnd } from "react-icons/lu";
import { IoExitOutline } from "react-icons/io5";
import { Link } from "react-router-dom";  // Importamos Link aquí

const MenuComponent = () => {
  const [nav, setNav] = useState(false);

  const menuItems = [
    { icon: <CiMap size={25} className="mr-4 " />, text: "Mapa", route: "/mapa" },
    { icon: <MdFavorite size={25} className="mr-4" />, text: "Gamificación", route: "/gamificacion" },
    { icon: <FaWallet size={25} className="mr-4" />, text: "Obras", route: "/obras" },
    { icon: <LuGalleryHorizontalEnd size={25} className="mr-4" />, text: "Galería Virtual", route: "/galeria-virtual" },
    { icon: <IoExitOutline size={25} className="mr-4" />, text: "Cerrar Sesión", route: "/cerrar-sesion" },
  ];

  return (
    <div className="max-w-[1640px] p-4 shadow-sm">
      {/* Left side */}
      <div onClick={() => setNav(!nav)} className="cursor-pointer">
        <AiOutlineMenu size={30} />
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* Side drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          SIB <span className="font-bold">HAD</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            {menuItems.map(({ icon, text, route }, index) => {
              return (
                <div key={index} className="py-4">
                  <Link to={route}>
                    <li className="text-xl flex cursor-pointer mx-auto p-2 hover:text-white hover:bg-black">
                      {icon} {text}
                    </li>
                  </Link>
                </div>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MenuComponent;
