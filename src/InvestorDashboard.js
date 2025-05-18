import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { FaStar, FaUsers, FaMoneyBillWave, FaBell, FaCommentsDollar } from "react-icons/fa";
import { AiOutlineFund } from "react-icons/ai";
import './InvestorDashboard.css';

const InvestorDashboard = () => {
  const [investments, setInvestments] = useState([]);
  const [showInvestorTable, setShowInvestorTable] = useState(false);
  const [reviews, setReviews] = useState([
    { name: "Rahul Sharma", rating: 5, feedback: "Great platform! High ROI." },
    { name: "Ananya Verma", rating: 4, feedback: "Secure and easy to invest." },
  ]);
  const [notifications, setNotifications] = useState([
    "Your investment in Dairy Farming has been approved.",
    "New opportunity: Organic Cotton Farming available now!",
  ]);

  useEffect(() => {
    // Simulated API call
    setInvestments([
      { name: "Wheat Farming", amount: 50000 },
      { name: "Dairy Farming", amount: 75000 },
      { name: "Organic Fruits", amount: 62000 },
    ]);
  }, []);

  const investmentData = [
    { month: "Jan", investment: 50000 },
    { month: "Feb", investment: 70000 },
    { month: "Mar", investment: 65000 },
    { month: "Apr", investment: 85000 },
  ];

  const investorList = [
    { name: "Rajesh Kumar", investment: "₹1,00,000", category: "Organic Farming" },
    { name: "Priya Sharma", investment: "₹75,000", category: "Dairy Farming" },
    { name: "Amit Verma", investment: "₹85,000", category: "Agri-Tech" },
  ];

  const successStories = [
    {
      name: "Mr. Ramesh Patel",
      story: "Invested in Organic Farming and achieved 30% ROI within 6 months.",
    },
    {
      name: "Ms. Priya Sen",
      story: "Successfully supported the Dairy Industry, enabling rural employment.",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-green-600 mb-6">Investor Dashboard</h1>

      {/* Overview Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow flex items-center">
          <FaMoneyBillWave className="text-green-500 text-3xl mr-3" />
          <div>
            <p className="text-xl font-bold">₹5,00,000+</p>
            <p>Total Funds Invested</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow flex items-center cursor-pointer" onClick={() => setShowInvestorTable(!showInvestorTable)}>
          <FaUsers className="text-blue-500 text-3xl mr-3" />
          <div>
            <p className="text-xl font-bold">120</p>
            <p>Number of Investors</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow flex items-center">
          <AiOutlineFund className="text-yellow-500 text-3xl mr-3" />
          <div>
            <p className="text-xl font-bold">30+</p>
            <p>Investment Categories</p>
          </div>
        </div>
      </div>

      {/* Investor Table */}
      {showInvestorTable && (
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h2 className="text-xl font-bold mb-4">Investor List</h2>
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-3">Name</th>
                <th className="p-3">Investment Amount</th>
                <th className="p-3">Category</th>
              </tr>
            </thead>
            <tbody>
              {investorList.map((investor, index) => (
                <tr key={index} className="border-t">
                  <td className="p-3">{investor.name}</td>
                  <td className="p-3">{investor.investment}</td>
                  <td className="p-3">{investor.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Investment Trend Chart */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-bold mb-4">Investment Growth Over Time</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={investmentData}>
            <XAxis dataKey="month" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="investment" stroke="#82ca9d" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Live Investment Feed */}
      <div className="bg-white p-6 rounded-lg shadow mb-6 overflow-hidden">
        <h2 className="text-xl font-bold mb-4">Live Investment Feed</h2>
        <marquee behavior="scroll" direction="left">
          Rajesh Kumar invested ₹1,00,000 in Organic Farming. | Priya Sharma invested ₹75,000 in Dairy Farming. | Amit Verma invested ₹85,000 in Agri-Tech.
        </marquee>
      </div>

      {/* Notifications */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-bold mb-4">Notifications</h2>
        <ul>
          {notifications.map((notification, index) => (
            <li key={index} className="p-2 border-b last:border-b-0">{notification}</li>
          ))}
        </ul>
      </div>

      {/* Investor Reviews */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-bold mb-4">Investor Reviews</h2>
        {reviews.map((review, index) => (
          <div key={index} className="mb-4">
            <p className="font-semibold">{review.name}</p>
            <div className="flex">
              {[...Array(review.rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500" />
              ))}
            </div>
            <p>{review.feedback}</p>
          </div>
        ))}
      </div>

      {/* Success Stories */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-bold mb-4">Investor Success Stories</h2>
        {successStories.map((story, index) => (
          <div key={index} className="mb-4">
            <p className="font-semibold">{story.name}</p>
            <p>{story.story}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvestorDashboard;