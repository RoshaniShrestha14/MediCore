import React from "react";
import "./About.css";

const HistorySection: React.FC = () => {
  return (
    <section className="history-section">
      <div className="history-image">
        <img
          src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9zcGl0YWx8ZW58MHx8MHx8fDA%3D"
          alt="Hospital building"
        />

        <div className="history-quote-card">
          <p>
            “Our journey began with a single mission: to serve the community
            when they need it most.”
          </p>
          <strong>— Dr. Arthur Sterling, Founder</strong>
        </div>
      </div>

      <div className="history-content">
        <span className="section-tag">Our History</span>
        <h2>Legacy of Care and Medical Innovation</h2>
        <p>
          Founded in 1974, MediCore Hospital began as a small community clinic
          dedicated to rural health. Over the decades, we have evolved into a
          state-of-the-art multi-specialty medical center, consistently pushing
          the boundaries of medical science.
        </p>

        <p>
          Today, we stand as a beacon of hope and healing, equipped with the
          latest diagnostic technology and staffed by some of the world&apos;s
          leading medical experts. Our growth has been fueled by one constant:
          an unwavering commitment to the people we serve.
        </p>

        <div className="history-accreditation">
          <span className="accreditation-label">Accredited by</span>
          <div className="accreditation-tags">
            <span className="accreditation-tag">JCI ACCREDITED</span>
            <span className="accreditation-tag">ISO 9001:2015</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;