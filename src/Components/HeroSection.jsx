import { PlayCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className='relative max-h-screen flex items-center justify-start overflow-hidden pt-32'>
      {/* Background Image */}

      <div
        className='absolute h-[700px] inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105'
        style={{
          backgroundImage: "url('/image3.png')",
        }}>
        {/* Dark Gradient Overlay */}
        <div className='absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent transition-all duration-500'></div>
      </div>

      {/* Foreground Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full flex items-center justify-center min-h-screen'>
        <div className='max-w-4xl mx-auto text-center'>
          <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white transform transition-all duration-800 hover:scale-105'>
            Welcome to{" "}
            <span className='text-blue-400 bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text  transform transition-all duration-500 hover:from-blue-300 hover:to-blue-500 inline-block hover:scale-110 hover:-translate-y-1'>
              Tondon Holdings
            </span>
          </h1>

          <p className='text-xl sm:text-2xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto transform transition-all duration-700 hover:text-gray-100'>
            “Empowering businesses with modern web and digital solutions to
            thrive online.”
          </p>

          <div className='flex flex-col sm:flex-row items-center justify-center gap-8'>
            {/* Get Started Button */}
            <button className='group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-500 shadow-2xl hover:shadow-blue-500/25 transform hover:scale-110 hover:-translate-y-2 active:scale-95 border border-blue-500/30 hover:border-blue-400/50 backdrop-blur-sm'>
              <span className='relative z-10 transition-all duration-300'>
                Explore Our Services
              </span>
              <div className='absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-20 transition-all duration-500 transform group-hover:scale-105'></div>
            </button>

            {/* Watch Video Button */}
            <button className='group flex items-center gap-4 text-white hover:text-blue-300 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1'>
              <div className='w-14 h-14 border-2 border-white/70 rounded-full flex items-center justify-center group-hover:border-blue-300 group-hover:bg-blue-500/20 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12 shadow-lg group-hover:shadow-blue-500/25'>
                <PlayCircle
                  size={28}
                  className='ml-1 transition-all duration-300 group-hover:text-blue-300'
                />
              </div>
              <span className='font-medium text-lg transition-all duration-300 group-hover:text-blue-300'>
                Watch Video
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10 transition-all duration-300 hover:scale-110'>
        <div className='w-6 h-10 border-2 border-white/50 rounded-full flex justify-center hover:border-blue-300/70 transition-all duration-300'>
          <div className='w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse hover:bg-blue-300/70 transition-all duration-300'></div>
        </div>
      </div>

      {/* Custom CSS for animations */}
    </section>
  );
};

export default HeroSection;
