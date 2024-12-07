import React, { useState } from "react";
import "../styles/ContactUs.css";
import { submitContactForm } from "../api"; // Import the API call

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null); // Track submission status
  const [loading, setLoading] = useState(false); // Track loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("All fields are required.");
      return;
    }

    try {
      setLoading(true);
      await submitContactForm(formData); // Submit form data to the backend
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setStatus("Failed to send the message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact">
      <form onSubmit={handleSubmit}>
        <h2>Contact Us</h2>
        {status && (
          <p
            className={`status ${
              status.includes("successfully") ? "success" : "error"
            }`}
          >
            {status}
          </p>
        )}
        <div className="input-box">
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            type="text"
            name="name"
            className="field"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-box">
          <label htmlFor="email">E-mail Address</label>
          <input
            id="email"
            type="email"
            name="email"
            className="field"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-box">
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            className="field content"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
