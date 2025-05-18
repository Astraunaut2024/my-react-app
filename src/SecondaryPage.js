import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./SecondaryPage.css";

const SecondaryPage = () => {
  const [user, setUser] = useState(null);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    const farmerProfile = JSON.parse(localStorage.getItem("farmerProfile"));
    const investorProfile = JSON.parse(localStorage.getItem("investorProfile"));
    const loggedInUser = farmerProfile || investorProfile;

    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  return (
    <div className="secondary-page">
      {/* Navigation Bar */}
      <nav className="secondary-navbar">
        <div className="nav-left">
          <img src="./logo.jpg" alt="Logo" className="nav-logo" />
        </div>
        <div className="nav-center">
          <button onClick={() => document.getElementById("home").scrollIntoView({ behavior: "smooth" })}>Home</button>
          <button onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}>About Us</button>
          <button onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>Contact</button>
        </div>
        <div className="nav-right">
          <FaUserCircle className="profile-icon" onClick={() => setShowProfile(!showProfile)} />
          {showProfile && user && (
            <div className="profile-popup">
              <h3>User Profile</h3>
              <p><strong>Name:</strong> {user.fullName || user.contactPersonName}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone:</strong> {user.contactNumber}</p>
            </div>
          )}
        </div>
      </nav>

      <div className="dashboard-container">
        {/* Sidebar */}
        <div className="secondary-sidebar">
          <h2>Dashboard</h2>
          <Link to= "/farmersdashboard">
          <button>Farmer Dashboard</button>
          </Link>
          {/* Link to Investor Dashboard */}
          <Link to="/investordashboard">
            <button>Investor Dashboard</button>
          </Link>
          {/* Link to Selling Dashboard */}
          <Link to="/sellingdashboard">
            <button>Selling Dashboard</button>
          </Link>
        </div>

        {/* Main Content */}
        <div className="secondary-main-content">
          <section id="home" className="home-section">
            <h1>Welcome to Agri-Invest</h1>
            <p>
              Agri-Invest bridges the financial gap between farmers and investors, 
              leveraging data-driven farming and innovative funding solutions.
            </p>
          </section>

          <section id="about" className="about-section">
            <h2>About Agri-Invest</h2>
            <p>
              We create a sustainable ecosystem where farmers thrive and investors 
              benefit while contributing to global food security.
            </p>
          </section>

          <section id="contact" className="contact-section">
            <h2>Contact Us</h2>
            <p>📍 Agri-Invest Pvt Ltd, Green Valley, Bangalore, India</p>
            <p>📞 +91 9876543210</p>
            <p>📧 support@agri-invest.com</p>
          </section>

          {/* Footer */}
          <footer className="secondary-footer">
            &copy; {new Date().getFullYear()} Agri-Invest. All Rights Reserved.
          </footer>
        </div>
      </div>
    </div>
  );
};

export default SecondaryPage;
