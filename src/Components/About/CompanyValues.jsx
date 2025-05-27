import React from "react";
import { Heart, Shield, Lightbulb, Handshake, Zap, Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Company Values Component
const CompanyValues = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const [statsVisible, setStatsVisible] = useState(false);

  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const cardRefs = useRef([]);
  const statsRef = useRef(null);

  const valueCards = [
    {
      id: 1,
      title: "Integrity First",
      content:
        "We believe in doing the right thing, even when no one is watching. Our commitment to honesty, transparency, and ethical practices forms the foundation of every client relationship and business decision we make.",
      icon: Shield,
    },
    {
      id: 2,
      title: "Innovation Drive",
      content:
        "We embrace cutting-edge technologies and creative solutions to solve complex challenges. Our passion for innovation ensures our clients stay ahead of the curve in an ever-evolving digital landscape.",
      icon: Lightbulb,
    },
    {
      id: 3,
      title: "Client Partnership",
      content:
        "We don't just work for our clients; we work with them. Building lasting partnerships through collaboration, understanding, and shared success is at the heart of everything we do.",
      icon: Handshake,
    },
    {
      id: 4,
      title: "Excellence Pursuit",
      content:
        "We are never satisfied with 'good enough.' Our commitment to excellence drives us to deliver exceptional quality in every project, exceeding expectations and setting new standards.",
      icon: Zap,
    },
    {
      id: 5,
      title: "Inclusive Growth",
      content:
        "We believe in creating opportunities for everyone. Our diverse team and inclusive approach ensure that different perspectives drive better solutions and meaningful impact.",
      icon: Heart,
    },
    {
      id: 6,
      title: "Global Impact",
      content:
        "We think beyond borders and boundaries. Our solutions are designed to make a positive impact locally and globally, contributing to a better digital future for all.",
      icon: Globe,
    },
  ];

  const coreValues = [
    {
      principle: "Authenticity",
      description: "Be genuine in all interactions",
    },
    { principle: "Quality", description: "Never compromise on standards" },
    { principle: "Growth", description: "Continuous learning and improvement" },
    { principle: "Respect", description: "Value every voice and perspective" },
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

  return (
    <section
      className='relative py-20 overflow-hidden'
      style={{ background: "var(--color-cream)", position: "relative" }}>
      {/* Background Elements */}
      <div
        className='absolute inset-0'
        style={{
          background:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          opacity: 0.5,
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
            style={{ color: "var(--color-primary)" }}>
            Our{" "}
            <span
              className='inline-block transition-all duration-700 ease-in-out hover:scale-110 hover:-translate-y-1'
              style={{ color: "var(--color-secondary)" }}>
              Values
            </span>
          </h2>
          <p
            className='text-xl max-w-2xl mx-auto transition-colors duration-500 ease-in-out'
            style={{ color: "var(--color-secondary)" }}>
            The principles that guide our every decision
          </p>
          <div
            className='w-24 h-1 mx-auto mt-6 rounded-full transform transition-all duration-500 hover:w-32'
            style={{ backgroundColor: "var(--color-secondary)" }}></div>
        </div>

        {/* Values Cards Grid */}
        <div ref={cardsRef} className='grid lg:grid-cols-3 gap-8 mb-16'>
          {valueCards.map((card, index) => {
            const IconComponent = card.icon;
            const isCardVisible = visibleCards.includes(card.id);

            return (
              <div
                key={card.id}
                ref={(el) => (cardRefs.current[index] = el)}
                data-card-id={card.id}
                className={`group rounded-2xl p-8 border transition-all duration-1000 transform hover:scale-105 hover:-translate-y-3 shadow-lg relative overflow-hidden ${
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
                    className='w-16 h-16 rounded-full flex items-center justify-center mx-auto transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6 shadow-lg'
                    style={{
                      backgroundColor: "var(--color-secondary)",
                      border: "4px solid var(--color-navycream)",
                    }}>
                    <IconComponent
                      size={28}
                      style={{
                        color: "var(--color-cream)",
                        transition: "color 0.5s",
                      }}
                    />
                  </div>
                </div>

                {/* Title */}
                <h3
                  className='text-2xl font-bold mb-4 group-hover:scale-105 transition-all duration-300 text-center'
                  style={{ color: "var(--color-primary)" }}>
                  {card.title}
                </h3>

                {/* Content */}
                <p
                  className='leading-relaxed group-hover:opacity-90 transition-all duration-300 text-center'
                  style={{ color: "var(--color-secondary)" }}>
                  {card.content}
                </p>

                {/* Hover accent */}
                <div
                  className='absolute bottom-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-all duration-500 origin-left shadow-lg'
                  style={{ backgroundColor: "var(--color-secondary)" }}></div>
              </div>
            );
          })}
        </div>

        {/* Core Values Section */}
        <div
          ref={statsRef}
          className={`text-center rounded-2xl p-12 border transition-all duration-1000 ${
            statsVisible
              ? "opacity-100 translate-y-0 animate-in fade-in slide-in-from-bottom-8"
              : "opacity-0 translate-y-10"
          }`}
          style={{
            background: "var(--color-navycream)",
            backdropFilter: "blur(6px)",
            borderColor: "var(--color-navycream)",
            transitionDelay: statsVisible ? "400ms" : "0ms",
          }}>
          <div className='mb-8'>
            <div
              className='w-20 h-20 rounded-2xl mx-auto flex items-center justify-center transform transition-all duration-500 hover:scale-110 hover:rotate-12 shadow-lg'
              style={{ backgroundColor: "var(--color-secondary)" }}>
              <Heart
                className='w-10 h-10'
                style={{ color: "var(--color-cream)" }}
              />
            </div>
          </div>

          <h3
            className='text-3xl font-bold mb-4 transition-colors duration-500'
            style={{ color: "var(--color-primary)" }}>
            Our Core Principles
          </h3>

          <p
            className='mb-8 max-w-2xl mx-auto text-lg transition-colors duration-500'
            style={{ color: "var(--color-secondary)" }}>
            The fundamental beliefs that shape our culture and drive our success
          </p>

          <div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
            {coreValues.map((value, index) => (
              <div
                key={index}
                className='group text-center transform transition-all duration-500 hover:scale-105'>
                <div
                  className='text-xl lg:text-2xl font-bold mb-2 group-hover:scale-105 group-hover:translate-y-[-2px] transition-all duration-500'
                  style={{ color: "var(--color-secondary)" }}>
                  {value.principle}
                </div>
                <div
                  className='text-sm lg:text-base font-medium transition-all duration-300'
                  style={{ color: "var(--color-primary)" }}>
                  {value.description}
                </div>
              </div>
            ))}
          </div>

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

export default CompanyValues;
