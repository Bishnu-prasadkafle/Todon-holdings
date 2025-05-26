import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

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

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest(".mobile-menu-container")) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen]);

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
    // Uncommented additional services for full functionality
    // {
    //   category: "Marketing & Analysis",
    //   items: [
    //     {
    //       name: "Digital Marketing",
    //       icon: TrendingUp,
    //       path: "/services/digital-marketing",
    //     },
    //     {
    //       name: "Business Analysis",
    //       icon: BarChart3,
    //       path: "/services/business-analysis",
    //     },
    //     {
    //       name: "Market Research",
    //       icon: Search,
    //       path: "/services/market-research",
    //     },
    //   ],
    // },
    // {
    //   category: "Technology Solutions",
    //   items: [
    //     {
    //       name: "Web Development",
    //       icon: Code,
    //       path: "/services/web-development",
    //     },
    //     {
    //       name: "Cloud Services",
    //       icon: Cloud,
    //       path: "/services/cloud-services",
    //     },
    //     { name: "AI & ML Solutions", icon: Brain, path: "/services/ai-ml" },
    //   ],
    // },
  ];

  // Enhanced Mobile Services Dropdown Component
  const MobileServicesDropdown = () => {
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

    return (
      <div className='w-full'>
        <button
          className='w-full text-left cursor-pointer text-gray-700 hover:bg-gray-100 px-2 py-2 rounded flex items-center justify-between'
          onClick={(e) => {
            e.preventDefault();
            setMobileServicesOpen(!mobileServicesOpen);
          }}>
          <span>Services</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              mobileServicesOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {mobileServicesOpen && (
          <div className='pl-4 space-y-1 mt-1 max-h-96 overflow-y-auto'>
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
                      className={`flex items-center gap-2 text-sm px-2 py-2 hover:bg-gray-100 rounded transition-colors duration-200 ${
                        isActive(service.path)
                          ? "text-blue-600 bg-blue-50 font-semibold"
                          : "text-gray-600 hover:text-blue-600"
                      }`}
                      onClick={() => {
                        setMenuOpen(false);
                        setMobileServicesOpen(false);
                      }}>
                      <IconComponent className='w-4 h-4 flex-shrink-0' />
                      <span>{service.name}</span>
                    </Link>
                  );
                })}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  // Desktop Services Dropdown Component
  const DesktopServicesDropdown = () => {
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
          className={`absolute left-0 mt-1 w-80 bg-white border border-gray-200 rounded-lg shadow-xl z-50 transition-all duration-300 transform origin-top ${
            servicesOpen
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
          }`}
          onMouseLeave={() => setServicesOpen(false)}>
          <div className='py-2 max-h-96 overflow-y-auto'>
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
                        className={`group flex items-center gap-3 px-4 py-3 transition-all duration-200 ${
                          isActive(service.path)
                            ? "text-blue-600 bg-blue-50 border-r-2 border-blue-500"
                            : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                        }`}
                        onClick={() => setServicesOpen(false)}>
                        <div
                          className={`flex-shrink-0 w-5 h-5 transition-colors duration-200 ${
                            isActive(service.path)
                              ? "text-blue-500"
                              : "text-gray-500 group-hover:text-blue-500"
                          }`}>
                          <IconComponent className='w-full h-full' />
                        </div>
                        <span className='font-medium'>{service.name}</span>
                        <div
                          className={`ml-auto transition-opacity duration-200 ${
                            isActive(service.path)
                              ? "opacity-100"
                              : "opacity-0 group-hover:opacity-100"
                          }`}>
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
            <div className='flex items-center gap-4 sm:gap-6'>
              <div className='flex items-center gap-2'>
                <Mail size={16} />
                <span className='hidden sm:inline'>
                  tondonholdings@gmail.com
                </span>
                <span className='sm:hidden'>Email</span>
              </div>
              <div className='flex items-center gap-2'>
                <Phone size={16} />
                <span className='hidden sm:inline'>+977 -980000000</span>
                <span className='sm:hidden'>Call</span>
              </div>
            </div>
            <div className='flex items-center gap-3 sm:gap-4'>
              <a
                href='#'
                className='hover:text-gray-200 transition'
                aria-label='Twitter'>
                <Twitter size={16} className='sm:w-[18px] sm:h-[18px]' />
              </a>
              <a
                href='#'
                className='hover:text-gray-200 transition'
                aria-label='Facebook'>
                <Facebook size={16} className='sm:w-[18px] sm:h-[18px]' />
              </a>
              <a
                href='#'
                className='hover:text-gray-200 transition'
                aria-label='Instagram'>
                <Instagram size={16} className='sm:w-[18px] sm:h-[18px]' />
              </a>
              <a
                href='#'
                className='hover:text-gray-200 transition'
                aria-label='LinkedIn'>
                <Linkedin size={16} className='sm:w-[18px] sm:h-[18px]' />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 🔷 Main Navigation */}
      <div className='sticky top-0 z-50 bg-white bg-gradient-to-br from-blue-400/20 to-purple-300/20'>
        <div className='max-w-7xl mx-auto px-4 py-3 flex items-center justify-between'>
          <Link
            to='/'
            className='text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 font-sans hover:opacity-80 transition-opacity duration-200'>
            <span className='text-purple-600'>Tondon</span>{" "}
            <span className='text-blue-500'>Holdings</span>
          </Link>

          <div className='mobile-menu-container'>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setMenuOpen(!menuOpen);
              }}
              className='md:hidden focus:outline-none p-2 rounded-md hover:bg-gray-100 transition-colors'
              aria-label='Toggle menu'>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <nav className='hidden md:flex space-x-6 lg:space-x-8 text-base font-medium items-center'>
            <Link to='/' className={linkClass("/")}>
              Home
            </Link>

            <DesktopServicesDropdown />

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
            <div className='mobile-menu-container md:hidden bg-white border-t border-gray-300 shadow-lg px-4 py-3 space-y-2 max-h-[70vh] overflow-y-auto'>
              <Link
                to='/'
                className={`block hover:bg-gray-100 px-2 py-2 rounded transition-colors duration-200 ${linkClass(
                  "/"
                )}`}
                onClick={() => setMenuOpen(false)}>
                Home
              </Link>

              <MobileServicesDropdown />

              <Link
                to='/about'
                className={`block hover:bg-gray-100 px-2 py-2 rounded transition-colors duration-200 ${linkClass(
                  "/about"
                )}`}
                onClick={() => setMenuOpen(false)}>
                About
              </Link>
              <Link
                to='/contact'
                className={`block hover:bg-gray-100 px-2 py-2 rounded transition-colors duration-200 ${linkClass(
                  "/contact"
                )}`}
                onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </div>

            {/* Mobile Overlay */}
            {/* <div
              className='fixed inset-0  bg-opacity-20 z-40 md:hidden'
              onClick={() => setMenuOpen(false)}
            /> */}
          </>
        )}
      </div>
    </>
  );
};

export default Header;
