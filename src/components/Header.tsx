import React, { useState } from "react";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* LOGO + TITLE */}
        <div className="flex items-center space-x-4">
          <img src="/logo.svg" alt="Logo" className="h-10" />
          <h1 className="text-2xl font-bold">Carpata Parts Platform</h1>
        </div>

        {/* NAVIGATION LINKS */}
        <nav className="hidden lg:flex space-x-8 text-lg font-medium">
          <a href="#dashboard" className="hover:text-gray-300">Dashboard</a>
          <a href="#search" className="hover:text-gray-300">Search</a>
          <a href="#cart" className="hover:text-gray-300">Cart</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="lg:hidden bg-white text-black shadow-lg absolute w-full left-0 top-16 p-4">
          <nav className="flex flex-col space-y-4">
            <a href="#dashboard" className="block p-2 hover:bg-gray-200 rounded">Dashboard</a>
            <a href="#search" className="block p-2 hover:bg-gray-200 rounded">Search</a>
            <a href="#cart" className="block p-2 hover:bg-gray-200 rounded">Cart</a>
            <a href="#contact" className="block p-2 hover:bg-gray-200 rounded">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
