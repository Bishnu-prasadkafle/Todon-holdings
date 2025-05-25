import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='bg-white shadow-sm sticky top-8 z-40 border-t-4 border-blue-500'>
      <div className='max-w-7xl mx-auto px-4 py-3 flex items-center justify-between'>
        {/* Logo */}
        <h1 className='text-3xl font-bold text-gray-900'>Tondon</h1>

        {/* Hamburger Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className='md:hidden focus:outline-none'>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex space-x-8 text-base font-medium'>
          <a href='#' className='text-gray-700 hover:text-blue-500'>
            Home
          </a>
          <div className='relative group'>
            <button className='text-gray-700 hover:text-blue-500'>
              Services
            </button>
            <div className='absolute left-0 mt-2 w-44 bg-white border rounded-md shadow-lg hidden group-hover:block z-50'>
              <a href='#' className='block px-4 py-2 hover:bg-gray-100'>
                Web Design
              </a>
              <a href='#' className='block px-4 py-2 hover:bg-gray-100'>
                SEO
              </a>
            </div>
          </div>
          <a href='#' className='text-gray-700 hover:text-blue-500'>
            About
          </a>
          <a href='#' className='text-gray-700 hover:text-blue-500'>
            Contact
          </a>
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='md:hidden bg-white border-t border-gray-200 shadow-md px-4 py-2 space-y-2'>
          <a
            href='#'
            className='block text-gray-700 hover:bg-gray-100 px-2 py-1 rounded'>
            Home
          </a>
          <details className='group'>
            <summary className='cursor-pointer text-gray-700 hover:bg-gray-100 px-2 py-1 rounded'>
              Services
            </summary>
            <div className='pl-4 space-y-1 mt-1'>
              <a
                href='#'
                className='block text-sm px-2 py-1 hover:bg-gray-100 rounded'>
                Web Design
              </a>
              <a
                href='#'
                className='block text-sm px-2 py-1 hover:bg-gray-100 rounded'>
                SEO
              </a>
            </div>
          </details>
          <a
            href='#'
            className='block text-gray-700 hover:bg-gray-100 px-2 py-1 rounded'>
            About
          </a>
          <a
            href='#'
            className='block text-gray-700 hover:bg-gray-100 px-2 py-1 rounded'>
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
