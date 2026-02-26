import React from "react";
import "./Hero.css";
import { Calendar, Search } from "lucide-react";
import { Link } from "react-router-dom";

const HealthcareHero: React.FC = () => {
  return (
    <section className="healthcare-hero">
      <div className="healthcare-hero-content">
        <span className="healthcare-badge">
          <span className="healthcare-badge-dot" aria-hidden="true" />
          World-Class Healthcare Standards
        </span>

        <h1>
          <span className="healthcare-title-line">Compassionate</span>
          <span className="healthcare-title-line">Care for a</span>
          <span className="healthcare-title-line healthcare-title-highlight">
            Healthier Life.
          </span>
        </h1>

        <p>
          Providing advanced medical treatments with a human touch. Our
          specialized team of experts is dedicated to your well-being around
          the clock.
        </p>

        <div className="healthcare-hero-buttons">
          <Link to="/appointment" className="healthcare-primary-btn">
            <Calendar size={18} />
            Book Appointment
          </Link>

          <Link to="/doctor#doctor-list" className="healthcare-secondary-btn">
            <Search size={18} />
            Find a Specialist
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HealthcareHero;