import React from "react";
import ServiceHero from "../components/Services/ServiceHero";
import ServicesGrid from "../components/Services/ServiceGrid";
import HelpSection from "../components/Services/HelpSection";

const Services = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <div>
      <ServiceHero
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <ServicesGrid searchQuery={searchQuery} />
      <HelpSection />
    </div>
  );
};

export default Services;
