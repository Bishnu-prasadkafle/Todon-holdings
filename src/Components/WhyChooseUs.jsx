import { useEffect, useRef, useState } from "react";

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("Is visible?", entry.isIntersecting);
        setIsVisible(entry.isIntersecting);
      },
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
      className='relative py-10'
      style={{
        background: "#f8fafc",
      }}>
      {/* Subtle background dots */}
      <div
        className='absolute inset-0'
        style={{
          background:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          opacity: 0.3,
        }}></div>

      <div className='relative z-10 max-w-7xl mx-auto px-2 lg:px-4'>
        {/* Header */}
        <div
          className={`text-center transition-all duration-1000 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0 animate-in fade-in slide-in-from-bottom-8"
              : "opacity-0 translate-y-10"
          }`}>
          <h2
            className='text-4xl lg:text-5xl font-bold mb-6'
            style={{
              color: "#1e293b",
            }}>
            Why Choose Us
          </h2>
          <p
            className='text-xl max-w-2xl mx-auto leading-relaxed'
            style={{ color: "#64748b" }}>
            Experience excellence with Tondon Holdings - where quality meets
            innovation across diverse industries. We deliver trusted solutions
            that drive success and create lasting value for our partners.
          </p>
        </div>

        {/* Why Choose Us Content */}
        <div
          className={`mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
          {/* Expertise Card */}
          <div className='bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100'>
            <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6'>
              <svg
                className='w-8 h-8 text-blue-600'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
                />
              </svg>
            </div>
            <h3
              className='text-2xl font-bold mb-4'
              style={{ color: "#1e293b" }}>
              Proven Expertise
            </h3>
            <p className='leading-relaxed' style={{ color: "#64748b" }}>
              Years of experience across tourism, clothing, education
              consultancy, and technology sectors with a track record of
              successful projects.
            </p>
          </div>

          {/* Quality Card */}
          <div className='bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100'>
            <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6'>
              <svg
                className='w-8 h-8 text-green-600'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </div>
            <h3
              className='text-2xl font-bold mb-4'
              style={{ color: "#1e293b" }}>
              Quality Assurance
            </h3>
            <p className='leading-relaxed' style={{ color: "#64748b" }}>
              We maintain the highest standards in all our services, ensuring
              excellence and reliability in every project we undertake.
            </p>
          </div>

          {/* Innovation Card */}
          <div className='bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100'>
            <div className='w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6'>
              <svg
                className='w-8 h-8 text-purple-600'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M13 10V3L4 14h7v7l9-11h-7z'
                />
              </svg>
            </div>
            <h3
              className='text-2xl font-bold mb-4'
              style={{ color: "#1e293b" }}>
              Innovation Focus
            </h3>
            <p className='leading-relaxed' style={{ color: "#64748b" }}>
              We leverage cutting-edge technology and innovative approaches to
              deliver solutions that stay ahead of industry trends.
            </p>
          </div>

          {/* Customer Support Card */}
          <div className='bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100'>
            <div className='w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6'>
              <svg
                className='w-8 h-8 text-orange-600'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                />
              </svg>
            </div>
            <h3
              className='text-2xl font-bold mb-4'
              style={{ color: "#1e293b" }}>
              24/7 Support
            </h3>
            <p className='leading-relaxed' style={{ color: "#64748b" }}>
              Round-the-clock customer support ensures you always have
              assistance when you need it, with dedicated account management.
            </p>
          </div>

          {/* Global Reach Card */}
          <div className='bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100'>
            <div className='w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6'>
              <svg
                className='w-8 h-8 text-teal-600'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </div>
            <h3
              className='text-2xl font-bold mb-4'
              style={{ color: "#1e293b" }}>
              Global Reach
            </h3>
            <p className='leading-relaxed' style={{ color: "#64748b" }}>
              Our international presence and partnerships enable us to serve
              clients worldwide with local expertise and global standards.
            </p>
          </div>

          {/* Competitive Pricing Card */}
          <div className='bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100'>
            <div className='w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6'>
              <svg
                className='w-8 h-8 text-red-600'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </div>
            <h3
              className='text-2xl font-bold mb-4'
              style={{ color: "#1e293b" }}>
              Value Pricing
            </h3>
            <p className='leading-relaxed' style={{ color: "#64748b" }}>
              Competitive and transparent pricing models that deliver
              exceptional value without compromising on quality or service
              excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
