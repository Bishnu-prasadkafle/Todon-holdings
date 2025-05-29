import {
  Heart,
  Shield,
  Lightbulb,
  Handshake,
  Zap,
  Globe,
  Target,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const CORE_PRINCIPLES = [
  {
    label: "Authenticity",
    value: "Be genuine in all interactions",
    icon: Heart,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    label: "Quality",
    value: "Never compromise on standards",
    icon: Shield,
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    label: "Growth",
    value: "Continuous learning and improvement",
    icon: Target,
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    label: "Respect",
    value: "Value every voice and perspective",
    icon: Users,
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
  },
];

const VALUE_CARDS = [
  {
    id: 1,
    title: "Integrity First",
    content:
      "We believe in doing the right thing, even when no one is watching. Our commitment to honesty and ethical practices forms the foundation of every relationship.",
    icon: Shield,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: 2,
    title: "Innovation Drive",
    content:
      "We embrace cutting-edge technologies and creative solutions to solve complex challenges, ensuring our clients stay ahead in the digital landscape.",
    icon: Lightbulb,
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    id: 3,
    title: "Client Partnership",
    content:
      "We don't just work for our clients; we work with them. Building lasting partnerships through collaboration and shared success is our priority.",
    icon: Handshake,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    id: 4,
    title: "Excellence Pursuit",
    content:
      "We are never satisfied with 'good enough.' Our commitment to excellence drives us to deliver exceptional quality in every project.",
    icon: Zap,
    bgColor: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    id: 5,
    title: "Inclusive Growth",
    content:
      "We believe in creating opportunities for everyone. Our diverse team and inclusive approach ensure better solutions and meaningful impact.",
    icon: Heart,
    bgColor: "bg-teal-100",
    iconColor: "text-teal-600",
  },
  {
    id: 6,
    title: "Global Impact",
    content:
      "We think beyond borders and boundaries. Our solutions are designed to make a positive impact locally and globally.",
    icon: Globe,
    bgColor: "bg-red-100",
    iconColor: "text-red-600",
  },
];

const CompanyValues = () => {
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
      className='relative py-20 overflow-hidden'
      style={{ background: "#f8fafc" }}>
      {/* Background Pattern */}
      <div className='absolute inset-0 bg-pattern opacity-30' />

      <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Header Section */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0 animate-in fade-in slide-in-from-bottom-8"
              : "opacity-0 translate-y-10"
          }`}>
          <h2
            className='text-4xl lg:text-5xl font-bold mb-6'
            style={{ color: "#1e293b" }}>
            Our Values
          </h2>
          <p
            className='text-xl max-w-2xl mx-auto leading-relaxed'
            style={{ color: "#64748b" }}>
            The foundational principles that guide our decisions and shape our
            culture
          </p>
        </div>

        {/* Values Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
          {VALUE_CARDS.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                className='bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group'>
                <div
                  className={`w-16 h-16 ${card.bgColor} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-8 h-8 ${card.iconColor}`} />
                </div>
                <h3
                  className='text-2xl font-bold mb-4 group-hover:translate-x-2 transition-transform duration-300'
                  style={{ color: "#1e293b" }}>
                  {card.title}
                </h3>
                <p className='leading-relaxed' style={{ color: "#64748b" }}>
                  {card.content}
                </p>
              </div>
            );
          })}
        </div>

        {/* Core Principles Section */}
        <div
          className={`mt-20 bg-white p-8 rounded-xl shadow-lg transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
          <div className='text-center mb-10'>
            <h3
              className='text-3xl font-bold mb-4'
              style={{ color: "#1e293b" }}>
              Our Core Principles
            </h3>
            <p className='text-lg' style={{ color: "#64748b" }}>
              The fundamental beliefs that drive our success
            </p>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            {CORE_PRINCIPLES.map((principle, index) => {
              const IconComponent = principle.icon;
              return (
                <div
                  key={index}
                  className='group p-6 rounded-lg hover:bg-gray-50 transition-all duration-300'>
                  <div className='flex flex-col items-center space-y-4'>
                    <div
                      className={`w-12 h-12 ${principle.bgColor} rounded-lg flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                      <IconComponent
                        className={`w-6 h-6 ${principle.iconColor}`}
                      />
                    </div>
                    <div
                      className='text-lg font-bold text-center group-hover:translate-y-[-2px] transition-all duration-300'
                      style={{ color: "#1e293b" }}>
                      {principle.label}
                    </div>
                    <div
                      className='text-sm text-center'
                      style={{ color: "#64748b" }}>
                      {principle.value}
                    </div>
                    <div className='h-1 w-0 group-hover:w-full bg-gradient-to-r from-gray-200 to-transparent transition-all duration-300 rounded-full' />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyValues;
