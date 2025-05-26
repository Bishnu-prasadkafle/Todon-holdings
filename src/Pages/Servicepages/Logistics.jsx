import React from "react";
import {
  Truck,
  Warehouse,
  Package,
  MapPin,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Clock,
  Star,
  Globe,
  Shield,
  TrendingUp,
  BarChart3,
} from "lucide-react";

const LogisticsServicesPage = () => {
  const features = [
    {
      icon: Truck,
      title: "Transportation & Freight Management",
      description:
        "Comprehensive transportation solutions covering domestic and international freight with real-time tracking and optimization.",
      approach:
        "We utilize advanced route optimization algorithms, partner with verified carriers, and provide end-to-end tracking from pickup to delivery. Our team manages documentation, customs clearance, and ensures compliance with international shipping regulations.",
      benefits: [
        "30-40% reduction in transportation costs",
        "Real-time GPS tracking and notifications",
        "Optimized delivery routes for faster transit",
        "Comprehensive insurance coverage",
      ],
      caseStudy: {
        client: "Himalayan Exports Ltd",
        challenge:
          "High shipping costs and delayed deliveries to European markets",
        solution:
          "Implemented consolidated shipping strategy with optimized routes and reliable carrier partnerships",
        result:
          "Reduced shipping costs by 35% and improved delivery time by 50%",
      },
    },
    {
      icon: Warehouse,
      title: "Warehouse & Distribution Management",
      description:
        "State-of-the-art warehousing facilities with inventory management, order fulfillment, and distribution services.",
      approach:
        "We operate climate-controlled warehouses with advanced inventory management systems, automated sorting, and pick-and-pack services. Our facilities are strategically located for optimal distribution coverage.",
      benefits: [
        "99.8% inventory accuracy with RFID tracking",
        "Same-day and next-day delivery options",
        "Climate-controlled storage facilities",
        "Automated inventory replenishment alerts",
      ],
      caseStudy: {
        client: "Everest Fashion House",
        challenge:
          "Inefficient inventory management causing stockouts and overstock",
        solution:
          "Deployed automated warehouse management system with real-time inventory tracking",
        result:
          "Achieved 99.5% order fulfillment rate and reduced inventory costs by 25%",
      },
    },
    {
      icon: Globe,
      title: "Supply Chain Optimization",
      description:
        "End-to-end supply chain consulting and management to streamline operations and reduce costs.",
      approach:
        "We conduct comprehensive supply chain audits, identify bottlenecks, implement technology solutions, and establish KPI monitoring systems. Our experts work closely with your team to optimize every aspect of your supply chain.",
      benefits: [
        "15-30% improvement in supply chain efficiency",
        "Reduced lead times and inventory carrying costs",
        "Enhanced supplier relationship management",
        "Risk mitigation and contingency planning",
      ],
      caseStudy: {
        client: "Nepal Pharmaceuticals",
        challenge:
          "Complex supply chain with multiple suppliers causing delays",
        solution:
          "Streamlined supplier network and implemented digital supply chain visibility platform",
        result:
          "Reduced procurement cycle time by 40% and improved supplier performance by 60%",
      },
    },
  ];

  const services = [
    "Domestic & International Shipping",
    "Warehousing & Distribution",
    "Supply Chain Consulting",
    "Customs Clearance & Documentation",
    "Last-Mile Delivery Solutions",
    "Cold Chain & Temperature Control",
    "E-commerce Fulfillment",
    "Freight Forwarding Services",
  ];

  const stats = [
    { number: "5M+", label: "Packages Delivered" },
    { number: "99.2%", label: "On-Time Delivery" },
    { number: "15+", label: "Years of Experience" },
    { number: "500+", label: "Active Clients" },
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
                <Truck className='w-16 h-16 text-cyan-300' />
                <div className='absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse'></div>
              </div>
            </div>
            <h1 className='text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent'>
              Logistics Solutions
            </h1>
            <p className='text-xl md:text-2xl mb-10 text-cyan-100 max-w-4xl mx-auto leading-relaxed'>
              Streamline your supply chain with our comprehensive logistics
              services designed to reduce costs and improve efficiency.
            </p>
            <div className='flex flex-col sm:flex-row gap-6 justify-center'>
              <button className='group bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-10 py-5 rounded-2xl font-bold hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 flex items-center gap-3 justify-center shadow-2xl transform hover:scale-105'>
                Get Free Quote
                <ArrowRight className='w-6 h-6 group-hover:translate-x-1 transition-transform duration-300' />
              </button>
              <button className='border-2 border-cyan-300 text-cyan-100 px-10 py-5 rounded-2xl font-bold hover:bg-cyan-300/20 transition-all duration-300 backdrop-blur-sm shadow-xl'>
                Track Shipment
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
              Our Logistics Services
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
              Comprehensive logistics solutions designed to optimize your supply
              chain and deliver exceptional results.
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
          <Package className='absolute top-20 left-10 w-16 h-16 text-blue-600 animate-pulse' />
          <Warehouse className='absolute bottom-20 right-10 w-20 h-20 text-indigo-600 animate-bounce' />
          <MapPin className='absolute top-1/2 left-1/4 w-12 h-12 text-cyan-600 animate-ping' />
        </div>

        <div className='relative max-w-7xl mx-auto px-4'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            <div>
              <h2 className='text-4xl md:text-5xl font-black text-gray-800 mb-8'>
                Complete Logistics Portfolio
              </h2>
              <p className='text-xl text-gray-600 mb-10 leading-relaxed'>
                From warehousing to last-mile delivery, we provide end-to-end
                logistics solutions that drive efficiency and growth.
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
                  Optimize Your Supply Chain Today
                </h3>
                <p className='text-blue-100 mb-8 text-lg leading-relaxed'>
                  Get a free logistics assessment and discover how we can reduce
                  your costs while improving service quality.
                </p>
                <div className='space-y-6 mb-10'>
                  <div className='flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4'>
                    <Clock className='w-6 h-6 text-cyan-300' />
                    <span className='text-blue-100 font-medium'>
                      Free supply chain analysis
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
                      logistics@tondonholdings.com
                    </span>
                  </div>
                </div>
                <button className='w-full bg-white text-blue-600 py-4 px-8 rounded-2xl font-bold hover:bg-blue-50 transition-all duration-300 shadow-xl transform hover:scale-105'>
                  Get Your Quote
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
              What Our Clients Say
            </h2>
            <p className='text-xl text-gray-600'>
              Trusted by businesses across Nepal for reliable logistics
              services.
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
                "Tondon Holdings transformed our logistics operations. Their
                warehousing and distribution services have been exceptional,
                helping us serve our customers better."
              </p>
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold'>
                  RG
                </div>
                <div>
                  <div className='font-bold text-gray-900 text-lg'>
                    Rajesh Gurung
                  </div>
                  <div className='text-gray-600'>
                    Operations Director, Mountain Gear Co.
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
                "Their international freight services have opened new markets
                for us. Professional, reliable, and cost-effective solutions
                that deliver results."
              </p>
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold'>
                  SP
                </div>
                <div>
                  <div className='font-bold text-gray-900 text-lg'>
                    Sita Poudel
                  </div>
                  <div className='text-gray-600'>CEO, Himalayan Crafts</div>
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
            Ready to Optimize Your Logistics?
          </h2>
          <p className='text-xl text-cyan-100 mb-12 leading-relaxed max-w-3xl mx-auto'>
            Partner with us to streamline your supply chain, reduce costs, and
            improve customer satisfaction.
          </p>
          <div className='flex flex-col sm:flex-row gap-6 justify-center'>
            <button className='group bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-12 py-6 rounded-2xl font-bold hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 shadow-2xl transform hover:scale-105'>
              Start Today
            </button>
            <button className='border-2 border-cyan-300 text-cyan-100 px-12 py-6 rounded-2xl font-bold hover:bg-cyan-300/20 transition-all duration-300 backdrop-blur-sm shadow-xl'>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogisticsServicesPage;
