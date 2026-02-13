import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.png";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Find a Doctor", to: "/doctor" },
  ];

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo-section">
          <img src={logo} alt="MediCore Logo" />
          <span className="logo-text">MediCore</span>
        </div>

        {/* Desktop Nav */}
        <nav className="nav-desktop">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className={`nav-link ${
                location.pathname === link.to ? "active" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button (Desktop) */}
        <div className="cta-wrapper">
          <Link to="/appointment" className="appointment-btn">
            Book Appointment
          </Link>
        </div>

        {/* Hamburger */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`nav-mobile ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.to}
            className={`nav-link ${
              location.pathname === link.to ? "active" : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}

        <Link
          to="/appointment"
          className="appointment-btn mobile-btn"
          onClick={() => setMenuOpen(false)}
        >
          Book Appointment
        </Link>
      </div>
    </header>
  );
};

export default Header;
