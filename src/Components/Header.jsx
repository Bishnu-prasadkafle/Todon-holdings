import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Mail, Phone, Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(window.scrollY);

  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  // Hide/show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setShowNavbar(true);
        lastScrollY.current = window.scrollY;
        return;
      }
      if (window.scrollY > lastScrollY.current) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const linkClass = (path) =>
    `px-3 py-1 rounded-lg transition-all duration-300 font-medium ${
      isActive(path) ? "text-blue-400 underline" : "text-white"
    } hover:text-blue-300`;

  return (
    <>
      <div
        className={`z-50 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{
          background: "rgba(30,41,59,0.7)",
          backdropFilter: "blur(8px)",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
        }}>
        <div className='max-w-7xl mx-auto px-4 py-5 flex items-center justify-between'>
          <Link
            to='/'
            className='text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight font-heading hover:opacity-90 transition-opacity duration-300'
            style={{ color: "#fff" }}>
            <span style={{ color: "#fff" }}>Tondon</span>{" "}
            <span style={{ color: "#fff" }}>Holdings</span>
          </Link>

          <div className='mobile-menu-container'>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setMenuOpen(!menuOpen);
              }}
              className='md:hidden focus:outline-none p-2 rounded-lg transition-colors'
              style={{
                color: "#fff",
                backgroundColor: menuOpen ? "#e0e7ef" : "transparent",
              }}
              aria-label='Toggle menu'>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <nav className='hidden md:flex space-x-2 lg:space-x-4 text-base font-medium items-center'>
            <Link to='/' className={linkClass("/")}>
              Home
            </Link>
            <Link to='/services' className={linkClass("/services")}>
              Services
            </Link>
            <Link to='/about' className={linkClass("/about")}>
              About
            </Link>
            <Link to='/contact' className={linkClass("/contact")}>
              Contact
            </Link>
            <div
              className='flex items-center space-x-2 ml-6 border-l pl-6'
              style={{ borderColor: "transparent" }}>
              <a
                href='mailto:info@tondonholdings.com'
                className='transition-all duration-300 p-2 rounded-lg group'
                style={{
                  color: "#fff",
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
                  color: "#fff",
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
                backgroundColor: "rgba(30,41,59,0.98)",
                borderTop: "1px solid #2563eb",
              }}>
              <Link
                to='/'
                className={`block px-3 py-2 rounded-lg transition-all duration-300 font-medium ${
                  isActive("/") ? "text-blue-400 underline" : "text-white"
                } hover:text-blue-300`}
                onClick={() => setMenuOpen(false)}>
                Home
              </Link>
              <Link
                to='/services'
                className={`block px-3 py-2 rounded-lg transition-all duration-300 font-medium ${
                  isActive("/services")
                    ? "text-blue-400 underline"
                    : "text-white"
                } hover:text-blue-300`}
                onClick={() => setMenuOpen(false)}>
                Services
              </Link>
              <Link
                to='/about'
                className={`block px-3 py-2 rounded-lg transition-all duration-300 font-medium ${
                  isActive("/about") ? "text-blue-400 underline" : "text-white"
                } hover:text-blue-300`}
                onClick={() => setMenuOpen(false)}>
                About
              </Link>
              <Link
                to='/contact'
                className={`block px-3 py-2 rounded-lg transition-all duration-300 font-medium ${
                  isActive("/contact")
                    ? "text-blue-400 underline"
                    : "text-white"
                } hover:text-blue-300`}
                onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
              <div
                className='flex items-center space-x-4 pt-4 border-t mt-4'
                style={{ borderColor: "#2563eb" }}>
                <a
                  href='mailto:info@tondonholdings.com'
                  className='flex items-center gap-3 transition-all duration-300 px-3 py-2 rounded-lg group flex-1'
                  style={{
                    color: "#fff",
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
                    color: "#fff",
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
