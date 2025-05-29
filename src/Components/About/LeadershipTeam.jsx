import React, { useState, useEffect, useRef } from "react";
import { Users, Linkedin, Mail, Star } from "lucide-react";
import { Link } from "react-router-dom";

const LeadershipTeam = () => {
  const [hoveredMember, setHoveredMember] = useState(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const [ctaVisible, setCtaVisible] = useState(false);

  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const cardRefs = useRef([]);
  const ctaRef = useRef(null);

  const leaders = [
    {
      id: 1,
      name: "John Tondon",
      role: "Founder & CEO",
      bio: "Leading digital transformation initiatives with 12+ years of experience in web development and business strategy. Passionate about empowering businesses through innovative technology solutions.",
      image: "",
      expertise: [
        "Digital Strategy",
        "Business Development",
        "Team Leadership",
      ],
      experience: "12+ Years",
    },
    {
      id: 2,
      name: "Sarah Mitchell",
      role: "Chief Technology Officer",
      bio: "Architecting scalable solutions with expertise in modern web technologies and system architecture. Drives technical excellence and innovation across all projects.",
      image: "",
      expertise: [
        "System Architecture",
        "Web Technologies",
        "Technical Leadership",
      ],
      experience: "10+ Years",
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      role: "Head of Client Strategy",
      bio: "Building lasting partnerships through strategic digital consulting and business development expertise. Focuses on understanding client needs and delivering exceptional results.",
      image: "",
      expertise: [
        "Client Relations",
        "Strategic Consulting",
        "Business Growth",
      ],
      experience: "8+ Years",
    },
  ];

  // Intersection observers for scroll animations
  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      ([entry]) => setHeaderVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (headerRef.current) {
      headerObserver.observe(headerRef.current);
    }
    return () => {
      if (headerRef.current) headerObserver.unobserve(headerRef.current);
    };
  }, []);

  useEffect(() => {
    const cardsObserver = new IntersectionObserver(
      ([entry]) => setCardsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (cardsRef.current) {
      cardsObserver.observe(cardsRef.current);
    }
    return () => {
      if (cardsRef.current) cardsObserver.unobserve(cardsRef.current);
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

  const renderExpertiseStars = (expertise) => {
    return expertise.map((skill, index) => (
      <div key={index} className='flex items-center space-x-1 text-sm'>
        <Star
          size={12}
          style={{
            color: "#64748b",
            fill: "#64748b",
          }}
        />
        <span style={{ color: "#64748b" }}>{skill}</span>
      </div>
    ));
  };

  return (
    <section
      className='relative py-20 overflow-hidden'
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

      <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Header Section */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            headerVisible
              ? "opacity-100 translate-y-0 animate-in fade-in slide-in-from-bottom-8"
              : "opacity-0 translate-y-10"
          }`}>
          <h2
            className='text-4xl lg:text-5xl font-bold mb-6 transform transition-all duration-700 hover:scale-105'
            style={{ color: "#1e293b" }}>
            Leadership{" "}
            <span
              className='inline-block transition-all duration-700 ease-in-out hover:scale-110 hover:-translate-y-1'
              style={{ color: "#1e293b" }}>
              Team
            </span>
          </h2>
          <p
            className='text-xl max-w-3xl mx-auto transition-colors duration-500 ease-in-out leading-relaxed'
            style={{ color: "#64748b" }}>
            Meet the visionaries driving our mission to transform businesses
            through innovative digital solutions and proven expertise across
            diverse industries.
          </p>
        </div>

        {/* Leadership Cards */}
        <div
          ref={cardsRef}
          className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          {leaders.map((leader, index) => {
            const isCardVisible = visibleCards.includes(leader.id);

            return (
              <div
                key={leader.id}
                ref={(el) => (cardRefs.current[index] = el)}
                data-card-id={leader.id}
                className={`group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-1000 transform hover:scale-105 hover:-translate-y-3 border border-gray-100 relative overflow-hidden ${
                  isCardVisible
                    ? "opacity-100 translate-y-0 animate-in fade-in slide-in-from-bottom-8"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: isCardVisible ? `${index * 200}ms` : "0ms",
                }}
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}>
                {/* Profile Image/Icon */}
                <div className='text-center mb-6'>
                  <div className='relative mx-auto w-20 h-20'>
                    <div
                      className='w-full h-full rounded-full flex items-center justify-center transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6 shadow-lg bg-blue-100'
                      style={{
                        border: "4px solid white",
                      }}>
                      <Users
                        size={32}
                        className='text-blue-600'
                        style={{
                          transition: "color 0.5s",
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Name and Role */}
                <div className='text-center mb-4'>
                  <h3
                    className='text-2xl font-bold mb-2 group-hover:scale-105 transition-all duration-300'
                    style={{ color: "#1e293b" }}>
                    {leader.name}
                  </h3>
                  <p
                    className='font-semibold text-lg transition-all duration-300'
                    style={{ color: "#64748b" }}>
                    {leader.role}
                  </p>
                  <div
                    className='text-sm mt-1 font-medium'
                    style={{ color: "#64748b" }}>
                    {leader.experience} Experience
                  </div>
                </div>

                {/* Bio */}
                <p
                  className='leading-relaxed mb-6 group-hover:opacity-90 transition-all duration-300 text-center'
                  style={{ color: "#64748b" }}>
                  {leader.bio}
                </p>

                {/* Expertise */}
                <div className='mb-6'>
                  <h4
                    className='text-sm font-semibold mb-3 text-center'
                    style={{ color: "#1e293b" }}>
                    Key Expertise
                  </h4>
                  <div className='space-y-2'>
                    {renderExpertiseStars(leader.expertise)}
                  </div>
                </div>

                {/* Social Links */}
                <div className='flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-4'>
                  <div className='w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110 bg-blue-600'>
                    <Linkedin size={16} className='text-white' />
                  </div>
                  <div className='w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110 bg-blue-600'>
                    <Mail size={16} className='text-white' />
                  </div>
                </div>

                {/* Hover Indicator */}
                {hoveredMember === index && (
                  <div className='absolute -top-2 -right-2 w-6 h-6 rounded-full animate-ping bg-blue-600'></div>
                )}

                {/* Hover accent */}
                <div className='absolute bottom-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-all duration-500 origin-left shadow-lg bg-blue-600'></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          ref={ctaRef}
          className={`text-center bg-white rounded-xl p-12 shadow-lg border border-gray-100 transition-all duration-1000 ${
            ctaVisible
              ? "opacity-100 translate-y-0 animate-in fade-in slide-in-from-bottom-8"
              : "opacity-0 translate-y-10"
          }`}
          style={{
            transitionDelay: ctaVisible ? "600ms" : "0ms",
          }}>
          <h3
            className='text-3xl font-bold mb-4 transition-colors duration-500'
            style={{ color: "#1e293b" }}>
            Ready to Work with Our Team?
          </h3>
          <p
            className='mb-8 max-w-2xl mx-auto text-lg transition-colors duration-500 leading-relaxed'
            style={{ color: "#64748b" }}>
            Let our experienced leadership guide your digital transformation
            journey with proven expertise and innovative solutions.
          </p>
          <Link
            to='/contact'
            className='group relative px-10 py-4 bg-blue-600 text-white rounded-xl font-semibold text-lg transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1 active:scale-95 border border-blue-600'>
            <span className='relative z-10 transition-opacity duration-300 ease-in-out group-hover:opacity-100'>
              Get Started Today
            </span>
            <span className='ml-2 transform group-hover:translate-x-1 transition-transform duration-300'>
              →
            </span>
            <div className='absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 ease-in-out bg-white'></div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
