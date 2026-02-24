import React from "react";
import "./About.css";

const StatsBar: React.FC = () => {
  return (
    <section className="stats-wrapper">
      <div className="stats-bar">
        <div className="stat">
          <h3>50+</h3>
          <p>Years Experience</p>
        </div>
        <div className="divider"></div>
        <div className="stat">
          <h3>200+</h3>
          <p>Specialist Doctors</p>
        </div>
        <div className="divider"></div>
        <div className="stat">
          <h3>10K+</h3>
          <p>Annual Patients</p>
        </div>
        <div className="divider"></div>
        <div className="stat">
          <h3>24/7</h3>
          <p>Emergency Care</p>
        </div>
      </div>
    </section>
  );
};

export default StatsBar;