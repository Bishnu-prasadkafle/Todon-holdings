// import React from "react";
// import {
//   Users,
//   Cpu,
//   ShieldCheck,
//   Cloud,
//   CheckCircle,
//   ArrowRight,
//   Phone,
//   Mail,
//   Clock,
//   Star,
//   Monitor,
//   Server,
//   Database,
// } from "lucide-react";

// const ITServicesPage = () => {
//   const features = [
//     {
//       icon: Cpu,
//       title: "Custom Software Development",
//       description:
//         "Tailored software solutions that solve real business problems and streamline operations.",
//     },
//     {
//       icon: ShieldCheck,
//       title: "Cybersecurity Solutions",
//       description:
//         "Protect your digital assets with advanced threat detection and security frameworks.",
//     },
//     {
//       icon: Cloud,
//       title: "Cloud Infrastructure",
//       description:
//         "Scalable and reliable cloud environments optimized for performance and cost-efficiency.",
//     },
//   ];

//   const services = [
//     "Web & Mobile App Development",
//     "Cloud Migration & Management",
//     "IT Support & Helpdesk Services",
//     "Cybersecurity Audits",
//     "Network Infrastructure Setup",
//     "Data Backup & Recovery",
//     "DevOps & CI/CD Automation",
//     "Technology Consulting",
//   ];

//   const stats = [
//     { number: "300+", label: "Projects Delivered" },
//     { number: "99.9%", label: "System Uptime" },
//     { number: "10+", label: "Years in Business" },
//     { number: "100K+", label: "Users Supported" },
//   ];

//   return (
//     <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100'>
//       {/* Hero Section */}
//       <div className='relative overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-800 to-cyan-700'>
//         {/* Animated background elements */}
//         <div className='absolute inset-0 opacity-20'>
//           <div className='absolute top-20 left-20 w-32 h-32 bg-cyan-400 rounded-full blur-3xl animate-pulse'></div>
//           <div className='absolute bottom-20 right-20 w-40 h-40 bg-blue-400 rounded-full blur-3xl animate-bounce'></div>
//           <div className='absolute top-1/2 left-1/2 w-24 h-24 bg-indigo-400 rounded-full blur-2xl animate-ping'></div>
//         </div>

//         <div className='relative max-w-7xl mx-auto px-4 py-24'>
//           <div className='text-center'>
//             <div className='flex justify-center mb-8'>
//               <div className='relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20'>
//                 <Monitor className='w-16 h-16 text-cyan-300' />
//                 <div className='absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse'></div>
//               </div>
//             </div>
//             <h1 className='text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent'>
//               Professional IT Services
//             </h1>
//             <p className='text-xl md:text-2xl mb-10 text-cyan-100 max-w-4xl mx-auto leading-relaxed'>
//               Empowering businesses through secure, scalable, and innovative IT
//               solutions tailored to your unique needs.
//             </p>
//             <div className='flex flex-col sm:flex-row gap-6 justify-center'>
//               <button className='group bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-10 py-5 rounded-2xl font-bold hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 flex items-center gap-3 justify-center shadow-2xl transform hover:scale-105'>
//                 Request Free Assessment
//                 <ArrowRight className='w-6 h-6 group-hover:translate-x-1 transition-transform duration-300' />
//               </button>
//               <button className='border-2 border-cyan-300 text-cyan-100 px-10 py-5 rounded-2xl font-bold hover:bg-cyan-300/20 transition-all duration-300 backdrop-blur-sm shadow-xl'>
//                 View Our Work
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className='relative bg-white shadow-2xl -mt-10 mx-4 rounded-3xl overflow-hidden'>
//         <div className='absolute inset-0 bg-gradient-to-r from-blue-600/5 via-indigo-600/5 to-cyan-600/5'></div>
//         <div className='relative max-w-7xl mx-auto px-8 py-20'>
//           <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
//             {stats.map((stat, index) => (
//               <div key={index} className='text-center group'>
//                 <div className='text-4xl md:text-5xl font-black text-transparent bg-gradient-to-b from-blue-600 to-indigo-700 bg-clip-text mb-3 group-hover:scale-110 transition-transform duration-300'>
//                   {stat.number}
//                 </div>
//                 <div className='text-gray-600 font-semibold text-lg'>
//                   {stat.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className='py-24 relative'>
//         <div className='max-w-7xl mx-auto px-4'>
//           <div className='text-center mb-20'>
//             <h2 className='text-4xl md:text-5xl font-black text-gray-800 mb-6'>
//               Why Partner With Us?
//             </h2>
//             <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
//               We deliver secure, scalable, and future-ready IT solutions that
//               drive business innovation and efficiency.
//             </p>
//           </div>

//           <div className='grid md:grid-cols-3 gap-10'>
//             {features.map((feature, index) => {
//               const IconComponent = feature.icon;
//               return (
//                 <div
//                   key={index}
//                   className='group bg-white rounded-3xl p-10 text-center hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-2 relative overflow-hidden'>
//                   <div className='absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
//                   <div className='relative z-10'>
//                     <div className='bg-gradient-to-br from-blue-100 via-indigo-100 to-cyan-100 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300'>
//                       <IconComponent className='w-10 h-10 text-blue-600' />
//                     </div>
//                     <h3 className='text-2xl font-bold text-gray-900 mb-6'>
//                       {feature.title}
//                     </h3>
//                     <p className='text-gray-600 leading-relaxed text-lg'>
//                       {feature.description}
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {/* Services List Section */}
//       <div className='py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden'>
//         <div className='absolute inset-0 opacity-10'>
//           <Server className='absolute top-20 left-10 w-16 h-16 text-blue-600 animate-pulse' />
//           <Database className='absolute bottom-20 right-10 w-20 h-20 text-indigo-600 animate-bounce' />
//           <Cloud className='absolute top-1/2 left-1/4 w-12 h-12 text-cyan-600 animate-ping' />
//         </div>

//         <div className='relative max-w-7xl mx-auto px-4'>
//           <div className='grid lg:grid-cols-2 gap-16 items-center'>
//             <div>
//               <h2 className='text-4xl md:text-5xl font-black text-gray-800 mb-8'>
//                 Comprehensive IT Services
//               </h2>
//               <p className='text-xl text-gray-600 mb-10 leading-relaxed'>
//                 From infrastructure to innovation, we support your entire IT
//                 lifecycle with expert care and precision.
//               </p>
//               <div className='grid sm:grid-cols-2 gap-6'>
//                 {services.map((service, index) => (
//                   <div
//                     key={index}
//                     className='flex items-center gap-4 bg-white/70 backdrop-blur-sm rounded-xl p-4 hover:bg-white transition-all duration-300'>
//                     <CheckCircle className='w-6 h-6 text-green-500 flex-shrink-0' />
//                     <span className='text-gray-700 font-medium'>{service}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className='relative'>
//               <div className='absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-lg opacity-20'></div>
//               <div className='relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-3xl p-10 text-white shadow-2xl'>
//                 <h3 className='text-3xl font-bold mb-8'>
//                   Let's Solve Your Tech Challenges
//                 </h3>
//                 <p className='text-blue-100 mb-8 text-lg leading-relaxed'>
//                   Schedule a free IT assessment with our specialists and
//                   discover how we can help modernize and secure your business.
//                 </p>
//                 <div className='space-y-6 mb-10'>
//                   <div className='flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4'>
//                     <Clock className='w-6 h-6 text-cyan-300' />
//                     <span className='text-blue-100 font-medium'>
//                       Free 30-minute assessment
//                     </span>
//                   </div>
//                   <div className='flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4'>
//                     <Phone className='w-6 h-6 text-cyan-300' />
//                     <span className='text-blue-100 font-medium'>
//                       +977 -980000000
//                     </span>
//                   </div>
//                   <div className='flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4'>
//                     <Mail className='w-6 h-6 text-cyan-300' />
//                     <span className='text-blue-100 font-medium'>
//                       tondonholdings@gmail.com
//                     </span>
//                   </div>
//                 </div>
//                 <button className='w-full bg-white text-blue-600 py-4 px-8 rounded-2xl font-bold hover:bg-blue-50 transition-all duration-300 shadow-xl transform hover:scale-105'>
//                   Schedule Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Testimonials Section */}
//       <div className='py-24 bg-white'>
//         <div className='max-w-7xl mx-auto px-4'>
//           <div className='text-center mb-20'>
//             <h2 className='text-4xl md:text-5xl font-black text-gray-800 mb-6'>
//               Client Testimonials
//             </h2>
//             <p className='text-xl text-gray-600'>
//               Trusted by companies worldwide for reliable IT services.
//             </p>
//           </div>

//           <div className='grid md:grid-cols-2 gap-10'>
//             <div className='group bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1'>
//               <div className='flex items-center gap-2 mb-6'>
//                 {[1, 2, 3, 4, 5].map((star) => (
//                   <Star
//                     key={star}
//                     className='w-6 h-6 fill-yellow-400 text-yellow-400'
//                   />
//                 ))}
//               </div>
//               <p className='text-gray-700 mb-8 italic text-lg leading-relaxed'>
//                 "Thanks to Tondon Holdings' IT team, we've significantly
//                 improved uptime and security across all departments."
//               </p>
//               <div className='flex items-center gap-4'>
//                 <div className='w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold'>
//                   AS
//                 </div>
//                 <div>
//                   <div className='font-bold text-gray-900 text-lg'>
//                     Amit Sharma
//                   </div>
//                   <div className='text-gray-600'>
//                     CTO, Everest Tech Solutions
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className='group bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1'>
//               <div className='flex items-center gap-2 mb-6'>
//                 {[1, 2, 3, 4, 5].map((star) => (
//                   <Star
//                     key={star}
//                     className='w-6 h-6 fill-yellow-400 text-yellow-400'
//                   />
//                 ))}
//               </div>
//               <p className='text-gray-700 mb-8 italic text-lg leading-relaxed'>
//                 "Their cloud and DevOps support helped us scale rapidly while
//                 reducing infrastructure costs by 30%."
//               </p>
//               <div className='flex items-center gap-4'>
//                 <div className='w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold'>
//                   LD
//                 </div>
//                 <div>
//                   <div className='font-bold text-gray-900 text-lg'>
//                     Laxmi Devkota
//                   </div>
//                   <div className='text-gray-600'>Product Manager, FinApp</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className='relative bg-gradient-to-br from-indigo-900 via-blue-800 to-cyan-700 text-white py-24 overflow-hidden'>
//         {/* Animated background */}
//         <div className='absolute inset-0 opacity-20'>
//           <div className='absolute top-10 left-10 w-32 h-32 bg-cyan-400 rounded-full blur-3xl animate-pulse'></div>
//           <div className='absolute bottom-10 right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl animate-bounce'></div>
//         </div>

//         <div className='relative max-w-5xl mx-auto px-4 text-center'>
//           <h2 className='text-4xl md:text-6xl font-black mb-8 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent'>
//             Let's Build the Future of Your Business
//           </h2>
//           <p className='text-xl text-cyan-100 mb-12 leading-relaxed max-w-3xl mx-auto'>
//             Contact us for a free consultation and discover how we can support
//             your digital transformation journey.
//           </p>
//           <div className='flex flex-col sm:flex-row gap-6 justify-center'>
//             <button className='group bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-12 py-6 rounded-2xl font-bold hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 shadow-2xl transform hover:scale-105'>
//               Get Started
//             </button>
//             <button className='border-2 border-cyan-300 text-cyan-100 px-12 py-6 rounded-2xl font-bold hover:bg-cyan-300/20 transition-all duration-300 backdrop-blur-sm shadow-xl'>
//               Explore Solutions
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ITServicesPage;

import React from "react";
import {
  Users,
  Cpu,
  ShieldCheck,
  Cloud,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Clock,
  Star,
  Monitor,
  Server,
  Database,
} from "lucide-react";

const ITServicesPage = () => {
  const features = [
    {
      icon: Cpu,
      title: "Custom Software Development",
      description:
        "Tailored software solutions that solve real business problems and streamline operations.",
      approach:
        "We follow an agile development methodology, starting with thorough requirement analysis, creating prototypes, and iterating based on your feedback to deliver robust, scalable solutions.",
      benefits: [
        "Increased operational efficiency by 40-60%",
        "Reduced manual processes and human errors",
        "Scalable architecture for future growth",
        "Integration with existing systems",
      ],
      caseStudy: {
        client: "Himalayan Bank",
        challenge: "Manual loan processing taking 7-10 days",
        solution:
          "Automated loan management system with AI-powered risk assessment",
        result:
          "Reduced processing time to 2-3 days, 50% increase in loan approvals",
      },
    },
    {
      icon: ShieldCheck,
      title: "Cybersecurity Solutions",
      description:
        "Protect your digital assets with advanced threat detection and security frameworks.",
      approach:
        "We implement a multi-layered security approach including vulnerability assessments, penetration testing, real-time monitoring, and employee training programs.",
      benefits: [
        "99.9% threat detection and prevention",
        "Compliance with international security standards",
        "24/7 security monitoring and incident response",
        "Regular security audits and updates",
      ],
      caseStudy: {
        client: "TechCorp Nepal",
        challenge: "Multiple security breaches affecting customer data",
        solution:
          "Comprehensive security overhaul with advanced firewall and monitoring systems",
        result:
          "Zero security incidents in 18 months, achieved ISO 27001 certification",
      },
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description:
        "Scalable and reliable cloud environments optimized for performance and cost-efficiency.",
      approach:
        "We assess your current infrastructure, design cloud architecture, migrate data securely, and provide ongoing optimization to ensure maximum performance and cost-effectiveness.",
      benefits: [
        "30-50% reduction in infrastructure costs",
        "99.99% uptime guarantee",
        "Auto-scaling based on demand",
        "Enhanced disaster recovery capabilities",
      ],
      caseStudy: {
        client: "Everest Logistics",
        challenge: "Outdated on-premise servers causing frequent downtime",
        solution: "Migration to AWS cloud with auto-scaling and load balancing",
        result: "Achieved 99.98% uptime, reduced IT costs by 40%",
      },
    },
  ];

  const services = [
    "Web & Mobile App Development",
    "Cloud Migration & Management",
    "IT Support & Helpdesk Services",
    "Cybersecurity Audits",
    "Network Infrastructure Setup",
    "Data Backup & Recovery",
    "DevOps & CI/CD Automation",
    "Technology Consulting",
  ];

  const stats = [
    { number: "300+", label: "Projects Delivered" },
    { number: "99.9%", label: "System Uptime" },
    { number: "10+", label: "Years in Business" },
    { number: "100K+", label: "Users Supported" },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100'>
      {/* Hero Section */}
      <div className='relative overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-800 to-cyan-700'>
        {/* Animated background elements */}
        <div className='absolute inset-0 opacity-20'>
          <div className='absolute top-20 left-20 w-32 h-32 bg-cyan-400 rounded-full blur-3xl animate-pulse'></div>
          <div className='absolute bottom-20 right-20 w-40 h-40 bg-blue-400 rounded-full blur-3xl animate-bounce'></div>
          <div className='absolute top-1/2 left-1/2 w-24 h-24 bg-indigo-400 rounded-full blur-2xl animate-ping'></div>
        </div>

        <div className='relative max-w-7xl mx-auto px-4 py-24'>
          <div className='text-center'>
            <div className='flex justify-center mb-8'>
              <div className='relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20'>
                <Monitor className='w-16 h-16 text-cyan-300' />
                <div className='absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse'></div>
              </div>
            </div>
            <h1 className='text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent'>
              Professional IT Services
            </h1>
            <p className='text-xl md:text-2xl mb-10 text-cyan-100 max-w-4xl mx-auto leading-relaxed'>
              Empowering businesses through secure, scalable, and innovative IT
              solutions tailored to your unique needs.
            </p>
            <div className='flex flex-col sm:flex-row gap-6 justify-center'>
              <button className='group bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-10 py-5 rounded-2xl font-bold hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 flex items-center gap-3 justify-center shadow-2xl transform hover:scale-105'>
                Request Free Assessment
                <ArrowRight className='w-6 h-6 group-hover:translate-x-1 transition-transform duration-300' />
              </button>
              <button className='border-2 border-cyan-300 text-cyan-100 px-10 py-5 rounded-2xl font-bold hover:bg-cyan-300/20 transition-all duration-300 backdrop-blur-sm shadow-xl'>
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className='relative bg-white shadow-2xl -mt-10 mx-4 rounded-3xl overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-r from-blue-600/5 via-indigo-600/5 to-cyan-600/5'></div>
        <div className='relative max-w-7xl mx-auto px-8 py-20'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            {stats.map((stat, index) => (
              <div key={index} className='text-center group'>
                <div className='text-4xl md:text-5xl font-black text-transparent bg-gradient-to-b from-blue-600 to-indigo-700 bg-clip-text mb-3 group-hover:scale-110 transition-transform duration-300'>
                  {stat.number}
                </div>
                <div className='text-gray-600 font-semibold text-lg'>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Services Section */}
      <div className='py-24 relative'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='text-center mb-20'>
            <h2 className='text-4xl md:text-5xl font-black text-gray-800 mb-6'>
              Our Core Services
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
              Comprehensive IT solutions designed to transform your business
              operations and drive sustainable growth.
            </p>
          </div>

          <div className='space-y-24'>
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className='group bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1'>
                  {/* Service Header */}
                  <div className='bg-gradient-to-r from-blue-50 to-indigo-50 p-10 border-b border-gray-100'>
                    <div className='flex items-center gap-6 mb-6'>
                      <div className='bg-gradient-to-br from-blue-100 via-indigo-100 to-cyan-100 rounded-2xl w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                        <IconComponent className='w-8 h-8 text-blue-600' />
                      </div>
                      <div>
                        <h3 className='text-3xl font-bold text-gray-900 mb-2'>
                          {feature.title}
                        </h3>
                        <p className='text-xl text-gray-600'>
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='p-10'>
                    <div className='grid lg:grid-cols-2 gap-12'>
                      {/* How It Works & Benefits */}
                      <div className='space-y-8'>
                        {/* How It Works */}
                        <div>
                          <h4 className='text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3'>
                            <div className='w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center'>
                              <span className='text-white font-bold text-sm'>
                                1
                              </span>
                            </div>
                            Our Approach
                          </h4>
                          <p className='text-gray-700 leading-relaxed text-lg'>
                            {feature.approach}
                          </p>
                        </div>

                        {/* Benefits */}
                        <div>
                          <h4 className='text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3'>
                            <div className='w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center'>
                              <CheckCircle className='w-5 h-5 text-white' />
                            </div>
                            Key Benefits
                          </h4>
                          <div className='grid gap-4'>
                            {feature.benefits.map((benefit, benefitIndex) => (
                              <div
                                key={benefitIndex}
                                className='flex items-start gap-4 bg-green-50 rounded-xl p-4'>
                                <CheckCircle className='w-6 h-6 text-green-500 flex-shrink-0 mt-0.5' />
                                <span className='text-gray-700 font-medium'>
                                  {benefit}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Case Study */}
                      <div className='bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-100'>
                        <h4 className='text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3'>
                          <div className='w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center'>
                            <Star className='w-5 h-5 text-white' />
                          </div>
                          Success Story
                        </h4>

                        <div className='space-y-6'>
                          <div className='bg-white rounded-xl p-6 border border-gray-100'>
                            <div className='text-lg font-bold text-gray-900 mb-2'>
                              Client:
                            </div>
                            <div className='text-gray-700 text-lg'>
                              {feature.caseStudy.client}
                            </div>
                          </div>

                          <div className='bg-white rounded-xl p-6 border border-gray-100'>
                            <div className='text-lg font-bold text-gray-900 mb-2'>
                              Challenge:
                            </div>
                            <div className='text-gray-700'>
                              {feature.caseStudy.challenge}
                            </div>
                          </div>

                          <div className='bg-white rounded-xl p-6 border border-gray-100'>
                            <div className='text-lg font-bold text-gray-900 mb-2'>
                              Solution:
                            </div>
                            <div className='text-gray-700'>
                              {feature.caseStudy.solution}
                            </div>
                          </div>

                          <div className='bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-6 border border-green-200'>
                            <div className='text-lg font-bold text-green-800 mb-2'>
                              Result:
                            </div>
                            <div className='text-green-700 font-medium'>
                              {feature.caseStudy.result}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Services List Section */}
      <div className='py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden'>
        <div className='absolute inset-0 opacity-10'>
          <Server className='absolute top-20 left-10 w-16 h-16 text-blue-600 animate-pulse' />
          <Database className='absolute bottom-20 right-10 w-20 h-20 text-indigo-600 animate-bounce' />
          <Cloud className='absolute top-1/2 left-1/4 w-12 h-12 text-cyan-600 animate-ping' />
        </div>

        <div className='relative max-w-7xl mx-auto px-4'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            <div>
              <h2 className='text-4xl md:text-5xl font-black text-gray-800 mb-8'>
                Comprehensive IT Services
              </h2>
              <p className='text-xl text-gray-600 mb-10 leading-relaxed'>
                From infrastructure to innovation, we support your entire IT
                lifecycle with expert care and precision.
              </p>
              <div className='grid sm:grid-cols-2 gap-6'>
                {services.map((service, index) => (
                  <div
                    key={index}
                    className='flex items-center gap-4 bg-white/70 backdrop-blur-sm rounded-xl p-4 hover:bg-white transition-all duration-300'>
                    <CheckCircle className='w-6 h-6 text-green-500 flex-shrink-0' />
                    <span className='text-gray-700 font-medium'>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className='relative'>
              <div className='absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-lg opacity-20'></div>
              <div className='relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-3xl p-10 text-white shadow-2xl'>
                <h3 className='text-3xl font-bold mb-8'>
                  Let's Solve Your Tech Challenges
                </h3>
                <p className='text-blue-100 mb-8 text-lg leading-relaxed'>
                  Schedule a free IT assessment with our specialists and
                  discover how we can help modernize and secure your business.
                </p>
                <div className='space-y-6 mb-10'>
                  <div className='flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4'>
                    <Clock className='w-6 h-6 text-cyan-300' />
                    <span className='text-blue-100 font-medium'>
                      Free 30-minute assessment
                    </span>
                  </div>
                  <div className='flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4'>
                    <Phone className='w-6 h-6 text-cyan-300' />
                    <span className='text-blue-100 font-medium'>
                      +977 -980000000
                    </span>
                  </div>
                  <div className='flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4'>
                    <Mail className='w-6 h-6 text-cyan-300' />
                    <span className='text-blue-100 font-medium'>
                      tondonholdings@gmail.com
                    </span>
                  </div>
                </div>
                <button className='w-full bg-white text-blue-600 py-4 px-8 rounded-2xl font-bold hover:bg-blue-50 transition-all duration-300 shadow-xl transform hover:scale-105'>
                  Schedule Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className='py-24 bg-white'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='text-center mb-20'>
            <h2 className='text-4xl md:text-5xl font-black text-gray-800 mb-6'>
              Client Testimonials
            </h2>
            <p className='text-xl text-gray-600'>
              Trusted by companies worldwide for reliable IT services.
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-10'>
            <div className='group bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1'>
              <div className='flex items-center gap-2 mb-6'>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className='w-6 h-6 fill-yellow-400 text-yellow-400'
                  />
                ))}
              </div>
              <p className='text-gray-700 mb-8 italic text-lg leading-relaxed'>
                "Thanks to Tondon Holdings' IT team, we've significantly
                improved uptime and security across all departments."
              </p>
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold'>
                  AS
                </div>
                <div>
                  <div className='font-bold text-gray-900 text-lg'>
                    Amit Sharma
                  </div>
                  <div className='text-gray-600'>
                    CTO, Everest Tech Solutions
                  </div>
                </div>
              </div>
            </div>

            <div className='group bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1'>
              <div className='flex items-center gap-2 mb-6'>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className='w-6 h-6 fill-yellow-400 text-yellow-400'
                  />
                ))}
              </div>
              <p className='text-gray-700 mb-8 italic text-lg leading-relaxed'>
                "Their cloud and DevOps support helped us scale rapidly while
                reducing infrastructure costs by 30%."
              </p>
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold'>
                  LD
                </div>
                <div>
                  <div className='font-bold text-gray-900 text-lg'>
                    Laxmi Devkota
                  </div>
                  <div className='text-gray-600'>Product Manager, FinApp</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className='relative bg-gradient-to-br from-indigo-900 via-blue-800 to-cyan-700 text-white py-24 overflow-hidden'>
        {/* Animated background */}
        <div className='absolute inset-0 opacity-20'>
          <div className='absolute top-10 left-10 w-32 h-32 bg-cyan-400 rounded-full blur-3xl animate-pulse'></div>
          <div className='absolute bottom-10 right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl animate-bounce'></div>
        </div>

        <div className='relative max-w-5xl mx-auto px-4 text-center'>
          <h2 className='text-4xl md:text-6xl font-black mb-8 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent'>
            Let's Build the Future of Your Business
          </h2>
          <p className='text-xl text-cyan-100 mb-12 leading-relaxed max-w-3xl mx-auto'>
            Contact us for a free consultation and discover how we can support
            your digital transformation journey.
          </p>
          <div className='flex flex-col sm:flex-row gap-6 justify-center'>
            <button className='group bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-12 py-6 rounded-2xl font-bold hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 shadow-2xl transform hover:scale-105'>
              Get Started
            </button>
            <button className='border-2 border-cyan-300 text-cyan-100 px-12 py-6 rounded-2xl font-bold hover:bg-cyan-300/20 transition-all duration-300 backdrop-blur-sm shadow-xl'>
              Explore Solutions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITServicesPage;
