import React from "react";

const HeroSection = () => {
  return (
    <section className='bg-primary text-gray-950 py-20 px-4 text-center'>
      <h1 className='text-4xl font-bold mb-4'>Welcome to Tondon Holdings</h1>
      <p className='text-lg mb-6'>
        Empowering industries through innovation and excellence.
      </p>
      <button className='bg-accent text-white px-6 py-2 rounded hover:bg-yellow-600 transition'>
        Explore Our Services
      </button>
    </section>
  );
};

export default HeroSection;
