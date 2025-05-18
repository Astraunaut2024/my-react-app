import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const FarmersDashboard = () => {
  const [district, setDistrict] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleFetchWeather = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/weather?district=${district}`);
      if (!response.ok) throw new Error("API request failed");
      
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      alert(`Error fetching data: ${error.message}`);
    }
  };

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Farmers Dashboard</h1>

      {/* Statistics Section */}
      <div className="row justify-content-center text-center">
        <div className="col-md-3 col-sm-6 bg-success text-white p-4 m-2 rounded shadow">
          <h4>Total Farmers Benefited</h4>
          <h3>1,500+</h3>
        </div>
        <div className="col-md-3 col-sm-6 bg-warning text-dark p-4 m-2 rounded shadow">
          <h4>Total Investment Raised</h4>
          <h3>$5M+</h3>
        </div>
        <div className="col-md-3 col-sm-6 bg-info text-white p-4 m-2 rounded shadow">
          <h4>Ongoing Projects</h4>
          <h3>250</h3>
        </div>
      </div>

      {/* Weather Update */}
      <div className="mt-4 p-4 bg-light">
        <h2 className="text-primary">Weather Update</h2>

        {/* District Selection */}
        <div className="mb-3">
          <label className="form-label fw-bold">Select District:</label>
          <select
            className="form-select w-50"
            onChange={(e) => setDistrict(e.target.value)}
            value={district}
          >
            <option value="">Select a district</option>
            <option value="Chennai">Chennai</option>
            <option value="Coimbatore">Coimbatore</option>
            <option value="Madurai">Madurai</option>
          </select>
          <button className="btn btn-primary mt-2" onClick={handleFetchWeather}>
            Get Suggestions
          </button>
        </div>

        {/* Weather Data Table */}
        {weatherData && (
          <div className="table-responsive">
            <table className="table table-bordered table-hover bg-white">
              <thead className="table-primary">
                <tr>
                  <th>District</th>
                  <th>Temperature (°C)</th>
                  <th>Humidity (%)</th>
                  <th>Description</th>
                  <th>Wind Speed (m/s)</th>
                  <th>Pressure (hPa)</th>
                  <th>Suggested Crops</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{district}</td>
                  <td>{weatherData.temperature}°C</td>
                  <td>{weatherData.humidity}%</td>
                  <td>{weatherData.description}</td>
                  <td>{weatherData.wind_speed} m/s</td>
                  <td>{weatherData.pressure} hPa</td>
                  <td>{weatherData.suggested_crops?.join(", ") || "N/A"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Google Maps */}
      <div className="mt-4 text-center">
        <h2>Farmer Properties</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d271291.9740263628!2d80.20229713282464!3d13.047464849938471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1741531676028!5m2!1sen!2sin"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Success Stories */}
      <div className="mt-4">
        <h2>Success Stories</h2>
        <ul className="list-group">
          <li className="list-group-item list-group-item-success">
            <strong>Ramesh Kumar:</strong> "With Agri Invest, I increased my farm's yield by 50%!"
          </li>
          <li className="list-group-item list-group-item-success">
            <strong>Saritha Devi:</strong> "Investing through Agri Invest helped me expand my farmland!"
          </li>
        </ul>
      </div>

      {/* FAQ Section */}
      <div className="mt-4">
        <h2>FAQ</h2>
        <div className="accordion" id="faqAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                How do I invest in farmland?
              </button>
            </h2>
            <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
              <div className="accordion-body">Investing is easy! Choose a location, crop, and make a contribution.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmersDashboard;
