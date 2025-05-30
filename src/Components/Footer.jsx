import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  X,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { Icon: Facebook, label: "Facebook", url: "#" },
    { Icon: Instagram, label: "Instagram", url: "#" },
    { Icon: Linkedin, label: "LinkedIn", url: "#" },
    { Icon: X, label: "X", url: "#" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <footer
      className='relative pt-12 pb-6 overflow-hidden border-t'
      style={{
        backgroundColor: "rgba(30,41,59,0.7)",
        color: "var(--color-cream)",
        borderColor: "var(--color-secondary)",
      }}>
      {/* Background Pattern */}
      <div
        className='absolute inset-0'
        style={{
          background:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          opacity: 0.5,
        }}></div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
        {/* Company Info */}
        <div>
          <h2 className='text-xl font-bold mb-4 font-heading'>
            <span className='text-blue-600'>Tondon</span>{" "}
            <span style={{ color: "var(--color-navycream)" }}>Holdings</span>
          </h2>
          <p
            className='text-sm leading-relaxed'
            style={{ color: "var(--color-navycream)" }}>
            Providing innovative tech and business solutions to help you grow.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3
            className='font-semibold mb-4'
            style={{ color: "var(--color-cream)" }}>
            Quick Links
          </h3>
          <ul className='space-y-2 text-sm'>
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className='transition-all duration-300'
                  style={{
                    color: isActive(link.path)
                      ? "var(--color-secondary)"
                      : "var(--color-navycream)",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive(link.path)) {
                      e.target.style.color = "var(--color-secondary)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive(link.path)) {
                      e.target.style.color = "var(--color-navycream)";
                    }
                  }}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3
            className='font-semibold mb-4'
            style={{ color: "var(--color-cream)" }}>
            Contact
          </h3>
          <ul className='space-y-3 text-sm'>
            <li
              className='flex items-center gap-2'
              style={{ color: "var(--color-navycream)" }}>
              <MapPin size={16} className='text-blue-600' />
              <span>Kathmandu, Nepal</span>
            </li>
            <li
              className='flex items-center gap-2'
              style={{ color: "var(--color-navycream)" }}>
              <Mail size={16} className='text-blue-600' />
              <span>tondonholdings@gmail.com</span>
            </li>
            <li
              className='flex items-center gap-2'
              style={{ color: "var(--color-navycream)" }}>
              <Phone size={16} className='text-blue-600' />
              <span>+977-980000000</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3
            className='font-semibold mb-4'
            style={{ color: "var(--color-cream)" }}>
            Follow Us
          </h3>
          <div className='flex gap-4'>
            {socialLinks.map(({ Icon, label, url }) => (
              <a
                key={label}
                href={url}
                className='transition-all duration-300 p-2 rounded-lg group'
                aria-label={`Follow us on ${label}`}
                style={{
                  color: "var(--color-navycream)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--color-secondary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--color-navycream)")
                }>
                <Icon
                  size={20}
                  className='group-hover:scale-110 transition-transform duration-200'
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div
        className='border-t mt-10 pt-4 text-center text-sm'
        style={{
          borderColor: "var(--color-navycream)",
          color: "var(--color-navycream)",
        }}>
        &copy; {new Date().getFullYear()} Tondon Holdings. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
