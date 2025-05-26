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
// import { Link, useLocation } from "react-router-dom";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const location = useLocation();

//   const isActive = (path) => location.pathname === path;

//   const linkClass = (path) =>
//     `hover:text-blue-500 ${
//       isActive(path) ? "text-blue-600 font-semibold" : "text-gray-700"
//     }`;

//   return (
//     <>
//       {/* 🔷 Top Info Bar */}
//       <div className='bg-white shadow-md'>
//         <div className='bg-blue-900 text-white text-sm py-2 px-4'>
//           <div className='max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-2'>
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
//       <div className='sticky top-0 z-50 bg-white bg-gradient-to-br from-blue-400/20 to-purple-300/20'>
//         <div className='max-w-7xl mx-auto px-4 py-3 flex items-center justify-between'>
//           {/* <h1 className='text-2xl sm:text-3xl font-stretch-semi-condensed text-gray-900'>
//             Tondon Holdings
//           </h1> */}
//           <h1 className='text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 font-sans'>
//             <span className='text-purple-600'>Tondon</span>{" "}
//             <span className='text-blue-500'>Holdings</span>
//           </h1>

//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className='md:hidden focus:outline-none'>
//             {menuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>

//           <nav className='hidden md:flex space-x-8 text-base font-medium'>
//             <Link to='/' className={linkClass("/")}>
//               Home
//             </Link>

//             <div className='relative group'>
//               <button className='text-gray-700 hover:text-blue-500'>
//                 Services
//               </button>
//               <div className='absolute left-0 mt-2 w-44 bg-white border rounded-md shadow-lg hidden group-hover:block z-50'>
//                 <Link
//                   to='/services/web-design'
//                   className='block px-4 py-2 hover:bg-gray-100'>
//                   Service 1
//                 </Link>
//                 <Link
//                   to='/services/seo'
//                   className='block px-4 py-2 hover:bg-gray-100'>
//                   Service 2
//                 </Link>
//               </div>
//             </div>

//             <Link to='/about' className={linkClass("/about")}>
//               About
//             </Link>
//             <Link to='/contact' className={linkClass("/contact")}>
//               Contact
//             </Link>
//           </nav>
//         </div>

//         {/* Mobile Menu */}
//         {menuOpen && (
//           <div className='md:hidden bg-white border-t border-gray-300 shadow-md px-4 py-2 space-y-2'>
//             <Link
//               to='/'
//               className={`block hover:bg-gray-100 px-2 py-1 rounded ${linkClass(
//                 "/"
//               )}`}>
//               Home
//             </Link>

//             <details className='group'>
//               <summary className='cursor-pointer text-gray-700 hover:bg-gray-100 px-2 py-1 rounded'>
//                 Services
//               </summary>
//               <div className='pl-4 space-y-1 mt-1'>
//                 <Link
//                   to='/services/web-design'
//                   className='block text-sm px-2 py-1 hover:bg-gray-100 rounded'>
//                   Service 1
//                 </Link>
//                 <Link
//                   to='/services/seo'
//                   className='block text-sm px-2 py-1 hover:bg-gray-100 rounded'>
//                   Service 2
//                 </Link>
//               </div>
//             </details>

//             <Link
//               to='/about'
//               className={`block hover:bg-gray-100 px-2 py-1 rounded ${linkClass(
//                 "/about"
//               )}`}>
//               About
//             </Link>
//             <Link
//               to='/contact'
//               className={`block hover:bg-gray-100 px-2 py-1 rounded ${linkClass(
//                 "/contact"
//               )}`}>
//               Contact
//             </Link>
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
  Twitter,
  Menu,
  X,
  Users,
  Monitor,
  Truck,
  TrendingUp,
  BarChart3,
  Search,
  Code,
  Cloud,
  Brain,
  ChevronDown,
} from "lucide-react";
// Note: Replace demo Link component with React Router Link in your project

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // For demo purposes - replace with useLocation hook in your project
  const location = { pathname: "/" };
  const isActive = (path) => location.pathname === path;

  const linkClass = (path) =>
    `hover:text-blue-500 transition-colors duration-200 ${
      isActive(path) ? "text-blue-600 font-semibold" : "text-gray-700"
    }`;

  const services = [
    {
      category: "Core Services",
      items: [
        { name: "Consulting", icon: Users, path: "/services/consulting" },
        { name: "IT Services", icon: Monitor, path: "/services/it-services" },
        { name: "Logistics", icon: Truck, path: "/services/logistics" },
      ],
    },
    {
      category: "Marketing & Analysis",
      items: [
        {
          name: "Digital Marketing",
          icon: TrendingUp,
          path: "/services/digital-marketing",
        },
        {
          name: "Business Analysis",
          icon: BarChart3,
          path: "/services/business-analysis",
        },
        {
          name: "Market Research",
          icon: Search,
          path: "/services/market-research",
        },
      ],
    },
    {
      category: "Technology Solutions",
      items: [
        {
          name: "Web Development",
          icon: Code,
          path: "/services/web-development",
        },
        {
          name: "Cloud Services",
          icon: Cloud,
          path: "/services/cloud-services",
        },
        { name: "AI & ML Solutions", icon: Brain, path: "/services/ai-ml" },
      ],
    },
  ];

  // Demo Link component - replace with React Router Link in your project
  const Link = ({ to, children, className, onClick }) => (
    <a
      href={to}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        console.log(`Navigate to: ${to}`);
        if (onClick) onClick();
      }}>
      {children}
    </a>
  );

  // Enhanced Services Dropdown Component
  const ServicesDropdown = ({ isMobile = false }) => {
    if (isMobile) {
      return (
        <details className='group'>
          <summary className='cursor-pointer text-gray-700 hover:bg-gray-100 px-2 py-1 rounded flex items-center gap-2'>
            <span>Services</span>
            <ChevronDown className='w-4 h-4 group-open:rotate-180 transition-transform duration-200' />
          </summary>
          <div className='pl-4 space-y-1 mt-1'>
            {services.map((category) => (
              <div key={category.category} className='mb-3'>
                <div className='text-xs font-semibold text-gray-500 uppercase tracking-wider px-2 py-1'>
                  {category.category}
                </div>
                {category.items.map((service) => {
                  const IconComponent = service.icon;
                  return (
                    <Link
                      key={service.name}
                      to={service.path}
                      className='flex items-center gap-2 text-sm px-2 py-1 hover:bg-gray-100 rounded text-gray-600 hover:text-blue-600 transition-colors duration-200'
                      onClick={() => setMenuOpen(false)}>
                      <IconComponent className='w-4 h-4' />
                      <span>{service.name}</span>
                    </Link>
                  );
                })}
              </div>
            ))}
          </div>
        </details>
      );
    }

    return (
      <div className='relative'>
        <button
          className='flex items-center gap-1 text-gray-700 hover:text-blue-500 transition-colors duration-200 py-2 px-3 rounded-md hover:bg-gray-50'
          onMouseEnter={() => setServicesOpen(true)}
          onClick={() => setServicesOpen(!servicesOpen)}>
          <span>Services</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              servicesOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          className={`absolute left-0 mt-1 w-72 bg-white border border-gray-200 rounded-lg shadow-xl z-50 transition-all duration-300 transform origin-top ${
            servicesOpen
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
          }`}
          onMouseLeave={() => setServicesOpen(false)}>
          <div className='py-2'>
            {services.map((category, categoryIndex) => (
              <div key={category.category}>
                <div className='px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider bg-gray-50'>
                  {category.category}
                </div>

                <div className='py-1'>
                  {category.items.map((service) => {
                    const IconComponent = service.icon;
                    return (
                      <Link
                        key={service.name}
                        to={service.path}
                        className='group flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200'
                        onClick={() => setServicesOpen(false)}>
                        <div className='flex-shrink-0 w-5 h-5 text-gray-500 group-hover:text-blue-500 transition-colors duration-200'>
                          <IconComponent className='w-full h-full' />
                        </div>
                        <span className='font-medium'>{service.name}</span>
                        <div className='ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
                          <div className='w-1 h-1 bg-blue-500 rounded-full'></div>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                {categoryIndex < services.length - 1 && (
                  <div className='border-t border-gray-100 my-1'></div>
                )}
              </div>
            ))}
          </div>
          <div className='h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-b-lg'></div>
        </div>
      </div>
    );
  };

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
          <h1 className='text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 font-sans'>
            <span className='text-purple-600'>Tondon</span>{" "}
            <span className='text-blue-500'>Holdings</span>
          </h1>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className='md:hidden focus:outline-none'>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className='hidden md:flex space-x-8 text-base font-medium items-center'>
            <Link to='/' className={linkClass("/")}>
              Home
            </Link>

            <ServicesDropdown />

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
          <>
            <div className='md:hidden bg-white border-t border-gray-300 shadow-md px-4 py-2 space-y-2'>
              <Link
                to='/'
                className={`block hover:bg-gray-100 px-2 py-1 rounded ${linkClass(
                  "/"
                )}`}
                onClick={() => setMenuOpen(false)}>
                Home
              </Link>

              <ServicesDropdown isMobile={true} />

              <Link
                to='/about'
                className={`block hover:bg-gray-100 px-2 py-1 rounded ${linkClass(
                  "/about"
                )}`}
                onClick={() => setMenuOpen(false)}>
                About
              </Link>
              <Link
                to='/contact'
                className={`block hover:bg-gray-100 px-2 py-1 rounded ${linkClass(
                  "/contact"
                )}`}
                onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </div>
            {/* Mobile Overlay */}
            <div
              className='fixed inset-0 bg-black bg-opacity-20 z-40'
              onClick={() => setMenuOpen(false)}
            />
          </>
        )}
      </div>
    </>
  );
};

export default Header;
