// Company Values Component
import React from "react";
import { Users, Heart, Lightbulb, Shield, ChevronRight } from "lucide-react";

const CompanyValues = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description:
        "We embrace cutting-edge technologies to deliver future-ready solutions that give our clients competitive advantages.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Heart,
      title: "Client-Centric Excellence",
      description:
        "Every decision centers on client success. We create digital experiences that drive real business results and growth.",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Shield,
      title: "Transparency & Integrity",
      description:
        "Honest communication, clear processes, and ethical practices. Our clients always know what to expect.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Users,
      title: "Collaborative Partnership",
      description:
        "We're an extension of your team. Success comes through collaboration and shared commitment to ambitious goals.",
      color: "from-blue-500 to-cyan-500",
    },
  ];

  return (
    <section className='py-20 bg-gradient-to-br from-slate-900 to-gray-900 relative overflow-hidden'>
      <div className='absolute inset-0 bg-grid-pattern opacity-5'></div>

      <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold text-white mb-6'>
            Our <span className='text-blue-400'>Values</span>
          </h2>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
            The principles that guide every decision and drive our commitment to
            excellence
          </p>
          <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mt-6 rounded-full'></div>
        </div>

        <div className='grid md:grid-cols-2 gap-8'>
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className='group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-400/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2'>
                <div className='flex items-start space-x-6'>
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12`}>
                    <IconComponent className='w-8 h-8 text-white' />
                  </div>

                  <div className='flex-1'>
                    <h3 className='text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-all duration-300'>
                      {value.title}
                    </h3>
                    <p className='text-gray-300 leading-relaxed group-hover:text-gray-200 transition-all duration-300'>
                      {value.description}
                    </p>
                  </div>
                </div>

                <div className='mt-6 flex justify-end opacity-0 group-hover:opacity-100 transition-all duration-500'>
                  <ChevronRight className='w-6 h-6 text-blue-400 transform group-hover:translate-x-2 transition-all duration-300' />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default CompanyValues;
