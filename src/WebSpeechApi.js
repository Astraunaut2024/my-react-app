import React, { useState } from "react";

const FarmerForm = () => {
  const [formData, setFormData] = useState({ name: "", location: "" });

  const startListening = (field) => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US"; // Change this for local languages
    recognition.start();

    recognition.onresult = (event) => {
      setFormData((prev) => ({ ...prev, [field]: event.results[0][0].transcript }));
    };

    recognition.onerror = (event) => {
      alert("Error: " + event.error);
    };
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-lg rounded-xl">
      <h2 className="text-xl font-bold mb-4">Farmer Registration</h2>
      
      {/* Farmer Name */}
      <label className="block font-medium">Farmer Name:</label>
      <div className="flex items-center space-x-2">
        <input 
          type="text" 
          value={formData.name} 
          placeholder="Speak your name"
          className="border p-2 w-full rounded-md" 
          readOnly 
        />
        <button 
          onClick={() => startListening("name")} 
          className="bg-blue-500 text-white p-2 rounded-md"
        >
          🎤
        </button>
      </div>

      {/* Location */}
      <label className="block font-medium mt-4">Location:</label>
      <div className="flex items-center space-x-2">
        <input 
          type="text" 
          value={formData.location} 
          placeholder="Speak your location"
          className="border p-2 w-full rounded-md" 
          readOnly 
        />
        <button 
          onClick={() => startListening("location")} 
          className="bg-green-500 text-white p-2 rounded-md"
        >
          🎤
        </button>
      </div>
    </div>
  );
};

export default WebSpeecApi;
