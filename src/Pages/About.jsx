import React from "react";
import CompanyBackground from "../Components/About/CompanyBackground";
import LeadershipTeam from "../Components/About/LeadershipTeam";
import CertificationsAchievements from "../Components/About/CertificationsAchievements";
import CompanyValues from "../Components/About/CompanyValues";

const About = () => {
  return (
    <div>
      <CompanyBackground />
      <LeadershipTeam />
      <CompanyValues />
      <CertificationsAchievements />
    </div>
  );
};

export default About;
