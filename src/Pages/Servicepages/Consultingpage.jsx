import React from "react";
import { Link } from "lucide-react";
import {
  Users,
  Target,
  TrendingUp,
  Award,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Clock,
  Star,
  Lightbulb,
  BarChart,
  Shield,
} from "lucide-react";

// const ConsultingPage = () => {
//   const features = [
//     {
//       icon: Target,
//       title: "Strategic Planning",
//       description:
//         "Develop comprehensive business strategies aligned with your goals and market opportunities.",
//     },
//     {
//       icon: TrendingUp,
//       title: "Performance Optimization",
//       description:
//         "Analyze and improve your business processes for maximum efficiency and profitability.",
//     },
//     {
//       icon: Award,
//       title: "Expert Guidance",
//       description:
//         "Leverage our team's extensive experience across various industries and business models.",
//     },
//   ];

//   const services = [
//     "Business Strategy Development",
//     "Market Analysis & Research",
//     "Operational Efficiency",
//     "Financial Planning & Analysis",
//     "Risk Assessment & Management",
//     "Change Management",
//     "Process Improvement",
//     "Organizational Development",
//   ];

//   const stats = [
//     { number: "500+", label: "Clients Served" },
//     { number: "95%", label: "Success Rate" },
//     { number: "15+", label: "Years Experience" },
//     { number: "$50M+", label: "Client Savings" },
//   ];

//   return (
//     <div className='min-h-screen bg-gray-50'>
//       {/* Hero Section */}
//       <div className='bg-gradient-to-br from-blue-600 to-purple-700 text-white'>
//         <div className='max-w-7xl mx-auto px-4 py-20'>
//           <div className='text-center'>
//             <div className='flex justify-center mb-6'>
//               <div className='bg-white/20 backdrop-blur-sm rounded-full p-4'>
//                 <Users className='w-12 h-12' />
//               </div>
//             </div>
//             <h1 className='text-4xl md:text-6xl font-bold mb-6'>
//               Business Consulting Services
//             </h1>
//             <p className='text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto'>
//               Transform your business with strategic insights and expert
//               guidance. We help companies unlock their potential and achieve
//               sustainable growth.
//             </p>
//             <div className='flex flex-col sm:flex-row gap-4 justify-center'>
//               <button className='bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center gap-2 justify-center'>
//                 Get Free Consultation
//                 <ArrowRight className='w-5 h-5' />
//               </button>
//               <button className='border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200'>
//                 View Case Studies
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className='bg-white py-16'>
//         <div className='max-w-7xl mx-auto px-4'>
//           <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
//             {stats.map((stat, index) => (
//               <div key={index} className='text-center'>
//                 <div className='text-3xl md:text-4xl font-bold text-blue-600 mb-2'>
//                   {stat.number}
//                 </div>
//                 <div className='text-gray-600 font-medium'>{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className='py-20 bg-gray-50'>
//         <div className='max-w-7xl mx-auto px-4'>
//           <div className='text-center mb-16'>
//             <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
//               Why Choose Our Consulting Services?
//             </h2>
//             <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
//               Our proven methodology and industry expertise deliver measurable
//               results for businesses of all sizes.
//             </p>
//           </div>

//           <div className='grid md:grid-cols-3 gap-8'>
//             {features.map((feature, index) => {
//               const IconComponent = feature.icon;
//               return (
//                 <div
//                   key={index}
//                   className='bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300 border border-gray-100'>
//                   <div className='bg-gradient-to-br from-blue-100 to-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6'>
//                     <IconComponent className='w-8 h-8 text-blue-600' />
//                   </div>
//                   <h3 className='text-xl font-bold text-gray-900 mb-4'>
//                     {feature.title}
//                   </h3>
//                   <p className='text-gray-600 leading-relaxed'>
//                     {feature.description}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {/* Services List Section */}
//       <div className='py-20 bg-white'>
//         <div className='max-w-7xl mx-auto px-4'>
//           <div className='grid lg:grid-cols-2 gap-12 items-center'>
//             <div>
//               <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
//                 Our Consulting Services
//               </h2>
//               <p className='text-xl text-gray-600 mb-8'>
//                 We offer comprehensive consulting solutions tailored to your
//                 specific business needs and challenges.
//               </p>
//               <div className='grid sm:grid-cols-2 gap-4'>
//                 {services.map((service, index) => (
//                   <div key={index} className='flex items-center gap-3'>
//                     <CheckCircle className='w-5 h-5 text-green-500 flex-shrink-0' />
//                     <span className='text-gray-700'>{service}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className='bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 text-white'>
//               <h3 className='text-2xl font-bold mb-6'>
//                 Ready to Transform Your Business?
//               </h3>
//               <p className='text-blue-100 mb-6'>
//                 Schedule a free consultation with our expert consultants and
//                 discover how we can help accelerate your growth.
//               </p>
//               <div className='space-y-4 mb-8'>
//                 <div className='flex items-center gap-3'>
//                   <Clock className='w-5 h-5 text-blue-200' />
//                   <span className='text-blue-100'>
//                     Free 30-minute consultation
//                   </span>
//                 </div>
//                 <div className='flex items-center gap-3'>
//                   <Phone className='w-5 h-5 text-blue-200' />
//                   <span className='text-blue-100'>+977 -980000000</span>
//                 </div>
//                 <div className='flex items-center gap-3'>
//                   <Mail className='w-5 h-5 text-blue-200' />
//                   <span className='text-blue-100'>
//                     tondonholdings@gmail.com
//                   </span>
//                 </div>
//               </div>
//               <button className='w-full bg-white text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200'>
//                 Schedule Consultation
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Testimonials Section */}
//       <div className='py-20 bg-gray-50'>
//         <div className='max-w-7xl mx-auto px-4'>
//           <div className='text-center mb-16'>
//             <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
//               What Our Clients Say
//             </h2>
//             <p className='text-xl text-gray-600'>
//               Don't just take our word for it - hear from satisfied clients
//             </p>
//           </div>

//           <div className='grid md:grid-cols-2 gap-8'>
//             <div className='bg-white rounded-xl p-8 shadow-sm border border-gray-100'>
//               <div className='flex items-center gap-1 mb-4'>
//                 {[1, 2, 3, 4, 5].map((star) => (
//                   <Star
//                     key={star}
//                     className='w-5 h-5 fill-yellow-400 text-yellow-400'
//                   />
//                 ))}
//               </div>
//               <p className='text-gray-700 mb-6 italic'>
//                 "Tondon Holdings transformed our business strategy. Their
//                 insights led to a 40% increase in revenue within 6 months. The
//                 team's expertise and dedication are unmatched."
//               </p>
//               <div>
//                 <div className='font-semibold text-gray-900'>Sarah Johnson</div>
//                 <div className='text-gray-600'>CEO, Tech Innovations Ltd</div>
//               </div>
//             </div>

//             <div className='bg-white rounded-xl p-8 shadow-sm border border-gray-100'>
//               <div className='flex items-center gap-1 mb-4'>
//                 {[1, 2, 3, 4, 5].map((star) => (
//                   <Star
//                     key={star}
//                     className='w-5 h-5 fill-yellow-400 text-yellow-400'
//                   />
//                 ))}
//               </div>
//               <p className='text-gray-700 mb-6 italic'>
//                 "The consulting team's expertise in operational efficiency saved
//                 us over $200K annually. Their strategic approach to
//                 problem-solving is exceptional."
//               </p>
//               <div>
//                 <div className='font-semibold text-gray-900'>Michael Chen</div>
//                 <div className='text-gray-600'>
//                   Operations Director, Global Manufacturing Co
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className='bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16'>
//         <div className='max-w-4xl mx-auto px-4 text-center'>
//           <h2 className='text-3xl md:text-4xl font-bold mb-6'>
//             Ready to Take Your Business to the Next Level?
//           </h2>
//           <p className='text-xl text-blue-100 mb-8'>
//             Contact us today for a free consultation and discover how our expert
//             consulting services can transform your business.
//           </p>
//           <div className='flex flex-col sm:flex-row gap-4 justify-center'>
//             <button className='bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200'>
//               Get Started Today
//             </button>
//             <button className='border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200'>
//               Learn More
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ConsultingPage;
const ConsultingPage = () => {
  const features = [
    {
      icon: Target,
      title: "Strategic Planning & Growth",
      description:
        "Comprehensive business strategy development that aligns with your vision and market opportunities for sustainable growth.",
      approach:
        "We start with deep market analysis, competitive landscape assessment, and internal capability evaluation. Our consultants work closely with your leadership team to develop actionable strategies with clear KPIs and implementation roadmaps.",
      benefits: [
        "35% average revenue growth within 12 months",
        "Clear strategic direction and actionable roadmap",
        "Enhanced competitive positioning",
        "Improved decision-making processes",
      ],
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description:
        "Data-driven analysis and improvement of your business processes for maximum efficiency and profitability.",
      approach:
        "Our methodology includes process mapping, performance benchmarking, bottleneck identification, and solution design. We use lean principles and advanced analytics to optimize operations while maintaining quality standards.",
      benefits: [
        "25-40% reduction in operational costs",
        "Improved productivity and efficiency",
        "Enhanced customer satisfaction",
        "Streamlined workflows and reduced waste",
      ],
    },
    {
      icon: Award,
      title: "Expert Change Management",
      description:
        "Professional guidance through organizational transformation with proven change management frameworks.",
      approach:
        "We employ structured change methodologies including stakeholder analysis, communication planning, training programs, and resistance management. Our approach ensures smooth transitions with minimal disruption to operations.",
      benefits: [
        "90% higher success rate in change initiatives",
        "Reduced employee resistance and turnover",
        "Faster adoption of new processes",
        "Improved organizational agility",
      ],
    },
  ];

  const services = [
    "Business Strategy Development",
    "Market Analysis & Research",
    "Operational Efficiency Consulting",
    "Financial Planning & Analysis",
    "Risk Assessment & Management",
    "Change Management Solutions",
    "Process Improvement & Automation",
    "Organizational Development",
  ];

  const stats = [
    { number: "500+", label: "Clients Transformed" },
    { number: "95%", label: "Success Rate" },
    { number: "15+", label: "Years Experience" },
    { number: "$50M+", label: "Client Savings Generated" },
  ];

  const caseStudies = [
    {
      title: "Manufacturing Giant Transformation",
      client: "Global Manufacturing Corp",
      challenge:
        "Declining profitability and operational inefficiencies across 12 facilities",
      solution:
        "Implemented lean manufacturing principles, redesigned supply chain, and optimized workforce allocation",
      results: [
        "35% reduction in production costs",
        "50% improvement in delivery times",
        "$12M annual savings achieved",
        "Employee satisfaction increased by 40%",
      ],
    },
    {
      title: "Tech Startup Scale-Up Strategy",
      client: "InnovateTech Solutions",
      challenge:
        "Rapid growth causing organizational chaos and strategic drift",
      solution:
        "Developed scalable organizational structure, implemented performance management systems, and created strategic growth roadmap",
      results: [
        "300% revenue growth in 18 months",
        "Successful Series B funding of $25M",
        "Team expanded from 50 to 200 employees",
        "Market leadership in niche sector",
      ],
    },
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
                <Users className='w-16 h-16 text-cyan-300' />
                <div className='absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse'></div>
              </div>
            </div>
            <h1 className='text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent'>
              Business Consulting Excellence
            </h1>
            <p className='text-xl md:text-2xl mb-10 text-cyan-100 max-w-4xl mx-auto leading-relaxed'>
              Transform your business with strategic insights, expert guidance,
              and proven methodologies that drive sustainable growth and
              competitive advantage.
            </p>
            <div className='flex flex-col sm:flex-row gap-6 justify-center'>
              <button className='group bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-10 py-5 rounded-2xl font-bold hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 flex items-center gap-3 justify-center shadow-2xl transform hover:scale-105'>
                Get Free Strategy Session
                <ArrowRight className='w-6 h-6 group-hover:translate-x-1 transition-transform duration-300' />
              </button>
              <button className='border-2 border-cyan-300 text-cyan-100 px-10 py-5 rounded-2xl font-bold hover:bg-cyan-300/20 transition-all duration-300 backdrop-blur-sm shadow-xl'>
                View Success Stories
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

      {/* Services Overview Section */}
      <div className='py-24 relative'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='text-center mb-20'>
            <h2 className='text-4xl md:text-5xl font-black text-gray-800 mb-6'>
              Our Consulting Approach
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
              We combine strategic thinking with practical implementation to
              deliver measurable results that transform your business.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-10'>
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className='group bg-white rounded-3xl p-10 text-center hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-2 relative overflow-hidden'>
                  <div className='absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                  <div className='relative z-10'>
                    <div className='bg-gradient-to-br from-blue-100 via-indigo-100 to-cyan-100 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300'>
                      <IconComponent className='w-10 h-10 text-blue-600' />
                    </div>
                    <h3 className='text-2xl font-bold text-gray-900 mb-6'>
                      {feature.title}
                    </h3>
                    <p className='text-gray-600 leading-relaxed text-lg mb-6'>
                      {feature.description}
                    </p>

                    {/* How It Works */}
                    <div className='text-left bg-gray-50 rounded-xl p-6 mb-6'>
                      <h4 className='font-bold text-gray-800 mb-3 flex items-center gap-2'>
                        <Lightbulb className='w-5 h-5 text-blue-600' />
                        How It Works
                      </h4>
                      <p className='text-gray-600 text-sm leading-relaxed'>
                        {feature.approach}
                      </p>
                    </div>

                    {/* Benefits */}
                    <div className='text-left'>
                      <h4 className='font-bold text-gray-800 mb-3 flex items-center gap-2'>
                        <CheckCircle className='w-5 h-5 text-green-600' />
                        Key Benefits
                      </h4>
                      <ul className='space-y-2'>
                        {feature.benefits.map((benefit, idx) => (
                          <li
                            key={idx}
                            className='text-gray-600 text-sm flex items-start gap-2'>
                            <div className='w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0'></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
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
          <Target className='absolute top-20 left-10 w-16 h-16 text-blue-600 animate-pulse' />
          <BarChart className='absolute bottom-20 right-10 w-20 h-20 text-indigo-600 animate-bounce' />
          <Shield className='absolute top-1/2 left-1/4 w-12 h-12 text-cyan-600 animate-ping' />
        </div>

        <div className='relative max-w-7xl mx-auto px-4'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            <div>
              <h2 className='text-4xl md:text-5xl font-black text-gray-800 mb-8'>
                Comprehensive Consulting Services
              </h2>
              <p className='text-xl text-gray-600 mb-10 leading-relaxed'>
                From strategy to execution, we provide end-to-end consulting
                solutions that drive transformation and sustainable growth.
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
                  Ready to Transform Your Business?
                </h3>
                <p className='text-blue-100 mb-8 text-lg leading-relaxed'>
                  Schedule a free strategic consultation with our experts and
                  discover how we can accelerate your growth.
                </p>
                <div className='space-y-6 mb-10'>
                  <div className='flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4'>
                    <Clock className='w-6 h-6 text-cyan-300' />
                    <span className='text-blue-100 font-medium'>
                      Free 60-minute strategy session
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
                  Schedule Strategy Session
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className='py-24 bg-white'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='text-center mb-20'>
            <h2 className='text-4xl md:text-5xl font-black text-gray-800 mb-6'>
              Success Stories & Case Studies
            </h2>
            <p className='text-xl text-gray-600'>
              Real transformations, measurable results - see how we've helped
              businesses achieve breakthrough performance.
            </p>
          </div>

          <div className='grid lg:grid-cols-2 gap-10'>
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className='group bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1'>
                <div className='flex items-center gap-3 mb-6'>
                  <div className='w-3 h-3 bg-blue-600 rounded-full'></div>
                  <h3 className='text-2xl font-bold text-gray-900'>
                    {study.title}
                  </h3>
                </div>

                <div className='mb-6'>
                  <h4 className='font-bold text-gray-800 mb-2'>Client:</h4>
                  <p className='text-gray-600'>{study.client}</p>
                </div>

                <div className='mb-6'>
                  <h4 className='font-bold text-gray-800 mb-2'>Challenge:</h4>
                  <p className='text-gray-600 leading-relaxed'>
                    {study.challenge}
                  </p>
                </div>

                <div className='mb-6'>
                  <h4 className='font-bold text-gray-800 mb-2'>
                    Our Solution:
                  </h4>
                  <p className='text-gray-600 leading-relaxed'>
                    {study.solution}
                  </p>
                </div>

                <div>
                  <h4 className='font-bold text-gray-800 mb-3'>
                    Results Achieved:
                  </h4>
                  <div className='grid sm:grid-cols-2 gap-3'>
                    {study.results.map((result, idx) => (
                      <div key={idx} className='flex items-start gap-2'>
                        <CheckCircle className='w-5 h-5 text-green-500 flex-shrink-0 mt-0.5' />
                        <span className='text-gray-700 text-sm font-medium'>
                          {result}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className='py-24 bg-gradient-to-br from-gray-50 to-blue-50'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='text-center mb-20'>
            <h2 className='text-4xl md:text-5xl font-black text-gray-800 mb-6'>
              Client Testimonials
            </h2>
            <p className='text-xl text-gray-600'>
              Trusted by industry leaders for strategic excellence and
              transformational results.
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
                "Tondon Holdings transformed our entire business strategy. Their
                insights and execution led to a 40% increase in revenue within 6
                months. The team's expertise and dedication are truly unmatched
                in the industry."
              </p>
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold'>
                  SJ
                </div>
                <div>
                  <div className='font-bold text-gray-900 text-lg'>
                    Sarah Johnson
                  </div>
                  <div className='text-gray-600'>CEO, Tech Innovations Ltd</div>
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
                "Their consulting team's expertise in operational efficiency
                saved us over $200K annually. The strategic approach to
                problem-solving and change management is exceptional. Best
                investment we've made."
              </p>
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold'>
                  MC
                </div>
                <div>
                  <div className='font-bold text-gray-900 text-lg'>
                    Michael Chen
                  </div>
                  <div className='text-gray-600'>
                    Operations Director, Global Manufacturing Co
                  </div>
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
            Ready to Accelerate Your Growth?
          </h2>
          <p className='text-xl text-cyan-100 mb-12 leading-relaxed max-w-3xl mx-auto'>
            Partner with us for strategic consulting that delivers measurable
            results. Schedule your free consultation today.
          </p>
          <div className='flex flex-col sm:flex-row gap-6 justify-center'>
            <button className='group bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-12 py-6 rounded-2xl font-bold hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 shadow-2xl transform hover:scale-105'>
              Start Your Transformation
            </button>
            <button className='border-2 border-cyan-300 text-cyan-100 px-12 py-6 rounded-2xl font-bold hover:bg-cyan-300/20 transition-all duration-300 backdrop-blur-sm shadow-xl'>
              Download Case Studies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultingPage;
