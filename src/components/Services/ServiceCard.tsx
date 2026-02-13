import React from "react";
import "./ServiceCard.css";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  image,
  icon,
}) => {
  return (
    <div className="service-card">
      <div className="card-image">
        <img src={image} alt={title} />
        <div className="floating-icon">{icon}</div>
      </div>

      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
