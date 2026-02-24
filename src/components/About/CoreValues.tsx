import React from "react";
import { Heart, BadgeCheck, Gavel } from "lucide-react";
import "./About.css";

const CoreValues: React.FC = () => {
  return (
    <section className="core-values">
      <div className="core-container">
        <span className="section-tag">CORE VALUES</span>
        <h2 className="section-title">The Principles That Guide Us</h2>
        <p className="section-subtitle">
          Our values are the heartbeat of our hospital. They define how we treat
          our patients, our partners, and each other every single day.
        </p>

        <div className="values-grid">
          <div className="value-card">
            <div className="icon-wrapper">
              <Heart className="value-icon" />
            </div>
            <h4>Compassion</h4>
            <p>
              We treat every patient with the same kindness and empathy we
              would want for our own families. Caring is at the core of our
              practice.
            </p>
          </div>

          <div className="value-card">
            <div className="icon-wrapper">
              <BadgeCheck className="value-icon" />
            </div>
            <h4>Excellence</h4>
            <p>
              We never settle for "good enough." We pursue the highest standards
              in clinical care, safety, and operational efficiency through
              continuous learning.
            </p>
          </div>

          <div className="value-card">
            <div className="icon-wrapper">
              <Gavel className="value-icon" />
            </div>
            <h4>Integrity</h4>
            <p>
              We act with honesty, transparency, and ethical conviction. Trust
              is the foundation of the doctor-patient relationship, and we
              guard it fiercely.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;