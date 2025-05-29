import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);

  const faqs = [
    {
      id: 1,
      question: "What tourism services does Tondon Holdings offer?",
      answer:
        "We provide comprehensive tourism solutions including destination planning, travel packages, accommodation arrangements, guided tours, and cultural experiences. Our team specializes in creating customized itineraries for both domestic and international travelers, ensuring memorable and hassle-free journeys.",
    },
    {
      id: 2,
      question: "How does your technology consulting help businesses?",
      answer:
        "Our technology consultancy offers digital transformation services, web development, software solutions, system integration, and IT strategy consulting. We help businesses modernize their operations, improve efficiency, and stay competitive through innovative technology implementations tailored to their specific needs.",
    },
    {
      id: 3,
      question: "What types of clothing and fashion services do you provide?",
      answer:
        "We offer end-to-end clothing solutions including fashion design, garment manufacturing, quality control, branding, and retail distribution. Our services cover everything from concept development to final product delivery, catering to both individual clients and wholesale businesses.",
    },
    {
      id: 4,
      question: "What education consultancy services are available?",
      answer:
        "Our education consultancy provides academic guidance, career counseling, study abroad assistance, institutional partnerships, curriculum development, and educational technology integration. We help students, institutions, and organizations achieve their educational goals through expert advice and strategic planning.",
    },
    {
      id: 5,
      question: "How long does it typically take to complete a project?",
      answer:
        "Project timelines vary depending on scope and complexity. Tourism packages can be arranged within 1-2 weeks, technology projects typically take 2-6 months, clothing orders range from 3-8 weeks, and education consultancy programs are customized based on specific requirements and can span from weeks to months.",
    },
    {
      id: 6,
      question: "Do you provide international services?",
      answer:
        "Yes, we operate globally with international partnerships and local expertise. Our tourism services cover worldwide destinations, technology solutions are deployed internationally, clothing products are exported globally, and our education consultancy includes study abroad programs and international academic partnerships.",
    },
    {
      id: 7,
      question: "What makes Tondon Holdings different from competitors?",
      answer:
        "Our unique strength lies in our diverse expertise across multiple industries, allowing us to provide integrated solutions. We combine years of experience, innovative approaches, quality assurance, 24/7 support, and competitive pricing to deliver exceptional value to our clients across all service sectors.",
    },
    {
      id: 8,
      question: "How can I get started with Tondon Holdings services?",
      answer:
        "Getting started is simple! Contact us through our website, phone, or email to discuss your requirements. We offer free initial consultations to understand your needs, provide detailed proposals, and create customized solutions. Our team will guide you through every step of the process from consultation to project completion.",
    },
  ];

  // Split FAQs into two columns
  const leftColumnFAQs = faqs.slice(0, 4);
  const rightColumnFAQs = faqs.slice(4, 8);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    const itemObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemId = parseInt(entry.target.dataset.itemId);
            setVisibleItems((prev) => [...new Set([...prev, itemId])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) itemObserver.observe(ref);
    });

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) itemObserver.unobserve(ref);
      });
    };
  }, []);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const FAQItem = ({ faq, index }) => {
    const isOpen = openFAQ === faq.id;
    const isItemVisible = visibleItems.includes(faq.id);

    return (
      <div
        ref={(el) => (itemRefs.current[index] = el)}
        data-item-id={faq.id}
        className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-700 border border-gray-100 overflow-hidden ${
          isItemVisible
            ? "opacity-100 translate-y-0 animate-in fade-in slide-in-from-bottom-8"
            : "opacity-0 translate-y-10"
        }`}
        style={{
          transitionDelay: isItemVisible ? `${(index % 4) * 150}ms` : "0ms",
        }}>
        <button
          onClick={() => toggleFAQ(faq.id)}
          className='w-full p-6 text-left transition-all duration-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset'
          aria-expanded={isOpen}>
          <div className='flex items-center justify-between'>
            <div className='flex items-start space-x-4'>
              <div className='w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                <HelpCircle className='w-5 h-5 text-blue-600' />
              </div>
              <h3
                className='text-lg font-semibold pr-4 leading-relaxed'
                style={{ color: "#1e293b" }}>
                {faq.question}
              </h3>
            </div>
            <div className='flex-shrink-0 ml-4'>
              {isOpen ? (
                <ChevronUp className='w-6 h-6 text-blue-600 transition-transform duration-300' />
              ) : (
                <ChevronDown className='w-6 h-6 text-gray-400 transition-transform duration-300' />
              )}
            </div>
          </div>
        </button>

        <div
          className={`transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}>
          <div className='px-6 pb-6'>
            <div className='pl-14'>
              <p
                className='leading-relaxed text-base'
                style={{ color: "#64748b" }}>
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      className='relative py-20'
      style={{
        background: "#f8fafc",
      }}>
      {/* Subtle background dots */}
      <div
        className='absolute inset-0'
        style={{
          background:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          opacity: 0.3,
        }}></div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 lg:px-8'>
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0 animate-in fade-in slide-in-from-bottom-8"
              : "opacity-0 translate-y-10"
          }`}>
          <h2
            className='text-4xl lg:text-5xl font-bold mb-6'
            style={{ color: "#1e293b" }}>
            Frequently Asked Questions
          </h2>
          <p
            className='text-xl max-w-3xl mx-auto leading-relaxed'
            style={{ color: "#64748b" }}>
            Find answers to common questions about our tourism, technology,
            clothing, and education consultancy services. Get the information
            you need to make informed decisions.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className='grid lg:grid-cols-2 gap-8'>
          {/* Left Column */}
          <div className='space-y-6'>
            {leftColumnFAQs.map((faq, index) => (
              <FAQItem key={faq.id} faq={faq} index={index} />
            ))}
          </div>

          {/* Right Column */}
          <div className='space-y-6'>
            {rightColumnFAQs.map((faq, index) => (
              <FAQItem key={faq.id} faq={faq} index={index + 4} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 bg-white rounded-xl p-8 shadow-lg border border-gray-100 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{
            transitionDelay: isVisible ? "800ms" : "0ms",
          }}>
          <h3 className='text-2xl font-bold mb-4' style={{ color: "#1e293b" }}>
            Still Have Questions?
          </h3>
          <p
            className='mb-6 max-w-2xl mx-auto leading-relaxed'
            style={{ color: "#64748b" }}>
            Our expert team is here to help you with any additional questions
            about our services. Contact us for personalized assistance.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              to='/contact'
              className='px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500'>
              Contact Support
            </Link>
            {/* <button className='px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold transition-all duration-300 hover:bg-blue-50 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500'>
              Schedule Consultation
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
