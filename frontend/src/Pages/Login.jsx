import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.email === "test@example.com" && formData.password === "password") {
      alert("Login successful!");
      setFormData({ email: "", password: "" });
      setError("");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
        <div className="login-box">
            <h2>Login here</h2>
            <p>Welcome back</p>
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
            <p className="forgot-password">Forgot your password?</p>
            <button type="submit" className="login-button">Sign in</button>
            </form>
            <p className="create-account">
                <Link to="/register" className="register-link">
                Create new account
            </Link>
            </p>
        </div>
    </div>
  );
};

export default Login;
