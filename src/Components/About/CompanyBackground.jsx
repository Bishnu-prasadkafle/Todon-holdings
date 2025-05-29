import React, { useEffect, useRef, useState } from "react";
import { Target, Users, Award, TrendingUp } from "lucide-react";

const STORY_CARDS = [
  {
    id: 1,
    title: "Our Origin",
    content:
      "Founded in 2018, Tondon Holdings was born from a bold vision to revolutionize how businesses embrace digital transformation across diverse sectors—including tourism, education, clothing, and technology. Initially launched by a small, passionate team of innovators, the company has since grown into a full-fledged, multidisciplinary solutions provider. With a strong commitment to innovation, Tondon Holdings leverages emerging technologies, data-driven strategies, and industry insights to help businesses modernize their operations, elevate customer engagement, and stay ahead in an ever-evolving digital landscape. From developing smart digital platforms for tourism experiences to crafting e-learning ecosystems, fashion-tech solutions, and advanced tech infrastructure, Tondon Holdings empowers organizations to unlock new possibilities and drive sustainable growth in the digital era.",
    icon: Target,
    image:
      "https://images.unsplash.com/photo-1675434303097-210c75b61d3f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fG9mZmljZXMlMjBvcmlnaW58ZW58MHwxfDB8fHww",
    reversed: false,
    color: "bg-blue-50",
  },
  {
    id: 2,
    title: "Our Vision",
    content:
      "Our vision is to be the foremost catalyst for business evolution in the digital age, driving transformative change by making innovative, technology-driven solutions accessible to every business—whether in clothing, education, tourism, or other industries—regardless of their size or stage of growth. We strive to empower organizations across these diverse sectors to fully embrace digital transformation, leveraging the latest advancements in technology to streamline operations, enhance customer experiences, and unlock new revenue streams. By providing tailored, industry-specific solutions that bridge the gap between complex digital tools and everyday business needs, we aim to democratize innovation and enable sustainable, long-term growth for businesses worldwide. Our commitment is to foster a future where every business, from startups to established enterprises in technology, clothing, education, and tourism, can confidently navigate and lead in the evolving digital landscape.",
    icon: TrendingUp,
    image:
      "https://plus.unsplash.com/premium_photo-1661757403301-ae68e1f1b827?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fG9mZmljZXN8ZW58MHwxfDB8fHww",
    reversed: true,
    color: "bg-emerald-50",
  },
  {
    id: 3,
    title: "Our Mission",
    content:
      "At the core of our mission is empowering businesses with transformative solutions that seamlessly bridge the gap between traditional and digital business models. We understand that the transition to digital can be complex, so we provide tailored strategies and innovative technologies that help organizations adapt, evolve, and thrive in today’s fast-paced digital environment. By crafting powerful digital presences—whether through engaging websites, intuitive platforms, or integrated systems—we enable businesses to enhance their brand visibility, improve customer engagement, and unlock new opportunities for sustainable growth. Our approach is rooted in combining creativity with cutting-edge technology to deliver solutions that not only meet current market demands but also future-proof businesses for ongoing succes",
    icon: Award,
    image:
      "https://plus.unsplash.com/premium_photo-1723579445566-cb2e884ae329?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1pc3Npb258ZW58MHx8MHx8fDA%3D",
    reversed: false,
    color: "bg-purple-50",
  },
];

const STATS_DATA = [
  { number: "150+", label: "Projects Delivered" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "50+", label: "Active Partners" },
  { number: "6", label: "Years Excellence" },
];

const Header = ({ headerRef, headerVisible }) => (
  <div
    ref={headerRef}
    className={`text-center mb-24 transition-all duration-1000 ${
      headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}>
    <h2 className='text-4xl lg:text-5xl font-bold mb-8 text-gray-800'>
      <span className='text-gray-800'>WHAT WE </span>
      <span className='text-gray-800 inline-block hover:scale-110 hover:-translate-y-1 transition-all duration-500'>
        EXIT
      </span>
    </h2>
    <p className='text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed text-gray-600'>
      Transforming businesses through innovation and dedication since 2018
    </p>
    <div className='w-32 h-1 mx-auto mt-8 rounded-full bg-gray-600 hover:w-40 transition-all duration-500' />
  </div>
);

const StoryCard = ({ card, isVisible, index, cardRef }) => {
  const IconComponent = card.icon;

  return (
    <div
      ref={cardRef}
      data-card-id={card.id}
      className={`transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: isVisible ? `${index * 200}ms` : "0ms" }}>
      <div
        className={`grid lg:grid-cols-2 gap-16 items-center ${
          card.reversed ? "lg:grid-flow-col-dense" : ""
        }`}>
        {/* Image Section */}
        <div
          className={`${card.reversed ? "lg:col-start-2" : ""} relative group`}>
          <div className='overflow-hidden rounded-3xl shadow-lg transition-all duration-500 group-hover:shadow-2xl'>
            <img
              src={card.image}
              alt={card.title}
              className='w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
          </div>
          <div
            className={`absolute -top-8 -right-8 w-20 h-20 ${card.color} rounded-3xl shadow-lg flex items-center justify-center transform rotate-3 group-hover:rotate-12 transition-all duration-500`}>
            <IconComponent size={32} className='text-gray-600' />
          </div>
        </div>

        {/* Content Section */}
        <div
          className={`${
            card.reversed ? "lg:col-start-1" : ""
          } p-10 rounded-3xl transition-all duration-500 hover:bg-white/80 backdrop-blur-sm group`}>
          <h3 className='text-3xl font-bold mb-4 text-gray-800 group-hover:translate-x-2 transition-transform duration-300'>
            {card.title}
          </h3>
          <p className='text-base leading-relaxed text-gray-600'>
            {card.content}
          </p>
        </div>
      </div>
    </div>
  );
};

const Stats = ({ statsRef, statsVisible }) => (
  <div
    ref={statsRef}
    className={`mt-32 rounded-3xl p-16 bg-white/80 backdrop-blur-sm transition-all duration-1000 ${
      statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}>
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-12'>
      {STATS_DATA.map((stat, index) => (
        <div
          key={index}
          className='text-center group hover:scale-105 transition-all duration-500'>
          <div className='text-4xl lg:text-5xl font-bold mb-4 text-gray-800'>
            {stat.number}
          </div>
          <div className='text-base font-medium text-gray-600'>
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const CompanyBackground = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const [statsVisible, setStatsVisible] = useState(false);

  const headerRef = useRef(null);
  const cardRefs = useRef([]);
  const statsRef = useRef(null);

  useEffect(() => {
    const observers = [
      { ref: headerRef, setter: setHeaderVisible },
      { ref: statsRef, setter: setStatsVisible },
    ].map(({ ref, setter }) => {
      const observer = new IntersectionObserver(
        ([entry]) => setter(entry.isIntersecting),
        { threshold: 0.3 }
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
      className='relative py-24 overflow-hidden'
      style={{
        background: "#f8fafc",
      }}>
      {/* Dotted subtle background */}
      <div
        className='absolute inset-0'
        style={{
          background:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          opacity: 0.3,
        }}
      />

      <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-8'>
        <Header headerRef={headerRef} headerVisible={headerVisible} />

        <div className='space-y-32'>
          {STORY_CARDS.map((card, index) => (
            <StoryCard
              key={card.id}
              card={card}
              isVisible={visibleCards.includes(card.id)}
              index={index}
              cardRef={(el) => (cardRefs.current[index] = el)}
            />
          ))}
        </div>

        <Stats statsRef={statsRef} statsVisible={statsVisible} />
      </div>
    </section>
  );
};

export default CompanyBackground;
