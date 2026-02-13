import React from "react";
import "./DoctorHero.css";

const DoctorHero: React.FC = () => {
  return (
    <section className="doctor-hero">
      <div className="doctor-hero-content">
        <p className="breadcrumb">HOME &gt; OUR DOCTORS</p>
        <h1>Meet Our Specialists</h1>
        <p className="subtitle">
          Connect with our world-class medical professionals dedicated to
          providing exceptional care across 30+ specialized departments.
        </p>
      </div>
    </section>
  );
};

export default DoctorHero;
