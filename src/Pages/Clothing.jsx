// import React, { useState, useEffect, useRef } from "react";
// import {
//   Shirt,
//   ShoppingBag,
//   Tags,
//   Phone,
//   Mail,
//   CheckCircle,
// } from "lucide-react";

// const Clothing = () => {
//   const [activeService, setActiveService] = useState(null);
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => setIsVisible(entry.isIntersecting),
//       { threshold: 0.3 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => {
//       if (sectionRef.current) observer.unobserve(sectionRef.current);
//     };
//   }, []);

//   const services = [
//     {
//       icon: <Shirt className='w-6 h-6' />,
//       title: "Custom Tailoring",
//       description: "Get perfectly fitted clothes designed just for you.",
//       features: ["Personalized Fit", "Fabric Selection", "Style Consultation"],
//     },
//     {
//       icon: <ShoppingBag className='w-6 h-6' />,
//       title: "Ready-Made Apparel",
//       description:
//         "Explore our collection of trendy and quality ready-to-wear clothing.",
//       features: ["Men & Women Wear", "Seasonal Collections", "Multiple Sizes"],
//     },
//     {
//       icon: <Tags className='w-6 h-6' />,
//       title: "Bulk Orders",
//       description:
//         "Order clothes in bulk for institutions, events, or resellers.",
//       features: ["Discount Pricing", "Custom Branding", "Timely Delivery"],
//     },
//   ];

//   const stats = [
//     { number: "10,000+", label: "Outfits Delivered" },
//     { number: "100+", label: "Fabrics Available" },
//     { number: "15+", label: "Years Experience" },
//     { number: "500+", label: "Bulk Orders Completed" },
//   ];

//   return (
//     <section
//       ref={sectionRef}
//       className='relative py-10'
//       style={{ background: "#f8fafc" }}>
//       <div
//         className='absolute inset-0'
//         style={{
//           background:
//             "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
//           opacity: 0.3,
//         }}></div>

//       <div className='relative z-10 max-w-7xl mx-auto px-2 lg:px-4'>
//         <div
//           className={`text-center transition-all duration-1000 ease-out ${
//             isVisible
//               ? "opacity-100 translate-y-0 animate-in fade-in slide-in-from-bottom-8"
//               : "opacity-0 translate-y-10"
//           }`}>
//           <h2
//             className='text-4xl lg:text-5xl font-bold mb-6'
//             style={{ color: "#1e293b" }}>
//             Clothing Services
//           </h2>
//           <p
//             className='text-xl max-w-2xl mx-auto leading-relaxed'
//             style={{ color: "#64748b" }}>
//             Discover high-quality, stylish, and affordable clothing solutions
//             for all occasions.
//           </p>
//         </div>

//         <div
//           className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 ease-out ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}>
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className='bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100'
//               onMouseEnter={() => setActiveService(index)}
//               onMouseLeave={() => setActiveService(null)}>
//               <div
//                 className='w-16 h-16 rounded-full flex items-center justify-center mb-6'
//                 style={{ backgroundColor: "var(--color-cream)" }}>
//                 <div style={{ color: "var(--color-secondary)" }}>
//                   {service.icon}
//                 </div>
//               </div>
//               <h3
//                 className='text-2xl font-bold mb-4'
//                 style={{ color: "#1e293b" }}>
//                 {service.title}
//               </h3>
//               <p className='leading-relaxed' style={{ color: "#64748b" }}>
//                 {service.description}
//               </p>
//               {activeService === index && (
//                 <ul className='space-y-2 border-t pt-4'>
//                   {service.features.map((feature, idx) => (
//                     <li
//                       key={idx}
//                       className='flex items-center text-sm'
//                       style={{ color: "#64748b" }}>
//                       <CheckCircle
//                         className='w-4 h-4 mr-2'
//                         style={{ color: "#1e293b" }}
//                       />
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           ))}
//         </div>

//         <div
//           className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 ease-out ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}>
//           {stats.map((stat, index) => (
//             <div key={index} className='text-center'>
//               <div
//                 className='text-3xl lg:text-4xl font-bold mb-2'
//                 style={{ color: "#1e293b" }}>
//                 {stat.number}
//               </div>
//               <div style={{ color: "#64748b" }}>{stat.label}</div>
//             </div>
//           ))}
//         </div>

//         <div
//           className={`mt-20 text-center transition-all duration-1000 ease-out ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}>
//           <h2 className='text-3xl font-bold mb-6' style={{ color: "#1e293b" }}>
//             Redefine Your Wardrobe Today
//           </h2>
//           <div className='flex flex-col sm:flex-row gap-4 justify-center'>
//             <button
//               className='px-8 py-4 rounded-xl font-semibold flex items-center justify-center transition-all duration-300 hover:shadow-lg'
//               style={{ backgroundColor: "#1e293b", color: "#f8fafc" }}>
//               <Phone className='mr-2 w-5 h-5' />
//               Contact Us
//             </button>
//             <button
//               className='px-8 py-4 rounded-xl font-semibold flex items-center justify-center border-2 transition-all duration-300 hover:shadow-lg'
//               style={{ borderColor: "#1e293b", color: "#1e293b" }}>
//               <Mail className='mr-2 w-5 h-5' />
//               Get Quote
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Clothing;

import Herocard from "../Components/Service/Herocard";
import React, { useState, useEffect, useRef } from "react";
import {
  Shirt,
  CheckCircle,
  Star,
  Shield,
  Globe,
  Award,
  Users,
  Clock,
} from "lucide-react";

const ClothingComponent = () => {
  const [activeFeature, setActiveFeature] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  const features = [
    {
      icon: <Award className='w-6 h-6' />,
      title: "Premium Fabrics",
      description:
        "High-quality materials sourced from the finest textile mills worldwide",
      details: ["Organic Cotton", "Silk Blends", "Sustainable Materials"],
    },
    {
      icon: <Shirt className='w-6 h-6' />,
      title: "Custom Tailoring",
      description:
        "Expert craftsmanship with precision fitting for perfect comfort",
      details: ["Perfect Fit", "Expert Tailors", "Made to Measure"],
    },
    {
      icon: <Users className='w-6 h-6' />,
      title: "Cultural Designs",
      description:
        "Authentic patterns and designs that celebrate cultural heritage",
      details: ["Traditional Patterns", "Modern Fusion", "Heritage Styles"],
    },
    {
      icon: <Star className='w-6 h-6' />,
      title: "Contemporary Styles",
      description:
        "Fashion-forward designs that blend tradition with modern aesthetics",
      details: ["Latest Trends", "Timeless Classics", "Versatile Pieces"],
    },
    {
      icon: <Shield className='w-6 h-6' />,
      title: "Quality Assurance",
      description:
        "Rigorous quality control ensuring lasting durability and comfort",
      details: [
        "Quality Control",
        "Durability Testing",
        "Satisfaction Guarantee",
      ],
    },
    {
      icon: <Globe className='w-6 h-6' />,
      title: "Global Shipping",
      description: "Worldwide delivery with secure packaging and tracking",
      details: ["Fast Delivery", "Secure Packaging", "Global Reach"],
    },
  ];

  const collections = [
    {
      name: "Heritage Collection",
      image:
        "https://images.unsplash.com/photo-1718435112323-c826511d5252?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhlcml0YWdlJTIwY2xvdGhpbmd8ZW58MHx8MHx8fDA%3D",
      price: "From $299",
      rating: 4.9,
      reviews: 245,
      category: "Traditional",
    },
    {
      name: "Modern Fusion",
      image:
        "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&auto=format&fit=crop&q=60",
      price: "From $199",
      rating: 4.8,
      reviews: 189,
      category: "Contemporary",
    },
    {
      name: "Premium Line",
      image:
        "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&auto=format&fit=crop&q=60",
      price: "From $399",
      rating: 4.9,
      reviews: 156,
      category: "Luxury",
    },
  ];

  const stats = [
    { number: "5,000+", label: "Happy Customers" },
    { number: "100+", label: "Unique Designs" },
    { number: "10+", label: "Years Excellence" },
    { number: "24/7", label: "Customer Support" },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "10+ Years of Excellence",
      description:
        "Established fashion house with proven expertise in cultural clothing",
    },
    {
      icon: Users,
      title: "Expert Design Team",
      description:
        "Professional designers with deep cultural knowledge and modern aesthetics",
    },
    {
      icon: Shield,
      title: "Trusted & Reliable",
      description:
        "Certified quality standards with comprehensive customer satisfaction guarantee",
    },
  ];

  return (
    <>
      <Herocard
        heading='Clothing'
        description='Explore our exclusive clothing line that blends cultural heritage with modern fashion. Each piece is crafted with care, using premium materials and traditional techniques to ensure quality and authenticity.'
        image='https://plus.unsplash.com/premium_photo-1671469876887-b2733ac9c785?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2xvdGhpbmclMjBjb2xsZWN0aW9ufGVufDB8fDB8fHww'
      />
      <section
        ref={sectionRef}
        className='relative py-10 overflow-hidden'
        style={{
          background: "#f8fafc",
          minHeight: "100vh",
        }}>
        {/* Background Pattern */}
        <div
          className='absolute inset-0'
          style={{
            background:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            opacity: 0.3,
          }}></div>

        <div className='relative z-10 max-w-7xl mx-auto px-2 lg:px-4'>
          {/* Hero Section */}
          {/* <div
            className={`text-center mb-16 transition-all duration-1000 ease-out transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}>
            <div className='inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-600 mb-6'>
              <Shirt className='w-10 h-10' />
            </div>
            <h1 className='text-4xl font-bold mb-6 text-slate-800'>Clothing</h1>
            <p className='text-xl text-slate-500 max-w-4xl mx-auto leading-relaxed'>
              Elevate your wardrobe with our distinctive fashion line that fuses
              cultural authenticity with contemporary design. Each piece is
              crafted with premium fabrics and fine tailoring to ensure lasting
              comfort and effortless elegance. Whether you're dressing for work,
              celebrations, or casual moments, we bring you style that speaks
              for itself.
            </p>
          </div> */}

          {/* Features Section */}
          <div
            className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 ease-out transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{
              transitionDelay: isVisible ? "0.2s" : "0s",
            }}>
            {features.map((feature, index) => (
              <div
                key={index}
                className='group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 transform hover:-translate-y-1'
                onMouseEnter={() => setActiveFeature(index)}
                onMouseLeave={() => setActiveFeature(null)}>
                <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600 group-hover:bg-green-200 transition-colors duration-300'>
                  {feature.icon}
                </div>
                <h3 className='text-2xl font-bold mb-4 text-slate-800'>
                  {feature.title}
                </h3>
                <p className='leading-relaxed mb-4 text-slate-500'>
                  {feature.description}
                </p>
                {activeFeature === index && (
                  <ul className='space-y-2 border-t pt-4'>
                    {feature.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className='flex items-center text-sm text-slate-500'>
                        <CheckCircle className='w-4 h-4 mr-2 text-green-600' />
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Collections Section */}
          <div
            className={`mt-20 transition-all duration-1000 ease-out transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{
              transitionDelay: isVisible ? "0.4s" : "0s",
            }}>
            <div className='text-center mb-16'>
              <h2 className='text-3xl font-bold mb-4 text-slate-800'>
                Featured Collections
              </h2>
              <p className='text-xl text-slate-500'>
                Discover our most popular clothing lines
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {collections.map((collection, index) => (
                <div
                  key={index}
                  className='group bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden border border-gray-100 hover:border-green-200 transition-all duration-300 transform hover:-translate-y-2'>
                  <div className='relative overflow-hidden'>
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className='h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                    <div className='absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium'>
                      {collection.category}
                    </div>
                  </div>
                  <div className='p-6'>
                    <h3 className='text-xl font-bold text-slate-800 mb-2'>
                      {collection.name}
                    </h3>
                    <p className='text-green-600 font-semibold mb-2 text-lg'>
                      {collection.price}
                    </p>
                    <div className='flex items-center mb-4 text-yellow-500'>
                      <Star className='w-4 h-4 fill-current' />
                      <span className='ml-1 text-sm text-slate-600'>
                        {collection.rating} ({collection.reviews} reviews)
                      </span>
                    </div>
                    <div className='flex gap-3 mt-4'>
                      <button className='flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300 text-sm hover:shadow-md'>
                        View Collection
                      </button>
                      <button className='flex-1 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300 text-sm hover:shadow-md'>
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div
            className={`mt-20 transition-all duration-1000 ease-out transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{
              transitionDelay: isVisible ? "0.6s" : "0s",
            }}>
            <div className='bg-white rounded-xl shadow-lg p-8 border border-gray-100'>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
                {stats.map((stat, index) => (
                  <div key={index} className='text-center'>
                    <div className='text-3xl font-bold text-green-600 mb-2'>
                      {stat.number}
                    </div>
                    <div className='text-slate-500 text-sm font-medium'>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div
            className={
              "mt-20 transition-all duration-1000 ease-out transform translate-y-0"
            }
            style={{
              transitionDelay: isVisible ? "0.8s" : "0s",
            }}>
            <div className='text-center mb-16'>
              <h2 className='text-3xl font-bold mb-4 text-slate-800'>
                Why Choose Our Clothing
              </h2>
              <p className='text-xl text-slate-500'>
                Your trusted partner for authentic fashion
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {whyChooseUs.map((reason, index) => {
                const IconComponent = reason.icon;
                return (
                  <div
                    key={index}
                    className='group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 transform hover:-translate-y-1'>
                    <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors duration-300'>
                      <IconComponent className='w-8 h-8 text-green-600' />
                    </div>
                    <h3 className='text-xl font-bold mb-4 text-slate-800'>
                      {reason.title}
                    </h3>
                    <p className='leading-relaxed text-slate-500'>
                      {reason.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div
            className={
              "mt-20 transition-all duration-1000 ease-out transform translate-y-0"
            }
            style={{
              transitionDelay: isVisible ? "1s" : "0s",
            }}>
            <div className='text-center'>
              <button className='bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-300 text-lg hover:shadow-lg inline-flex items-center'>
                Learn More
                <svg
                  className='ml-2 w-5 h-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClothingComponent;
