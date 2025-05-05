import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md dark:bg-gray-800 sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center w-full">
        <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white whitespace-nowrap">
          Abhishek Nair - Portfolio
        </Link>
        {/* Add Navigation Links */}
        <div className="space-x-4 flex">
          <Link to="/" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header; 