// import React, { useState } from "react";
// import {
//   Users,
//   Award,
//   Target,
//   Heart,
//   Lightbulb,
//   Shield,
//   Star,
//   PlayCircle,
// } from "lucide-react";

// const CertificationsAchievements = () => {
//   const [activeTab, setActiveTab] = useState("recognition");

//   const achievements = {
//     recognition: [
//       {
//         title: "Rising Digital Agency 2023",
//         org: "Tech Business Awards",
//         icon: Award,
//       },
//       {
//         title: "Google Partner Excellence",
//         org: "Google Certified",
//         icon: Star,
//       },
//       {
//         title: "AWS Solutions Provider",
//         org: "Amazon Web Services",
//         icon: Shield,
//       },
//       {
//         title: "Microsoft Partner Network",
//         org: "Microsoft Certified",
//         icon: Award,
//       },
//     ],
//     metrics: [
//       { value: "150+", label: "Projects Delivered", icon: Target },
//       { value: "98%", label: "Client Satisfaction", icon: Heart },
//       { value: "85%", label: "Traffic Increase", icon: Lightbulb },
//       { value: "50+", label: "Active Partners", icon: Users },
//     ],
//   };

//   return (
//     <section
//       className='py-20 overflow-hidden'
//       style={{ background: "var(--color-cream)" }}>
//       <div className='max-w-7xl mx-auto px-6 lg:px-8'>
//         <div className='text-center mb-16'>
//           <h2
//             className='text-4xl lg:text-5xl font-bold mb-6'
//             style={{ color: "var(--color-secondary)" }}>
//             Achievements &{" "}
//             <span
//               className='inline-block'
//               style={{ color: "var(--color-secondary)" }}>
//               Recognition
//             </span>
//           </h2>
//           <p
//             className='text-xl max-w-3xl mx-auto'
//             style={{ color: "var(--color-secondary)" }}>
//             Our commitment to excellence recognized by industry leaders and
//             reflected in client success
//           </p>
//           <div
//             className='w-24 h-1 mx-auto mt-6 rounded-full'
//             style={{ background: "var(--color-secondary)" }}></div>
//         </div>

//         {/* Tab Navigation */}
//         <div className='flex justify-center mb-12'>
//           <div
//             className='backdrop-blur-sm rounded-2xl p-2 border'
//             style={{
//               background: "rgba(255,255,255,0.10)",
//               borderColor: "var(--color-navycream)",
//             }}>
//             <button
//               onClick={() => setActiveTab("recognition")}
//               className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
//                 activeTab === "recognition" ? "shadow-lg" : ""
//               }`}
//               style={
//                 activeTab === "recognition"
//                   ? {
//                       background: "var(--color-secondary)",
//                       color: "var(--color-cream)",
//                     }
//                   : {
//                       color: "var(--color-secondary)",
//                       background: "transparent",
//                     }
//               }>
//               Industry Recognition
//             </button>
//             <button
//               onClick={() => setActiveTab("metrics")}
//               className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
//                 activeTab === "metrics" ? "shadow-lg" : ""
//               }`}
//               style={
//                 activeTab === "metrics"
//                   ? {
//                       background: "var(--color-secondary)",
//                       color: "var(--color-cream)",
//                     }
//                   : {
//                       color: "var(--color-secondary)",
//                       background: "transparent",
//                     }
//               }>
//               Success Metrics
//             </button>
//           </div>
//         </div>

//         {/* Content */}
//         <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
//           {achievements[activeTab].map((item, index) => {
//             const IconComponent = item.icon;
//             return (
//               <div
//                 key={index}
//                 className='group backdrop-blur-sm rounded-2xl p-6 border transition-all duration-500 transform hover:scale-105 hover:-translate-y-2'
//                 style={{
//                   background: "rgba(255,255,255,0.10)",
//                   borderColor: "var(--color-navycream)",
//                   animationDelay: `${index * 0.1}s`,
//                 }}>
//                 <div className='text-center space-y-4'>
//                   <div
//                     className='w-16 h-16 rounded-2xl mx-auto flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12'
//                     style={{
//                       background: "var(--color-secondary)",
//                     }}>
//                     <IconComponent
//                       className='w-8 h-8'
//                       style={{ color: "var(--color-cream)" }}
//                     />
//                   </div>

//                   {activeTab === "recognition" ? (
//                     <>
//                       <h3
//                         className='text-lg font-bold group-hover:scale-105 transition-all duration-300'
//                         style={{ color: "var(--color-secondary)" }}>
//                         {item.title}
//                       </h3>
//                       <p
//                         className='text-sm'
//                         style={{ color: "var(--color-secondary)" }}>
//                         {item.org}
//                       </p>
//                     </>
//                   ) : (
//                     <>
//                       <div
//                         className='text-3xl font-bold group-hover:scale-105 transition-all duration-300'
//                         style={{ color: "var(--color-secondary)" }}>
//                         {item.value}
//                       </div>
//                       <p
//                         className='text-sm group-hover:opacity-90 transition-all duration-300'
//                         style={{ color: "var(--color-secondary)" }}>
//                         {item.label}
//                       </p>
//                     </>
//                   )}
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Call to Action */}
//         <div className='text-center mt-16'>
//           <div
//             className='rounded-3xl p-8 backdrop-blur-sm border max-w-4xl mx-auto'
//             style={{
//               background: "var(--color-secondary)",
//               borderColor: "var(--color-secondary)",
//             }}>
//             <h3
//               className='text-2xl font-bold mb-4'
//               style={{ color: "var(--color-cream)" }}>
//               Ready to Transform Your Digital Presence?
//             </h3>
//             <p className='mb-8' style={{ color: "var(--color-navycream)" }}>
//               Let's discuss how Tondon Holdings can empower your business to
//               thrive online.
//             </p>

//             <div className='flex flex-col sm:flex-row items-center justify-center gap-6'>
//               <button
//                 className='group px-8 py-4 rounded-xl font-semibold transition-all duration-500 shadow-2xl transform hover:scale-110 hover:-translate-y-2'
//                 style={{
//                   color: "var(--color-cream)",
//                   background: "var(--color-navycream)",
//                   border: "none",
//                 }}>
//                 Start Your Project
//               </button>

//               <button
//                 className='group flex items-center gap-3 transition-all duration-500 transform hover:scale-105'
//                 style={{ color: "var(--color-cream)" }}>
//                 <div
//                   className='w-12 h-12 border-2 rounded-full flex items-center justify-center transition-all duration-500'
//                   style={{
//                     borderColor: "var(--color-cream)",
//                     background: "var(--color-navycream)",
//                   }}>
//                   <PlayCircle
//                     size={20}
//                     className='ml-0.5'
//                     style={{ color: "var(--color-secondary)" }}
//                   />
//                 </div>
//                 <span className='font-medium'>Watch Our Story</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CertificationsAchievements;
import React, { useState, useEffect, useRef } from "react";
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
  // States
  const [activeTab, setActiveTab] = useState("recognition");
  const [headerVisible, setHeaderVisible] = useState(false);
  const [tabsVisible, setTabsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const [ctaVisible, setCtaVisible] = useState(false);

  // Refs
  const headerRef = useRef(null);
  const tabsRef = useRef(null);
  const cardRefs = useRef([]);
  const ctaRef = useRef(null);

  // Data
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

  // Scroll Observers
  useEffect(() => {
    const observers = [
      { ref: headerRef, setter: setHeaderVisible },
      { ref: tabsRef, setter: setTabsVisible },
      { ref: ctaRef, setter: setCtaVisible },
    ].map(({ ref, setter }) => {
      const observer = new IntersectionObserver(
        ([entry]) => setter(entry.isIntersecting),
        { threshold: 0.2 }
      );
      if (ref.current) observer.observe(ref.current);
      return { observer, ref };
    });

    return () => {
      observers.forEach(({ observer, ref }) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  // Card Animations
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

  return (
    <section
      className='py-20 overflow-hidden relative'
      style={{ background: "var(--color-cream)" }}>
      {/* Background Pattern */}
      <div
        className='absolute inset-0'
        style={{
          background:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          opacity: 0.5,
        }}
      />

      <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Header */}
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
            Achievements &{" "}
            <span
              className='inline-block transition-all duration-700 ease-in-out hover:scale-110 hover:-translate-y-1'
              style={{ color: "var(--color-secondary)" }}>
              Recognition
            </span>
          </h2>
          <p
            className='text-xl max-w-3xl mx-auto transition-colors duration-500 ease-in-out'
            style={{ color: "var(--color-secondary)" }}>
            Our commitment to excellence recognized by industry leaders
          </p>
          <div
            className='w-24 h-1 mx-auto mt-6 rounded-full transform transition-all duration-500 hover:w-32'
            style={{ background: "var(--color-secondary)" }}
          />
        </div>

        {/* Tab Navigation */}
        <div
          ref={tabsRef}
          className={`flex justify-center mb-12 transition-all duration-1000 ${
            tabsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}>
          <div
            className='backdrop-blur-sm rounded-2xl p-2 border'
            style={{
              background: "rgba(255,255,255,0.10)",
              borderColor: "var(--color-navycream)",
            }}>
            {["recognition", "metrics"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? "shadow-lg transform hover:scale-105"
                    : "hover:bg-white/10"
                }`}
                style={
                  activeTab === tab
                    ? {
                        background: "var(--color-secondary)",
                        color: "var(--color-cream)",
                      }
                    : {
                        color: "var(--color-secondary)",
                        background: "transparent",
                      }
                }>
                {tab === "recognition"
                  ? "Industry Recognition"
                  : "Success Metrics"}
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {achievements[activeTab].map((item, index) => {
            const IconComponent = item.icon;
            const isCardVisible = visibleCards.includes(index);

            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                data-card-id={index}
                className={`group backdrop-blur-sm rounded-2xl p-6 border transition-all duration-1000 transform hover:scale-105 hover:-translate-y-2 ${
                  isCardVisible
                    ? "opacity-100 translate-y-0 animate-in fade-in slide-in-from-bottom-8"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  background: "var(--color-navycream)",
                  borderColor: "var(--color-secondary)",
                  transitionDelay: isCardVisible ? `${index * 150}ms` : "0ms",
                }}>
                <div className='text-center space-y-4'>
                  <div
                    className='w-16 h-16 rounded-2xl mx-auto flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12'
                    style={{ background: "var(--color-secondary)" }}>
                    <IconComponent
                      className='w-8 h-8'
                      style={{ color: "var(--color-cream)" }}
                    />
                  </div>

                  {activeTab === "recognition" ? (
                    <>
                      <h3
                        className='text-lg font-bold group-hover:scale-105 transition-all duration-300'
                        style={{ color: "var(--color-primary)" }}>
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
                        style={{ color: "var(--color-primary)" }}>
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

        {/* CTA Section */}
        <div
          ref={ctaRef}
          className={`text-center mt-16 transition-all duration-1000 ${
            ctaVisible
              ? "opacity-100 translate-y-0 animate-in fade-in slide-in-from-bottom-8"
              : "opacity-0 translate-y-10"
          }`}>
          <div
            className='rounded-3xl p-8 backdrop-blur-sm border max-w-4xl mx-auto'
            style={{
              background: "var(--color-secondary)",
              borderColor: "var(--color-navycream)",
            }}>
            <h3
              className='text-2xl font-bold mb-4'
              style={{ color: "var(--color-cream)" }}>
              Ready to Transform Your Digital Presence?
            </h3>
            <p className='mb-8' style={{ color: "var(--color-navycream)" }}>
              Let's discuss how we can empower your business to thrive online.
            </p>

            <div className='flex flex-col sm:flex-row items-center justify-center gap-6'>
              <button className='group relative px-8 py-4 rounded-xl font-semibold transition-all duration-500 shadow-2xl transform hover:scale-110 hover:-translate-y-2'>
                <span
                  className='relative z-10'
                  style={{ color: "var(--color-secondary)" }}>
                  Start Your Project
                </span>
                <div
                  className='absolute inset-0 rounded-xl'
                  style={{ background: "var(--color-cream)" }}
                />
              </button>

              <button
                className='group flex items-center gap-3 transition-all duration-500 transform hover:scale-105'
                style={{ color: "var(--color-cream)" }}>
                <div
                  className='w-12 h-12 border-2 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110'
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
