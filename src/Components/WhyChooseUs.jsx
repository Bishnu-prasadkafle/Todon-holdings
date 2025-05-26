// import { Shield, Zap, Users, Award } from "lucide-react";

// const WhyChooseUs = () => {
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

//   return (
//     <section className='py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100'>
//       <div className='max-w-7xl mx-auto'>
//         <div className='text-center mb-16'>
//           <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6 transform transition-all duration-500 hover:scale-105'>
//             Why Choose Us
//           </h2>
//           <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
//             Leading the industry with innovative solutions, unmatched expertise,
//             and unwavering commitment to your success
//           </p>
//         </div>

//         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12'>
//           {features.map((feature, index) => {
//             const IconComponent = feature.icon;
//             return (
//               <div
//                 key={index}
//                 className='group text-center transform transition-all duration-500 hover:scale-105 hover:-translate-y-3'>
//                 {/* Icon Container */}
//                 <div className='mb-8'>
//                   <div className='w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl group-hover:bg-blue-500 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6 border-4 border-blue-100 group-hover:border-blue-300'>
//                     <IconComponent
//                       size={40}
//                       className='text-blue-600 group-hover:text-white transition-all duration-500'
//                     />
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className='space-y-4'>
//                   <h3 className='text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-all duration-300'>
//                     {feature.title}
//                   </h3>
//                   <p className='text-gray-600 group-hover:text-gray-700 transition-all duration-300 leading-relaxed'>
//                     {feature.description}
//                   </p>
//                 </div>

//                 {/* Hover Accent */}
//                 <div className='mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0'>
//                   <div className='w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto'></div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Bottom CTA Section */}
//         <div className='text-center mt-16 bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20'>
//           <h3 className='text-2xl font-bold text-gray-900 mb-4'>
//             Ready to Experience the Difference?
//           </h3>
//           <p className='text-gray-600 mb-8 max-w-2xl mx-auto'>
//             Join thousands of satisfied customers who trust us with their most
//             critical business needs
//           </p>
//           <div className='flex flex-col sm:flex-row items-center justify-center gap-6'>
//             <button className='group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 hover:-translate-y-1 active:scale-95'>
//               <span className='relative z-10'>Get Started Today</span>
//               <div className='absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-20 transition-all duration-500'></div>
//             </button>
//             <button className='group text-blue-600 hover:text-blue-700 font-semibold text-lg transition-all duration-300 flex items-center gap-2'>
//               Learn More
//               <span className='transform group-hover:translate-x-1 transition-transform duration-300'>
//                 →
//               </span>
//             </button>
//           </div>
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
      className='py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] animate-pulse'></div>

      <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Header with scroll animation */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0 animate-in fade-in slide-in-from-bottom-8"
              : "opacity-0 translate-y-10"
          }`}>
          <h2 className='text-4xl lg:text-5xl font-bold text-white mb-6 transform transition-all duration-700 hover:scale-105'>
            Why Choose{" "}
            <span className='bg-gradient-to-r from-blue-700 to-emerald-500 bg-clip-text text-transparent hover:from-blue-500 hover:to-emerald-400 inline-block transition-all duration-700 ease-in-out hover:scale-110 hover:-translate-y-1'>
              Us
            </span>
          </h2>
          <p className='text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed transition-colors duration-500 ease-in-out hover:text-slate-100'>
            Leading the industry with innovative solutions, unmatched expertise,
            and unwavering commitment to your success
          </p>
          <div className='w-24 h-1 bg-gradient-to-r from-blue-700 to-emerald-500 mx-auto mt-6 rounded-full transform transition-all duration-500 hover:w-32 hover:shadow-lg hover:shadow-emerald-400/30'></div>
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
                className={`group text-center bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-emerald-400/30 transition-all duration-1000 transform hover:scale-105 hover:-translate-y-4 hover:shadow-xl hover:shadow-emerald-400/20 will-change-transform ${
                  isCardVisible
                    ? "opacity-100 translate-y-0 animate-in fade-in slide-in-from-bottom-8"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: isCardVisible ? `${index * 150}ms` : "0ms",
                }}>
                {/* Icon Container */}
                <div className='mb-8'>
                  <div className='w-24 h-24 bg-gradient-to-br from-slate-700 to-slate-600 rounded-full flex items-center justify-center mx-auto group-hover:bg-gradient-to-br group-hover:from-blue-700 group-hover:to-emerald-500 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6 border-4 border-white/20 group-hover:border-emerald-400/50 shadow-lg group-hover:shadow-emerald-400/25'>
                    <IconComponent
                      size={40}
                      className='text-slate-400 group-hover:text-white transition-all duration-500'
                    />
                  </div>
                </div>

                {/* Content */}
                <div className='space-y-4'>
                  <h3 className='text-2xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-all duration-500 hover:scale-105 hover:translate-y-[-2px]'>
                    {feature.title}
                  </h3>
                  <p className='text-slate-200 group-hover:text-slate-100 transition-all duration-500 leading-relaxed'>
                    {feature.description}
                  </p>
                </div>

                {/* Hover Accent */}
                <div className='mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0'>
                  <div className='w-16 h-1 bg-gradient-to-r from-blue-700 to-emerald-500 rounded-full mx-auto shadow-lg group-hover:shadow-emerald-400/30'></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section with scroll animation */}
        <div
          ref={ctaRef}
          className={`text-center mt-16 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-emerald-400/20 transition-all duration-1000 hover:bg-white/10 ${
            ctaVisible
              ? "opacity-100 translate-y-0 animate-in fade-in slide-in-from-bottom-8"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: ctaVisible ? "600ms" : "0ms" }}>
          <h3 className='text-2xl font-bold text-white mb-4 transition-colors duration-500 hover:text-emerald-300'>
            Ready to Experience the Difference?
          </h3>
          <p className='text-slate-200 mb-8 max-w-2xl mx-auto transition-colors duration-500 hover:text-slate-100'>
            Join thousands of satisfied customers who trust us with their most
            critical business needs
          </p>
          <div className='flex flex-col sm:flex-row items-center justify-center gap-6'>
            <button className='group relative bg-gradient-to-r from-blue-700 to-emerald-500 hover:from-blue-600 hover:to-emerald-400 text-white px-10 py-5 rounded-xl font-semibold text-lg transition-transform duration-500 ease-in-out shadow-lg hover:shadow-emerald-400/30 transform hover:scale-110 hover:-translate-y-2 active:scale-95 border border-blue-500/30 hover:border-emerald-400/50 backdrop-blur-sm'>
              <span className='relative z-10 transition-opacity duration-300 ease-in-out group-hover:opacity-100'>
                Get Started Today
              </span>
              <div className='absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ease-in-out transform group-hover:scale-105'></div>
            </button>
            <button className='group text-emerald-400 hover:text-emerald-300 font-semibold text-lg transition-all duration-500 flex items-center gap-2 hover:scale-105'>
              Learn More
              <span className='transform group-hover:translate-x-1 transition-transform duration-300'>
                →
              </span>
            </button>
          </div>

          {/* Pulse Animation Line */}
          <div className='w-1 h-3 bg-white/40 rounded-full mt-6 mx-auto animate-pulse hover:bg-emerald-400/70 transition-colors duration-300 ease-in-out'></div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
