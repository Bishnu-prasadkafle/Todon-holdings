// import { Star, Quote, TrendingUp, Users, Building, Award } from "lucide-react";
// import { useEffect, useRef, useState } from "react";

// const TestimonialsStats = () => {
//   const [statsVisible, setStatsVisible] = useState(false);
//   const [testimonialsVisible, setTestimonialsVisible] = useState(false);
//   const [visibleStatCards, setVisibleStatCards] = useState([]);
//   const [visibleTestimonialCards, setVisibleTestimonialCards] = useState([]);
//   const [ctaVisible, setCtaVisible] = useState(false);

//   const statsRef = useRef(null);
//   const testimonialsRef = useRef(null);
//   const statCardRefs = useRef([]);
//   const testimonialCardRefs = useRef([]);
//   const ctaRef = useRef(null);

//   const testimonials = [
//     {
//       id: 1,
//       name: "Kshitiz Dawadi",
//       position: "CEO",
//       company: "Sree Ram IT Solutions",
//       image: "",
//       content:
//         "Tondon Holdings transformed our business operations completely. Their innovative solutions increased our efficiency by 300% and helped us scale globally.",
//       rating: 5,
//     },
//     {
//       id: 2,
//       name: "Asbin Thapa",
//       position: "CTO",
//       company: "DataFlow Inc",
//       image: "",
//       content:
//         "The level of expertise and support provided by Tondon Holdings is unmatched. They delivered results beyond our expectations and continue to be our trusted partner.",
//       rating: 5,
//     },
//     {
//       id: 3,
//       name: "Emily Rodriguez",
//       position: "Operations Director",
//       company: "Global Ventures",
//       image: "",
//       content:
//         "Working with Tondon Holdings was a game-changer. Their strategic approach and cutting-edge technology helped us achieve our goals faster than we imagined.",
//       rating: 5,
//     },
//   ];

//   const stats = [
//     {
//       icon: Users,
//       number: "10,000+",
//       label: "Happy Clients",
//       description: "Businesses worldwide trust our solutions",
//     },
//     {
//       icon: TrendingUp,
//       number: "300%",
//       label: "Average Growth",
//       description: "Increase in client business efficiency",
//     },
//     {
//       icon: Building,
//       number: "50+",
//       label: "Countries",
//       description: "Global presence and partnerships",
//     },
//     {
//       icon: Award,
//       number: "99.9%",
//       label: "Success Rate",
//       description: "Project completion and satisfaction",
//     },
//   ];

//   // Intersection observers for scroll animations
//   useEffect(() => {
//     const statsObserver = new IntersectionObserver(
//       ([entry]) => setStatsVisible(entry.isIntersecting),
//       { threshold: 0.3 }
//     );
//     if (statsRef.current) {
//       statsObserver.observe(statsRef.current);
//     }
//     return () => {
//       if (statsRef.current) statsObserver.unobserve(statsRef.current);
//     };
//   }, []);

//   useEffect(() => {
//     const testimonialsObserver = new IntersectionObserver(
//       ([entry]) => setTestimonialsVisible(entry.isIntersecting),
//       { threshold: 0.3 }
//     );
//     if (testimonialsRef.current) {
//       testimonialsObserver.observe(testimonialsRef.current);
//     }
//     return () => {
//       if (testimonialsRef.current)
//         testimonialsObserver.unobserve(testimonialsRef.current);
//     };
//   }, []);

//   useEffect(() => {
//     const statCardObserver = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const cardId = parseInt(entry.target.dataset.cardId);
//             setVisibleStatCards((prev) => [...new Set([...prev, cardId])]);
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     statCardRefs.current.forEach((ref) => {
//       if (ref) statCardObserver.observe(ref);
//     });

//     return () => {
//       statCardRefs.current.forEach((ref) => {
//         if (ref) statCardObserver.unobserve(ref);
//       });
//     };
//   }, []);

//   useEffect(() => {
//     const testimonialCardObserver = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const cardId = parseInt(entry.target.dataset.cardId);
//             setVisibleTestimonialCards((prev) => [
//               ...new Set([...prev, cardId]),
//             ]);
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     testimonialCardRefs.current.forEach((ref) => {
//       if (ref) testimonialCardObserver.observe(ref);
//     });

//     return () => {
//       testimonialCardRefs.current.forEach((ref) => {
//         if (ref) testimonialCardObserver.unobserve(ref);
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

//   const renderStars = (rating) => {
//     return Array.from({ length: 5 }, (_, index) => (
//       <Star
//         key={index}
//         size={20}
//         className={`transition-all duration-300 ${
//           index < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
//         }`}
//       />
//     ));
//   };

//   return (
//     <section className='relative py-10' style={{ background: "#f8fafc" }}>
//       {/* Background Elements */}
//       <div
//         className='absolute inset-0'
//         style={{
//           background:
//             "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
//           opacity: 0.3,
//         }}></div>

//       <div className='relative z-10 max-w-7xl mx-auto px-2 lg:px-4'>
//         {/* Stats Section */}
//         <div className='mb-20'>
//           <div
//             ref={statsRef}
//             className={`text-center transition-all duration-1000 ease-out ${
//               statsVisible
//                 ? "opacity-100 translate-y-0 animate-in fade-in slide-in-from-bottom-8"
//                 : "opacity-0 translate-y-10"
//             }`}>
//             <h2
//               className='text-4xl lg:text-5xl font-bold mb-6'
//               style={{ color: "#1e293b" }}>
//               Our Impact in Numbers
//             </h2>
//             <p
//               className='text-xl max-w-2xl mx-auto leading-relaxed'
//               style={{ color: "#64748b" }}>
//               Proven results that speak for themselves
//             </p>
//           </div>

//           <div
//             className={`mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 ease-out ${
//               statsVisible
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-10"
//             }`}>
//             {stats.map((stat, index) => {
//               const IconComponent = stat.icon;
//               const isCardVisible = visibleStatCards.includes(index);

//               return (
//                 <div
//                   key={index}
//                   ref={(el) => (statCardRefs.current[index] = el)}
//                   data-card-id={index}
//                   className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-1000 transform hover:scale-105 hover:-translate-y-3 border border-gray-100 ${
//                     isCardVisible
//                       ? "opacity-100 translate-y-0 animate-in fade-in slide-in-from-bottom-8"
//                       : "opacity-0 translate-y-10"
//                   }`}
//                   style={{
//                     transitionDelay: isCardVisible ? `${index * 150}ms` : "0ms",
//                   }}>
//                   <div className='mb-4'>
//                     <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto transition-all duration-500 transform hover:scale-110 hover:rotate-6'>
//                       <IconComponent size={28} className='text-blue-600' />
//                     </div>
//                   </div>
//                   <div
//                     className='text-4xl font-bold mb-2 hover:scale-105 hover:translate-y-[-2px] transition-all duration-500'
//                     style={{ color: "#1e293b" }}>
//                     {stat.number}
//                   </div>
//                   <div
//                     className='text-xl font-semibold mb-2 transition-all duration-300'
//                     style={{ color: "#1e293b" }}>
//                     {stat.label}
//                   </div>
//                   <div
//                     className='leading-relaxed transition-all duration-300'
//                     style={{ color: "#64748b" }}>
//                     {stat.description}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Testimonials Section */}
//         <div>
//           <div
//             ref={testimonialsRef}
//             className={`text-center transition-all duration-1000 ease-out ${
//               testimonialsVisible
//                 ? "opacity-100 translate-y-0 animate-in fade-in slide-in-from-bottom-8"
//                 : "opacity-0 translate-y-10"
//             }`}>
//             <h2
//               className='text-4xl lg:text-5xl font-bold mb-6'
//               style={{ color: "#1e293b" }}>
//               What Our Clients Say
//             </h2>
//             <p
//               className='text-xl max-w-2xl mx-auto leading-relaxed'
//               style={{ color: "#64748b" }}>
//               Don't just take our word for it - hear from our satisfied clients
//             </p>
//           </div>

//           <div
//             className={`mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ease-out ${
//               testimonialsVisible
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-10"
//             }`}>
//             {testimonials.map((testimonial, index) => {
//               const isCardVisible = visibleTestimonialCards.includes(
//                 testimonial.id
//               );

//               return (
//                 <div
//                   key={testimonial.id}
//                   ref={(el) => (testimonialCardRefs.current[index] = el)}
//                   data-card-id={testimonial.id}
//                   className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-1000 transform hover:scale-105 hover:-translate-y-3 border border-gray-100 relative overflow-hidden ${
//                     isCardVisible
//                       ? "opacity-100 translate-y-0 animate-in fade-in slide-in-from-bottom-8"
//                       : "opacity-0 translate-y-10"
//                   }`}
//                   style={{
//                     transitionDelay: isCardVisible ? `${index * 200}ms` : "0ms",
//                   }}>
//                   {/* Quote Icon */}
//                   <div className='absolute top-4 right-4 opacity-10 hover:opacity-20 transition-all duration-500'>
//                     <Quote size={40} className='text-blue-600' />
//                   </div>

//                   {/* Rating */}
//                   <div className='flex items-center mb-4'>
//                     {renderStars(testimonial.rating)}
//                   </div>

//                   {/* Content */}
//                   <p
//                     className='mb-6 leading-relaxed hover:opacity-90 transition-all duration-500 italic'
//                     style={{ color: "#64748b" }}>
//                     "{testimonial.content}"
//                   </p>

//                   {/* Client Info */}
//                   <div className='flex items-center'>
//                     <img
//                       src={testimonial.image}
//                       alt={testimonial.name}
//                       className='w-12 h-12 rounded-full object-cover mr-4 hover:scale-110 transition-all duration-500 border-2 border-gray-100'
//                       style={{
//                         boxShadow: "0 2px 8px 0 #23294614",
//                       }}
//                     />
//                     <div>
//                       <div
//                         className='font-semibold transition-all duration-500'
//                         style={{ color: "#1e293b" }}>
//                         {testimonial.name}
//                       </div>
//                       <div
//                         className='text-sm transition-all duration-300'
//                         style={{ color: "#64748b" }}>
//                         {testimonial.position}, {testimonial.company}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Hover accent */}
//                   <div className='absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform scale-x-0 hover:scale-x-100 transition-all duration-500 origin-left opacity-20'></div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsStats;
import {
  Star,
  Quote,
  TrendingUp,
  Users,
  Building,
  Award,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const TestimonialsStats = () => {
  const [statsVisible, setStatsVisible] = useState(false);
  const [testimonialsVisible, setTestimonialsVisible] = useState(false);
  const [visibleStatCards, setVisibleStatCards] = useState([]);
  const [visibleTestimonialCards, setVisibleTestimonialCards] = useState([]);
  const [ctaVisible, setCtaVisible] = useState(false);

  const statsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const statCardRefs = useRef([]);
  const testimonialCardRefs = useRef([]);
  const ctaRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Kshitiz Dawadi",
      position: "CEO",
      company: "Sree Ram IT Solutions",
      image: "",
      content:
        "Tondon Holdings transformed our business operations completely. Their innovative solutions increased our efficiency by 300% and helped us scale globally.",
      rating: 5,
    },
    {
      id: 2,
      name: "Asbin Thapa",
      position: "CTO",
      company: "DataFlow Inc",
      image: "",
      content:
        "The level of expertise and support provided by Tondon Holdings is unmatched. They delivered results beyond our expectations and continue to be our trusted partner.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Operations Director",
      company: "Global Ventures",
      image: "",
      content:
        "Working with Tondon Holdings was a game-changer. Their strategic approach and cutting-edge technology helped us achieve our goals faster than we imagined.",
      rating: 5,
    },
  ];

  const stats = [
    {
      icon: Users,
      number: "10,000+",
      label: "Happy Clients",
      description: "Businesses worldwide trust our solutions",
      iconColor: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: TrendingUp,
      number: "300%",
      label: "Average Growth",
      description: "Increase in client business efficiency",
      iconColor: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: Building,
      number: "50+",
      label: "Countries",
      description: "Global presence and partnerships",
      iconColor: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      icon: Award,
      number: "99.9%",
      label: "Success Rate",
      description: "Project completion and satisfaction",
      iconColor: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ];

  // Intersection observers for scroll animations
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

  useEffect(() => {
    const testimonialsObserver = new IntersectionObserver(
      ([entry]) => setTestimonialsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (testimonialsRef.current) {
      testimonialsObserver.observe(testimonialsRef.current);
    }
    return () => {
      if (testimonialsRef.current)
        testimonialsObserver.unobserve(testimonialsRef.current);
    };
  }, []);

  useEffect(() => {
    const statCardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = parseInt(entry.target.dataset.cardId);
            setVisibleStatCards((prev) => [...new Set([...prev, cardId])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    statCardRefs.current.forEach((ref) => {
      if (ref) statCardObserver.observe(ref);
    });

    return () => {
      statCardRefs.current.forEach((ref) => {
        if (ref) statCardObserver.unobserve(ref);
      });
    };
  }, []);

  useEffect(() => {
    const testimonialCardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = parseInt(entry.target.dataset.cardId);
            setVisibleTestimonialCards((prev) => [
              ...new Set([...prev, cardId]),
            ]);
          }
        });
      },
      { threshold: 0.2 }
    );

    testimonialCardRefs.current.forEach((ref) => {
      if (ref) testimonialCardObserver.observe(ref);
    });

    return () => {
      testimonialCardRefs.current.forEach((ref) => {
        if (ref) testimonialCardObserver.unobserve(ref);
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

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={20}
        className={`transition-all duration-300 ${
          index < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className='relative py-10' style={{ background: "#f8fafc" }}>
      {/* Background Elements */}
      <div
        className='absolute inset-0'
        style={{
          background:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          opacity: 0.3,
        }}></div>

      <div className='relative z-10 max-w-7xl mx-auto px-2 lg:px-4'>
        {/* Stats Section */}
        <div className='mb-20'>
          <div
            ref={statsRef}
            className={`text-center transition-all duration-1000 ease-out ${
              statsVisible
                ? "opacity-100 translate-y-0 animate-in fade-in slide-in-from-bottom-8"
                : "opacity-0 translate-y-10"
            }`}>
            <h2
              className='text-4xl lg:text-5xl font-bold mb-6'
              style={{ color: "#1e293b" }}>
              Our Impact in Numbers
            </h2>
            <p
              className='text-xl max-w-2xl mx-auto leading-relaxed'
              style={{ color: "#64748b" }}>
              Proven results that speak for themselves
            </p>
          </div>

          <div
            className={`mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 ease-out ${
              statsVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              const isCardVisible = visibleStatCards.includes(index);

              return (
                <div
                  key={index}
                  ref={(el) => (statCardRefs.current[index] = el)}
                  data-card-id={index}
                  className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-1000 transform hover:scale-105 hover:-translate-y-3 border border-gray-100 ${
                    isCardVisible
                      ? "opacity-100 translate-y-0 animate-in fade-in slide-in-from-bottom-8"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{
                    transitionDelay: isCardVisible ? `${index * 150}ms` : "0ms",
                  }}>
                  <div className='mb-4'>
                    <div
                      className={`w-16 h-16 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto transition-all duration-500 transform hover:scale-110 hover:rotate-6`}>
                      <IconComponent size={28} className={stat.iconColor} />
                    </div>
                  </div>
                  <div
                    className='text-4xl font-bold mb-2 hover:scale-105 hover:translate-y-[-2px] transition-all duration-500'
                    style={{ color: "#1e293b" }}>
                    {stat.number}
                  </div>
                  <div
                    className='text-xl font-semibold mb-2 transition-all duration-300'
                    style={{ color: "#1e293b" }}>
                    {stat.label}
                  </div>
                  <div
                    className='leading-relaxed transition-all duration-300'
                    style={{ color: "#64748b" }}>
                    {stat.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className='mb-20'>
          <div
            ref={testimonialsRef}
            className={`text-center transition-all duration-1000 ease-out ${
              testimonialsVisible
                ? "opacity-100 translate-y-0 animate-in fade-in slide-in-from-bottom-8"
                : "opacity-0 translate-y-10"
            }`}>
            <h2
              className='text-4xl lg:text-5xl font-bold mb-6'
              style={{ color: "#1e293b" }}>
              What Our Clients Say
            </h2>
            <p
              className='text-xl max-w-2xl mx-auto leading-relaxed'
              style={{ color: "#64748b" }}>
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div
            className={`mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ease-out ${
              testimonialsVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            {testimonials.map((testimonial, index) => {
              const isCardVisible = visibleTestimonialCards.includes(
                testimonial.id
              );

              return (
                <div
                  key={testimonial.id}
                  ref={(el) => (testimonialCardRefs.current[index] = el)}
                  data-card-id={testimonial.id}
                  className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-1000 transform hover:scale-105 hover:-translate-y-3 border border-gray-100 relative overflow-hidden ${
                    isCardVisible
                      ? "opacity-100 translate-y-0 animate-in fade-in slide-in-from-bottom-8"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{
                    transitionDelay: isCardVisible ? `${index * 200}ms` : "0ms",
                  }}>
                  {/* Quote Icon */}
                  <div className='absolute top-4 right-4 opacity-10 hover:opacity-20 transition-all duration-500'>
                    <Quote size={40} className='text-blue-600' />
                  </div>

                  {/* Rating */}
                  <div className='flex items-center mb-4'>
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Content */}
                  <p
                    className='mb-6 leading-relaxed hover:opacity-90 transition-all duration-500 italic'
                    style={{ color: "#64748b" }}>
                    "{testimonial.content}"
                  </p>

                  {/* Client Info */}
                  <div className='flex items-center'>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className='w-12 h-12 rounded-full object-cover mr-4 hover:scale-110 transition-all duration-500 border-2 border-gray-100'
                      style={{
                        boxShadow: "0 2px 8px 0 #23294614",
                      }}
                    />
                    <div>
                      <div
                        className='font-semibold transition-all duration-500'
                        style={{ color: "#1e293b" }}>
                        {testimonial.name}
                      </div>
                      <div
                        className='text-sm transition-all duration-300'
                        style={{ color: "#64748b" }}>
                        {testimonial.position}, {testimonial.company}
                      </div>
                    </div>
                  </div>

                  {/* Hover accent */}
                  <div className='absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform scale-x-0 hover:scale-x-100 transition-all duration-500 origin-left opacity-20'></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div
          ref={ctaRef}
          className={`text-center transition-all duration-1000 ease-out ${
            ctaVisible
              ? "opacity-100 translate-y-0 animate-in fade-in slide-in-from-bottom-8"
              : "opacity-0 translate-y-10"
          }`}>
          <div className='bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02] relative overflow-hidden'>
            {/* Background decoration */}
            <div className='absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-700/20 backdrop-blur-sm'></div>
            <div className='absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16'></div>
            <div className='absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12'></div>

            <div className='relative z-10'>
              <h2 className='text-4xl lg:text-5xl font-bold mb-6 text-white'>
                Ready to Transform Your Business?
              </h2>
              <p className='text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed mb-8'>
                Join thousands of satisfied clients who have experienced
                exceptional growth with Tondon Holdings. Let's discuss how we
                can help you achieve your goals.
              </p>

              <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-8'>
                <button className='bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2 group'>
                  Get Started Today
                  <ArrowRight
                    size={20}
                    className='group-hover:translate-x-1 transition-transform duration-300'
                  />
                </button>
                <button className='border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105'>
                  Schedule a Consultation
                </button>
              </div>

              <div className='flex flex-col sm:flex-row gap-6 justify-center items-center text-blue-100'>
                <div className='flex items-center gap-2 hover:text-white transition-colors duration-300'>
                  <div className='w-10 h-10 bg-white/20 rounded-full flex items-center justify-center'>
                    <Phone size={18} />
                  </div>
                  <span>97-980328559</span>
                </div>
                <div className='flex items-center gap-2 hover:text-white transition-colors duration-300'>
                  <div className='w-10 h-10 bg-white/20 rounded-full flex items-center justify-center'>
                    <Mail size={18} />
                  </div>
                  <span>contact@tondonholdings.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsStats;
