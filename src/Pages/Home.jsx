import React from "react";
import HeroSection from "../Components/HeroSection";
import Analytics from "../Components/Analytics";
import WhyChooseUs from "../Components/WhyChooseUs";
import TestimonialsStats from "../Components/TestimonialStats";

const Home = () => {
  return (
    <div className='#f8fafc'>
      <HeroSection />
      <Analytics />
      <WhyChooseUs />
      <TestimonialsStats />
    </div>
  );
};

export default Home;
