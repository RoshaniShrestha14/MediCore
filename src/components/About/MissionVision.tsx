import React from "react";
import { Target, Eye } from "lucide-react";
import "./About.css";

const MissionVision: React.FC = () => {
  return (
    <section className="mission-vision">
      <div className="mv-container">
        <div className="mv-card">
          <div className="icon-box mission-box">
            <Target className="icon mission-icon" />
          </div>
          <h3>Our Mission</h3>
          <p>
            To provide compassionate, accessible, and high-quality healthcare to
            our community. We strive to improve health outcomes through
            evidence-based practices and a patient-centered approach that
            honors the dignity of every individual.
          </p>
        </div>

        <div className="mv-card">
          <div className="icon-box vision-box">
            <Eye className="icon vision-icon" />
          </div>
          <h3>Our Vision</h3>
          <p>
            To be the leading choice for healthcare excellence in the region,
            recognized for our clinical outcomes, advanced technology, and
            innovative medical research, while maintaining the warmth of a
            community-focused institution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;