// import { TrendingUp, Square, Calendar, Radio } from "lucide-react";

// const Analytics = () => {
//   const analyticsData = [
//     {
//       id: 1,
//       icon: TrendingUp,
//       title: "Performance Analytics",
//       description:
//         "Track real-time performance metrics and optimize your business operations with detailed insights.",
//     },
//     {
//       id: 2,
//       icon: Square,
//       title: "Data Visualization",
//       description:
//         "Transform complex data into clear visual representations for better decision making.",
//     },
//     {
//       id: 3,
//       icon: Calendar,
//       title: "Strategic Planning",
//       description:
//         "Plan and execute strategic initiatives with comprehensive data-driven insights and forecasting.",
//     },
//     {
//       id: 4,
//       icon: Radio,
//       title: "Real-time Monitoring",
//       description:
//         "Monitor key performance indicators and receive instant alerts for critical business metrics.",
//     },
//   ];

//   return (
//     <section className='py-20 px-4 bg-gray-50'>
//       <div className='max-w-7xl mx-auto'>
//         {/* <div className='text-center mb-16'>
//           <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-4 transform transition-all duration-500 hover:scale-105'>
//             Analytics Solutions
//           </h2>
//           <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
//             Comprehensive analytics tools to drive your business forward with
//             data-driven insights
//           </p>
//         </div> */}

//         <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12'>
//           {analyticsData.map((item) => {
//             const IconComponent = item.icon;
//             return (
//               <div
//                 key={item.id}
//                 className='group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 border border-gray-100 hover:border-blue-200'>
//                 {/* Icon */}
//                 <div className='mb-6'>
//                   <div className='w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-500 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3'>
//                     <IconComponent
//                       size={32}
//                       className='text-blue-600 group-hover:text-white transition-all duration-500'
//                     />
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className='space-y-4'>
//                   <h3 className='text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-all duration-300'>
//                     {item.title}
//                   </h3>
//                   <p className='text-gray-600 group-hover:text-gray-700 transition-all duration-300 leading-relaxed'>
//                     {item.description}
//                   </p>
//                 </div>

//                 {/* Hover indicator */}
//                 <div className='mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0'>
//                   <div className='w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full'></div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Call to Action */}
//         <div className='text-center mt-16'>
//           <button className='group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 hover:-translate-y-1 active:scale-95'>
//             <span className='relative z-10'>Explore All Services</span>
//             <div className='absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-20 transition-all duration-500'></div>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Analytics;

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
    <section className='relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] animate-pulse'></div>

      <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold text-white mb-6 transform transition-all duration-700 hover:scale-105'>
            Analytics{" "}
            <span className='text-blue-400 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text'>
              Solutions
            </span>
          </h2>
          <p className='text-xl text-gray-300 max-w-2xl mx-auto mb-6'>
            Comprehensive analytics tools to drive your business forward with
            data-driven insights
          </p>
          <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full transform transition-all duration-500 hover:w-32'></div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12'>
          {analyticsData.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className='group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-400/30 transition-all duration-500 hover:bg-white/10 transform hover:scale-105 hover:-translate-y-2'>
                {/* Icon */}
                <div className='mb-6'>
                  <div className='w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500'>
                    <IconComponent
                      size={32}
                      className='text-white transition-all duration-500'
                    />
                  </div>
                </div>

                {/* Content */}
                <div className='space-y-4'>
                  <h3 className='text-2xl font-bold text-white group-hover:text-blue-300 transition-all duration-300'>
                    {item.title}
                  </h3>
                  <p className='text-gray-300 group-hover:text-gray-200 transition-all duration-300 leading-relaxed'>
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
