import React, { useEffect, useRef, useState } from "react";

const TondonHeroCard = () => {
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
      className='relative py-16 lg:py-24'
      style={{
        background: "#f8fafc",
      }}>
      <div className='relative z-10 max-w-8xl mx-auto px-2 lg:px-4'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Illustration Section */}
          <div
            className={`relative transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}>
            <div className='relative w-full max-w-lg mx-auto'>
              {/* Main circular background */}
              <div className='aspect-square bg-gradient-to-br from-green-300 via-green-100 to-green-200 rounded-full relative overflow-hidden'>
                {/* Background geometric elements */}
                <div className='absolute inset-0'>
                  {/* Floating squares */}
                  <div className='absolute top-16 right-20 w-8 h-8 bg-green-300 opacity-30 rounded'></div>
                  <div className='absolute top-32 right-16 w-6 h-6 bg-green-400 opacity-40 rounded'></div>
                  <div className='absolute top-40 right-32 w-4 h-4 bg-green-500 opacity-50 rounded'></div>
                  <div className='absolute bottom-20 left-16 w-10 h-6 bg-green-300 opacity-30 rounded'></div>
                  <div className='absolute bottom-32 left-20 w-8 h-4 bg-green-400 opacity-40 rounded'></div>

                  {/* Arrow */}
                  <div className='absolute top-20 right-6'>
                    <svg
                      className='w-9 h-8 text-green-800'
                      fill='currentColor'
                      viewBox='0 0 24 24'>
                      <path d='M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z' />
                    </svg>
                  </div>
                </div>

                {/* Business person illustration */}
                <div className='absolute inset-0 flex items-center justify-center'>
                  <div className='relative'>
                    {/* Person figure */}
                    <div className='w-32 h-40 relative'>
                      {/* Head */}
                      <div className='w-12 h-12 bg-green-800 rounded-full mx-auto mb-2 relative'>
                        <div className='absolute inset-2 bg-green-700 rounded-full'></div>
                      </div>

                      {/* Body */}
                      <div className='w-20 h-24 bg-green-800 mx-auto rounded-t-lg relative'>
                        {/* Arms */}
                        <div className='absolute -left-3 top-4 w-6 h-16 bg-green-800 rounded-full transform -rotate-12'></div>
                        <div className='absolute -right-3 top-4 w-6 h-16 bg-green-800 rounded-full transform rotate-45'></div>

                        {/* Briefcase/laptop in hand */}
                        <div className='absolute -right-6 top-8 w-8 h-6 bg-green-600 rounded transform rotate-45'></div>
                      </div>

                      {/* Legs */}
                      <div className='flex justify-center space-x-2'>
                        <div className='w-4 h-12 bg-green-800 rounded-full'></div>
                        <div className='w-4 h-12 bg-green-800 rounded-full'></div>
                      </div>
                    </div>

                    {/* Laptop/desk */}
                    <div className='absolute -bottom-8 -left-6 w-16 h-10 bg-green-600 rounded transform -rotate-12 opacity-70'></div>
                  </div>
                </div>

                {/* Additional floating elements */}
                <div className='absolute bottom-16 right-12 w-12 h-8 bg-green-300 opacity-100 rounded'></div>
                <div className='absolute top-24 left-12 w-6 h-6 bg-green-400 opacity-50 rounded'></div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div
            className={`space-y-9 transition-all duration-1000 ease-out delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0 animate-in fade-in slide-in-from-bottom-8"
                : "opacity-0 translate-y-10"
            }`}>
            <div className='space-y-6'>
              <h1
                className='text-4xl lg:text-5xl font-bold leading-tight'
                style={{
                  color: "#1e293b",
                }}>
                Empowering Business Growth,
                <span className='block'>Building Futures!</span>
              </h1>

              <p
                className='text-xl leading-relaxed'
                style={{ color: "#64748b" }}>
                At Tondon Holdings, we bridge the gap between vision and success
                through strategic investments, innovative solutions, and
                comprehensive business support. Our expertise spans a diverse
                range of industries—including tourism, clothing and apparel,
                cutting-edge technology, and transformative education—empowering
                businesses to thrive, grow, and make a lasting impact in their
                respective sectors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TondonHeroCard;
