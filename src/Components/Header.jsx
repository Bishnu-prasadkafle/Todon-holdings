import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Mail, Phone, Menu, X, ChevronDown, ArrowRight } from "lucide-react";

const servicesData = [
  {
    name: "Consulting",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&q=80",
    path: "/services/consulting",
    description:
      "Expert business and technology consulting to help you grow and innovate.",
  },
  {
    name: "IT Services",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=80",
    path: "/services/it-services",
    description:
      "Comprehensive IT solutions, support, and infrastructure for your business.",
  },
  {
    name: "Logistics",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&q=80",
    path: "/services/logistics",
    description:
      "Reliable logistics and supply chain management for seamless operations.",
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [dropdownHovered, setDropdownHovered] = useState(false);

  const location = useLocation();

  // Check if current page is a service page
  const isServicePage = servicesData.some(
    (service) => location.pathname === service.path
  );
  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
    setDropdownHovered(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest(".mobile-menu-container")) {
        setMenuOpen(false);
      }
      if (
        servicesOpen &&
        !event.target.closest(".services-dropdown-container")
      ) {
        setServicesOpen(false);
        setDropdownHovered(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen, servicesOpen]);

  const linkClass = (path) =>
    `px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
      isActive(path) ? "active-link" : "inactive-link"
    }`;

  // Services button class with active state only for service pages (not when dropdown is open)
  const servicesButtonClass = () =>
    `flex items-center gap-1 py-2 px-4 rounded-lg transition-all duration-300 font-medium ${
      isServicePage ? "active-link" : "inactive-link"
    }`;

  // Desktop Mega Menu
  const DesktopServicesDropdown = () => {
    const handleMouseEnter = () => {
      setServicesOpen(true);
      setDropdownHovered(true);
    };

    const handleMouseLeave = () => {
      setDropdownHovered(false);
      // Small delay to allow moving to dropdown
      setTimeout(() => {
        if (!dropdownHovered) {
          setServicesOpen(false);
        }
      }, 100);
    };

    const handleDropdownMouseEnter = () => {
      setDropdownHovered(true);
    };

    const handleDropdownMouseLeave = () => {
      setDropdownHovered(false);
      setServicesOpen(false);
    };

    return (
      <div
        className='services-dropdown-container relative'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <button
          className={servicesButtonClass()}
          onClick={() => setServicesOpen(!servicesOpen)}
          type='button'>
          <span>Services</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              servicesOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Professional Height Mega Menu (30% screen height) */}
        <div
          className={`fixed left-0 right-0 mt-1 shadow-2xl z-50 transition-all duration-300 ${
            servicesOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
          style={{
            backgroundColor: "var(--color-cream)",
            borderTop: "3px solid var(--color-primary)",
            borderBottom: "3px solid var(--color-secondary)",
            height: "20vh",
            minHeight: "320px",
            maxHeight: "380px",
          }}
          onMouseEnter={handleDropdownMouseEnter}
          onMouseLeave={handleDropdownMouseLeave}>
          <div className='max-w-7xl mx-auto px-4 h-full flex flex-col justify-center py-8'>
            <div className='text-center mb-6'>
              <h3
                className='text-2xl font-bold mb-2 pt-3'
                style={{ color: "var(--color-primary)" }}>
                Our Services
              </h3>
              <p
                className='text-base'
                style={{ color: "var(--color-secondary)" }}>
                Comprehensive solutions for your business needs
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3  gap-6 flex-1'>
              {servicesData.map((service, index) => (
                <Link
                  to={service.path}
                  key={service.name}
                  className={`group flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                    isActive(service.path)
                      ? "ring-2 ring-offset-2"
                      : "hover:bg-[var(--color-navycream)]"
                  }`}
                  style={{
                    backgroundColor: isActive(service.path)
                      ? "var(--color-navycream)"
                      : "transparent",
                    border: "2px solid var(--color-navycream)",
                    ringColor: isActive(service.path)
                      ? "var(--color-primary)"
                      : "transparent",
                  }}
                  onClick={() => {
                    setServicesOpen(false);
                    setDropdownHovered(false);
                  }}>
                  <div className='relative mb-4'>
                    <img
                      src={service.image}
                      alt={service.name}
                      className='w-26 h-16 object-cover rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300'
                      style={{
                        border: "2px solid var(--color-secondary)",
                      }}
                    />
                    <div
                      className={`absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isActive(service.path)
                          ? "scale-100 opacity-100"
                          : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                      }`}
                      style={{ backgroundColor: "var(--color-primary)" }}>
                      <ArrowRight
                        size={12}
                        style={{ color: "var(--color-cream)" }}
                      />
                    </div>
                  </div>

                  <h4
                    className='text-lg font-bold mb-2 text-center transition-colors duration-300'
                    style={{
                      color: "var(--color-primary)",
                    }}>
                    {service.name}
                  </h4>

                  <p
                    className='text-center text-sm leading-relaxed transition-colors duration-300 line-clamp-2'
                    style={{
                      color: "var(--color-secondary)",
                    }}>
                    {service.description}
                  </p>

                  <div
                    className={`mt-3 px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${
                      isActive(service.path)
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                    style={{
                      backgroundColor: "var(--color-primary)",
                      color: "var(--color-cream)",
                    }}>
                    {isActive(service.path) ? "Current Page" : "Learn More"}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Mobile Services Dropdown
  const MobileServicesDropdown = () => {
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

    return (
      <div className='w-full'>
        <button
          className={`w-full text-left cursor-pointer px-3 py-2 rounded-md transition-all duration-200 flex items-center justify-between ${
            isServicePage ? "active-link" : "inactive-link"
          }`}
          style={{
            color: "var(--color-cream)",
            backgroundColor:
              mobileServicesOpen || isServicePage
                ? "var(--color-navycream)"
                : "transparent",
          }}
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
          <div className='mt-3 space-y-3'>
            {servicesData.map((service) => (
              <Link
                key={service.name}
                to={service.path}
                className={`flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-200 ${
                  isActive(service.path)
                    ? "ring-2 ring-offset-2"
                    : "hover:bg-[var(--color-navycream)]"
                }`}
                style={{
                  backgroundColor: isActive(service.path)
                    ? "var(--color-navycream)"
                    : "var(--color-cream)",
                  border: "2px solid var(--color-navycream)",
                  ringColor: isActive(service.path)
                    ? "var(--color-primary)"
                    : "transparent",
                }}
                onClick={() => {
                  setMenuOpen(false);
                  setMobileServicesOpen(false);
                }}>
                <img
                  src={service.image}
                  alt={service.name}
                  className='w-16 h-14 object-cover rounded-xl shadow-md'
                  style={{
                    border: "2px solid var(--color-secondary)",
                  }}
                />
                <div className='flex-1'>
                  <div
                    className='font-bold text-lg mb-1'
                    style={{
                      color: isActive(service.path)
                        ? "var(--color-primary)"
                        : "var(--color-primary)",
                    }}>
                    {service.name}
                    {isActive(service.path) && (
                      <span
                        className='ml-2 text-xs px-2 py-1 rounded-full'
                        style={{
                          backgroundColor: "var(--color-primary)",
                          color: "var(--color-cream)",
                        }}>
                        Current
                      </span>
                    )}
                  </div>
                  <div
                    className='text-sm'
                    style={{ color: "var(--color-secondary)" }}>
                    {service.description}
                  </div>
                </div>
                <ArrowRight
                  size={18}
                  style={{
                    color: isActive(service.path)
                      ? "var(--color-primary)"
                      : "var(--color-secondary)",
                  }}
                />
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Main Navigation */}
      <div
        className='sticky top-0 z-50 shadow-lg border-b'
        style={{
          backgroundColor: "var(--color-primary)",
          borderColor: "var(--color-secondary)",
        }}>
        <div className='max-w-7xl mx-auto px-4 py-4 flex items-center justify-between'>
          <Link
            to='/'
            className='text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight font-heading hover:opacity-90 transition-opacity duration-300'
            style={{ color: "var(--color-cream)" }}>
            <span style={{ color: "var(--color-secondary)" }}>Tondon</span>{" "}
            <span style={{ color: "var(--color-navycream)" }}>Holdings</span>
          </Link>

          <div className='mobile-menu-container'>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setMenuOpen(!menuOpen);
              }}
              className='md:hidden focus:outline-none p-2 rounded-lg transition-colors'
              style={{
                color: "var(--color-cream)",
                backgroundColor: menuOpen
                  ? "var(--color-navycream)"
                  : "transparent",
              }}
              aria-label='Toggle menu'>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <nav className='hidden md:flex space-x-2 lg:space-x-4 text-base font-medium items-center'>
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

            {/* Mail and Phone Icons */}
            <div
              className='flex items-center space-x-2 ml-6 border-l pl-6'
              style={{ borderColor: "var(--color-secondary)" }}>
              <a
                href='mailto:info@tondonholdings.com'
                className='transition-all duration-300 p-2 rounded-lg group'
                style={{
                  color: "var(--color-cream)",
                  backgroundColor: "transparent",
                }}
                aria-label='Email us'>
                <Mail
                  size={20}
                  className='group-hover:scale-110 transition-transform duration-200'
                />
              </a>
              <a
                href='tel:+1234567890'
                className='transition-all duration-300 p-2 rounded-lg group'
                style={{
                  color: "var(--color-cream)",
                  backgroundColor: "transparent",
                }}
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
            <div
              className='mobile-menu-container md:hidden shadow-xl px-4 py-4 space-y-3 max-h-[70vh] overflow-y-auto'
              style={{
                backgroundColor: "var(--color-primary)",
                borderTop: "1px solid var(--color-secondary)",
              }}>
              <Link
                to='/'
                className={`block px-3 py-2 rounded-lg transition-all duration-300 font-medium ${
                  isActive("/") ? "active-link" : "inactive-link"
                }`}
                onClick={() => setMenuOpen(false)}>
                Home
              </Link>

              <MobileServicesDropdown />

              <Link
                to='/about'
                className={`block px-3 py-2 rounded-lg transition-all duration-300 font-medium ${
                  isActive("/about") ? "active-link" : "inactive-link"
                }`}
                onClick={() => setMenuOpen(false)}>
                About
              </Link>
              <Link
                to='/contact'
                className={`block px-3 py-2 rounded-lg transition-all duration-300 font-medium ${
                  isActive("/contact") ? "active-link" : "inactive-link"
                }`}
                onClick={() => setMenuOpen(false)}>
                Contact
              </Link>

              {/* Mobile Mail and Phone Icons */}
              <div
                className='flex items-center space-x-4 pt-4 border-t mt-4'
                style={{ borderColor: "var(--color-secondary)" }}>
                <a
                  href='mailto:info@tondonholdings.com'
                  className='flex items-center gap-3 transition-all duration-300 px-3 py-2 rounded-lg group flex-1'
                  style={{
                    color: "var(--color-cream)",
                    backgroundColor: "transparent",
                  }}
                  onClick={() => setMenuOpen(false)}>
                  <Mail
                    size={18}
                    className='group-hover:scale-110 transition-transform duration-200'
                  />
                  <span className='text-sm font-medium'>Email</span>
                </a>
                <a
                  href='tel:+1234567890'
                  className='flex items-center gap-3 transition-all duration-300 px-3 py-2 rounded-lg group flex-1'
                  style={{
                    color: "var(--color-cream)",
                    backgroundColor: "transparent",
                  }}
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
              className='fixed inset-0 backdrop-blur-sm z-40 md:hidden'
              onClick={() => setMenuOpen(false)}
            />
          </>
        )}
      </div>
    </>
  );
};

export default Header;
