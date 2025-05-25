import React from "react";
import { useState } from "react";
import {
  Users,
  Award,
  Target,
  Heart,
  Lightbulb,
  Shield,
  Star,
  PlayCircle,
} from "lucide-react";

const CertificationsAchievements = () => {
  const [activeTab, setActiveTab] = useState("recognition");

  const achievements = {
    recognition: [
      {
        title: "Rising Digital Agency 2023",
        org: "Tech Business Awards",
        icon: Award,
      },
      {
        title: "Google Partner Excellence",
        org: "Google Certified",
        icon: Star,
      },
      {
        title: "AWS Solutions Provider",
        org: "Amazon Web Services",
        icon: Shield,
      },
      {
        title: "Microsoft Partner Network",
        org: "Microsoft Certified",
        icon: Award,
      },
    ],
    metrics: [
      { value: "150+", label: "Projects Delivered", icon: Target },
      { value: "98%", label: "Client Satisfaction", icon: Heart },
      { value: "85%", label: "Traffic Increase", icon: Lightbulb },
      { value: "50+", label: "Active Partners", icon: Users },
    ],
  };

  return (
    <section className='py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold text-white mb-6'>
            Achievements & <span className='text-blue-400'>Recognition</span>
          </h2>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
            Our commitment to excellence recognized by industry leaders and
            reflected in client success
          </p>
          <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mt-6 rounded-full'></div>
        </div>

        {/* Tab Navigation */}
        <div className='flex justify-center mb-12'>
          <div className='bg-white/5 backdrop-blur-sm rounded-2xl p-2 border border-white/10'>
            <button
              onClick={() => setActiveTab("recognition")}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === "recognition"
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}>
              Industry Recognition
            </button>
            <button
              onClick={() => setActiveTab("metrics")}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === "metrics"
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}>
              Success Metrics
            </button>
          </div>
        </div>

        {/* Content */}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {achievements[activeTab].map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className='group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-400/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2'
                style={{ animationDelay: `${index * 0.1}s` }}>
                <div className='text-center space-y-4'>
                  <div className='w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mx-auto flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12'>
                    <IconComponent className='w-8 h-8 text-white' />
                  </div>

                  {activeTab === "recognition" ? (
                    <>
                      <h3 className='text-lg font-bold text-white group-hover:text-blue-300 transition-all duration-300'>
                        {item.title}
                      </h3>
                      <p className='text-blue-400 text-sm'>{item.org}</p>
                    </>
                  ) : (
                    <>
                      <div className='text-3xl font-bold text-blue-400 group-hover:text-blue-300 transition-all duration-300'>
                        {item.value}
                      </div>
                      <p className='text-gray-300 text-sm group-hover:text-gray-200 transition-all duration-300'>
                        {item.label}
                      </p>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className='text-center mt-16'>
          <div className='bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8 backdrop-blur-sm border border-blue-400/20 max-w-4xl mx-auto'>
            <h3 className='text-2xl font-bold text-white mb-4'>
              Ready to Transform Your Digital Presence?
            </h3>
            <p className='text-gray-300 mb-8'>
              Let's discuss how Tondon Holdings can empower your business to
              thrive online.
            </p>

            <div className='flex flex-col sm:flex-row items-center justify-center gap-6'>
              <button className='group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-500 shadow-2xl hover:shadow-blue-500/25 transform hover:scale-110 hover:-translate-y-2'>
                Start Your Project
              </button>

              <button className='group flex items-center gap-3 text-white hover:text-blue-300 transition-all duration-500 transform hover:scale-105'>
                <div className='w-12 h-12 border-2 border-white/70 rounded-full flex items-center justify-center group-hover:border-blue-300 group-hover:bg-blue-500/20 transition-all duration-500'>
                  <PlayCircle size={20} className='ml-0.5' />
                </div>
                <span className='font-medium'>Watch Our Story</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CertificationsAchievements;
