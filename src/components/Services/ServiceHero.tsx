import React from "react";
import { Search } from "lucide-react";
import "./ServiceHero.css";

interface ServiceHeroProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

const ServiceHero: React.FC<ServiceHeroProps> = ({
  searchQuery,
  onSearchChange,
}) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Our Specialized <span>Medical Services</span>
        </h1>

        <p className="hero-subtitle">
          Delivering world-class healthcare with a personal touch. Our dedicated team of
          specialists utilizes advanced technology to provide comprehensive care for you
          and your family.
        </p>

        <div className="search-box">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Search for a department or specialty..."
            value={searchQuery}
            onChange={(event) => onSearchChange(event.target.value)}
            aria-label="Search services"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
