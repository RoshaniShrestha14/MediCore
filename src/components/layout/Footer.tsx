import React from "react"; 
import "./Footer.css";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const quickLinks = [
    { label: "Book Appointment", to: "/appointment" },
    { label: "Find a Specialist", to: "/doctor#doctor-list" },
    { label: "Virtual Care", to: "/services" },
    { label: "Health Library", to: "/about" },
    { label: "Bill Pay", to: "/appointment" },
  ];

  const serviceLinks = [
    { label: "Cardiology", to: "/services" },
    { label: "Neurology", to: "/services" },
    { label: "Pediatrics", to: "/services" },
    { label: "Orthopedics", to: "/services" },
    { label: "Oncology", to: "/services" },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2 className="footer-logo">
            Health<span className="highlight">First</span>
          </h2>
          <p>
            Leading the way in medical excellence since 1995. We are committed
            to providing world-class health services to our local community.
          </p>
          <div className="social-icons">
            <div className="icon-box"><Facebook size={22} /></div>
            <div className="icon-box"><Instagram size={22} /></div>
            <div className="icon-box"><Mail size={22} /></div>
          </div>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="footer-nav-link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-services">
          <h4>Our Services</h4>
          <ul>
            {serviceLinks.map((service) => (
              <li key={service.label}>
                <Link to={service.to} className="footer-nav-link">
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Info</h4>
          <div className="contact-item">
            <div className="contact-icon"><MapPin size={18} /></div>
            <div>123 Medical Drive, Health City, ST 54321</div>
          </div>
          <div className="contact-item">
            <div className="contact-icon"><Phone size={18} /></div>
            <div>(555) 123-4567</div>
          </div>
          <div className="contact-item">
            <div className="contact-icon"><Mail size={18} /></div>
            <div>info@healthfirst.org</div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2024 HealthFirst Hospital System. All rights reserved.</span>
        <div className="bottom-links">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Accessibility</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
