import React from "react";
import {
  Heart,
  Baby,
  Brain,
  Bone,
  Activity,
  Scan,
  Ambulance,
  PersonStanding,
  Waves,
} from "lucide-react";
import ServiceCard from "./ServiceCard";
import "./ServiceGrid.css";

interface ServicesGridProps {
  searchQuery: string;
}

const ServicesGrid: React.FC<ServicesGridProps> = ({ searchQuery }) => {
  const services = [
    {
      title: "Cardiology",
      description:
        "Expert heart care including diagnostics, complex surgery, and cardiovascular rehabilitation.",
      image:
        "https://images.unsplash.com/photo-1579154204601-01588f351e67",
      icon: <Heart size={18} />,
    },
    {
      title: "Pediatrics",
      description:
        "Specialized medical care for infants, children, and adolescents in a friendly environment.",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
      icon: <Baby size={18} />,
    },
    {
      title: "Neurology",
      description:
        "Advanced treatment for disorders of the nervous system and comprehensive brain health.",
      image:
        "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b",
      icon: <Brain size={18} />,
    },
    {
      title: "Orthopedics",
      description:
        "Focusing on injuries and diseases of your body's musculoskeletal system and joint health.",
      image:
        "https://images.unsplash.com/photo-1597764690472-ec054f1c8637?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9ydGhvcGVkaWNzfGVufDB8fDB8fHww",
      icon: <Bone size={18} />,
    },
    {
      title: "Oncology",
      description:
        "Comprehensive cancer treatment and support services with cutting-edge medical protocols.",
      image:
        "https://images.unsplash.com/photo-1598885159329-9377168ac375?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: <Activity size={18} />,
    },
    {
      title: "Radiology",
      description:
        "State-of-the-art diagnostic imaging services including MRI, CT scans, and Ultrasound.",
      image:
        "https://images.unsplash.com/photo-1583911860205-72f8ac8ddcbe",
      icon: <Scan size={18} />,
    },
    {
      title: "Emergency Care",
      description:
        "24/7 immediate medical attention for critical injuries and life-threatening conditions.",
      image:
        "https://plus.unsplash.com/premium_photo-1672759455710-70c879daf721?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZW1lcmdlbmN5JTIwY2FyZXxlbnwwfHwwfHx8MA%3D%3D",
      icon: <Ambulance size={18} />,
    },
    {
      title: "Maternity",
      description:
        "Comprehensive prenatal, delivery, and postnatal care for mothers and their newborns.",
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309",
      icon: <PersonStanding size={18} />,
    },
    {
      title: "Physical Therapy",
      description:
        "Professional rehabilitation services to help you regain mobility and strength after injury.",
      image:
        "https://images.unsplash.com/photo-1586401100295-7a8096fd231a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGh5c2lvdGhlcmFweXxlbnwwfHwwfHx8MA%3D%3D",
      icon: <Waves size={18} />,
    },
  ];

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filteredServices = normalizedQuery
    ? services.filter((service) =>
        service.title.toLowerCase().includes(normalizedQuery)
      )
    : services;

  return (
    <section className="services-grid">
      <div className="grid-container">
        {filteredServices.length === 0 ? (
          <p className="no-results">No services found.</p>
        ) : (
          filteredServices.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              icon={service.icon}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default ServicesGrid;
