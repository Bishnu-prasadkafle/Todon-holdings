import { TrendingUp, Square, Calendar, Radio } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Analytics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  const analyticsData = [
    {
      id: 1,
      icon: TrendingUp,
      title: "Performance Analytics",
      description:
        "Track real-time performance metrics and optimize your business operations with detailed insights.",
    },
    {
      id: 2,
      icon: Square,
      title: "Data Visualization",
      description:
        "Transform complex data into clear visual representations for better decision making.",
    },
    {
      id: 3,
      icon: Calendar,
      title: "Strategic Planning",
      description:
        "Plan and execute strategic initiatives with comprehensive data-driven insights and forecasting.",
    },
    {
      id: 4,
      icon: Radio,
      title: "Real-time Monitoring",
      description:
        "Monitor key performance indicators and receive instant alerts for critical business metrics.",
    },
  ];

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

  useEffect(() => {
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = parseInt(entry.target.dataset.cardId);
            setVisibleCards((prev) => [...new Set([...prev, cardId])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) cardObserver.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) cardObserver.unobserve(ref);
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className='relative py-20'
      style={{
        background: "var(--color-cream)",
      }}>
      {/* Background Elements */}
      <div
        className='absolute inset-0'
        style={{
          background:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          opacity: 0.5,
        }}></div>

      <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Header with scroll animation */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0 animate-in fade-in slide-in-from-bottom-8"
              : "opacity-0 translate-y-10"
          }`}>
          <h2
            className='text-4xl lg:text-5xl font-bold mb-6 transform transition-all duration-700 hover:scale-105'
            style={{
              color: "var(--color-primary)",
            }}>
            Analytics{" "}
            <span
              className='inline-block transition-all duration-700 ease-in-out hover:scale-110 hover:-translate-y-1'
              style={{
                color: "var(--color-secondary)",
                WebkitBackgroundClip: "unset",
                WebkitTextFillColor: "unset",
                backgroundClip: "unset",
              }}>
              Solutions
            </span>
          </h2>
          <p
            className='text-xl max-w-2xl mx-auto mb-6 leading-relaxed transition-colors duration-500 ease-in-out'
            style={{ color: "var(--color-secondary)" }}>
            Comprehensive analytics tools to drive your business forward with
            data-driven insights
          </p>
          <div
            className='w-24 h-1 mx-auto rounded-full transform transition-all duration-500 hover:w-32'
            style={{
              background: "var(--color-secondary)",
            }}></div>
        </div>

        {/* Cards Grid with individual scroll animations */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12'>
          {analyticsData.map((item, index) => {
            const IconComponent = item.icon;
            const isCardVisible = visibleCards.includes(item.id);

            return (
              <div
                key={item.id}
                ref={(el) => (cardRefs.current[index] = el)}
                data-card-id={item.id}
                className={`group rounded-2xl p-8 border transition-all duration-1000 transform hover:scale-105 hover:-translate-y-3 shadow-lg ${
                  isCardVisible
                    ? "opacity-100 translate-y-0 animate-in fade-in slide-in-from-bottom-8"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  background: "var(--color-navycream)",
                  borderColor: "var(--color-secondary)",
                  transitionDelay: isCardVisible ? `${index * 200}ms` : "0ms",
                }}>
                {/* Icon */}
                <div className='mb-6'>
                  <div
                    className='w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-lg group-hover:scale-110 group-hover:rotate-6'
                    style={{
                      background: "var(--color-secondary)",
                    }}>
                    <IconComponent
                      size={32}
                      style={{
                        color: "var(--color-cream)",
                        transition: "color 0.5s",
                      }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className='space-y-4'>
                  <h3
                    className='text-2xl font-bold transition-all duration-500 hover:scale-105 hover:translate-y-[-2px]'
                    style={{
                      color: "var(--color-primary)",
                    }}>
                    {item.title}
                  </h3>
                  <p
                    className='transition-all duration-500 leading-relaxed'
                    style={{
                      color: "var(--color-secondary)",
                    }}>
                    {item.description}
                  </p>
                </div>

                {/* Hover indicator */}
                <div className='mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0'>
                  <div
                    className='w-12 h-1 rounded-full shadow-lg'
                    style={{
                      background: "var(--color-primary)",
                    }}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action with scroll animation */}
        <div
          className={`text-center mt-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: isVisible ? "800ms" : "0ms" }}>
          <button
            className='group relative px-10 py-5 rounded-xl font-semibold text-lg transition-transform duration-500 ease-in-out shadow-lg hover:scale-110 hover:-translate-y-2 active:scale-95 border backdrop-blur-sm'
            style={{
              color: "var(--color-cream)",
              background: "var(--color-secondary)",
              borderColor: "var(--color-secondary)",
            }}>
            <span className='relative z-10 transition-opacity duration-300 ease-in-out group-hover:opacity-100'>
              Explore All Services
            </span>
            <div
              className='absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 ease-in-out transform group-hover:scale-105'
              style={{
                background: "var(--color-navycream)",
              }}></div>
          </button>

          {/* Pulse Animation Line */}
          <div
            className='w-1 h-3 rounded-full mt-6 mx-auto animate-pulse transition-colors duration-300 ease-in-out'
            style={{
              backgroundColor: "var(--color-secondary)",
              opacity: 0.7,
            }}></div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
