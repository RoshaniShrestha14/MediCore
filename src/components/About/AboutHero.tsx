import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";
import StatsBar from "./StatsBar";

const AboutHero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="about-hero">
      <div className="about-hero-content">
        <span className="about-badge">ESTABLISHED 1974</span>

        <h1>
          Dedicated to Your <br />
          <span>Health</span> and Wellbeing
        </h1>

        <p>
          Providing world-class healthcare with a human touch for over 50
          years. We combine medical excellence with genuine compassion.
        </p>

        <div className="hero-buttons">
          <button
            className="primary-btn"
            type="button"
            onClick={() => navigate("/services")}
          >
            Our Services <span className="btn-arrow">→</span>
          </button>
          <button
            className="secondary-btn"
            type="button"
            onClick={() => navigate("/doctor")}
          >
            View Gallery
          </button>
        </div>
      </div>

      <div className="about-hero-stats">
        <StatsBar />
      </div>
    </section>
  );
};

export default AboutHero;