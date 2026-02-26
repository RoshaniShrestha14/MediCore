import React, { useState } from "react";
import DoctorCard from "./DoctorCard";
import "./DoctorGrid.css";
import { doctorsData } from "./doctorsData";


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
    <section className="doctor-grid-section" data-scroll="doctor-list">
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
