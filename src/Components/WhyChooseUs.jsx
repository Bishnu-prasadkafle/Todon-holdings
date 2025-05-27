// import { Shield, Zap, Users, Award } from "lucide-react";
// import { useEffect, useRef, useState } from "react";

// const WhyChooseUs = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [visibleCards, setVisibleCards] = useState([]);
//   const [ctaVisible, setCtaVisible] = useState(false);
//   const sectionRef = useRef(null);
//   const cardRefs = useRef([]);
//   const ctaRef = useRef(null);

//   const features = [
//     {
//       icon: Shield,
//       title: "Enterprise Security",
//       description:
//         "Bank-level encryption and security protocols to protect your data with advanced threat detection.",
//     },
//     {
//       icon: Zap,
//       title: "Lightning Fast",
//       description:
//         "Real-time processing with 99.9% uptime guarantee and instant data synchronization.",
//     },
//     {
//       icon: Users,
//       title: "Expert Support",
//       description:
//         "24/7 dedicated support from analytics professionals with personalized assistance.",
//     },
//     {
//       icon: Award,
//       title: "Industry Leader",
//       description:
//         "Trusted by 10,000+ companies worldwide with proven track record of success.",
//     },
//   ];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => setIsVisible(entry.isIntersecting),
//       { threshold: 0.3 }
//     );
//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }
//     return () => {
//       if (sectionRef.current) observer.unobserve(sectionRef.current);
//     };
//   }, []);

//   useEffect(() => {
//     const cardObserver = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const cardId = parseInt(entry.target.dataset.cardId);
//             setVisibleCards((prev) => [...new Set([...prev, cardId])]);
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     cardRefs.current.forEach((ref) => {
//       if (ref) cardObserver.observe(ref);
//     });

//     return () => {
//       cardRefs.current.forEach((ref) => {
//         if (ref) cardObserver.unobserve(ref);
//       });
//     };
//   }, []);

//   useEffect(() => {
//     const ctaObserver = new IntersectionObserver(
//       ([entry]) => setCtaVisible(entry.isIntersecting),
//       { threshold: 0.3 }
//     );
//     if (ctaRef.current) {
//       ctaObserver.observe(ctaRef.current);
//     }
//     return () => {
//       if (ctaRef.current) ctaObserver.unobserve(ctaRef.current);
//     };
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className='py-20 overflow-hidden'
//       style={{
//         background:
//           "linear-gradient(135deg, var(--color-primary) 60%, var(--color-navycream) 100%)",
//         position: "relative",
//       }}>
//       {/* Background Elements */}
//       <div
//         className='absolute inset-0'
//         style={{
//           background:
//             "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
//           opacity: 0.5,
//         }}></div>

//       <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-8'>
//         {/* Header with scroll animation */}
//         <div
//           className={`text-center mb-16 transition-all duration-1000 ease-out ${
//             isVisible
//               ? "opacity-100 translate-y-0 animate-in fade-in slide-in-from-bottom-8"
//               : "opacity-0 translate-y-10"
//           }`}>
//           <h2
//             className='text-4xl lg:text-5xl font-bold mb-6 transform transition-all duration-700 hover:scale-105'
//             style={{ color: "var(--color-cream)" }}>
//             Why Choose{" "}
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
//               Us
//             </span>
//           </h2>
//           <p
//             className='text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-500 ease-in-out'
//             style={{ color: "var(--color-navycream)" }}>
//             Leading the industry with innovative solutions, unmatched expertise,
//             and unwavering commitment to your success
//           </p>
//           <div
//             className='w-24 h-1 mx-auto mt-6 rounded-full transform transition-all duration-500 hover:w-32'
//             style={{
//               background:
//                 "linear-gradient(90deg, var(--color-secondary), var(--color-navycream))",
//             }}></div>
//         </div>

//         {/* Features Grid with scroll animations */}
//         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12'>
//           {features.map((feature, index) => {
//             const IconComponent = feature.icon;
//             const isCardVisible = visibleCards.includes(index);

//             return (
//               <div
//                 key={index}
//                 ref={(el) => (cardRefs.current[index] = el)}
//                 data-card-id={index}
//                 className={`group text-center rounded-3xl p-8 border transition-all duration-1000 transform hover:scale-105 hover:-translate-y-4 shadow-lg ${
//                   isCardVisible
//                     ? "opacity-100 translate-y-0 animate-in fade-in slide-in-from-bottom-8"
//                     : "opacity-0 translate-y-10"
//                 }`}
//                 style={{
//                   background: "var(--color-primary)",
//                   borderColor: "var(--color-navycream)",
//                   transitionDelay: isCardVisible ? `${index * 150}ms` : "0ms",
//                 }}>
//                 {/* Icon Container */}
//                 <div className='mb-8'>
//                   <div
//                     className='w-24 h-24 rounded-full flex items-center justify-center mx-auto transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6 shadow-lg'
//                     style={{
//                       background:
//                         "linear-gradient(135deg, var(--color-secondary), var(--color-navycream))",
//                       border: "4px solid var(--color-navycream)",
//                     }}>
//                     <IconComponent
//                       size={40}
//                       style={{
//                         color: "var(--color-cream)",
//                         transition: "color 0.5s",
//                       }}
//                     />
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className='space-y-4'>
//                   <h3
//                     className='text-2xl font-bold mb-4 transition-all duration-500 hover:scale-105 hover:translate-y-[-2px]'
//                     style={{ color: "var(--color-cream)" }}>
//                     {feature.title}
//                   </h3>
//                   <p
//                     className='transition-all duration-500 leading-relaxed'
//                     style={{ color: "var(--color-navycream)" }}>
//                     {feature.description}
//                   </p>
//                 </div>

//                 {/* Hover Accent */}
//                 <div className='mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0'>
//                   <div
//                     className='w-16 h-1 mx-auto rounded-full shadow-lg'
//                     style={{
//                       background:
//                         "linear-gradient(90deg, var(--color-secondary), var(--color-navycream))",
//                     }}></div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Bottom CTA Section with scroll animation */}
//         <div
//           ref={ctaRef}
//           className={`text-center mt-16 rounded-2xl p-8 border transition-all duration-1000 ${
//             ctaVisible
//               ? "opacity-100 translate-y-0 animate-in fade-in slide-in-from-bottom-8"
//               : "opacity-0 translate-y-10"
//           }`}
//           style={{
//             background: "rgba(255,255,255,0.05)",
//             backdropFilter: "blur(6px)",
//             borderColor: "var(--color-navycream)",
//             transitionDelay: ctaVisible ? "600ms" : "0ms",
//           }}>
//           <h3
//             className='text-2xl font-bold mb-4 transition-colors duration-500'
//             style={{ color: "var(--color-cream)" }}>
//             Ready to Experience the Difference?
//           </h3>
//           <p
//             className='mb-8 max-w-2xl mx-auto transition-colors duration-500'
//             style={{ color: "var(--color-navycream)" }}>
//             Join thousands of satisfied customers who trust us with their most
//             critical business needs
//           </p>
//           <div className='flex flex-col sm:flex-row items-center justify-center gap-6'>
//             <button
//               className='group relative px-10 py-5 rounded-xl font-semibold text-lg transition-transform duration-500 ease-in-out shadow-lg hover:scale-110 hover:-translate-y-2 active:scale-95 border backdrop-blur-sm'
//               style={{
//                 color: "var(--color-cream)",
//                 background:
//                   "linear-gradient(90deg, var(--color-secondary), var(--color-navycream))",
//                 borderColor: "var(--color-secondary)",
//               }}>
//               <span className='relative z-10 transition-opacity duration-300 ease-in-out group-hover:opacity-100'>
//                 Get Started Today
//               </span>
//               <div
//                 className='absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ease-in-out transform group-hover:scale-105'
//                 style={{
//                   background:
//                     "linear-gradient(90deg, var(--color-navycream), var(--color-secondary))",
//                 }}></div>
//             </button>
//             <button
//               className='group font-semibold text-lg transition-all duration-500 flex items-center gap-2 hover:scale-105'
//               style={{ color: "var(--color-secondary)" }}>
//               Learn More
//               <span className='transform group-hover:translate-x-1 transition-transform duration-300'>
//                 →
//               </span>
//             </button>
//           </div>

//           {/* Pulse Animation Line */}
//           <div
//             className='w-1 h-3 rounded-full mt-6 mx-auto animate-pulse transition-colors duration-300 ease-in-out'
//             style={{
//               backgroundColor: "var(--color-secondary)",
//               opacity: 0.7,
//             }}></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;
import { Shield, Zap, Users, Award } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const [ctaVisible, setCtaVisible] = useState(false);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const ctaRef = useRef(null);

  const features = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Bank-level encryption and security protocols to protect your data with advanced threat detection.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Real-time processing with 99.9% uptime guarantee and instant data synchronization.",
    },
    {
      icon: Users,
      title: "Expert Support",
      description:
        "24/7 dedicated support from analytics professionals with personalized assistance.",
    },
    {
      icon: Award,
      title: "Industry Leader",
      description:
        "Trusted by 10,000+ companies worldwide with proven track record of success.",
    },
  ];

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

  return (
    <section
      ref={sectionRef}
      className='py-20 overflow-hidden'
      style={{
        background: "var(--color-cream)",
        position: "relative",
      }}>
      {/* Background Elements */}
      <div
        className='absolute inset-0'
        style={{
          background:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          opacity: 0.5,
        }}></div>

      <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Header with scroll animation */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0 animate-in fade-in slide-in-from-bottom-8"
              : "opacity-0 translate-y-10"
          }`}>
          <h2
            className='text-4xl lg:text-5xl font-bold mb-6 transform transition-all duration-700 hover:scale-105'
            style={{ color: "var(--color-primary)" }}>
            Why Choose{" "}
            <span
              className='inline-block transition-all duration-700 ease-in-out hover:scale-110 hover:-translate-y-1'
              style={{
                background:
                  "linear-gradient(90deg, var(--color-secondary), var(--color-navycream))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}>
              Us
            </span>
          </h2>
          <p
            className='text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-500 ease-in-out'
            style={{ color: "var(--color-secondary)" }}>
            Leading the industry with innovative solutions, unmatched expertise,
            and unwavering commitment to your success
          </p>
          <div
            className='w-24 h-1 mx-auto mt-6 rounded-full transform transition-all duration-500 hover:w-32'
            style={{
              background:
                "linear-gradient(90deg, var(--color-secondary), var(--color-navycream))",
            }}></div>
        </div>

        {/* Features Grid with scroll animations */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12'>
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isCardVisible = visibleCards.includes(index);

            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                data-card-id={index}
                className={`group text-center rounded-3xl p-8 border transition-all duration-1000 transform hover:scale-105 hover:-translate-y-4 shadow-lg ${
                  isCardVisible
                    ? "opacity-100 translate-y-0 animate-in fade-in slide-in-from-bottom-8"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  background: "var(--color-navycream)",
                  borderColor: "var(--color-secondary)",
                  transitionDelay: isCardVisible ? `${index * 150}ms` : "0ms",
                }}>
                {/* Icon Container */}
                <div className='mb-8'>
                  <div
                    className='w-24 h-24 rounded-full flex items-center justify-center mx-auto transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6 shadow-lg'
                    style={{
                      background:
                        "linear-gradient(135deg, var(--color-secondary), var(--color-primary))",
                      border: "4px solid var(--color-navycream)",
                    }}>
                    <IconComponent
                      size={40}
                      style={{
                        color: "var(--color-cream)",
                        transition: "color 0.5s",
                      }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className='space-y-4'>
                  <h3
                    className='text-2xl font-bold mb-4 transition-all duration-500 hover:scale-105 hover:translate-y-[-2px]'
                    style={{ color: "var(--color-primary)" }}>
                    {feature.title}
                  </h3>
                  <p
                    className='transition-all duration-500 leading-relaxed'
                    style={{ color: "var(--color-secondary)" }}>
                    {feature.description}
                  </p>
                </div>

                {/* Hover Accent */}
                <div className='mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0'>
                  <div
                    className='w-16 h-1 mx-auto rounded-full shadow-lg'
                    style={{
                      background:
                        "linear-gradient(90deg, var(--color-secondary), var(--color-navycream))",
                    }}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section with scroll animation */}
        <div
          ref={ctaRef}
          className={`text-center mt-16 rounded-2xl p-8 border transition-all duration-1000 ${
            ctaVisible
              ? "opacity-100 translate-y-0 animate-in fade-in slide-in-from-bottom-8"
              : "opacity-0 translate-y-10"
          }`}
          style={{
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(6px)",
            borderColor: "var(--color-navycream)",
            transitionDelay: ctaVisible ? "600ms" : "0ms",
          }}>
          <h3
            className='text-2xl font-bold mb-4 transition-colors duration-500'
            style={{ color: "var(--color-primary)" }}>
            Ready to Experience the Difference?
          </h3>
          <p
            className='mb-8 max-w-2xl mx-auto transition-colors duration-500'
            style={{ color: "var(--color-secondary)" }}>
            Join thousands of satisfied customers who trust us with their most
            critical business needs
          </p>
          <div className='flex flex-col sm:flex-row items-center justify-center gap-6'>
            <button
              className='group relative px-10 py-5 rounded-xl font-semibold text-lg transition-transform duration-500 ease-in-out shadow-lg hover:scale-110 hover:-translate-y-2 active:scale-95 border backdrop-blur-sm'
              style={{
                color: "var(--color-cream)",
                background:
                  "linear-gradient(90deg, var(--color-secondary), var(--color-primary))",
                borderColor: "var(--color-secondary)",
              }}>
              <span className='relative z-10 transition-opacity duration-300 ease-in-out group-hover:opacity-100'>
                Get Started Today
              </span>
              <div
                className='absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ease-in-out transform group-hover:scale-105'
                style={{
                  background:
                    "linear-gradient(90deg, var(--color-navycream), var(--color-secondary))",
                }}></div>
            </button>
            <button
              className='group font-semibold text-lg transition-all duration-500 flex items-center gap-2 hover:scale-105'
              style={{ color: "var(--color-secondary)" }}>
              Learn More
              <span className='transform group-hover:translate-x-1 transition-transform duration-300'>
                →
              </span>
            </button>
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

export default WhyChooseUs;
