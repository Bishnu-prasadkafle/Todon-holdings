import React from "react";
import CompanyBackground from "../Components/About/CompanyBackground";
import LeadershipTeam from "../Components/About/LeadershipTeam";
// import CertificationsAchievements from "../Components/About/CertificationsAchievements";
import CompanyValues from "../Components/About/CompanyValues";
import FAQSection from "../Components/About/FAQSection";
import TondonHeroCard from "../Components/About/HeroAbout";

const About = () => {
  return (
    <div>
      <TondonHeroCard />
      <hr />
      <CompanyBackground />
      <LeadershipTeam />
      <FAQSection />
      <CompanyValues />
      {/* <CertificationsAchievements /> */}
    </div>
  );
};

export default About;
