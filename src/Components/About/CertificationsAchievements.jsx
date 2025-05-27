import React, { useState } from "react";
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
    <section
      className='py-20 overflow-hidden'
      style={{ background: "var(--color-cream)" }}>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2
            className='text-4xl lg:text-5xl font-bold mb-6'
            style={{ color: "var(--color-primary)" }}>
            Achievements &{" "}
            <span
              className='inline-block'
              style={{
                background:
                  "linear-gradient(90deg, var(--color-secondary), var(--color-navycream))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}>
              Recognition
            </span>
          </h2>
          <p
            className='text-xl max-w-3xl mx-auto'
            style={{ color: "var(--color-secondary)" }}>
            Our commitment to excellence recognized by industry leaders and
            reflected in client success
          </p>
          <div
            className='w-24 h-1 mx-auto mt-6 rounded-full'
            style={{
              background:
                "linear-gradient(90deg, var(--color-secondary), var(--color-navycream))",
            }}></div>
        </div>

        {/* Tab Navigation */}
        <div className='flex justify-center mb-12'>
          <div
            className='backdrop-blur-sm rounded-2xl p-2 border'
            style={{
              background: "rgba(255,255,255,0.10)",
              borderColor: "var(--color-navycream)",
            }}>
            <button
              onClick={() => setActiveTab("recognition")}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === "recognition" ? "shadow-lg" : ""
              }`}
              style={
                activeTab === "recognition"
                  ? {
                      background:
                        "linear-gradient(90deg, var(--color-secondary), var(--color-navycream))",
                      color: "var(--color-cream)",
                    }
                  : {
                      color: "var(--color-secondary)",
                      background: "transparent",
                    }
              }>
              Industry Recognition
            </button>
            <button
              onClick={() => setActiveTab("metrics")}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === "metrics" ? "shadow-lg" : ""
              }`}
              style={
                activeTab === "metrics"
                  ? {
                      background:
                        "linear-gradient(90deg, var(--color-secondary), var(--color-navycream))",
                      color: "var(--color-cream)",
                    }
                  : {
                      color: "var(--color-secondary)",
                      background: "transparent",
                    }
              }>
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
                className='group backdrop-blur-sm rounded-2xl p-6 border transition-all duration-500 transform hover:scale-105 hover:-translate-y-2'
                style={{
                  background: "rgba(255,255,255,0.10)",
                  borderColor: "var(--color-navycream)",
                  animationDelay: `${index * 0.1}s`,
                }}>
                <div className='text-center space-y-4'>
                  <div
                    className='w-16 h-16 rounded-2xl mx-auto flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12'
                    style={{
                      background:
                        "linear-gradient(135deg, var(--color-secondary), var(--color-navycream))",
                    }}>
                    <IconComponent
                      className='w-8 h-8'
                      style={{ color: "var(--color-cream)" }}
                    />
                  </div>

                  {activeTab === "recognition" ? (
                    <>
                      <h3
                        className='text-lg font-bold group-hover:scale-105 transition-all duration-300'
                        style={{
                          color: "var(--color-primary)",
                        }}>
                        {item.title}
                      </h3>
                      <p
                        className='text-sm'
                        style={{ color: "var(--color-secondary)" }}>
                        {item.org}
                      </p>
                    </>
                  ) : (
                    <>
                      <div
                        className='text-3xl font-bold group-hover:scale-105 transition-all duration-300'
                        style={{ color: "var(--color-secondary)" }}>
                        {item.value}
                      </div>
                      <p
                        className='text-sm group-hover:opacity-90 transition-all duration-300'
                        style={{ color: "var(--color-secondary)" }}>
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
          <div
            className='rounded-3xl p-8 backdrop-blur-sm border max-w-4xl mx-auto'
            style={{
              background:
                "linear-gradient(90deg, var(--color-navycream) 60%, var(--color-secondary) 100%)",
              borderColor: "var(--color-secondary)",
            }}>
            <h3
              className='text-2xl font-bold mb-4'
              style={{ color: "var(--color-cream)" }}>
              Ready to Transform Your Digital Presence?
            </h3>
            <p className='mb-8' style={{ color: "var(--color-secondary)" }}>
              Let's discuss how Tondon Holdings can empower your business to
              thrive online.
            </p>

            <div className='flex flex-col sm:flex-row items-center justify-center gap-6'>
              <button
                className='group px-8 py-4 rounded-xl font-semibold transition-all duration-500 shadow-2xl transform hover:scale-110 hover:-translate-y-2'
                style={{
                  color: "var(--color-cream)",
                  background:
                    "linear-gradient(90deg, var(--color-secondary), var(--color-primary))",
                  border: "none",
                }}>
                Start Your Project
              </button>

              <button
                className='group flex items-center gap-3 transition-all duration-500 transform hover:scale-105'
                style={{ color: "var(--color-cream)" }}>
                <div
                  className='w-12 h-12 border-2 rounded-full flex items-center justify-center transition-all duration-500'
                  style={{
                    borderColor: "var(--color-cream)",
                    background: "var(--color-navycream)",
                  }}>
                  <PlayCircle
                    size={20}
                    className='ml-0.5'
                    style={{ color: "var(--color-secondary)" }}
                  />
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
