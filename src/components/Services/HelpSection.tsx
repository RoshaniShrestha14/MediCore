import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import "./HelpSection.css";
const HelpSection: React.FC = () => {
  return (
    <section className="help-section">
      <div className="help-container">
        <div>
          <h2>Need Help Choosing?</h2>
          <p>
            If you are unsure which department fits your needs, our medical
            consultants are here to guide you. Contact us for a preliminary
            assessment.
          </p>
        </div>

        <div className="help-buttons">
          <button className="outline-btn">
            <Phone size={16} /> Call Now
          </button>
          <button className="primary-btn">
            <MessageCircle size={16} /> Online Inquiry
          </button>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
