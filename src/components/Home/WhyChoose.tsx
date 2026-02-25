import "./WhyChoose.css";

export default function WhyChoose() {
  return (
    <section className="hf-why">
      <div className="hf-why-header">
        <h2>Why Choose HealthFirst?</h2>
        <p>
          We set the benchmark for excellence in healthcare through innovation, technology, and patient-centered service.
        </p>
      </div>

      <div className="hf-why-grid">
        <div className="hf-why-card">
          <img src="https://images.unsplash.com/photo-1693264882139-6a308957c9ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMzfHx8ZW58MHx8fHx8" alt="Advanced medical technology" />
          <h3>Advanced Technology</h3>
          <p>Equipped with the latest diagnostic and surgical robotic systems for precision care and faster recovery.</p>
        </div>

        <div className="hf-why-card">
          <img src="https://plus.unsplash.com/premium_photo-1681996484614-6afde0d53071?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D" alt="Expert specialist doctors" />
          <h3>Expert Specialists</h3>
          <p>Our doctors are board-certified leaders in their respective fields with decades of collective experience.</p>
        </div>

        <div className="hf-why-card">
          <img src="https://plus.unsplash.com/premium_photo-1681995206380-babb9b6debc6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGhvc3BpdGFsfGVufDB8fDB8fHww" alt="Patient-first hospital care" />
          <h3>Patient-First Care</h3>
          <p>We prioritize your comfort and peace of mind, offering personalized treatment plans for every patient.</p>
        </div>
      </div>

      <div className="hf-why-stats" aria-label="Hospital key stats">
        <div className="hf-why-stat">
          <h4>25k+</h4>
          <p>Surgeries Performed</p>
        </div>
        <div className="hf-why-stat">
          <h4>150+</h4>
          <p>Expert Doctors</p>
        </div>
        <div className="hf-why-stat">
          <h4>98%</h4>
          <p>Patient Satisfaction</p>
        </div>
        <div className="hf-why-stat">
          <h4>24/7</h4>
          <p>Emergency Response</p>
        </div>
      </div>
    </section>
  );
}