// import React from "react";
// import { Target } from "lucide-react";

// // Company Background Component
// const CompanyBackground = () => {
//   return (
//     <section
//       className='relative py-20 overflow-hidden'
//       style={{ background: "var(--color-cream)" }}>
//       {/* Background Elements */}
//       <div
//         className='absolute inset-0'
//         style={{
//           background:
//             "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
//           opacity: 0.5,
//         }}></div>

//       <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-8'>
//         <div className='text-center mb-16'>
//           <h2
//             className='text-4xl lg:text-5xl font-bold mb-6 transform transition-all duration-700 hover:scale-105'
//             style={{ color: "var(--color-primary)" }}>
//             Our{" "}
//             <span
//               className='inline-block transition-all duration-700 ease-in-out hover:scale-110 hover:-translate-y-1'
//               style={{
//                 background:
//                   "linear-gradient(90deg, var(--color-secondary), var(--color-navycream))",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//                 color: "transparent",
//               }}>
//               Story
//             </span>
//           </h2>
//           <div
//             className='w-24 h-1 mx-auto rounded-full transform transition-all duration-500 hover:w-32'
//             style={{
//               background:
//                 "linear-gradient(90deg, var(--color-secondary), var(--color-navycream))",
//             }}></div>
//         </div>

//         <div className='grid lg:grid-cols-2 gap-12 items-center'>
//           <div className='space-y-8 transform transition-all duration-700 hover:translate-x-2'>
//             <div
//               className='backdrop-blur-sm rounded-2xl p-8 border transition-all duration-500 group'
//               style={{
//                 background: "rgba(255,255,255,0.10)",
//                 borderColor: "var(--color-navycream)",
//               }}>
//               <h3
//                 className='text-2xl font-bold mb-4 group-hover:scale-105 transition-all duration-300'
//                 style={{
//                   color: "var(--color-primary)",
//                 }}>
//                 Our Origin
//               </h3>
//               <p
//                 className='leading-relaxed group-hover:opacity-90 transition-all duration-300'
//                 style={{ color: "var(--color-secondary)" }}>
//                 Founded in 2018,{" "}
//                 <strong style={{ color: "var(--color-secondary)" }}>
//                   Tondon Holdings
//                 </strong>{" "}
//                 emerged from a simple yet powerful observation: businesses of
//                 all sizes deserved access to cutting-edge digital solutions.
//                 What began as a small team of passionate developers has grown
//                 into a comprehensive digital transformation partner.
//               </p>
//             </div>

//             <div
//               className='backdrop-blur-sm rounded-2xl p-8 border transition-all duration-500 group'
//               style={{
//                 background: "rgba(255,255,255,0.10)",
//                 borderColor: "var(--color-navycream)",
//               }}>
//               <h3
//                 className='text-2xl font-bold mb-4 group-hover:scale-105 transition-all duration-300'
//                 style={{
//                   color: "var(--color-primary)",
//                 }}>
//                 Our Vision
//               </h3>
//               <p
//                 className='leading-relaxed group-hover:opacity-90 transition-all duration-300'
//                 style={{ color: "var(--color-secondary)" }}>
//                 To be the leading catalyst for business digital transformation,
//                 making cutting-edge web and digital solutions accessible to
//                 every business, regardless of size or industry.
//               </p>
//             </div>

//             <div
//               className='backdrop-blur-sm rounded-2xl p-8 border transition-all duration-500 group'
//               style={{
//                 background: "rgba(255,255,255,0.10)",
//                 borderColor: "var(--color-navycream)",
//               }}>
//               <h3
//                 className='text-2xl font-bold mb-4 group-hover:scale-105 transition-all duration-300'
//                 style={{
//                   color: "var(--color-primary)",
//                 }}>
//                 Our Mission
//               </h3>
//               <p
//                 className='leading-relaxed group-hover:opacity-90 transition-all duration-300'
//                 style={{ color: "var(--color-secondary)" }}>
//                 "Empowering businesses with modern web and digital solutions to
//                 thrive online." We believe every business deserves a powerful
//                 digital presence that reflects their unique value and drives
//                 meaningful growth.
//               </p>
//             </div>
//           </div>

//           <div className='relative transform transition-all duration-700 hover:scale-105'>
//             <div
//               className='relative rounded-3xl p-8 backdrop-blur-sm border transition-all duration-500'
//               style={{
//                 background:
//                   "linear-gradient(135deg, var(--color-navycream) 60%, var(--color-secondary) 100%)",
//                 borderColor: "var(--color-secondary)",
//               }}>
//               <div
//                 className='absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20 animate-pulse'
//                 style={{
//                   background:
//                     "linear-gradient(135deg, var(--color-secondary), var(--color-navycream))",
//                 }}></div>
//               <div className='text-center space-y-6'>
//                 <div
//                   className='w-20 h-20 rounded-2xl mx-auto flex items-center justify-center transform transition-all duration-500 hover:scale-110 hover:rotate-12'
//                   style={{
//                     background:
//                       "linear-gradient(135deg, var(--color-secondary), var(--color-primary))",
//                   }}>
//                   <Target
//                     className='w-10 h-10'
//                     style={{ color: "var(--color-cream)" }}
//                   />
//                 </div>
//                 <h4
//                   className='text-2xl font-bold'
//                   style={{ color: "var(--color-cream)" }}>
//                   150+ Projects
//                 </h4>
//                 <p style={{ color: "var(--color-secondary)" }}>
//                   Successfully delivered across various industries
//                 </p>
//                 <div className='grid grid-cols-2 gap-4 mt-8'>
//                   <div className='text-center'>
//                     <div
//                       className='text-2xl font-bold'
//                       style={{ color: "var(--color-secondary)" }}>
//                       98%
//                     </div>
//                     <div
//                       className='text-sm'
//                       style={{ color: "var(--color-navycream)" }}>
//                       Client Satisfaction
//                     </div>
//                   </div>
//                   <div className='text-center'>
//                     <div
//                       className='text-2xl font-bold'
//                       style={{ color: "var(--color-secondary)" }}>
//                       50+
//                     </div>
//                     <div
//                       className='text-sm'
//                       style={{ color: "var(--color-navycream)" }}>
//                       Active Partners
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default CompanyBackground;
import React from "react";
import { Target, Users, Award, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Company Background Component
const CompanyBackground = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const [statsVisible, setStatsVisible] = useState(false);

  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const cardRefs = useRef([]);
  const statsRef = useRef(null);

  const storyCards = [
    {
      id: 1,
      title: "Our Origin",
      content:
        "Founded in 2018, Tondon Holdings emerged from a simple yet powerful observation: businesses of all sizes deserved access to cutting-edge digital solutions. What began as a small team of passionate developers has grown into a comprehensive digital transformation partner.",
      icon: Target,
    },
    {
      id: 2,
      title: "Our Vision",
      content:
        "To be the leading catalyst for business digital transformation, making cutting-edge web and digital solutions accessible to every business, regardless of size or industry.",
      icon: TrendingUp,
    },
    {
      id: 3,
      title: "Our Mission",
      content:
        "Empowering businesses with modern web and digital solutions to thrive online. We believe every business deserves a powerful digital presence that reflects their unique value and drives meaningful growth.",
      icon: Award,
    },
  ];

  const companyStats = [
    { number: "150+", label: "Projects Delivered" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Active Partners" },
    { number: "6", label: "Years Excellence" },
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
              Story
            </span>
          </h2>
          <p
            className='text-xl max-w-2xl mx-auto transition-colors duration-500 ease-in-out'
            style={{ color: "var(--color-secondary)" }}>
            Building digital excellence since 2018
          </p>
          <div
            className='w-24 h-1 mx-auto mt-6 rounded-full transform transition-all duration-500 hover:w-32'
            style={{ backgroundColor: "var(--color-secondary)" }}></div>
        </div>

        {/* Story Cards Grid */}
        <div ref={cardsRef} className='grid lg:grid-cols-3 gap-8 mb-16'>
          {storyCards.map((card, index) => {
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

        {/* Company Stats Section */}
        <div
          ref={statsRef}
          className={`text-center rounded-2xl p-12 border transition-all duration-1000 ${
            statsVisible
              ? "opacity-100 translate-y-0 animate-in fade-in slide-in-from-bottom-8"
              : "opacity-0 translate-y-10"
          }`}
          style={{
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(6px)",
            borderColor: "var(--color-navycream)",
            transitionDelay: statsVisible ? "400ms" : "0ms",
          }}>
          <div className='mb-8'>
            <div
              className='w-20 h-20 rounded-2xl mx-auto flex items-center justify-center transform transition-all duration-500 hover:scale-110 hover:rotate-12 shadow-lg'
              style={{ backgroundColor: "var(--color-secondary)" }}>
              <Users
                className='w-10 h-10'
                style={{ color: "var(--color-cream)" }}
              />
            </div>
          </div>

          <h3
            className='text-3xl font-bold mb-4 transition-colors duration-500'
            style={{ color: "var(--color-primary)" }}>
            Our Journey in Numbers
          </h3>

          <p
            className='mb-8 max-w-2xl mx-auto text-lg transition-colors duration-500'
            style={{ color: "var(--color-secondary)" }}>
            Years of dedication, growth, and client success
          </p>

          <div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
            {companyStats.map((stat, index) => (
              <div
                key={index}
                className='group text-center transform transition-all duration-500 hover:scale-105'>
                <div
                  className='text-3xl lg:text-4xl font-bold mb-2 group-hover:scale-105 group-hover:translate-y-[-2px] transition-all duration-500'
                  style={{ color: "var(--color-secondary)" }}>
                  {stat.number}
                </div>
                <div
                  className='text-sm lg:text-base font-medium transition-all duration-300'
                  style={{ color: "var(--color-primary)" }}>
                  {stat.label}
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

export default CompanyBackground;
