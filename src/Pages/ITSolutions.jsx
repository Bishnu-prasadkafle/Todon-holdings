import Herocard from "../Components/Service/Herocard";
import React, { useState, useEffect, useRef } from "react";
import {
  Code,
  Smartphone,
  Cloud,
  Shield,
  Monitor,
  Headphones,
  CheckCircle,
  Star,
  Award,
  Users,
  Globe,
  Zap,
} from "lucide-react";

const ITSolutions = () => {
  const [activeService, setActiveService] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const services = [
    {
      icon: <Code className='w-6 h-6' />,
      title: "Web Development",
      description:
        "Responsive websites and web applications built with modern technologies",
      details: ["React & Next.js", "Custom CMS", "E-commerce Solutions"],
    },
    {
      icon: <Smartphone className='w-6 h-6' />,
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile applications for iOS and Android",
      details: ["iOS Development", "Android Apps", "Cross-Platform"],
    },
    {
      icon: <Monitor className='w-6 h-6' />,
      title: "Software Solutions",
      description:
        "Enterprise-grade software tailored to your business requirements",
      details: ["Custom Software", "System Integration", "API Development"],
    },
    {
      icon: <Cloud className='w-6 h-6' />,
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and migration services",
      details: ["AWS & Azure", "Cloud Migration", "DevOps Solutions"],
    },
    {
      icon: <Globe className='w-6 h-6' />,
      title: "Digital Marketing",
      description:
        "Comprehensive digital marketing strategies to grow your online presence",
      details: ["SEO Optimization", "Social Media", "Content Marketing"],
    },
    {
      icon: <Headphones className='w-6 h-6' />,
      title: "Technical Support",
      description:
        "24/7 technical support and maintenance for all your IT needs",
      details: ["24/7 Support", "System Maintenance", "Bug Fixes"],
    },
  ];

  const projects = [
    {
      name: "E-Commerce Platform",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&auto=format&fit=crop&q=60",
      price: "From $15,000",
      rating: 4.9,
      reviews: 89,
      category: "Web Development",
    },
    {
      name: "Mobile Banking App",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop&q=60",
      price: "From $25,000",
      rating: 4.8,
      reviews: 156,
      category: "Mobile App",
    },
    {
      name: "Cloud Infrastructure",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=60",
      price: "From $10,000",
      rating: 4.9,
      reviews: 127,
      category: "Cloud Solutions",
    },
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "100+", label: "Happy Clients" },
    { number: "8+", label: "Years Experience" },
    { number: "24/7", label: "Technical Support" },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "8+ Years of Excellence",
      description:
        "Proven track record in delivering high-quality IT solutions",
    },
    {
      icon: Users,
      title: "Expert Development Team",
      description: "Skilled developers with expertise in latest technologies",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and reliable infrastructure",
    },
  ];

  return (
    <>
      <Herocard
        heading='Technology Solutions'
        description='Empowering your business with innovative IT solutions'
        image='https://images.unsplash.com/photo-1627634777217-c864268db30c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8SVQlMjBTb2x1dGlvbnN8ZW58MHx8MHx8fDA%3D'
      />
      <section
        ref={sectionRef}
        className='relative py-10 overflow-hidden'
        style={{
          background: "#f8fafc",
          minHeight: "100vh",
        }}>
        {/* Background Pattern */}
        <div
          className='absolute inset-0'
          style={{
            background:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            opacity: 0.3,
          }}></div>

        <div className='relative z-10 max-w-7xl mx-auto px-2 lg:px-4'>
          {/* Hero Section */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ease-out transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}>
            <div className='inline-flex items-center justify-center w-20 h-20 rounded-full bg-orange-100 text-orange-600 mb-6'>
              <Code className='w-10 h-10' />
            </div>
            <h1 className='text-4xl font-bold mb-6 text-slate-800'>
              IT Solutions
            </h1>
            <p className='text-xl text-slate-500 max-w-4xl mx-auto leading-relaxed'>
              Step into the digital future with our comprehensive IT services.
              We specialize in designing responsive websites, scalable mobile
              apps, and enterprise-grade software solutions tailored to your
              business needs. From consultation to deployment, we prioritize
              functionality, aesthetics, and user experience to help you grow
              efficiently.
            </p>
          </div>

          {/* Services Section */}
          <div
            className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 ease-out transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{
              transitionDelay: isVisible ? "0.2s" : "0s",
            }}>
            {services.map((service, index) => (
              <div
                key={index}
                className='group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200 transform hover:-translate-y-1'
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}>
                <div className='w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 text-orange-600 group-hover:bg-orange-200 transition-colors duration-300'>
                  {service.icon}
                </div>
                <h3 className='text-2xl font-bold mb-4 text-slate-800'>
                  {service.title}
                </h3>
                <p className='leading-relaxed mb-4 text-slate-500'>
                  {service.description}
                </p>
                {activeService === index && (
                  <ul className='space-y-2 border-t pt-4'>
                    {service.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className='flex items-center text-sm text-slate-500'>
                        <CheckCircle className='w-4 h-4 mr-2 text-orange-600' />
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Projects Section */}
          <div
            className={`mt-20 transition-all duration-1000 ease-out transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{
              transitionDelay: isVisible ? "0.4s" : "0s",
            }}>
            <div className='text-center mb-16'>
              <h2 className='text-3xl font-bold mb-4 text-slate-800'>
                Featured Projects
              </h2>
              <p className='text-xl text-slate-500'>
                Explore our successful IT implementations
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {projects.map((project, index) => (
                <div
                  key={index}
                  className='group bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden border border-gray-100 hover:border-orange-200 transition-all duration-300 transform hover:-translate-y-2'>
                  <div className='relative overflow-hidden'>
                    <img
                      src={project.image}
                      alt={project.name}
                      className='h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                    <div className='absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium'>
                      {project.category}
                    </div>
                  </div>
                  <div className='p-6'>
                    <h3 className='text-xl font-bold text-slate-800 mb-2'>
                      {project.name}
                    </h3>
                    <p className='text-orange-600 font-semibold mb-2 text-lg'>
                      {project.price}
                    </p>
                    <div className='flex items-center mb-4 text-yellow-500'>
                      <Star className='w-4 h-4 fill-current' />
                      <span className='ml-1 text-sm text-slate-600'>
                        {project.rating} ({project.reviews} reviews)
                      </span>
                    </div>
                    <div className='flex gap-3 mt-4'>
                      <button className='flex-1 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300 text-sm hover:shadow-md'>
                        View Project
                      </button>
                      <button className='flex-1 border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300 text-sm hover:shadow-md'>
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div
            className={`mt-20 transition-all duration-1000 ease-out transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{
              transitionDelay: isVisible ? "0.6s" : "0s",
            }}>
            <div className='bg-white rounded-xl shadow-lg p-8 border border-gray-100'>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
                {stats.map((stat, index) => (
                  <div key={index} className='text-center'>
                    <div className='text-3xl font-bold text-orange-600 mb-2'>
                      {stat.number}
                    </div>
                    <div className='text-slate-500 text-sm font-medium'>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div
            className={
              "mt-20 transition-all duration-1000 ease-out transform translate-y-0"
            }
            style={{
              transitionDelay: isVisible ? "0.8s" : "0s",
            }}>
            <div className='text-center mb-16'>
              <h2 className='text-3xl font-bold mb-4 text-slate-800'>
                Why Choose Our IT Solutions
              </h2>
              <p className='text-xl text-slate-500'>
                Your trusted partner for digital transformation
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {whyChooseUs.map((reason, index) => {
                const IconComponent = reason.icon;
                return (
                  <div
                    key={index}
                    className='group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200 transform hover:-translate-y-1'>
                    <div className='w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors duration-300'>
                      <IconComponent className='w-8 h-8 text-orange-600' />
                    </div>
                    <h3 className='text-xl font-bold mb-4 text-slate-800'>
                      {reason.title}
                    </h3>
                    <p className='leading-relaxed text-slate-500'>
                      {reason.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div
            className={
              "mt-20 transition-all duration-1000 ease-out transform translate-y-0"
            }
            style={{
              transitionDelay: isVisible ? "1s" : "0s",
            }}>
            <div className='text-center'>
              <button className='bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-300 text-lg hover:shadow-lg inline-flex items-center'>
                Learn More
                <svg
                  className='ml-2 w-5 h-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ITSolutions;
