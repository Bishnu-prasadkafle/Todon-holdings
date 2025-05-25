// Leadership Team Component
import React from "react";
import { Users } from "lucide-react";
import { useState } from "react";
const LeadershipTeam = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  const leaders = [
    {
      name: "John Tondon",
      role: "Founder & CEO",
      bio: "Leading digital transformation initiatives with 12+ years of experience in web development and business strategy.",
      image: "",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Sarah Mitchell",
      role: "Chief Technology Officer",
      bio: "Architecting scalable solutions with expertise in modern web technologies and system architecture.",
      image: "",
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Client Strategy",
      bio: "Building lasting partnerships through strategic digital consulting and business development expertise.",
      image: "",
      color: "from-green-500 to-green-600",
    },
  ];

  return (
    <section className='py-20 bg-gradient-to-br from-gray-900 to-slate-900'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold text-white mb-6'>
            Leadership <span className='text-blue-400'>Team</span>
          </h2>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
            Meet the visionaries driving our mission to transform businesses
            through innovative digital solutions
          </p>
          <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mt-6 rounded-full'></div>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {leaders.map((leader, index) => (
            <div
              key={index}
              className='group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-blue-400/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-4'
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}>
              <div className='text-center space-y-6'>
                <div className='relative mx-auto w-32 h-32'>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${leader.color} rounded-full opacity-20 animate-pulse`}></div>
                  <div className='relative w-full h-full bg-gray-700 rounded-full overflow-hidden border-4 border-white/20 group-hover:border-blue-400/50 transition-all duration-500'>
                    <Users className='w-16 h-16 text-gray-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
                  </div>
                </div>

                <div>
                  <h3 className='text-2xl font-bold text-white group-hover:text-blue-300 transition-all duration-300'>
                    {leader.name}
                  </h3>
                  <p className='text-blue-400 font-semibold mt-2'>
                    {leader.role}
                  </p>
                </div>

                <p className='text-gray-300 leading-relaxed group-hover:text-gray-200 transition-all duration-300'>
                  {leader.bio}
                </p>

                <div className='flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-4'>
                  <div className='w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center hover:bg-blue-600/40 transition-all duration-300 cursor-pointer'>
                    <span className='text-blue-400'>in</span>
                  </div>
                  <div className='w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center hover:bg-blue-600/40 transition-all duration-300 cursor-pointer'>
                    <span className='text-blue-400'>@</span>
                  </div>
                </div>
              </div>

              {hoveredMember === index && (
                <div className='absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full animate-ping'></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default LeadershipTeam;
