// import React, { useState } from "react";
// import {
//   Mail,
//   Phone,
//   Facebook,
//   Instagram,
//   Linkedin,
//   X as Twitter,
//   Menu,
//   X,
// } from "lucide-react";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <>
//       <div className=' bg-white shadow-md'>
//         {/* 🔷 Top Info Bar */}
//         <div className='bg-blue-600 text-white text-sm py-2 px-4'>
//           <div className='max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-2'>
//             {/* Contact Info */}
//             <div className='flex items-center gap-6'>
//               <div className='flex items-center gap-2'>
//                 <Mail size={16} />
//                 <span>tondonholdings@gmail.com</span>
//               </div>
//               <div className='flex items-center gap-2'>
//                 <Phone size={16} />
//                 <span>+977 -980000000</span>
//               </div>
//             </div>

//             {/* Social Icons */}
//             <div className='flex items-center gap-4'>
//               <a href='#' className='hover:text-gray-200 transition'>
//                 <Twitter size={18} />
//               </a>
//               <a href='#' className='hover:text-gray-200 transition'>
//                 <Facebook size={18} />
//               </a>
//               <a href='#' className='hover:text-gray-200 transition'>
//                 <Instagram size={18} />
//               </a>
//               <a href='#' className='hover:text-gray-200 transition'>
//                 <Linkedin size={18} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* 🔷 Main Navigation */}
//       <div className=' sticky top-0 z-50   bg-white'>
//         <div className='max-w-7xl mx-auto px-4 py-3 flex items-center justify-between'>
//           {/* Logo */}
//           <h1 className='text-2xl sm:text-3xl font-bold text-gray-900'>
//             Tondon Holdings
//           </h1>

//           {/* Hamburger Icon (Mobile) */}
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className='md:hidden focus:outline-none'>
//             {menuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>

//           {/* Desktop Navigation */}
//           <nav className='hidden md:flex space-x-8 text-base font-medium'>
//             <a href='#' className='text-gray-700 hover:text-blue-500'>
//               Home
//             </a>

//             <div className='relative group'>
//               <button className='text-gray-700 hover:text-blue-500'>
//                 Services
//               </button>
//               <div className='absolute left-0 mt-2 w-44 bg-white border rounded-md shadow-lg hidden group-hover:block z-50'>
//                 <a href='#' className='block px-4 py-2 hover:bg-gray-100'>
//                   Web Design
//                 </a>
//                 <a href='#' className='block px-4 py-2 hover:bg-gray-100'>
//                   SEO
//                 </a>
//               </div>
//             </div>

//             <a href='#' className='text-gray-700 hover:text-blue-500'>
//               About
//             </a>
//             <a href='#' className='text-gray-700 hover:text-blue-500'>
//               Contact
//             </a>
//           </nav>
//         </div>

//         {/* Mobile Menu */}
//         {menuOpen && (
//           <div className='md:hidden bg-white border-t border-gray-200 shadow-md px-4 py-2 space-y-2'>
//             <a
//               href='#'
//               className='block text-gray-700 hover:bg-gray-100 px-2 py-1 rounded'>
//               Home
//             </a>

//             <details className='group'>
//               <summary className='cursor-pointer text-gray-700 hover:bg-gray-100 px-2 py-1 rounded'>
//                 Services
//               </summary>
//               <div className='pl-4 space-y-1 mt-1'>
//                 <a
//                   href='#'
//                   className='block text-sm px-2 py-1 hover:bg-gray-100 rounded'>
//                   Web Design
//                 </a>
//                 <a
//                   href='#'
//                   className='block text-sm px-2 py-1 hover:bg-gray-100 rounded'>
//                   SEO
//                 </a>
//               </div>
//             </details>

//             <a
//               href=''
//               className='block text-gray-700 hover:bg-gray-100 px-2 py-1 rounded'>
//               About
//             </a>
//             <a
//               href='#'
//               className='block text-gray-700 hover:bg-gray-100 px-2 py-1 rounded'>
//               Contact
//             </a>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Header;

import React, { useState } from "react";
import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  X as Twitter,
  Menu,
  X,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const linkClass = (path) =>
    `hover:text-blue-500 ${
      isActive(path) ? "text-blue-600 font-semibold" : "text-gray-700"
    }`;

  return (
    <>
      {/* 🔷 Top Info Bar */}
      <div className='bg-white shadow-md'>
        <div className='bg-blue-900 text-white text-sm py-2 px-4'>
          <div className='max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-2'>
            <div className='flex items-center gap-6'>
              <div className='flex items-center gap-2'>
                <Mail size={16} />
                <span>tondonholdings@gmail.com</span>
              </div>
              <div className='flex items-center gap-2'>
                <Phone size={16} />
                <span>+977 -980000000</span>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <a href='#' className='hover:text-gray-200 transition'>
                <Twitter size={18} />
              </a>
              <a href='#' className='hover:text-gray-200 transition'>
                <Facebook size={18} />
              </a>
              <a href='#' className='hover:text-gray-200 transition'>
                <Instagram size={18} />
              </a>
              <a href='#' className='hover:text-gray-200 transition'>
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 🔷 Main Navigation */}
      <div className='sticky top-0 z-50 bg-white bg-gradient-to-br from-blue-400/20 to-purple-300/20'>
        <div className='max-w-7xl mx-auto px-4 py-3 flex items-center justify-between'>
          {/* <h1 className='text-2xl sm:text-3xl font-stretch-semi-condensed text-gray-900'>
            Tondon Holdings
          </h1> */}
          <h1 className='text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 font-sans'>
            <span className='text-purple-600'>Tondon</span>{" "}
            <span className='text-blue-500'>Holdings</span>
          </h1>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className='md:hidden focus:outline-none'>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className='hidden md:flex space-x-8 text-base font-medium'>
            <Link to='/' className={linkClass("/")}>
              Home
            </Link>

            <div className='relative group'>
              <button className='text-gray-700 hover:text-blue-500'>
                Services
              </button>
              <div className='absolute left-0 mt-2 w-44 bg-white border rounded-md shadow-lg hidden group-hover:block z-50'>
                <Link
                  to='/services/web-design'
                  className='block px-4 py-2 hover:bg-gray-100'>
                  Web Design
                </Link>
                <Link
                  to='/services/seo'
                  className='block px-4 py-2 hover:bg-gray-100'>
                  SEO
                </Link>
              </div>
            </div>

            <Link to='/about' className={linkClass("/about")}>
              About
            </Link>
            <Link to='/contact' className={linkClass("/contact")}>
              Contact
            </Link>
          </nav>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className='md:hidden bg-white border-t border-gray-300 shadow-md px-4 py-2 space-y-2'>
            <Link
              to='/'
              className={`block hover:bg-gray-100 px-2 py-1 rounded ${linkClass(
                "/"
              )}`}>
              Home
            </Link>

            <details className='group'>
              <summary className='cursor-pointer text-gray-700 hover:bg-gray-100 px-2 py-1 rounded'>
                Services
              </summary>
              <div className='pl-4 space-y-1 mt-1'>
                <Link
                  to='/services/web-design'
                  className='block text-sm px-2 py-1 hover:bg-gray-100 rounded'>
                  Web Design
                </Link>
                <Link
                  to='/services/seo'
                  className='block text-sm px-2 py-1 hover:bg-gray-100 rounded'>
                  SEO
                </Link>
              </div>
            </details>

            <Link
              to='/about'
              className={`block hover:bg-gray-100 px-2 py-1 rounded ${linkClass(
                "/about"
              )}`}>
              About
            </Link>
            <Link
              to='/contact'
              className={`block hover:bg-gray-100 px-2 py-1 rounded ${linkClass(
                "/contact"
              )}`}>
              Contact
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
