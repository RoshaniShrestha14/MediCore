import React, { useState } from "react";
import DoctorCard from "./DoctorCard";
import "./DoctorGrid.css";

const doctorsData = [
  {
    name: "Dr. Marcus Thorne",
    role: "Senior Cardiologist",
    degree: "MBBS, MD - Cardiology, FACC",
    rating: 4.9,
    experience: "12+ Years Experience",
    languages: "English, Spanish",
    image: "https://i.pravatar.cc/300?img=11"
  },
  {
    name: "Dr. Sarah Jenkins",
    role: "Pediatrics Specialist",
    degree: "MBBS, DCH, MD - Pediatrics",
    rating: 5.0,
    experience: "8 Years Experience",
    languages: "English, French",
    image: "https://i.pravatar.cc/300?img=47"
  },
  {
    name: "Dr. Alan Varga",
    role: "Neurologist",
    degree: "MBBS, MS, DM - Neurology",
    rating: 4.8,
    experience: "15+ Years Experience",
    languages: "English, German",
    image: "https://i.pravatar.cc/300?img=32"
  },
  {
    name: "Dr. Elena Rodriguez",
    role: "Dermatology Head",
    degree: "MBBS, MD - Dermatology",
    rating: 4.7,
    experience: "10 Years Experience",
    languages: "Spanish, English",
    image: "https://i.pravatar.cc/300?img=5"
  }
];

const itemsPerPage = 4;

const DoctorGrid: React.FC = () => {
  const [sort, setSort] = useState("recommended");
  const [currentPage, setCurrentPage] = useState(1);

  const sortedDoctors = [...doctorsData].sort((a, b) =>
    sort === "rating" ? b.rating - a.rating : 0
  );

  const totalPages = Math.ceil(sortedDoctors.length / itemsPerPage);

  const paginatedDoctors = sortedDoctors.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="doctor-grid-section">
      <div className="top-bar">
        <p className="doctor-count">Showing <strong>{sortedDoctors.length}</strong> Expert Doctors</p>

        <div className="sort-container">
          <label>Sort by:</label>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="sort-select"
          >
            <option value="recommended">Most Recommended</option>
            <option value="rating">Highest Rating</option>
          </select>
        </div>
      </div>

      <div className="grid">
        {paginatedDoctors.map((doc, index) => (
          <DoctorCard key={index} doctor={doc} />
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={currentPage === i + 1 ? "active" : ""}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default DoctorGrid;
