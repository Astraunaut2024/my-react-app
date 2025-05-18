import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Correct import for routing
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import OTPPage from "./OTPPage";
import HomePage from "./Homepage";
import UserTypeSelection from "./UserTypeSelection";
import FarmerFormPage from "./FarmerFormPage";
import InvestorFormPage from "./InvestorFormPage";
import SecondaryPage from "./SecondaryPage";
import InvestorDashboard from "./InvestorDashboard";
import FarmersDashboard from "./FarmersDashboard";
import SellingDashboard from "./SellingDashboard";
import PaymentPage from "./PaymentPage";
import { verifyLandWithGovt } from "./verifyland";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Default route for HomePage */}
        <Route path="/" element={<HomePage />} />

        {/* Routes for login and signup */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/otp" element={<OTPPage />} />
        <Route path="/user-type" element={<UserTypeSelection />} />
        <Route path="/farmer" element={<FarmerFormPage />} />
        <Route path="/investor" element={<InvestorFormPage />} />
        <Route path="/secondarypage" element={<SecondaryPage />} />
        <Route path="/investordashboard" element={<InvestorDashboard />} />
        <Route path="/farmersdashboard" element={<FarmersDashboard />} />
        <Route path="/sellingdashboard" element={<SellingDashboard />} />
        <Route path="/paymentpage" element={<PaymentPage /> } />
        <Route path="/verifyland" element={<verifyland /> } />
      </Routes>
    </Router>
  );
};

export default App;
