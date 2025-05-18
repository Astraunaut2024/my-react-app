import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Correct import
import "./SignUpPage.css";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // New state for confirm password
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate(); // Use navigate

  const handleSignUp = (e) => {
  e.preventDefault();

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  const user = { name, number, email, password };
  localStorage.setItem("user", JSON.stringify(user));

  navigate("/user-type"); // Redirect to user type selection page
};

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <div className="form-group">
          <label>Name <span className="required">*</span></label>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone no <span className="required">*</span></label>
          <input
            type="tel"
            placeholder="Phone no"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Email ID <span className="required">*</span></label>
          <input
            type="email"
            placeholder="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password <span className="required">*</span></label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Confirm Password <span className="required">*</span></label>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="signup-button">Sign Up</button>
      </form>
      
      <p className="mandatory-note">* - Mandatory fields</p>
    </div>
  );
};

export default SignUpPage;
