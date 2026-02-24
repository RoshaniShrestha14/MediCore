import React from "react";
import {
  Star,
  Globe,
  BriefcaseMedical,
} from "lucide-react";
import "./DoctorCard.css";

interface Doctor {
  name: string;
  role: string;
  degree: string;
  rating: number;
  experience: string;
  languages: string;
  image: string;
}

interface Props {
  doctor: Doctor;
}

const DoctorCard: React.FC<Props> = ({ doctor }) => {
  return (
    <div className="doctor-card">
      <div className="image-container">
        <img src={doctor.image} alt={doctor.name} />
      </div>

      <div className="card-content">
        <div className="card-header">
          <h3>{doctor.name}</h3>
          <div className="rating">
            <Star size={16} fill="#f5a623" color="#f5a623" />
            <span>{doctor.rating}</span>
          </div>
        </div>

        <p className="role">{doctor.role}</p>
        <p className="degree">{doctor.degree}</p>

        <div className="info">
          <div>
            <BriefcaseMedical size={16} stroke="#238ce8" />
            <span>{doctor.experience}</span>
          </div>
          <div>
            <Globe size={16} stroke="#238ce8" />
            <span>{doctor.languages}</span>
          </div>
        </div>

        {/* <div className="card-buttons">
          <button className="outline">
            <Phone size={16} /> Call
          </button>
          <button className="primary">
            <Calendar size={16} /> Book
          </button> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default DoctorCard;
