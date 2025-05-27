// import React, { useState } from "react";
// import { Users } from "lucide-react";

// const LeadershipTeam = () => {
//   const [hoveredMember, setHoveredMember] = useState(null);

//   const leaders = [
//     {
//       name: "John Tondon",
//       role: "Founder & CEO",
//       bio: "Leading digital transformation initiatives with 12+ years of experience in web development and business strategy.",
//       image: "",
//       color:
//         "linear-gradient(135deg, var(--color-secondary), var(--color-navycream))",
//     },
//     {
//       name: "Sarah Mitchell",
//       role: "Chief Technology Officer",
//       bio: "Architecting scalable solutions with expertise in modern web technologies and system architecture.",
//       image: "",
//       color:
//         "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
//     },
//     {
//       name: "Michael Rodriguez",
//       role: "Head of Client Strategy",
//       bio: "Building lasting partnerships through strategic digital consulting and business development expertise.",
//       image: "",
//       color:
//         "linear-gradient(135deg, var(--color-navycream), var(--color-primary))",
//     },
//   ];

//   return (
//     <section
//       className='py-20 overflow-hidden'
//       style={{ background: "var(--color-cream)" }}>
//       <div className='max-w-7xl mx-auto px-6 lg:px-8'>
//         <div className='text-center mb-16'>
//           <h2
//             className='text-4xl lg:text-5xl font-bold mb-6'
//             style={{ color: "var(--color-primary)" }}>
//             Leadership{" "}
//             <span
//               className='inline-block'
//               style={{
//                 background:
//                   "linear-gradient(90deg, var(--color-secondary), var(--color-navycream))",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//                 color: "transparent",
//               }}>
//               Team
//             </span>
//           </h2>
//           <p
//             className='text-xl max-w-3xl mx-auto'
//             style={{ color: "var(--color-secondary)" }}>
//             Meet the visionaries driving our mission to transform businesses
//             through innovative digital solutions
//           </p>
//           <div
//             className='w-24 h-1 mx-auto mt-6 rounded-full'
//             style={{
//               background:
//                 "linear-gradient(90deg, var(--color-secondary), var(--color-navycream))",
//             }}></div>
//         </div>

//         <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
//           {leaders.map((leader, index) => (
//             <div
//               key={index}
//               className='group relative backdrop-blur-sm rounded-3xl p-8 border transition-all duration-500 transform hover:scale-105 hover:-translate-y-4'
//               style={{
//                 background: "rgba(255,255,255,0.10)",
//                 borderColor: "var(--color-navycream)",
//               }}
//               onMouseEnter={() => setHoveredMember(index)}
//               onMouseLeave={() => setHoveredMember(null)}>
//               <div className='text-center space-y-6'>
//                 <div className='relative mx-auto w-32 h-32'>
//                   <div
//                     className='absolute inset-0 rounded-full opacity-20 animate-pulse'
//                     style={{
//                       background: leader.color,
//                     }}></div>
//                   <div
//                     className='relative w-full h-full rounded-full overflow-hidden border-4 transition-all duration-500'
//                     style={{
//                       background: "var(--color-navycream)",
//                       borderColor: "var(--color-secondary)",
//                     }}>
//                     <Users
//                       className='w-16 h-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
//                       style={{ color: "var(--color-cream)" }}
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <h3
//                     className='text-2xl font-bold group-hover:scale-105 transition-all duration-300'
//                     style={{
//                       color: "var(--color-primary)",
//                     }}>
//                     {leader.name}
//                   </h3>
//                   <p
//                     className='font-semibold mt-2'
//                     style={{ color: "var(--color-secondary)" }}>
//                     {leader.role}
//                   </p>
//                 </div>

//                 <p
//                   className='leading-relaxed group-hover:opacity-90 transition-all duration-300'
//                   style={{ color: "var(--color-secondary)" }}>
//                   {leader.bio}
//                 </p>

//                 <div className='flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-4'>
//                   <div
//                     className='w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer'
//                     style={{
//                       background: "var(--color-navycream)",
//                     }}>
//                     <span
//                       style={{
//                         color: "var(--color-secondary)",
//                         fontWeight: "bold",
//                       }}>
//                       in
//                     </span>
//                   </div>
//                   <div
//                     className='w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer'
//                     style={{
//                       background: "var(--color-navycream)",
//                     }}>
//                     <span
//                       style={{
//                         color: "var(--color-secondary)",
//                         fontWeight: "bold",
//                       }}>
//                       @
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {hoveredMember === index && (
//                 <div
//                   className='absolute -top-2 -right-2 w-6 h-6 rounded-full animate-ping'
//                   style={{
//                     background:
//                       "linear-gradient(135deg, var(--color-secondary), var(--color-navycream))",
//                   }}></div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LeadershipTeam;
import React, { useState, useEffect, useRef } from "react";
import { Users, Linkedin, Mail, Star } from "lucide-react";

const LeadershipTeam = () => {
  const [hoveredMember, setHoveredMember] = useState(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const [ctaVisible, setCtaVisible] = useState(false);

  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const cardRefs = useRef([]);
  const ctaRef = useRef(null);

  const leaders = [
    {
      id: 1,
      name: "John Tondon",
      role: "Founder & CEO",
      bio: "Leading digital transformation initiatives with 12+ years of experience in web development and business strategy. Passionate about empowering businesses through innovative technology solutions.",
      image: "",
      expertise: [
        "Digital Strategy",
        "Business Development",
        "Team Leadership",
      ],
      experience: "12+ Years",
    },
    {
      id: 2,
      name: "Sarah Mitchell",
      role: "Chief Technology Officer",
      bio: "Architecting scalable solutions with expertise in modern web technologies and system architecture. Drives technical excellence and innovation across all projects.",
      image: "",
      expertise: [
        "System Architecture",
        "Web Technologies",
        "Technical Leadership",
      ],
      experience: "10+ Years",
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      role: "Head of Client Strategy",
      bio: "Building lasting partnerships through strategic digital consulting and business development expertise. Focuses on understanding client needs and delivering exceptional results.",
      image: "",
      expertise: [
        "Client Relations",
        "Strategic Consulting",
        "Business Growth",
      ],
      experience: "8+ Years",
    },
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

  const renderExpertiseStars = (expertise) => {
    return expertise.map((skill, index) => (
      <div key={index} className='flex items-center space-x-1 text-sm'>
        <Star
          size={12}
          style={{
            color: "var(--color-secondary)",
            fill: "var(--color-secondary)",
          }}
        />
        <span style={{ color: "var(--color-secondary)" }}>{skill}</span>
      </div>
    ));
  };

  return (
    <section
      className='py-20 overflow-hidden'
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
            Leadership{" "}
            <span
              className='inline-block transition-all duration-700 ease-in-out hover:scale-110 hover:-translate-y-1'
              style={{ color: "var(--color-secondary)" }}>
              Team
            </span>
          </h2>
          <p
            className='text-xl max-w-3xl mx-auto transition-colors duration-500 ease-in-out'
            style={{ color: "var(--color-secondary)" }}>
            Meet the visionaries driving our mission to transform businesses
            through innovative digital solutions
          </p>
          <div
            className='w-24 h-1 mx-auto mt-6 rounded-full transform transition-all duration-500 hover:w-32'
            style={{ backgroundColor: "var(--color-secondary)" }}></div>
        </div>

        {/* Leadership Cards */}
        <div
          ref={cardsRef}
          className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          {leaders.map((leader, index) => {
            const isCardVisible = visibleCards.includes(leader.id);

            return (
              <div
                key={leader.id}
                ref={(el) => (cardRefs.current[index] = el)}
                data-card-id={leader.id}
                className={`group rounded-2xl p-8 border transition-all duration-1000 transform hover:scale-105 hover:-translate-y-3 shadow-lg relative overflow-hidden ${
                  isCardVisible
                    ? "opacity-100 translate-y-0 animate-in fade-in slide-in-from-bottom-8"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  background: "var(--color-navycream)",
                  borderColor: "var(--color-secondary)",
                  transitionDelay: isCardVisible ? `${index * 200}ms` : "0ms",
                }}
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}>
                {/* Profile Image/Icon */}
                <div className='text-center mb-6'>
                  <div className='relative mx-auto w-24 h-24'>
                    <div
                      className='w-full h-full rounded-full flex items-center justify-center transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6 shadow-lg'
                      style={{
                        backgroundColor: "var(--color-secondary)",
                        border: "4px solid var(--color-navycream)",
                      }}>
                      <Users
                        size={32}
                        style={{
                          color: "var(--color-cream)",
                          transition: "color 0.5s",
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Name and Role */}
                <div className='text-center mb-4'>
                  <h3
                    className='text-2xl font-bold mb-2 group-hover:scale-105 transition-all duration-300'
                    style={{ color: "var(--color-primary)" }}>
                    {leader.name}
                  </h3>
                  <p
                    className='font-semibold text-lg transition-all duration-300'
                    style={{ color: "var(--color-secondary)" }}>
                    {leader.role}
                  </p>
                  <div
                    className='text-sm mt-1 font-medium'
                    style={{ color: "var(--color-secondary)" }}>
                    {leader.experience} Experience
                  </div>
                </div>

                {/* Bio */}
                <p
                  className='leading-relaxed mb-6 group-hover:opacity-90 transition-all duration-300 text-center'
                  style={{ color: "var(--color-secondary)" }}>
                  {leader.bio}
                </p>

                {/* Expertise */}
                <div className='mb-6'>
                  <h4
                    className='text-sm font-semibold mb-3 text-center'
                    style={{ color: "var(--color-primary)" }}>
                    Key Expertise
                  </h4>
                  <div className='space-y-2'>
                    {renderExpertiseStars(leader.expertise)}
                  </div>
                </div>

                {/* Social Links */}
                <div className='flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-4'>
                  <div
                    className='w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110'
                    style={{ backgroundColor: "var(--color-secondary)" }}>
                    <Linkedin
                      size={16}
                      style={{ color: "var(--color-cream)" }}
                    />
                  </div>
                  <div
                    className='w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110'
                    style={{ backgroundColor: "var(--color-secondary)" }}>
                    <Mail size={16} style={{ color: "var(--color-cream)" }} />
                  </div>
                </div>

                {/* Hover Indicator */}
                {hoveredMember === index && (
                  <div
                    className='absolute -top-2 -right-2 w-6 h-6 rounded-full animate-ping'
                    style={{ backgroundColor: "var(--color-secondary)" }}></div>
                )}

                {/* Hover accent */}
                <div
                  className='absolute bottom-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-all duration-500 origin-left shadow-lg'
                  style={{ backgroundColor: "var(--color-secondary)" }}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          ref={ctaRef}
          className={`text-center rounded-2xl p-12 border transition-all duration-1000 ${
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
            className='text-3xl font-bold mb-4 transition-colors duration-500'
            style={{ color: "var(--color-primary)" }}>
            Ready to Work with Our Team?
          </h3>
          <p
            className='mb-8 max-w-2xl mx-auto text-lg transition-colors duration-500'
            style={{ color: "var(--color-secondary)" }}>
            Let our experienced leadership guide your digital transformation
            journey
          </p>
          <button
            className='group relative px-10 py-5 rounded-xl font-semibold text-lg transition-transform duration-500 ease-in-out shadow-lg hover:scale-110 hover:-translate-y-2 active:scale-95 border backdrop-blur-sm'
            style={{
              color: "var(--color-cream)",
              backgroundColor: "var(--color-secondary)",
              borderColor: "var(--color-secondary)",
            }}>
            <span className='relative z-10 transition-opacity duration-300 ease-in-out group-hover:opacity-100'>
              Get Started Today
            </span>
            <span className='ml-2 transform group-hover:translate-x-1 transition-transform duration-300'>
              →
            </span>
            <div
              className='absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ease-in-out transform group-hover:scale-105'
              style={{ backgroundColor: "var(--color-primary)" }}></div>
          </button>

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

export default LeadershipTeam;
