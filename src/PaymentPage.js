import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./PaymentPage.css";

export default function PaymentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const cart = location.state?.cart || {};

  const products = {
    potato: { name: "Potato", image: "/Potato.jpeg", price: 20 },
    onion: { name: "Onion", image: "/Onion.jpg", price: 25 },
    chili: { name: "Chili", image: "/Chilli.jpg", price: 30 },
    spinach: { name: "Spinach", image: "/Spinach.jpg", price: 15 },
    corn: { name: "Sweet Corn", image: "/Corn.jpg", price: 35 },
  };

  const totalItems = Object.values(cart).reduce((acc, qty) => acc + qty, 0);
  const totalPrice = Object.entries(cart).reduce(
    (sum, [productId, quantity]) => sum + products[productId].price * quantity,
    0
  );

  return (
    <div className="payment-container">
      <h2 className="payment-title">Payment Options</h2>

      {/* Cart Items Section */}
      <div className="cart-summary">
        <h3>Cart Summary</h3>
        {Object.entries(cart).map(([productId, quantity]) => (
          <div key={productId} className="cart-item">
            <img
              src={products[productId].image}
              alt={products[productId].name}
              className="cart-item-image"
            />
            <div>
              <p className="cart-item-name">{products[productId].name}</p>
              <p className="cart-item-quantity">Quantity: {quantity} kg</p>
              <p className="cart-item-price">Price: ₹{products[productId].price} per kg</p>
              <p className="cart-item-subtotal">Subtotal: ₹{products[productId].price * quantity}</p>
            </div>
          </div>
        ))}
        <p className="total-items">Total Items: {totalItems} kg</p>
        <p className="total-price">Total Price: ₹{totalPrice}</p>
      </div>

      {/* Payment Options */}
      <div className="payment-footer">
        <div className="payment-options">
          <button className="credit-card">Credit/Debit Card</button>
          <button className="netbanking">Net Banking</button>
          <button className="upi">UPI Payment</button>
        </div>
        <button className="back-btn" onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </div>
  );
}
