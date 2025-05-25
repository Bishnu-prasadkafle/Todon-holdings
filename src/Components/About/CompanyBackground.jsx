import React, { useState } from "react";
import { Target } from "lucide-react";

// Company Background Component
const CompanyBackground = () => {
  return (
    <section className='relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] animate-pulse'></div>

      <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold text-white mb-6 transform transition-all duration-700 hover:scale-105'>
            Our{" "}
            <span className='text-blue-400 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text'>
              Story
            </span>
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full transform transition-all duration-500 hover:w-32'></div>
        </div>

        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <div className='space-y-8 transform transition-all duration-700 hover:translate-x-2'>
            <div className='bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-400/30 transition-all duration-500 hover:bg-white/10 group'>
              <h3 className='text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-all duration-300'>
                Our Origin
              </h3>
              <p className='text-gray-300 leading-relaxed group-hover:text-gray-200 transition-all duration-300'>
                Founded in 2018,{" "}
                <strong className='text-blue-400'>Tondon Holdings</strong>{" "}
                emerged from a simple yet powerful observation: businesses of
                all sizes deserved access to cutting-edge digital solutions.
                What began as a small team of passionate developers has grown
                into a comprehensive digital transformation partner.
              </p>
            </div>

            <div className='bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-400/30 transition-all duration-500 hover:bg-white/10 group'>
              <h3 className='text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-all duration-300'>
                Our Vision
              </h3>
              <p className='text-gray-300 leading-relaxed group-hover:text-gray-200 transition-all duration-300'>
                To be the leading catalyst for business digital transformation,
                making cutting-edge web and digital solutions accessible to
                every business, regardless of size or industry.
              </p>
            </div>

            <div className='bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-400/30 transition-all duration-500 hover:bg-white/10 group'>
              <h3 className='text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-all duration-300'>
                Our Mission
              </h3>
              <p className='text-gray-300 leading-relaxed group-hover:text-gray-200 transition-all duration-300'>
                "Empowering businesses with modern web and digital solutions to
                thrive online." We believe every business deserves a powerful
                digital presence that reflects their unique value and drives
                meaningful growth.
              </p>
            </div>
          </div>

          <div className='relative transform transition-all duration-700 hover:scale-105'>
            <div className='relative bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl p-8 backdrop-blur-sm border border-blue-400/20 hover:border-blue-400/40 transition-all duration-500'>
              <div className='absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full opacity-20 animate-pulse'></div>
              <div className='text-center space-y-6'>
                <div className='w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mx-auto flex items-center justify-center transform transition-all duration-500 hover:scale-110 hover:rotate-12'>
                  <Target className='w-10 h-10 text-white' />
                </div>
                <h4 className='text-2xl font-bold text-white'>150+ Projects</h4>
                <p className='text-gray-300'>
                  Successfully delivered across various industries
                </p>
                <div className='grid grid-cols-2 gap-4 mt-8'>
                  <div className='text-center'>
                    <div className='text-2xl font-bold text-blue-400'>98%</div>
                    <div className='text-sm text-gray-400'>
                      Client Satisfaction
                    </div>
                  </div>
                  <div className='text-center'>
                    <div className='text-2xl font-bold text-blue-400'>50+</div>
                    <div className='text-sm text-gray-400'>Active Partners</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CompanyBackground;
