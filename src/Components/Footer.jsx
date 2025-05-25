import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  X as Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-gray-300 pt-12 pb-6'>
      <div className='max-w-7xl sticky bottom-0  mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
        {/* Company Info */}
        <div>
          <h2 className='text-white text-xl font-bold mb-4'>Tondon Holdings</h2>
          <p className='text-sm leading-relaxed'>
            Providing innovative tech and business solutions to help you grow.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className='text-white font-semibold mb-4'>Quick Links</h3>
          <ul className='space-y-2 text-sm'>
            <li>
              <a href='#' className='hover:text-white transition'>
                Home
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-white transition'>
                About
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-white transition'>
                Services
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-white transition'>
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className='text-white font-semibold mb-4'>Contact</h3>
          <ul className='space-y-3 text-sm'>
            <li className='flex items-center gap-2'>
              <MapPin size={16} />
              <span>Kathmandu, Nepal</span>
            </li>
            <li className='flex items-center gap-2'>
              <Mail size={16} />
              <span>tondonholdings@gmail.com</span>
            </li>
            <li className='flex items-center gap-2'>
              <Phone size={16} />
              <span>+977-980000000</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className='text-white font-semibold mb-4'>Follow Us</h3>
          <div className='flex gap-4'>
            <a href='#' className='hover:text-white transition'>
              <Facebook size={20} />
            </a>
            <a href='#' className='hover:text-white transition'>
              <Instagram size={20} />
            </a>
            <a href='#' className='hover:text-white transition'>
              <Linkedin size={20} />
            </a>
            <a href='#' className='hover:text-white transition'>
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className='border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500'>
        &copy; {new Date().getFullYear()} Tondon Holdings. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
