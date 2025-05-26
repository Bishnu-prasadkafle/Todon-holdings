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
    `hover:text-[#06b6d4] transition-all duration-300 font-medium ${
      isActive(path) ? "text-[#3b82f6] font-semibold" : "text-[#f8fafc]"
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
          className='w-full text-left cursor-pointer text-[#f8fafc] hover:bg-[#1e293bcc] px-3 py-2 rounded-md transition-all duration-200 flex items-center justify-between'
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
                <div className='text-xs font-semibold text-[#3b82f6] uppercase tracking-wider px-3 py-2 bg-[#3b82f6]/5 rounded-md'>
                  {category.category}
                </div>
                {category.items.map((service) => {
                  const IconComponent = service.icon;
                  return (
                    <Link
                      key={service.name}
                      to={service.path}
                      className={`flex items-center gap-3 text-sm px-3 py-2 hover:bg-[#1e293bcc] rounded-md transition-all duration-200 ${
                        isActive(service.path)
                          ? "text-[#3b82f6] bg-[#3b82f6]/10 font-semibold"
                          : "text-[#f8fafc] hover:text-[#06b6d4]"
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
          className='flex items-center gap-1 text-[#f8fafc] hover:text-[#06b6d4] transition-all duration-300 py-2 px-4 rounded-lg hover:bg-[#1e293bcc] font-medium'
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
          className={`absolute left-0 mt-2 w-80 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl shadow-xl backdrop-blur-sm z-50 transition-all duration-300 transform origin-top ${
            servicesOpen
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
          }`}
          onMouseLeave={() => setServicesOpen(false)}>
          <div className='py-3 max-h-96 overflow-y-auto'>
            {services.map((category, categoryIndex) => (
              <div key={category.category}>
                <div className='px-4 py-2 text-xs font-semibold text-[#1e293b] uppercase tracking-wider bg-[#3b82f6]/5 mx-3 rounded-lg'>
                  {category.category}
                </div>

                <div className='py-2 px-3'>
                  {category.items.map((service) => {
                    const IconComponent = service.icon;
                    return (
                      <Link
                        key={service.name}
                        to={service.path}
                        className={`group flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 ${
                          isActive(service.path)
                            ? "text-[#3b82f6] bg-[#3b82f6]/10 border border-[#3b82f6]/20"
                            : "text-[#1e293b] hover:text-[#3b82f6] hover:bg-[#f1f5f9]"
                        }`}
                        onClick={() => setServicesOpen(false)}>
                        <div
                          className={`flex-shrink-0 w-5 h-5 transition-colors duration-200 ${
                            isActive(service.path)
                              ? "text-[#3b82f6]"
                              : "text-[#64748b] group-hover:text-[#3b82f6]"
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
                          <div className='w-2 h-2 bg-[#3b82f6] rounded-full'></div>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                {categoryIndex < services.length - 1 && (
                  <div className='border-t border-[#e2e8f0] mx-3 my-2'></div>
                )}
              </div>
            ))}
          </div>
          <div className='h-1 bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] rounded-b-xl'></div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* 🔷 Main Navigation */}
      <div className='sticky top-0 z-50 bg-[#1e293b] shadow-lg border-b border-[#334155]'>
        <div className='max-w-7xl mx-auto px-4 py-4 flex items-center justify-between'>
          <Link
            to='/'
            className='text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#f8fafc] font-heading hover:opacity-90 transition-opacity duration-300'>
            <span className='text-[#3b82f6]'>Tondon</span>{" "}
            <span className='text-[#06b6d4]'>Holdings</span>
          </Link>

          <div className='mobile-menu-container'>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setMenuOpen(!menuOpen);
              }}
              className='md:hidden focus:outline-none p-2 rounded-lg hover:bg-[#334155] transition-colors text-[#f8fafc]'
              aria-label='Toggle menu'>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <nav className='hidden md:flex space-x-2 lg:space-x-4 text-base font-medium items-center'>
            <Link
              to='/'
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${linkClass(
                "/"
              )}`}>
              Home
            </Link>

            <DesktopServicesDropdown />

            <Link
              to='/about'
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${linkClass(
                "/about"
              )}`}>
              About
            </Link>
            <Link
              to='/contact'
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${linkClass(
                "/contact"
              )}`}>
              Contact
            </Link>

            {/* Mail and Phone Icons */}
            <div className='flex items-center space-x-2 ml-6 border-l border-[#334155] pl-6'>
              <a
                href='mailto:info@tondonholdings.com'
                className='text-[#f8fafc] hover:text-[#06b6d4] transition-all duration-300 p-2 hover:bg-[#334155] rounded-lg group'
                aria-label='Email us'>
                <Mail
                  size={20}
                  className='group-hover:scale-110 transition-transform duration-200'
                />
              </a>
              <a
                href='tel:+1234567890'
                className='text-[#f8fafc] hover:text-[#06b6d4] transition-all duration-300 p-2 hover:bg-[#334155] rounded-lg group'
                aria-label='Call us'>
                <Phone
                  size={20}
                  className='group-hover:scale-110 transition-transform duration-200'
                />
              </a>
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <>
            <div className='mobile-menu-container md:hidden bg-[#1e293b] border-t border-[#334155] shadow-xl px-4 py-4 space-y-3 max-h-[70vh] overflow-y-auto'>
              <Link
                to='/'
                className={`block hover:bg-[#334155] px-3 py-2 rounded-lg transition-all duration-300 ${linkClass(
                  "/"
                )}`}
                onClick={() => setMenuOpen(false)}>
                Home
              </Link>

              <MobileServicesDropdown />

              <Link
                to='/about'
                className={`block hover:bg-[#334155] px-3 py-2 rounded-lg transition-all duration-300 ${linkClass(
                  "/about"
                )}`}
                onClick={() => setMenuOpen(false)}>
                About
              </Link>
              <Link
                to='/contact'
                className={`block hover:bg-[#334155] px-3 py-2 rounded-lg transition-all duration-300 ${linkClass(
                  "/contact"
                )}`}
                onClick={() => setMenuOpen(false)}>
                Contact
              </Link>

              {/* Mobile Mail and Phone Icons */}
              <div className='flex items-center space-x-4 pt-4 border-t border-[#334155] mt-4'>
                <a
                  href='mailto:info@tondonholdings.com'
                  className='flex items-center gap-3 text-[#f8fafc] hover:text-[#06b6d4] transition-all duration-300 px-3 py-2 hover:bg-[#334155] rounded-lg group flex-1'
                  onClick={() => setMenuOpen(false)}>
                  <Mail
                    size={18}
                    className='group-hover:scale-110 transition-transform duration-200'
                  />
                  <span className='text-sm font-medium'>Email</span>
                </a>
                <a
                  href='tel:+1234567890'
                  className='flex items-center gap-3 text-[#f8fafc] hover:text-[#06b6d4] transition-all duration-300 px-3 py-2 hover:bg-[#334155] rounded-lg group flex-1'
                  onClick={() => setMenuOpen(false)}>
                  <Phone
                    size={18}
                    className='group-hover:scale-110 transition-transform duration-200'
                  />
                  <span className='text-sm font-medium'>Call</span>
                </a>
              </div>
            </div>

            {/* Mobile Overlay */}
            <div
              className='fixed inset-0 bg-[#1e293bcc] backdrop-blur-sm z-40 md:hidden'
              onClick={() => setMenuOpen(false)}
            />
          </>
        )}
      </div>
    </>
  );
};

export default Header;
