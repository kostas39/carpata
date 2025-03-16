import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg py-6 text-xl">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
        <h1 className="text-3xl font-extrabold flex items-center">
          🚗 <Link to="/" className="ml-2">Carpata Parts</Link>
        </h1>
        <nav className="flex space-x-8 text-lg font-semibold">
          <Link to="/" className="hover:text-gray-300">Dashboard</Link>
          <Link to="/search" className="hover:text-gray-300">Search</Link>
          <Link to="/cart" className="hover:text-gray-300">Cart 🛒</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
