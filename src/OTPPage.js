import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OTPPage = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleOTPSubmit = (e) => {
    e.preventDefault();
    // Verify OTP
    navigate("/home"); // Redirect to home page after OTP verification
  };

  return (
    <div className="otp-container">
      <h1>Enter OTP</h1>
      <form onSubmit={handleOTPSubmit}>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />
        <button type="submit">Submit OTP</button>
      </form>
    </div>
  );
};

export default OTPPage;
