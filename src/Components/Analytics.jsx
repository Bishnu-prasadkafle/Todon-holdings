import { TrendingUp, Square, Calendar, Radio } from "lucide-react";

const Analytics = () => {
  const analyticsData = [
    {
      id: 1,
      icon: TrendingUp,
      title: "Performance Analytics",
      description:
        "Track real-time performance metrics and optimize your business operations with detailed insights.",
    },
    {
      id: 2,
      icon: Square,
      title: "Data Visualization",
      description:
        "Transform complex data into clear visual representations for better decision making.",
    },
    {
      id: 3,
      icon: Calendar,
      title: "Strategic Planning",
      description:
        "Plan and execute strategic initiatives with comprehensive data-driven insights and forecasting.",
    },
    {
      id: 4,
      icon: Radio,
      title: "Real-time Monitoring",
      description:
        "Monitor key performance indicators and receive instant alerts for critical business metrics.",
    },
  ];

  return (
    <section className='py-20 px-4 bg-gray-50'>
      <div className='max-w-7xl mx-auto'>
        {/* <div className='text-center mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-4 transform transition-all duration-500 hover:scale-105'>
            Analytics Solutions
          </h2>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Comprehensive analytics tools to drive your business forward with
            data-driven insights
          </p>
        </div> */}

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12'>
          {analyticsData.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className='group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 border border-gray-100 hover:border-blue-200'>
                {/* Icon */}
                <div className='mb-6'>
                  <div className='w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-500 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3'>
                    <IconComponent
                      size={32}
                      className='text-blue-600 group-hover:text-white transition-all duration-500'
                    />
                  </div>
                </div>

                {/* Content */}
                <div className='space-y-4'>
                  <h3 className='text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-all duration-300'>
                    {item.title}
                  </h3>
                  <p className='text-gray-600 group-hover:text-gray-700 transition-all duration-300 leading-relaxed'>
                    {item.description}
                  </p>
                </div>

                {/* Hover indicator */}
                <div className='mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0'>
                  <div className='w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full'></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className='text-center mt-16'>
          <button className='group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 hover:-translate-y-1 active:scale-95'>
            <span className='relative z-10'>Explore All Services</span>
            <div className='absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-20 transition-all duration-500'></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
