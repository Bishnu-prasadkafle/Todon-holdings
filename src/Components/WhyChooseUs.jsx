import { Shield, Zap, Users, Award } from "lucide-react";

const WhyChooseUs = () => {
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

  return (
    <section className='py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6 transform transition-all duration-500 hover:scale-105'>
            Why Choose Us
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            Leading the industry with innovative solutions, unmatched expertise,
            and unwavering commitment to your success
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12'>
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className='group text-center transform transition-all duration-500 hover:scale-105 hover:-translate-y-3'>
                {/* Icon Container */}
                <div className='mb-8'>
                  <div className='w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl group-hover:bg-blue-500 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6 border-4 border-blue-100 group-hover:border-blue-300'>
                    <IconComponent
                      size={40}
                      className='text-blue-600 group-hover:text-white transition-all duration-500'
                    />
                  </div>
                </div>

                {/* Content */}
                <div className='space-y-4'>
                  <h3 className='text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-all duration-300'>
                    {feature.title}
                  </h3>
                  <p className='text-gray-600 group-hover:text-gray-700 transition-all duration-300 leading-relaxed'>
                    {feature.description}
                  </p>
                </div>

                {/* Hover Accent */}
                <div className='mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0'>
                  <div className='w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto'></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className='text-center mt-16 bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20'>
          <h3 className='text-2xl font-bold text-gray-900 mb-4'>
            Ready to Experience the Difference?
          </h3>
          <p className='text-gray-600 mb-8 max-w-2xl mx-auto'>
            Join thousands of satisfied customers who trust us with their most
            critical business needs
          </p>
          <div className='flex flex-col sm:flex-row items-center justify-center gap-6'>
            <button className='group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 hover:-translate-y-1 active:scale-95'>
              <span className='relative z-10'>Get Started Today</span>
              <div className='absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-20 transition-all duration-500'></div>
            </button>
            <button className='group text-blue-600 hover:text-blue-700 font-semibold text-lg transition-all duration-300 flex items-center gap-2'>
              Learn More
              <span className='transform group-hover:translate-x-1 transition-transform duration-300'>
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
