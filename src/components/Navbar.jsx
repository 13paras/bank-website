import React from "react";
import index from "../assets/index";
import { navLinks } from "../Constants";

const Navbar = () => {
  return (
    <nav className="w-full py-6 flex justify-between items-center">
      <img className="w-36 h-8" src={index.logo} alt="" />
      <ul className="text-[#FFFFFF] flex space-x-5 ">
       {
        navLinks.map((nav, index) =>(
          <li key={nav.id} className="hover:text-gray-300 cursor-pointer font-poppins"> {nav.title} </li>
        ))
       }
      </ul>
    </nav>
  );
};

export default Navbar;
