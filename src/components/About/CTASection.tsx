import React from "react";
import "./About.css";

const CTASection: React.FC = () => {
  return (
    <section className="about-cta-wrapper">
      <div className="cta-container">
        <div className="cta-left">
          <h2>Ready to Experience Better Care?</h2>
          <p>
            Visit our main campus or any of our satellite clinics.
            We are here for you 24 hours a day, 7 days a week.
          </p>

          <div className="cta-contact">
            <div className="cta-item">
              <span className="material-icons">location_on</span>
              <span>123 Medical Plaza, Health City</span>
            </div>

            <div className="cta-item">
              <span className="material-icons">phone</span>
              <span>+1 (555) 000-1234</span>
            </div>
          </div>

          <button className="cta-button">
            Find Directions
          </button>
        </div>

        <div className="cta-right">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjRJqAN8nNXWTizp87pz6I4CVgpyowIdAmk_7IQrRwVUhWnFrrXd_wvofNEoaJPvJNoro7oNMFFTpeTbSlFBSwaXFDQGMdwWXGdNJgD9saOWCH7W9IHwk4yOBfXsHnpEw8wu0V5upWv_68N9wflKDdRF9sqkqoF_GGYRlCooc_6uXymA9cu-nBWvjzqdpG4BR2T-xI72hbM7_6xYI_9CNzYfvNV-Mr1iiVan5pRoRQeReQp5fw6lJgiFyqF-b-Q0M6AaIxk6MbFB8"
            alt="Hospital Location"
          />
          <div className="cta-overlay"></div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;