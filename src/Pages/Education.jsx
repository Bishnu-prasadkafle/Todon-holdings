import Herocard from "../Components/Service/Herocard";
import React, { useState, useEffect, useRef } from "react";
import {
  GraduationCap,
  CheckCircle,
  Star,
  Shield,
  Globe,
  Award,
  Users,
  Clock,
  BookOpen,
  FileText,
  Target,
} from "lucide-react";

const EducationComponent = () => {
  const [activeFeature, setActiveFeature] = useState(null);
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

  const features = [
    {
      icon: <Target className='w-6 h-6' />,
      title: "University Selection",
      description:
        "Expert guidance in choosing the right university that matches your career goals",
      details: ["Global Universities", "Career Alignment", "Best Fit Analysis"],
    },
    {
      icon: <FileText className='w-6 h-6' />,
      title: "Application Prep",
      description:
        "Comprehensive application preparation to maximize your acceptance chances",
      details: ["Document Review", "Essay Writing", "Application Strategy"],
    },
    {
      icon: <Users className='w-6 h-6' />,
      title: "Interview Training",
      description:
        "Professional interview coaching to help you excel in university interviews",
      details: ["Mock Interviews", "Confidence Building", "Expert Feedback"],
    },
    {
      icon: <Award className='w-6 h-6' />,
      title: "Scholarship Guidance",
      description:
        "Maximize your scholarship opportunities with our expert assistance",
      details: [
        "Scholarship Search",
        "Application Support",
        "Financial Planning",
      ],
    },
    {
      icon: <Globe className='w-6 h-6' />,
      title: "Visa Support",
      description:
        "Complete visa processing support for international education",
      details: ["Document Preparation", "Application Filing", "Interview Prep"],
    },
    {
      icon: <BookOpen className='w-6 h-6' />,
      title: "Career Planning",
      description:
        "Long-term career planning aligned with your educational journey",
      details: ["Career Mapping", "Industry Insights", "Goal Setting"],
    },
  ];

  const programs = [
    {
      name: "Undergraduate Programs",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=60",
      price: "From $2,999",
      rating: 4.9,
      reviews: 245,
      category: "Bachelor's",
    },
    {
      name: "Graduate Studies",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&auto=format&fit=crop&q=60",
      price: "From $3,999",
      rating: 4.8,
      reviews: 189,
      category: "Master's",
    },
    {
      name: "PhD Programs",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60",
      price: "From $4,999",
      rating: 4.9,
      reviews: 156,
      category: "Doctorate",
    },
  ];

  const stats = [
    { number: "5,000+", label: "Students Placed" },
    { number: "200+", label: "Partner Universities" },
    { number: "15+", label: "Years Excellence" },
    { number: "95%", label: "Success Rate" },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "15+ Years of Excellence",
      description:
        "Established education consultancy with proven track record in student placements",
    },
    {
      icon: Users,
      title: "Expert Counselors",
      description:
        "Professional education counselors with extensive global university knowledge",
    },
    {
      icon: Shield,
      title: "Trusted & Reliable",
      description:
        "Licensed consultancy with comprehensive student support and satisfaction guarantee",
    },
  ];

  return (
    <>
      <Herocard
        heading='Education '
        description='Unlock your academic potential with our expert guidance.'
        image='https://plus.unsplash.com/premium_photo-1661773411247-cef25a9a4dcb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWR1Y2F0aW9uJTIwY29uc3VsdGFuY3l8ZW58MHx8MHx8fDA%3D'
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
          {/* <div
            className={`text-center mb-16 transition-all duration-1000 ease-out transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}>
            <div className='inline-flex items-center justify-center w-20 h-20 rounded-full bg-purple-100 text-purple-600 mb-6'>
              <GraduationCap className='w-10 h-10' />
            </div>
            <h1 className='text-4xl font-bold mb-6 text-slate-800'>
              Education Consultancy
            </h1>
            <p className='text-xl text-slate-500 max-w-4xl mx-auto leading-relaxed'>
              Unlock global academic opportunities with our trusted education
              consultancy. From selecting the right university to preparing
              applications and interviews, we guide students step-by-step. Our
              tailored approach increases acceptance chances, maximizes
              scholarships, and ensures alignment with long-term career goals.
            </p>
          </div> */}

          {/* Features Section */}
          <div
            className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 ease-out transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{
              transitionDelay: isVisible ? "0.2s" : "0s",
            }}>
            {features.map((feature, index) => (
              <div
                key={index}
                className='group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-1'
                onMouseEnter={() => setActiveFeature(index)}
                onMouseLeave={() => setActiveFeature(null)}>
                <div className='w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 text-purple-600 group-hover:bg-purple-200 transition-colors duration-300'>
                  {feature.icon}
                </div>
                <h3 className='text-2xl font-bold mb-4 text-slate-800'>
                  {feature.title}
                </h3>
                <p className='leading-relaxed mb-4 text-slate-500'>
                  {feature.description}
                </p>
                {activeFeature === index && (
                  <ul className='space-y-2 border-t pt-4'>
                    {feature.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className='flex items-center text-sm text-slate-500'>
                        <CheckCircle className='w-4 h-4 mr-2 text-purple-600' />
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Programs Section */}
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
                Featured Programs
              </h2>
              <p className='text-xl text-slate-500'>
                Discover our most popular education pathways
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {programs.map((program, index) => (
                <div
                  key={index}
                  className='group bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden border border-gray-100 hover:border-purple-200 transition-all duration-300 transform hover:-translate-y-2'>
                  <div className='relative overflow-hidden'>
                    <img
                      src={program.image}
                      alt={program.name}
                      className='h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                    <div className='absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium'>
                      {program.category}
                    </div>
                  </div>
                  <div className='p-6'>
                    <h3 className='text-xl font-bold text-slate-800 mb-2'>
                      {program.name}
                    </h3>
                    <p className='text-purple-600 font-semibold mb-2 text-lg'>
                      {program.price}
                    </p>
                    <div className='flex items-center mb-4 text-yellow-500'>
                      <Star className='w-4 h-4 fill-current' />
                      <span className='ml-1 text-sm text-slate-600'>
                        {program.rating} ({program.reviews} reviews)
                      </span>
                    </div>
                    <div className='flex gap-3 mt-4'>
                      <button className='flex-1 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300 text-sm hover:shadow-md'>
                        Learn More
                      </button>
                      <button className='flex-1 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300 text-sm hover:shadow-md'>
                        Apply Now
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
                    <div className='text-3xl font-bold text-purple-600 mb-2'>
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
                Why Choose Our Education Consultancy
              </h2>
              <p className='text-xl text-slate-500'>
                Your trusted partner for academic success
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {whyChooseUs.map((reason, index) => {
                const IconComponent = reason.icon;
                return (
                  <div
                    key={index}
                    className='group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-1'>
                    <div className='w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors duration-300'>
                      <IconComponent className='w-8 h-8 text-purple-600' />
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
              <button className='bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-300 text-lg hover:shadow-lg inline-flex items-center'>
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

export default EducationComponent;
