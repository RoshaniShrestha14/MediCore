import React, { useState } from "react";
import {
  GraduationCap,
  Stethoscope,
  BriefcaseMedical,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { doctorsData } from "../Doctors/doctorsData";
import "./About.css";

const specialistDoctors = doctorsData
  .filter((doctor) =>
    /(specialist|cardio|neuro|surgeon|neurologist|dermatology|head)/i.test(
      doctor.role
    )
  );

const getBadge = (role: string) => {
  if (/cardio/i.test(role)) return "Cardiology Lead";
  if (/neuro/i.test(role)) return "Neuro Specialist";
  if (/surgeon/i.test(role)) return "Senior Surgeon";
  if (/specialist/i.test(role)) return "Specialist";
  return "Expert Doctor";
};

const SpecialistsSection: React.FC = () => {
  const [showAllSpecialists, setShowAllSpecialists] = useState(false);

  const visibleSpecialists = showAllSpecialists
    ? specialistDoctors
    : specialistDoctors.slice(0, 3);

  return (
    <section className="specialists">
      <span className="section-tag">Expert Medical Team</span>
      <h2>Meet Our Specialists</h2>
      <p className="specialists-subtitle">
        Our team of dedicated professionals brings years of specialized
        experience and a commitment to providing the highest level of patient
        care.
      </p>

      <div className="specialists-grid">
        {visibleSpecialists.map((doctor, index) => (
          <article className="specialist-card" key={index}>
            <div className="specialist-image-wrap">
              <img src={doctor.image} alt={doctor.name} />
              <span className="specialist-badge">{getBadge(doctor.role)}</span>
            </div>

            <div className="specialist-content">
              <h4>{doctor.name}</h4>
              <p className="specialist-role">{doctor.role}</p>

              <div className="specialist-details">
                <p>
                  <GraduationCap size={14} />
                  <span>{doctor.degree}</span>
                </p>
                <p>
                  <Stethoscope size={14} />
                  <span>{doctor.experience}</span>
                </p>
                <p>
                  <BriefcaseMedical size={14} />
                  <span>{doctor.languages}</span>
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {specialistDoctors.length > 3 && (
        <button
          type="button"
          className="specialists-more-btn"
          onClick={() => setShowAllSpecialists((previous) => !previous)}
        >
          <span>
            {showAllSpecialists ? "Show Less Specialists" : "See More Specialists"}
          </span>
          {showAllSpecialists ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
      )}
    </section>
  );
};

export default SpecialistsSection;
