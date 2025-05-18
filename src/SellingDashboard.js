import React, { useState, useRef, useEffect } from "react";
import { Search, MapPin, ChevronRight, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./SellingDashboard.css";

const farmers = [
  {
    id: 1,
    name: "Kumar Govind",
    address: "2nd street, Amman Nagar, Tanjore",
    distance: "2km",
    products: [
      { name: "Potato", image: "/Potato.jpeg", id: "potato", price: 20 },
      { name: "Onion", image: "/Onion.jpg", id: "onion", price: 25 },
      { name: "Chili", image: "/Chilli.jpg", id: "chili", price: 40 },
    ],
  },
  {
    id: 2,
    name: "Ramaswamy",
    address: "5th street, Cholan Nagar, Tirunelveli",
    distance: "10km",
    products: [
      { name: "Spinach", image: "/Spinach.jpg", id: "spinach", price: 30 },
      { name: "Sweet Corn", image: "/Corn.jpg", id: "corn", price: 35 },
    ],
  },
];

export default function SellingDashboard() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : {};
  });

  const navigate = useNavigate();
  const scrollRefs = useRef({});

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleCartClick = () => {
    navigate("/paymentpage", { state: { cart } });
  };

  const filteredFarmers = farmers.filter((farmer) =>
    farmer.name.toLowerCase().includes(search.toLowerCase())
  );

  const updateCart = (productId, change) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart, [productId]: (prevCart[productId] || 0) + change };
      if (newCart[productId] <= 0) delete newCart[productId];
      return newCart;
    });
  };

  const cartCount = Object.values(cart).reduce((acc, curr) => acc + curr, 0);

  return (
    <div className="max-w-md mx-auto p-4 bg-white min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2 p-2 bg-gray-100 rounded-lg">
          <Search className="text-gray-500" size={20} />
          <input
            type="text"
            placeholder="Search for a farmer..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent outline-none text-gray-700"
          />
        </div>
        <div className="relative cursor-pointer" onClick={handleCartClick}>
          <ShoppingCart size={24} className="text-gray-600" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
              {cartCount}
            </span>
          )}
        </div>
      </div>

      {filteredFarmers.length === 0 ? (
        <p className="text-center text-gray-500">No farmers found.</p>
      ) : (
        filteredFarmers.map((farmer) => (
          <div key={farmer.id} className="bg-gray-100 p-4 rounded-lg mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <h2 className="text-lg font-semibold">{farmer.name}</h2>
                <p className="text-sm text-gray-500">{farmer.address}</p>
              </div>
            </div>

            <div className="relative mt-3">
              <div
                className="flex space-x-2 overflow-x-auto no-scrollbar scroll-smooth"
                ref={(el) => (scrollRefs.current[farmer.id] = el)}
                style={{ maxWidth: "100%", whiteSpace: "nowrap", overflowX: "hidden" }}
              >
                {farmer.products.map((product) => (
                  <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.name} className="product-image" />
                    <p className="text-xs text-center">{product.name}</p>
                    <p className="text-sm text-gray-600 font-semibold">₹{product.price} per kg</p>
                    <div className="flex items-center justify-center space-x-2 mt-2">
                      <button
                        className="px-2 py-1 bg-gray-300 rounded"
                        onClick={() => updateCart(product.id, -1)}
                        disabled={!cart[product.id]}
                      >
                        -
                      </button>
                      <span>{cart[product.id] || 0} kg</span>
                      <button
                        className="px-2 py-1 bg-green-500 text-white rounded"
                        onClick={() => updateCart(product.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-1 rounded-full shadow-md"
              >
                <ChevronRight className="text-gray-500" size={20} />
              </button>
            </div>

            <div className="flex items-center text-sm text-gray-500 mt-2">
              <MapPin size={16} className="mr-1" />
              <span>Distance: {farmer.distance}</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
