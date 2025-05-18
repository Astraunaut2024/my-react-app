import React from "react";
import { useNavigate } from "react-router-dom";
import "./UserTypeSelection.css"; // Import CSS for styling

const UserTypeSelection = () => {
  const navigate = useNavigate();

  const handleUserTypeSelect = (type) => {
    navigate(`/${type}`); // Redirect based on user type
  };

  return (
    <div className="user-type-container">
      <h1 className="page-title">User Selection</h1> {/* Title at the top */}
      <div className="user-type-options">
        <div className="user-type-card" onClick={() => handleUserTypeSelect("farmer")}> 
          <img src="./farmer.jpg" alt="Farmer" className="user-image" />
          <h2>Farmer</h2>
        </div>
        <div className="user-type-card" onClick={() => handleUserTypeSelect("investor")}> 
          <img src="./investor.jpg" alt="Investor" className="user-image" />
          <h2>Investor</h2>
        </div>
      </div>
    </div>
  );
};

export default UserTypeSelection;
