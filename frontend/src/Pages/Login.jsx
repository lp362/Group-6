import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";
import { loginUser } from "../api"; // Import the login API call

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.email || !formData.password) {
      setError("Both email and password are required.");
      return;
    }

    try {
      setLoading(true);
      setError(""); // Clear previous errors

      // Call the backend login API
      const user = await loginUser(formData);
      alert(`Welcome back, ${user.username || "user"}!`);
      setFormData({ email: "", password: "" });
      navigate("/"); // Redirect to the home page after login
    } catch (err) {
      console.error("Login failed:", err);
      const serverError = err.response?.data?.error || "Invalid email or password";
      setError(serverError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <p>Welcome back! Please log in to your account.</p>
        <form onSubmit={handleSubmit}>
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
          {error && <p className="error">{error}</p>}
          <p className="forgot-password">
            <Link to="/forgot-password" className="forgot-password-link">
              Forgot your password?
            </Link>
          </p>
          <button type="submit" className="login-button" disabled={loading}>
            {loading ? "Logging in..." : "Sign in"}
          </button>
        </form>
        <p className="create-account">
          Don't have an account?{" "}
          <Link to="/register" className="register-link">
            Create one here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
