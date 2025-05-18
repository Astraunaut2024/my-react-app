import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Correct import
import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Use navigate

  const handleLogin = (e) => {
    e.preventDefault();

    // Get stored user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    // Check if the stored credentials match
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      navigate("/secondarypage"); // Redirect to HomePage if login is successful
    } else {
      alert("Invalid credentials, please try again.");
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login-button">Login</button>
      </form>
      <div className="signup-link">
        Don't have an account? <a href="/signup">Sign Up</a>
      </div>
    </div>
  );
};

export default LoginPage;
