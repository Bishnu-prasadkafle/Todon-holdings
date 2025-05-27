// import React from "react";
// import {
//   Mail,
//   Phone,
//   MapPin,
//   Facebook,
//   Instagram,
//   Linkedin,
//   X,
// } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className='relative bg-[#1e293b] text-[#f8fafc] pt-12 pb-6 overflow-hidden border-t border-[#334155]'>
//       {/* Background Elements */}
//       <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] animate-pulse'></div>

//       <div className='relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
//         {/* Company Info */}
//         <div>
//           <h2 className='text-[#f8fafc] text-xl font-bold mb-4 font-heading'>
//             <span className='text-[#3b82f6]'>Tondon</span>{" "}
//             <span className='text-[#06b6d4]'>Holdings</span>
//           </h2>
//           <p className='text-sm leading-relaxed text-[#cbd5e1]'>
//             Providing innovative tech and business solutions to help you grow.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className='text-[#f8fafc] font-semibold mb-4'>Quick Links</h3>
//           <ul className='space-y-2 text-sm'>
//             <li>
//               <a
//                 href='#'
//                 className='text-[#cbd5e1] hover:text-[#06b6d4] transition-all duration-300'>
//                 Home
//               </a>
//             </li>
//             <li>
//               <a
//                 href='#'
//                 className='text-[#cbd5e1] hover:text-[#06b6d4] transition-all duration-300'>
//                 About
//               </a>
//             </li>
//             <li>
//               <a
//                 href='#'
//                 className='text-[#cbd5e1] hover:text-[#06b6d4] transition-all duration-300'>
//                 Services
//               </a>
//             </li>
//             <li>
//               <a
//                 href='#'
//                 className='text-[#cbd5e1] hover:text-[#06b6d4] transition-all duration-300'>
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div>
//           <h3 className='text-[#f8fafc] font-semibold mb-4'>Contact</h3>
//           <ul className='space-y-3 text-sm'>
//             <li className='flex items-center gap-2 text-[#cbd5e1]'>
//               <MapPin size={16} className='text-[#64748b]' />
//               <span>Kathmandu, Nepal</span>
//             </li>
//             <li className='flex items-center gap-2 text-[#cbd5e1]'>
//               <Mail size={16} className='text-[#64748b]' />
//               <span>tondonholdings@gmail.com</span>
//             </li>
//             <li className='flex items-center gap-2 text-[#cbd5e1]'>
//               <Phone size={16} className='text-[#64748b]' />
//               <span>+977-980000000</span>
//             </li>
//           </ul>
//         </div>

//         {/* Social Media */}
//         <div>
//           <h3 className='text-[#f8fafc] font-semibold mb-4'>Follow Us</h3>
//           <div className='flex gap-4'>
//             <a
//               href='#'
//               className='text-[#cbd5e1] hover:text-[#06b6d4] transition-all duration-300 p-2 hover:bg-[#334155] rounded-lg group'
//               aria-label='Follow us on Facebook'>
//               <Facebook
//                 size={20}
//                 className='group-hover:scale-110 transition-transform duration-200'
//               />
//             </a>
//             <a
//               href='#'
//               className='text-[#cbd5e1] hover:text-[#06b6d4] transition-all duration-300 p-2 hover:bg-[#334155] rounded-lg group'
//               aria-label='Follow us on Instagram'>
//               <Instagram
//                 size={20}
//                 className='group-hover:scale-110 transition-transform duration-200'
//               />
//             </a>
//             <a
//               href='#'
//               className='text-[#cbd5e1] hover:text-[#06b6d4] transition-all duration-300 p-2 hover:bg-[#334155] rounded-lg group'
//               aria-label='Follow us on LinkedIn'>
//               <Linkedin
//                 size={20}
//                 className='group-hover:scale-110 transition-transform duration-200'
//               />
//             </a>
//             <a
//               href='#'
//               className='text-[#cbd5e1] hover:text-[#06b6d4] transition-all duration-300 p-2 hover:bg-[#334155] rounded-lg group'
//               aria-label='Follow us on X'>
//               <X
//                 size={20}
//                 className='group-hover:scale-110 transition-transform duration-200'
//               />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className='border-t border-[#334155] mt-10 pt-4 text-center text-sm text-[#64748b]'>
//         &copy; {new Date().getFullYear()} Tondon Holdings. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  X,
} from "lucide-react";

const Footer = () => {
  return (
    <footer
      className='relative pt-12 pb-6 overflow-hidden border-t'
      style={{
        backgroundColor: "var(--color-primary)",
        color: "var(--color-cream)",
        borderColor: "var(--color-secondary)",
      }}>
      {/* Background Elements */}
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
          <h2
            className='text-xl font-bold mb-4 font-heading'
            style={{ color: "var(--color-cream)" }}>
            <span style={{ color: "var(--color-secondary)" }}>Tondon</span>{" "}
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
            <li>
              <a
                href='#'
                className='transition-all duration-300'
                style={{
                  color: "var(--color-navycream)",
                }}
                onMouseOver={(e) =>
                  (e.target.style.color = "var(--color-secondary)")
                }
                onMouseOut={(e) =>
                  (e.target.style.color = "var(--color-navycream)")
                }>
                Home
              </a>
            </li>
            <li>
              <a
                href='#'
                className='transition-all duration-300'
                style={{
                  color: "var(--color-navycream)",
                }}
                onMouseOver={(e) =>
                  (e.target.style.color = "var(--color-secondary)")
                }
                onMouseOut={(e) =>
                  (e.target.style.color = "var(--color-navycream)")
                }>
                About
              </a>
            </li>
            <li>
              <a
                href='#'
                className='transition-all duration-300'
                style={{
                  color: "var(--color-navycream)",
                }}
                onMouseOver={(e) =>
                  (e.target.style.color = "var(--color-secondary)")
                }
                onMouseOut={(e) =>
                  (e.target.style.color = "var(--color-navycream)")
                }>
                Services
              </a>
            </li>
            <li>
              <a
                href='#'
                className='transition-all duration-300'
                style={{
                  color: "var(--color-navycream)",
                }}
                onMouseOver={(e) =>
                  (e.target.style.color = "var(--color-secondary)")
                }
                onMouseOut={(e) =>
                  (e.target.style.color = "var(--color-navycream)")
                }>
                Contact
              </a>
            </li>
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
              <MapPin size={16} style={{ color: "var(--color-secondary)" }} />
              <span>Kathmandu, Nepal</span>
            </li>
            <li
              className='flex items-center gap-2'
              style={{ color: "var(--color-navycream)" }}>
              <Mail size={16} style={{ color: "var(--color-secondary)" }} />
              <span>tondonholdings@gmail.com</span>
            </li>
            <li
              className='flex items-center gap-2'
              style={{ color: "var(--color-navycream)" }}>
              <Phone size={16} style={{ color: "var(--color-secondary)" }} />
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
            <a
              href='#'
              className='transition-all duration-300 p-2 rounded-lg group'
              aria-label='Follow us on Facebook'
              style={{
                color: "var(--color-navycream)",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.color = "var(--color-secondary)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.color = "var(--color-navycream)")
              }>
              <Facebook
                size={20}
                className='group-hover:scale-110 transition-transform duration-200'
              />
            </a>
            <a
              href='#'
              className='transition-all duration-300 p-2 rounded-lg group'
              aria-label='Follow us on Instagram'
              style={{
                color: "var(--color-navycream)",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.color = "var(--color-secondary)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.color = "var(--color-navycream)")
              }>
              <Instagram
                size={20}
                className='group-hover:scale-110 transition-transform duration-200'
              />
            </a>
            <a
              href='#'
              className='transition-all duration-300 p-2 rounded-lg group'
              aria-label='Follow us on LinkedIn'
              style={{
                color: "var(--color-navycream)",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.color = "var(--color-secondary)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.color = "var(--color-navycream)")
              }>
              <Linkedin
                size={20}
                className='group-hover:scale-110 transition-transform duration-200'
              />
            </a>
            <a
              href='#'
              className='transition-all duration-300 p-2 rounded-lg group'
              aria-label='Follow us on X'
              style={{
                color: "var(--color-navycream)",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.color = "var(--color-secondary)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.color = "var(--color-navycream)")
              }>
              <X
                size={20}
                className='group-hover:scale-110 transition-transform duration-200'
              />
            </a>
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
