import { PlayCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const HeroSection = () => {
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
          backgroundImage: "url('/image3.png')",
        }}>
        {/* Subtle Overlay for readability */}
        <div
          className='absolute inset-0'
          style={{
            backgroundColor: "rgba(20, 32, 61, 0.60)", // fallback for var(--color-primary)
            // If you want to use your CSS variable:
            // backgroundColor: "rgba(var(--color-primary-rgb), 0.60)",
            // but make sure --color-primary-rgb is defined as "20,32,61"
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
            WELCOME TO
            <span
              className='inline-block font-serif transition-all duration-700 ease-in-out hover:scale-110 hover:-translate-y-1'
              style={{
                color: "var(--color-cream)",
                fontWeight: 700,
                letterSpacing: "0.02em",
                fontStyle: "sans-serif", // Optional: makes it more distinct
              }}>
              TONDON HOLDINGS
            </span>
          </h1>

          <p
            className='text-xl sm:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto transition-colors duration-500 ease-in-out'
            style={{ color: "var(--color-navycream)" }}>
            “Empowering businesses with modern web and digital solutions to
            thrive online.”
          </p>

          <div className='flex flex-col sm:flex-row items-center justify-center gap-8'>
            {/* Get Started Button */}
            <button
              className='group relative px-10 py-5 rounded-xl font-semibold text-lg transition-transform duration-500 ease-in-out shadow-lg transform hover:scale-110 hover:-translate-y-2 active:scale-95 border backdrop-blur-sm'
              style={{
                color: "var(--color-cream)",
                backgroundColor: "var(--color-secondary)",
                borderColor: "var(--color-secondary)",
              }}>
              <span className='relative z-10 transition-opacity duration-300 ease-in-out group-hover:opacity-100'>
                Explore Our Services
              </span>
              <div
                className='absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 ease-in-out transform group-hover:scale-105'
                style={{
                  backgroundColor: "var(--color-navycream)",
                }}></div>
            </button>

            {/* Watch Video Button */}
            <button
              className='group flex items-center gap-4 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:-translate-y-1'
              style={{ color: "var(--color-secondary)" }}>
              <div
                className='w-14 h-14 border-2 rounded-full flex items-center justify-center transition-transform duration-500 ease-in-out transform group-hover:scale-110 group-hover:rotate-6 shadow-lg'
                style={{
                  borderColor: "var(--color-secondary)",
                  backgroundColor: "var(--color-navycream)",
                }}>
                <PlayCircle
                  size={28}
                  className='ml-1 transition-colors duration-300 ease-in-out'
                  style={{ color: "var(--color-secondary)" }}
                />
              </div>
              <span
                className='font-medium text-lg transition-colors duration-300 ease-in-out'
                style={{ color: "var(--color-cream)" }}>
                Watch Video
              </span>
            </button>
          </div>

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

export default HeroSection;
