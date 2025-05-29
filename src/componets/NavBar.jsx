import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 w-full bg-red-900 text-white shadow-md z-50 ">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <span className="font-extrabold text-3xl text-white">OT-G</span>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-gray-200 text-lg">
          <a href="#Home" className="hover:text-white">Home</a>
          <a href="#About" className="hover:text-white">About</a>
          <a href="#Skills" className="hover:text-white">Skills</a>
          <a href="#Work" className="hover:text-white">Work</a>
          <a href="#Certificate" className="hover:text-white">Certificate</a>
          <a href="#Contact" className="hover:text-white">Contact</a>
        </nav>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-x-6 bg-gray-800 text-gray-200">
          <a href="#Home" onClick={toggleMenu}>Home</a>
          <a href="#About" onClick={toggleMenu}>About</a>
          <a href="#Skills" onClick={toggleMenu}>Skills</a>
          <a href="#Work" onClick={toggleMenu}>Work</a>
          <a href="#Certificate" onClick={toggleMenu}>Certificate</a>
          <a href="#Contact" onClick={toggleMenu}>Contact</a>

        </div>
      )}
    </header>
  );
};

export default NavBar;
