import React from "react"; 
import "./Footer.css";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

const Footer: React.FC = () => {
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
            <li>Book Appointment</li>
            <li>Find a Specialist</li>
            <li>Virtual Care</li>
            <li>Health Library</li>
            <li>Bill Pay</li>
          </ul>
        </div>

        <div className="footer-services">
          <h4>Our Services</h4>
          <ul>
            <li>Cardiology</li>
            <li>Neurology</li>
            <li>Pediatrics</li>
            <li>Orthopedics</li>
            <li>Oncology</li>
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
