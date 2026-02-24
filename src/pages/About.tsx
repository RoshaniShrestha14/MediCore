import React from "react";
import AboutHero from "../components/About/AboutHero";
import HistorySection from "../components/About/HistorySection";
import MissionVision from "../components/About/MissionVision";
import CoreValues from "../components/About/CoreValues";
import SpecialistsSection from "../components/About/SpecialistsSection";
import CTASection from "../components/About/CTASection";

const About: React.FC = () => {
  return (
    <>
      <AboutHero />
      <HistorySection />
      <MissionVision />
      <CoreValues />
      <SpecialistsSection />
      <CTASection />
    </>
  );
};

export default About;