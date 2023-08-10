import React, { useState } from "react";
import index from "../assets/index";
import { navLinks } from "../Constants";
import { Link } from "react-scroll";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleMenuClick = () => {
    setShow(!show)
  };

  return (
    <header className="relative flex items-center justify-between py-3 lg:container lg:mx-auto">
      <img className="w-36 h-8" src={index.logo} alt="" />

      {/* MObile menu icon */}
      <div
          onClick={() => setShow(!show)}
          className='mr-3 cursor-pointer space-y-1 transition-all duration-200 ease-in-out md:hidden'
        >
          <span
            className={`block h-[2px] w-6 rounded-full bg-white transition-all duration-200 ease-in-out ${
              show ? "translate-y-2 rotate-[50deg]" : "translate-y-0 rotate-0"
            } `}
          ></span>
          <span
            className={`block h-[2px] w-6 rounded-full bg-white transition-all duration-200 ease-in-out ${
              show ? "opacity-0" : "opacity-100"
            } `}
          ></span>
          <span
            className={`block h-[2px] w-6 rounded-full bg-white transition-all duration-200 ease-in-out ${
              show
                ? "-translate-y-1 -rotate-[50deg]"
                : " translate-y-0 rotate-0"
            } `}
          ></span>
        </div>

        {/* Nav Links */}
      <nav onClick={handleMenuClick} className={`text-[#FFFFFF] absolute mr-4 flex items-center lg:justify-between space-y-6 py-12 text-center text-lg transition-all duration-500 ease-in-out md:static md:h-auto md:w-auto md:translate-x-0 z-50 md:flex-row md:space-x-5 md:space-y-0 md:bg-transparent md:py-0 md:text-left ${
            show
              ? "top-12 h-screen w-full translate-x-0 flex-col bg-zinc-800"
              : "top-12 h-screen w-full -translate-x-full flex-col bg-zinc-800"
          }  `}>
       {
        navLinks.map((nav, index) =>(
          <Link to={nav.id} spy={true} smooth={true} offset={-20} duration={300} key={nav.id} className="hover:text-gray-300 text-3xl lg:text-base cursor-pointer font-poppins"> {nav.title} </Link>
        ))
       }
      </nav>
    </header>
  );
};

export default Navbar;

// Li: hover:text-gray-300 cursor-pointer font-poppins