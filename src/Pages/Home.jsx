import React from "react";
import HeroSection from "../Components/Herosection";
import Analytics from "../Components/Analytics";
import WhyChooseUs from "../Components/WhyChooseUs";
import TestimonialsStats from "../Components/TestimonialStats";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Analytics />
      <WhyChooseUs />
      <TestimonialsStats />
    </div>
  );
};

export default Home;
