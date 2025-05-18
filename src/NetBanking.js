import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NetBanking = () => {
  const navigate = useNavigate();
  const [selectedBank, setSelectedBank] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  const handlePayment = () => {
    if (selectedBank && accountNumber) {
      alert("Payment successful via " + selectedBank);
      navigate("/"); // Redirect to homepage after payment
    } else {
      alert("Please select a bank and enter account number.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-bold text-center mb-4">Net Banking Payment</h2>
        
        <label className="block mb-2">Select Your Bank:</label>
        <select
          className="w-full p-2 border rounded mb-4"
          value={selectedBank}
          onChange={(e) => setSelectedBank(e.target.value)}
        >
          <option value="">-- Select Bank --</option>
          <option value="State Bank of India">State Bank of India</option>
          <option value="HDFC Bank">HDFC Bank</option>
          <option value="ICICI Bank">ICICI Bank</option>
          <option value="Axis Bank">Axis Bank</option>
        </select>

        <label className="block mb-2">Account Number:</label>
        <input
          type="text"
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter Account Number"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
        />

        <button
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
          onClick={handlePayment}
        >
          Proceed to Pay
        </button>
      </div>
    </div>
  );
};

export default NetBanking;
