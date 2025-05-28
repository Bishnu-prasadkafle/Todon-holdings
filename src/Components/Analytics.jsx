import { useEffect, useRef, useState } from "react";
import ServiceCard from "../Components/Service/ServiceCard";

const Analytics = () => {
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
            Our Services
          </h2>
          <p
            className='text-xl max-w-2xl mx-auto leading-relaxed'
            style={{ color: "#64748b" }}>
            Tondon Holdings enriches lives and elevates industries with
            expertise in tourism, clothing, education consultancy, and
            technology.
          </p>
        </div>

        {/* Service Cards */}
        <ServiceCard />
      </div>
    </section>
  );
};

export default Analytics;
