import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { extractTextFromImage, verifyLandWithGovt } from "./verifyland";
import "./FarmerFormPage.css";

const FarmerFormPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    landArea: "",
    surveyNumber: "",
    landDocument: null,
  });
  const [uploading, setUploading] = useState(false);
  const [verificationResult, setVerificationResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setFormData({ ...formData, landDocument: file });
  };

  const handleVerifyDocument = async () => {
    if (!formData.landDocument) {
      alert("Please upload a land document.");
      return;
    }

    setUploading(true);
    try {
      // Extract text from the image (OCR)
      const extractedText = await extractTextFromImage(formData.landDocument);
      if (!extractedText) {
        alert("OCR failed to extract text.");
        setUploading(false);
        return;
      }

      // Extract Survey Number from OCR text
      const surveyMatch = extractedText.match(/\b\d{4,}\b/);
      if (!surveyMatch) {
        alert("No survey number detected in the document.");
        setUploading(false);
        return;
      }

      const surveyNumber = surveyMatch[0];
      setFormData({ ...formData, surveyNumber });

      // Verify with government data
      const govtData = await verifyLandWithGovt(surveyNumber);
      if (!govtData) {
        alert("Failed to verify land details with the government.");
        setUploading(false);
        return;
      }

      setVerificationResult(govtData);

      // Validate extracted details with user input
      if (govtData.ownerName !== formData.fullName || govtData.landArea !== formData.landArea) {
        alert("Land verification failed! Details do not match.");
      } else {
        alert("Land verification successful!");
      }
    } catch (error) {
      console.error("Verification error:", error);
    }
    setUploading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("farmerProfile", JSON.stringify(formData));
    alert("Farmer Profile Submitted Successfully!");
    navigate("/secondarypage");
  };

  return (
    <div className="farmer-form-container">
      <h1>Farmer Profile Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Full Name:</label>
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />

        <label>Land Area (in acres):</label>
        <input type="number" name="landArea" value={formData.landArea} onChange={handleChange} required />

        <label>Upload Land Document:</label>
        <input type="file" accept="image/*" onChange={handleFileUpload} required />

        <button type="button" onClick={handleVerifyDocument} disabled={uploading}>
          {uploading ? "Verifying..." : "Verify Land Details"}
        </button>

        {verificationResult && (
          <div className="verification-result">
            <h3>Government Verification:</h3>
            <p><strong>Owner Name:</strong> {verificationResult.ownerName}</p>
            <p><strong>Land Area:</strong> {verificationResult.landArea} acres</p>
          </div>
        )}

        <button type="submit" className="submit-button" disabled={!verificationResult}>
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default FarmerFormPage;
