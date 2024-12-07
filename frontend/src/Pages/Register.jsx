import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Register.css";
import { registerUser } from "../api"; // Import the registration API call

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false); // Add a loading state
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.name || !formData.email || !formData.password) {
      setError("All fields are required.");
      setSuccess("");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      setSuccess("");
      return;
    }

    setLoading(true); // Show loading indicator

    try {
      // Call the backend registration API
      await registerUser({
        username: formData.name, // Updated to match backend field name
        email: formData.email,
        password: formData.password,
      });

      setSuccess("Registration successful! Redirecting to login...");
      setError("");
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      // Redirect to login page after a short delay
      setTimeout(() => navigate("/login"), 3000);
    } catch (err) {
      console.error("Registration failed:", err);
      const serverError = err.response?.data?.error || "Registration failed. Please try again.";
      setError(serverError);
      setSuccess("");
    } finally {
      setLoading(false); // Hide loading indicator
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Username"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}
          <button type="submit" className="register-button" disabled={loading}>
            {loading ? "Processing..." : "Sign up"}
          </button>
        </form>
        <p className="already-account">
          <Link to="/login" className="login-link">
            Already have an account?
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
