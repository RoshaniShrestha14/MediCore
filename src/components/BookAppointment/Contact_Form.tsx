import React, { useState } from "react";
import type { FormEvent } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import "./Contact.css";

const Contact_Form: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    department: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Enter a valid email";

    if (!formData.department)
      newErrors.department = "Please select a department";

    if (!formData.subject.trim())
      newErrors.subject = "Subject is required";

    if (!formData.message.trim())
      newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess("");

    if (!validate()) return;

    setSuccess("Your message has been sent successfully!");
    setFormData({
      fullName: "",
      email: "",
      department: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="contact-section">
      <div className="contact-header">
        <h1>Contact Our Team</h1>
        <p>
          We are committed to providing you with the highest standard of
          medical care. Reach out to us for appointments, inquiries, or
          medical assistance.
        </p>
      </div>

      <div className="contact-grid">
        {/* LEFT FORM */}
        <div className="contact-card">
          <h2>Send us a Message</h2>
          <p className="card-sub">
            Fill out the form below and our administrative team will respond
            within 24 hours.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Liza Maharjan"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && <span>{errors.fullName}</span>}
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Liza@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span>{errors.email}</span>}
              </div>
            </div>

            <div className="form-group">
              <label>Select Department</label>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
              >
                <option value="">General Inquiry</option>
                <option value="emergency">Emergency</option>
                <option value="appointments">Appointments</option>
                <option value="billing">Billing</option>
              </select>
              {errors.department && <span>{errors.department}</span>}
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="How can we help you?"
                value={formData.subject}
                onChange={handleChange}
              />
              {errors.subject && <span>{errors.subject}</span>}
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                rows={5}
                placeholder="Please describe your inquiry in detail..."
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <span>{errors.message}</span>}
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>

            {success && <p className="success-msg">{success}</p>}
          </form>
        </div>

        {/* RIGHT SIDE */}
        <div className="right-column">
          <div className="contact-card">
            <h3>Contact Information</h3>

            <div className="info-item">
              <Phone size={18} />
              <div>
                <strong>Phone Numbers</strong>
                <p>Main Line: (555) 123-4567</p>
                <p className="red">ER Hot-line: (555) 911-0000</p>
              </div>
            </div>

            <div className="info-item">
              <Mail size={18} />
              <div>
                <strong>Email Address</strong>
                <p>info@cityhealth.hospital</p>
                <p>appointments@cityhealth.hospital</p>
              </div>
            </div>

            <div className="info-item">
              <MapPin size={18} />
              <div>
                <strong>Physical Address</strong>
                <p>
                  1230 Healthcare Plaza, Medical District,
                  <br />
                  City Center, NY 10001
                </p>
              </div>
            </div>
          </div>

          <div className="contact-card">
            <h3>
              <Clock size={18} /> Facility Hours
            </h3>

            <div className="hours-row">
              <span>Emergency Care</span>
              <span className="red">24 / 7 Available</span>
            </div>
            <div className="hours-row">
              <span>Outpatient Services</span>
              <span>8:00 AM - 8:00 PM</span>
            </div>
            <div className="hours-row">
              <span>Visiting Hours</span>
              <span>10:00 AM - 6:00 PM</span>
            </div>
            <div className="hours-row">
              <span>Pharmacy</span>
              <span>24 Hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact_Form;