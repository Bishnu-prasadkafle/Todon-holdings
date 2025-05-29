import React, { useEffect, useRef, useState } from "react";
import {
  Plane,
  Shirt,
  GraduationCap,
  Code,
  MapPin,
  Users,
  Award,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import Herocard from "./Herocard";

export default function Services() {
  const [bannerVisible, setBannerVisible] = useState(false);
  const [servicesVisible, setServicesVisible] = useState(false);
  const [visibleServiceCards, setVisibleServiceCards] = useState([]);
  const [ctaVisible, setCtaVisible] = useState(false);

  const bannerRef = useRef(null);
  const servicesRef = useRef(null);
  const serviceCardRefs = useRef([]);
  const ctaRef = useRef(null);

  // Button style mapping to avoid dynamic class generation
  const buttonStyles = {
    blue: "bg-blue-600 hover:bg-blue-700",
    green: "bg-green-600 hover:bg-green-700",
    purple: "bg-purple-600 hover:bg-purple-700",
    orange: "bg-orange-600 hover:bg-orange-700",
  };

  // Accent line styles mapping
  const accentStyles = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    purple: "bg-purple-500",
    orange: "bg-orange-500",
  };

  const services = [
    {
      id: 1,
      title: "Travel & Tourism",
      icon: Plane,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-100",
      accentColor: "blue",
      image: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef",
      description:
        "Discover the joy of travel with curated experiences that blend comfort, adventure, and culture. At Tondon Holdings, our travel services cater to every kind of explorer — from solo adventurers to family vacations. We handle everything from flight bookings and accommodations to guided tours and visa assistance, ensuring a seamless, enriching journey wherever you go.",
      features: [
        "Flight Bookings",
        "Hotel Reservations",
        "Guided Tours",
        "Visa Assistance",
        "Travel Insurance",
        "24/7 Support",
      ],
    },
    {
      id: 2,
      title: "Clothing",
      icon: Shirt,
      iconColor: "text-green-600",
      bgColor: "bg-green-100",
      accentColor: "green",
      image:
        "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D",
      description:
        "Elevate your wardrobe with our distinctive fashion line that fuses cultural authenticity with contemporary design. Each piece is crafted with premium fabrics and fine tailoring to ensure lasting comfort and effortless elegance. Whether you're dressing for work, celebrations, or casual moments, we bring you style that speaks for itself.",
      features: [
        "Premium Fabrics",
        "Custom Tailoring",
        "Cultural Designs",
        "Contemporary Styles",
        "Quality Assurance",
        "Global Shipping",
      ],
    },
    {
      id: 3,
      title: "Education Consultancy",
      icon: GraduationCap,
      iconColor: "text-purple-600",
      bgColor: "bg-purple-100",
      accentColor: "purple",
      image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
      description:
        "Unlock global academic opportunities with our trusted education consultancy. From selecting the right university to preparing applications and interviews, we guide students step-by-step. Our tailored approach increases acceptance chances, maximizes scholarships, and ensures alignment with long-term career goals.",
      features: [
        "University Selection",
        "Application Prep",
        "Interview Training",
        "Scholarship Guidance",
        "Visa Support",
        "Career Planning",
      ],
    },
    {
      id: 4,
      title: "IT Solutions",
      icon: Code,
      iconColor: "text-orange-600",
      bgColor: "bg-orange-100",
      accentColor: "orange",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      description:
        "Step into the digital future with our comprehensive IT services. We specialize in designing responsive websites, scalable mobile apps, and enterprise-grade software solutions tailored to your business needs. From consultation to deployment, we prioritize functionality, aesthetics, and user experience to help you grow efficiently.",
      features: [
        "Web Development",
        "Mobile Apps",
        "Software Solutions",
        "Cloud Services",
        "Digital Marketing",
        "Technical Support",
      ],
    },
  ];

  const stats = [
    {
      icon: Users,
      label: "5000+ Clients Served",
      iconColor: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: MapPin,
      label: "50+ Countries Reached",
      iconColor: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: Award,
      label: "99% Success Rate",
      iconColor: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ];

  // Intersection observers
  useEffect(() => {
    const bannerObserver = new IntersectionObserver(
      ([entry]) => setBannerVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (bannerRef.current) {
      bannerObserver.observe(bannerRef.current);
    }
    return () => {
      if (bannerRef.current) bannerObserver.unobserve(bannerRef.current);
    };
  }, []);

  useEffect(() => {
    const servicesObserver = new IntersectionObserver(
      ([entry]) => setServicesVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (servicesRef.current) {
      servicesObserver.observe(servicesRef.current);
    }
    return () => {
      if (servicesRef.current) servicesObserver.unobserve(servicesRef.current);
    };
  }, []);

  useEffect(() => {
    const serviceCardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = parseInt(entry.target.dataset.cardId);
            setVisibleServiceCards((prev) => [...new Set([...prev, cardId])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    serviceCardRefs.current.forEach((ref) => {
      if (ref) serviceCardObserver.observe(ref);
    });

    return () => {
      serviceCardRefs.current.forEach((ref) => {
        if (ref) serviceCardObserver.unobserve(ref);
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

  return (
    <div className='font-sans' style={{ background: "#f8fafc" }}>
      {/* Hero Section */}
      <Herocard />

      {/* Banner Section */}
      <section className='relative py-16' style={{ background: "#f8fafc" }}>
        {/* Background Elements */}
        <div
          className='absolute inset-0'
          style={{
            background:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            opacity: 0.3,
          }}></div>

        <div className='relative z-10 max-w-7xl mx-auto px-4'>
          <div
            ref={bannerRef}
            className={`transition-all duration-1000 ease-out ${
              bannerVisible
                ? "opacity-100 translate-y-0 animate-in fade-in slide-in-from-bottom-8"
                : "opacity-0 translate-y-10"
            }`}>
            {/* Main Banner */}
            <div className='text-center mb-16'>
              <h2
                className='text-4xl lg:text-5xl font-bold mb-6'
                style={{ color: "#1e293b" }}>
                Comprehensive Services for Your Success
              </h2>
              <p
                className='text-xl max-w-3xl mx-auto leading-relaxed mb-12'
                style={{ color: "#64748b" }}>
                From travel experiences to digital solutions, we provide
                end-to-end services that drive growth and deliver exceptional
                value across multiple industries.
              </p>

              {/* Stats Row */}
              <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto'>
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div
                      key={index}
                      className='bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 border border-gray-100'
                      style={{ transitionDelay: `${index * 100}ms` }}>
                      <div
                        className={`w-12 h-12 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-500 transform hover:scale-110`}>
                        <IconComponent size={24} className={stat.iconColor} />
                      </div>
                      <div
                        className='text-lg font-semibold'
                        style={{ color: "#1e293b" }}>
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className='relative py-20' style={{ background: "#f8fafc" }}>
        {/* Background Elements */}
        <div
          className='absolute inset-0'
          style={{
            background:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            opacity: 0.3,
          }}></div>

        <div className='relative z-10 max-w-7xl mx-auto px-4'>
          <div
            ref={servicesRef}
            className={`text-center mb-16 transition-all duration-1000 ease-out ${
              servicesVisible
                ? "opacity-100 translate-y-0 animate-in fade-in slide-in-from-bottom-8"
                : "opacity-0 translate-y-10"
            }`}>
            <h2
              className='text-4xl lg:text-5xl font-bold mb-6'
              style={{ color: "#1e293b" }}>
              Our Services
            </h2>
            <p
              className='text-xl max-w-2xl mx-auto leading-relaxed'
              style={{ color: "#64748b" }}>
              Explore our diverse range of professional services designed to
              meet your unique needs and exceed your expectations.
            </p>
          </div>

          <div className='space-y-20'>
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isCardVisible = visibleServiceCards.includes(service.id);
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  ref={(el) => (serviceCardRefs.current[index] = el)}
                  data-card-id={service.id}
                  className={`transition-all duration-1000 ease-out ${
                    isCardVisible
                      ? "opacity-100 translate-y-0 animate-in fade-in slide-in-from-bottom-8"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{
                    transitionDelay: isCardVisible ? `${index * 200}ms` : "0ms",
                  }}>
                  <div
                    className={`grid lg:grid-cols-2 gap-12 items-center ${
                      !isEven ? "lg:grid-flow-col-dense" : ""
                    }`}>
                    {/* Image */}
                    <div
                      className={`${
                        !isEven ? "lg:col-start-2" : ""
                      } relative group`}>
                      <div className='overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:scale-[1.02]'>
                        <img
                          src={service.image}
                          alt={service.title}
                          className='w-full h-80 object-cover transition-all duration-700 group-hover:scale-110'
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500'></div>
                      </div>

                      {/* Floating Icon */}
                      <div
                        className={`absolute -top-6 -right-6 w-16 h-16 ${service.bgColor} rounded-2xl shadow-xl flex items-center justify-center transform rotate-6 group-hover:rotate-12 transition-all duration-500`}>
                        <IconComponent
                          size={28}
                          className={service.iconColor}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div
                      className={`${
                        !isEven ? "lg:col-start-1 lg:row-start-1" : ""
                      } bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 relative overflow-hidden group`}>
                      {/* Background Accent - Fixed with mapped styles */}
                      <div
                        className={`absolute top-0 left-0 w-2 h-full ${
                          accentStyles[service.accentColor]
                        } transform scale-y-0 group-hover:scale-y-100 transition-all duration-500 origin-top`}></div>

                      <div className='relative z-10'>
                        <div className='flex items-center mb-6'>
                          <div
                            className={`w-12 h-12 ${service.bgColor} rounded-xl flex items-center justify-center mr-4 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6`}>
                            <IconComponent
                              size={24}
                              className={service.iconColor}
                            />
                          </div>
                          <h3
                            className='text-3xl font-bold transition-all duration-300'
                            style={{ color: "#1e293b" }}>
                            {service.title}
                          </h3>
                        </div>

                        <p
                          className='text-lg leading-relaxed mb-8 transition-all duration-300'
                          style={{ color: "#64748b" }}>
                          {service.description}
                        </p>

                        {/* Features */}
                        <div className='grid grid-cols-2 gap-3 mb-8'>
                          {service.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className='flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-all duration-300 group/feature'>
                              <ChevronRight
                                size={16}
                                className={`${service.iconColor} transition-all duration-300 group-hover/feature:translate-x-1`}
                              />
                              <span
                                className='text-sm font-medium transition-all duration-300'
                                style={{ color: "#475569" }}>
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Action Button - Fixed with mapped styles */}
                        <button
                          className={`${
                            buttonStyles[service.accentColor]
                          } text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2 group/btn`}>
                          Learn More
                          <ArrowRight
                            size={18}
                            className='group-hover/btn:translate-x-1 transition-transform duration-300'
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='relative py-20' style={{ background: "#f8fafc" }}>
        <div className='relative z-10 max-w-7xl mx-auto px-4'>
          <div
            ref={ctaRef}
            className={`text-center transition-all duration-1000 ease-out ${
              ctaVisible
                ? "opacity-100 translate-y-0 animate-in fade-in slide-in-from-bottom-8"
                : "opacity-0 translate-y-10"
            }`}>
            <div className='bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02] relative overflow-hidden'>
              {/* Background decoration */}
              <div className='absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-700/20 backdrop-blur-sm'></div>
              <div className='absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16'></div>
              <div className='absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12'></div>

              <div className='relative z-10'>
                <h2 className='text-4xl lg:text-5xl font-bold mb-6 text-white'>
                  Ready to Get Started?
                </h2>
                <p className='text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed mb-8'>
                  Let's discuss how our comprehensive services can help you
                  achieve your goals and drive your success forward.
                </p>

                <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                  <button className='bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2 group'>
                    Contact Us Today
                    <ArrowRight
                      size={20}
                      className='group-hover:translate-x-1 transition-transform duration-300'
                    />
                  </button>
                  <button className='border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105'>
                    View Portfolio
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
