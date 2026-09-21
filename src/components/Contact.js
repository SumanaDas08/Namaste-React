import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1>Get in Touch 👋</h1>
        <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-info-item">
            <span className="contact-icon">📍</span>
            <div>
              <h3>Address</h3>
              <p>123 Food Street, Surat, Gujarat 395001</p>
            </div>
          </div>
          <div className="contact-info-item">
            <span className="contact-icon">📞</span>
            <div>
              <h3>Phone</h3>
              <p>+91 98765 43210</p>
            </div>
          </div>
          <div className="contact-info-item">
            <span className="contact-icon">✉️</span>
            <div>
              <h3>Email</h3>
              <p>support@namasteFood.com</p>
            </div>
          </div>
          <div className="contact-info-item">
            <span className="contact-icon">🕐</span>
            <div>
              <h3>Working Hours</h3>
              <p>Mon - Sun: 9:00 AM – 11:00 PM</p>
            </div>
          </div>
        </div>

        <div className="contact-form-box">
          {submitted ? (
            <div className="contact-success">
              <span style={{ fontSize: "48px" }}>🎉</span>
              <h2>Message Sent!</h2>
              <p>Thanks for reaching out. We'll get back to you shortly.</p>
              <button className="filter-btn" onClick={() => setSubmitted(false)}>Send Another</button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <h2>Send a Message</h2>
              <div className="form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  rows="5"
                  placeholder="Write your message here..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                />
              </div>
              <button type="submit" className="contact-submit-btn">Send Message 🚀</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
