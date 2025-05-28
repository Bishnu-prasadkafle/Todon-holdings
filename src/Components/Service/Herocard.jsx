import React from "react";

const Herocard = () => {
  return (
    <section
      className='relative flex items-center justify-center overflow-hidden min-h-screen pt-32'
      style={{
        backgroundColor: "var(--color-cream)",
      }}>
      {/* Background Image */}
      <div
        className='absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 will-change-transform hover:scale-105'
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1682716270464-9a91cbbcf3b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2VydmljZXMlMjBjb21wYW55fGVufDB8fDB8fHww')",
        }}>
        {/* Overlay */}
        <div
          className='absolute inset-0'
          style={{
            backgroundColor: "rgba(20, 32, 61, 0.60)", // semi-black overlay
          }}></div>
      </div>

      {/* Foreground Content */}
      <div className='relative z-10 text-center px-6 max-w-4xl'>
        <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6'>
          Services
        </h1>
        <p className='text-xl sm:text-2xl text-white max-w-3xl mx-auto leading-relaxed'>
          Discover the diverse range of services we offer — from world-class
          travel experiences and stylish fashion to cutting-edge IT solutions
          and trusted education consultancy. We help elevate every aspect of
          your journey.
        </p>
      </div>
    </section>
  );
};

export default Herocard;
