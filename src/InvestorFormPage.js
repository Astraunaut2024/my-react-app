import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./InvestorFormPage.css";

const InvestorFormPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    investorType: "", // Individual or Company/Trust

    // Personal Details
    fullName: "",
    age: "",
    gender: "",
    contactNumber: "",
    email: "",
    idNumber: "",
    address: "",
    occupation: "",

    // Organization Details
    organizationName: "",
    organizationType: "",
    registrationNumber: "",
    gstNumber: "",
    contactPersonName: "",
    designation: "",

    // Investment Details
    investmentAmount: "",
    preferredCrop: "",
    investmentDuration: "",

    // Bank Details
    accountHolderName: "",
    accountNumber: "",
    ifscCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save form data to localStorage or make an API call
    localStorage.setItem("investorProfile", JSON.stringify(formData));
    alert("Investor Profile Submitted Successfully!");
    navigate("/secondarypage"); // Redirect to Investor Dashboard
  };

  return (
    <div className="investor-form-container">
      <h1>Investor Profile Form</h1>
      <form onSubmit={handleSubmit}>
        <section>
          <h2>Investor Type</h2>
          <label>
            <input
              type="radio"
              name="investorType"
              value="Individual"
              checked={formData.investorType === "Individual"}
              onChange={handleChange}
            />
            Individual Investor
          </label>
          <label>
            <input
              type="radio"
              name="investorType"
              value="Company"
              checked={formData.investorType === "Company"}
              onChange={handleChange}
            />
            Company / Trust / NGO
          </label>
        </section>

        {formData.investorType === "Individual" && (
          <section>
            <h2>Personal Details</h2>
            <div className="form-group">
              <label>Full Name:</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Age:</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Gender:</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label>Contact Number:</label>
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Aadhar / PAN Number:</label>
              <input
                type="text"
                name="idNumber"
                value={formData.idNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Address:</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Occupation / Business Type:</label>
              <input
                type="text"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
              />
            </div>
          </section>
        )}

        {formData.investorType === "Company" && (
          <section>
            <h2>Organization Details</h2>
            <div className="form-group">
              <label>Organization Name:</label>
              <input
                type="text"
                name="organizationName"
                value={formData.organizationName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Type of Organization:</label>
              <input
                type="text"
                name="organizationType"
                value={formData.organizationType}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Registration Number:</label>
              <input
                type="text"
                name="registrationNumber"
                value={formData.registrationNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>GST Number (if applicable):</label>
              <input
                type="text"
                name="gstNumber"
                value={formData.gstNumber}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Contact Person Name:</label>
              <input
                type="text"
                name="contactPersonName"
                value={formData.contactPersonName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Designation:</label>
              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
              />
            </div>
          </section>
        )}

        <section>
          <h2>Investment Details</h2>
          <div className="form-group">
            <label>Investment Amount (₹):</label>
            <input
              type="number"
              name="investmentAmount"
              value={formData.investmentAmount}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Preferred Crop Type:</label>
            <input
              type="text"
              name="preferredCrop"
              value={formData.preferredCrop}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Investment Duration:</label>
            <input
              type="text"
              name="investmentDuration"
              value={formData.investmentDuration}
              onChange={handleChange}
            />
          </div>
        </section>

        <div className="form-group">
          <button type="submit">Submit Investment</button>
        </div>
      </form>
    </div>
  );
};

export default InvestorFormPage;
