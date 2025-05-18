import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Homepage.css";

const HomePage = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-left">
          <img src="./logo.jpg" alt="Agri-Invest Logo" className="nav-logo" />
        </div>
        <div className="nav-center">
          <h1 className="site-title">AGRI-INVEST</h1>
        </div>
      </nav>

      {/* Image Slider */}
      <Slider {...sliderSettings} className="image-slider">
        <div>
          <img src="./image1.jpg" alt="Agriculture 1" className="slider-image" />
        </div>
        <div>
          <img src="./image2.jpg" alt="Agriculture 2" className="slider-image" />
        </div>
        <div>
          <img src="./image3.jpg" alt="Agriculture 3" className="slider-image" />
        </div>
        <div>
          <img src="./image4.jpg" alt="Agriculture 4" className="slider-image" />
        </div>
      </Slider>

      {/* Hero Section */}
      <header className="hero">
        <h1>Welcome to Agri-Invest</h1>
        <div className="underline"></div> {/* Underline added below the heading */}
      </header>

      {/* About Us Section */}
      <section className="about-us-container">
        <div className="about-us">
          <h2>About Us</h2>
          <div className="underline"></div>
          <p>
            At Agri-Invest, we are dedicated to revolutionizing the agricultural sector by bridging the gap between farmers and investors.
            Our platform empowers farmers with financial support while providing investors with sustainable and profitable opportunities in agribusiness.
          </p>
          <p>
            With cutting-edge analytics and expert consultancy, we help optimize agricultural investments, ensuring long-term success.
            Whether you're a farmer looking for funding or an investor seeking impactful opportunities, Agri-Invest is your trusted partner for a greener, more prosperous future.
          </p>
        </div>
      </section>

      {/* Login & Sign Up Section */}
      <div className="auth-buttons">
        <Link to="/login">
          <button className="button login-button">Login</button>
        </Link>
        <Link to="/signup">
          <button className="button signup-button">Sign Up</button>
        </Link>
      </div>

      {/* Footer */}
      <footer className="footer">
        &copy; {new Date().getFullYear()} Agri-Invest. All Rights Reserved.
      </footer>
    </div>
  );
};

export default HomePage;
