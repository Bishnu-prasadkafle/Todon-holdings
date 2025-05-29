// import React from "react";

// const Herocard = () => {
//   return (
//     <section
//       className='relative flex items-center justify-center overflow-hidden min-h-screen pt-32'
//       style={{
//         backgroundColor: "var(--color-cream)",
//       }}>
//       {/* Background Image */}
//       <div
//         className='absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 will-change-transform hover:scale-105'
//         style={{
//           backgroundImage:
//             "url('https://plus.unsplash.com/premium_photo-1682716270464-9a91cbbcf3b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2VydmljZXMlMjBjb21wYW55fGVufDB8fDB8fHww')",
//         }}>
//         {/* Overlay */}
//         <div
//           className='absolute inset-0'
//           style={{
//             backgroundColor: "rgba(20, 32, 61, 0.60)", // semi-black overlay
//           }}></div>
//       </div>

//       {/* Foreground Content */}
//       <div className='relative z-10 text-center px-6 max-w-4xl'>
//         <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6'>
//           Services
//         </h1>
//         <p className='text-xl sm:text-2xl text-white max-w-3xl mx-auto leading-relaxed'>
//           Discover the diverse range of services we offer — from world-class
//           travel experiences and stylish fashion to cutting-edge IT solutions
//           and trusted education consultancy. We help elevate every aspect of
//           your journey.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Herocard;
import { useEffect, useRef, useState } from "react";

const Herocard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className='relative flex items-center justify-start overflow-hidden pt-32'
      style={{ background: "var(--color-cream)" }}>
      {/* Background Image */}
      <div
        className='absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 will-change-transform hover:scale-105'
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1682716270464-9a91cbbcf3b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2VydmljZXMlMjBjb21wYW55fGVufDB8fDB8fHww')",
        }}>
        {/* Overlay */}
        <div
          className='absolute inset-0'
          style={{
            backgroundColor: "rgba(20, 32, 61, 0.60)",
          }}></div>
      </div>

      {/* Foreground Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full flex items-center justify-center min-h-screen'>
        <div
          className={`max-w-4xl mx-auto text-center transition-transform duration-1000 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0 animate-in fade-in slide-in-from-bottom-8"
              : "opacity-0 translate-y-10"
          }`}>
          <h1
            className='text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight transition-all duration-700 ease-in-out'
            style={{
              color: "var(--color-cream)",
              fontStyle: "sans-serif",
              letterSpacing: "0.02em",
            }}>
            <span
              className='inline-block font-serif transition-all duration-700 ease-in-out hover:scale-110 hover:-translate-y-1'
              style={{
                color: "var(--color-cream)",
                fontWeight: 700,
                letterSpacing: "0.02em",
                fontStyle: "sans-serif",
              }}>
              SERVICES
            </span>
          </h1>

          <p
            className='text-xl sm:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto transition-colors duration-500 ease-in-out'
            style={{ color: "var(--color-navycream)" }}>
            Discover the diverse range of services we offer — from world-class
            travel experiences and stylish fashion to cutting-edge IT solutions
            and trusted education consultancy. We help elevate every aspect of
            your journey.
          </p>

          {/* Pulse Animation Line */}
          <div
            className='w-1 h-3 rounded-full mt-6 animate-pulse transition-colors duration-300 ease-in-out'
            style={{
              backgroundColor: "var(--color-secondary)",
              opacity: 0.7,
            }}></div>
        </div>
      </div>
    </section>
  );
};

export default Herocard;
