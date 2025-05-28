import { Star, Quote, TrendingUp, Users, Building, Award } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const TestimonialsStats = () => {
  const [statsVisible, setStatsVisible] = useState(false);
  const [testimonialsVisible, setTestimonialsVisible] = useState(false);
  const [visibleStatCards, setVisibleStatCards] = useState([]);
  const [visibleTestimonialCards, setVisibleTestimonialCards] = useState([]);
  const [ctaVisible, setCtaVisible] = useState(false);

  const statsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const statCardRefs = useRef([]);
  const testimonialCardRefs = useRef([]);
  const ctaRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Kshitiz Dawadi",
      position: "CEO",
      company: "Sree Ram IT Solutions",
      image: "",
      content:
        "Tondon Holdings transformed our business operations completely. Their innovative solutions increased our efficiency by 300% and helped us scale globally.",
      rating: 5,
    },
    {
      id: 2,
      name: "Asbin Thapa",
      position: "CTO",
      company: "DataFlow Inc",
      image: "",
      content:
        "The level of expertise and support provided by Tondon Holdings is unmatched. They delivered results beyond our expectations and continue to be our trusted partner.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Operations Director",
      company: "Global Ventures",
      image: "",
      content:
        "Working with Tondon Holdings was a game-changer. Their strategic approach and cutting-edge technology helped us achieve our goals faster than we imagined.",
      rating: 5,
    },
  ];

  const stats = [
    {
      icon: Users,
      number: "10,000+",
      label: "Happy Clients",
      description: "Businesses worldwide trust our solutions",
    },
    {
      icon: TrendingUp,
      number: "300%",
      label: "Average Growth",
      description: "Increase in client business efficiency",
    },
    {
      icon: Building,
      number: "50+",
      label: "Countries",
      description: "Global presence and partnerships",
    },
    {
      icon: Award,
      number: "99.9%",
      label: "Success Rate",
      description: "Project completion and satisfaction",
    },
  ];

  // Intersection observers for scroll animations
  useEffect(() => {
    const statsObserver = new IntersectionObserver(
      ([entry]) => setStatsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (statsRef.current) {
      statsObserver.observe(statsRef.current);
    }
    return () => {
      if (statsRef.current) statsObserver.unobserve(statsRef.current);
    };
  }, []);

  useEffect(() => {
    const testimonialsObserver = new IntersectionObserver(
      ([entry]) => setTestimonialsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (testimonialsRef.current) {
      testimonialsObserver.observe(testimonialsRef.current);
    }
    return () => {
      if (testimonialsRef.current)
        testimonialsObserver.unobserve(testimonialsRef.current);
    };
  }, []);

  useEffect(() => {
    const statCardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = parseInt(entry.target.dataset.cardId);
            setVisibleStatCards((prev) => [...new Set([...prev, cardId])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    statCardRefs.current.forEach((ref) => {
      if (ref) statCardObserver.observe(ref);
    });

    return () => {
      statCardRefs.current.forEach((ref) => {
        if (ref) statCardObserver.unobserve(ref);
      });
    };
  }, []);

  useEffect(() => {
    const testimonialCardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = parseInt(entry.target.dataset.cardId);
            setVisibleTestimonialCards((prev) => [
              ...new Set([...prev, cardId]),
            ]);
          }
        });
      },
      { threshold: 0.2 }
    );

    testimonialCardRefs.current.forEach((ref) => {
      if (ref) testimonialCardObserver.observe(ref);
    });

    return () => {
      testimonialCardRefs.current.forEach((ref) => {
        if (ref) testimonialCardObserver.unobserve(ref);
      });
    };
  }, []);

  useEffect(() => {
    const ctaObserver = new IntersectionObserver(
      ([entry]) => setCtaVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ctaRef.current) {
      ctaObserver.observe(ctaRef.current);
    }
    return () => {
      if (ctaRef.current) ctaObserver.unobserve(ctaRef.current);
    };
  }, []);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={20}
        style={{
          color:
            index < rating
              ? "var(--color-secondary)"
              : "var(--color-navycream)",
          fill: index < rating ? "var(--color-secondary)" : "none",
          transition: "color 0.3s, fill 0.3s",
        }}
      />
    ));
  };

  return (
    <section
      className='py-20 overflow-hidden'
      style={{ background: "#f8fafc", position: "relative" }}>
      {/* Background Elements */}
      <div
        className='absolute inset-0'
        style={{
          background:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          opacity: 0.3,
        }}></div>

      <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Stats Section */}
        <div className='mb-20'>
          <div
            ref={statsRef}
            className={`text-center mb-12 transition-all duration-1000 ease-out ${
              statsVisible
                ? "opacity-100 translate-y-0 animate-in fade-in slide-in-from-bottom-8"
                : "opacity-0 translate-y-10"
            }`}>
            <h2
              className='text-4xl lg:text-5xl font-bold mb-6 transform transition-all duration-700 hover:scale-105'
              style={{ color: "#1e293b" }}>
              Our Impact in{" "}
              <span
                className='inline-block transition-all duration-700 ease-in-out hover:scale-110 hover:-translate-y-1'
                style={{
                  color: "#005f73",
                  WebkitBackgroundClip: "unset",
                  WebkitTextFillColor: "unset",
                  backgroundClip: "unset",
                }}>
                Numbers
              </span>
            </h2>
            <p
              className='text-xl max-w-2xl mx-auto transition-colors duration-500 ease-in-out'
              style={{ color: "#64748b" }}>
              Proven results that speak for themselves
            </p>
            <div
              className='w-24 h-1 mx-auto mt-6 rounded-full transform transition-all duration-500 hover:w-32'
              style={{
                background: "#005f73",
                opacity: 0.15,
              }}></div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              const isCardVisible = visibleStatCards.includes(index);

              return (
                <div
                  key={index}
                  ref={(el) => (statCardRefs.current[index] = el)}
                  data-card-id={index}
                  className={`group text-center rounded-2xl p-8 border transition-all duration-1000 transform hover:scale-105 hover:-translate-y-3 shadow-lg ${
                    isCardVisible
                      ? "opacity-100 translate-y-0 animate-in fade-in slide-in-from-bottom-8"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{
                    background: "#fff",
                    borderColor: "#e2e8f0",
                    transitionDelay: isCardVisible ? `${index * 150}ms` : "0ms",
                  }}>
                  <div className='mb-4'>
                    <div
                      className='w-16 h-16 rounded-full flex items-center justify-center mx-auto transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6 shadow-lg'
                      style={{
                        background: "#f1f5f9",
                        border: "4px solid #fff",
                      }}>
                      <IconComponent
                        size={28}
                        style={{
                          color: "#005f73",
                          transition: "color 0.5s",
                        }}
                      />
                    </div>
                  </div>
                  <div
                    className='text-4xl font-bold mb-2 group-hover:scale-105 group-hover:translate-y-[-2px] transition-all duration-500'
                    style={{ color: "#005f73" }}>
                    {stat.number}
                  </div>
                  <div
                    className='text-xl font-semibold mb-2 transition-all duration-300'
                    style={{ color: "#64748b" }}>
                    {stat.label}
                  </div>
                  <div
                    className='transition-all duration-300'
                    style={{ color: "#64748b" }}>
                    {stat.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testimonials Section */}
        <div>
          <div
            ref={testimonialsRef}
            className={`text-center mb-12 transition-all duration-1000 ease-out ${
              testimonialsVisible
                ? "opacity-100 translate-y-0 animate-in fade-in slide-in-from-bottom-8"
                : "opacity-0 translate-y-10"
            }`}>
            <h2
              className='text-4xl lg:text-5xl font-bold mb-6 transform transition-all duration-700 hover:scale-105'
              style={{ color: "#1e293b" }}>
              What Our{" "}
              <span
                className='inline-block transition-all duration-700 ease-in-out hover:scale-110 hover:-translate-y-1'
                style={{
                  color: "#005f73",
                  WebkitBackgroundClip: "unset",
                  WebkitTextFillColor: "unset",
                  backgroundClip: "unset",
                }}>
                Clients Say
              </span>
            </h2>
            <p
              className='text-xl max-w-2xl mx-auto transition-colors duration-500 ease-in-out'
              style={{ color: "#64748b" }}>
              Don't just take our word for it - hear from our satisfied clients
            </p>
            <div
              className='w-24 h-1 mx-auto mt-6 rounded-full transform transition-all duration-500 hover:w-32'
              style={{
                background: "#005f73",
                opacity: 0.15,
              }}></div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {testimonials.map((testimonial, index) => {
              const isCardVisible = visibleTestimonialCards.includes(
                testimonial.id
              );

              return (
                <div
                  key={testimonial.id}
                  ref={(el) => (testimonialCardRefs.current[index] = el)}
                  data-card-id={testimonial.id}
                  className={`group rounded-2xl p-8 border transition-all duration-1000 transform hover:scale-105 hover:-translate-y-3 shadow-lg relative overflow-hidden ${
                    isCardVisible
                      ? "opacity-100 translate-y-0 animate-in fade-in slide-in-from-bottom-8"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{
                    background: "#fff",
                    borderColor: "#e2e8f0",
                    transitionDelay: isCardVisible ? `${index * 200}ms` : "0ms",
                  }}>
                  {/* Quote Icon */}
                  <div className='absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-all duration-500'>
                    <Quote size={40} style={{ color: "#005f73" }} />
                  </div>

                  {/* Rating */}
                  <div className='flex items-center mb-4'>
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Content */}
                  <p
                    className='mb-6 leading-relaxed group-hover:opacity-90 transition-all duration-500 italic'
                    style={{ color: "#64748b" }}>
                    "{testimonial.content}"
                  </p>

                  {/* Client Info */}
                  <div className='flex items-center'>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className='w-12 h-12 rounded-full object-cover mr-4 group-hover:scale-110 transition-all duration-500 border-2'
                      style={{
                        borderColor: "#f1f5f9",
                        boxShadow: "0 2px 8px 0 #23294614",
                      }}
                    />
                    <div>
                      <div
                        className='font-semibold transition-all duration-500'
                        style={{ color: "#1e293b" }}>
                        {testimonial.name}
                      </div>
                      <div
                        className='text-sm transition-all duration-300'
                        style={{ color: "#64748b" }}>
                        {testimonial.position}, {testimonial.company}
                      </div>
                    </div>
                  </div>

                  {/* Hover accent */}
                  <div
                    className='absolute bottom-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-all duration-500 origin-left shadow-lg'
                    style={{
                      background: "#005f73",
                      opacity: 0.2,
                    }}></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          ref={ctaRef}
          className={`text-center mt-16 rounded-2xl p-12 border transition-all duration-1000 ${
            ctaVisible
              ? "opacity-100 translate-y-0 animate-in fade-in slide-in-from-bottom-8"
              : "opacity-0 translate-y-10"
          }`}
          style={{
            background: "rgba(255,255,255,0.7)",
            backdropFilter: "blur(6px)",
            borderColor: "#e2e8f0",
            transitionDelay: ctaVisible ? "600ms" : "0ms",
          }}>
          <h3
            className='text-3xl font-bold mb-4 transition-colors duration-500'
            style={{ color: "#1e293b" }}>
            Ready to Join Our Success Stories?
          </h3>
          <p
            className='mb-8 max-w-2xl mx-auto text-lg transition-colors duration-500'
            style={{ color: "#64748b" }}>
            Let us help you achieve the same remarkable results our clients
            experience every day
          </p>
          <button
            className='group relative px-10 py-5 rounded-xl font-semibold text-lg transition-transform duration-500 ease-in-out shadow-lg hover:scale-110 hover:-translate-y-2 active:scale-95 border backdrop-blur-sm'
            style={{
              color: "#fff",
              background: "#005f73",
              borderColor: "#005f73",
            }}>
            <span className='relative z-10 transition-opacity duration-300 ease-in-out group-hover:opacity-100'>
              Start Your Success Story
            </span>
            <span className='ml-2 transform group-hover:translate-x-1 transition-transform duration-300'>
              →
            </span>
            <div
              className='absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 ease-in-out transform group-hover:scale-105'
              style={{
                background: "#f1f5f9",
              }}></div>
          </button>

          {/* Pulse Animation Line */}
          <div
            className='w-1 h-3 rounded-full mt-6 mx-auto animate-pulse transition-colors duration-300 ease-in-out'
            style={{
              backgroundColor: " #005f73",
              opacity: 0.7,
            }}></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsStats;
