import React, { useState } from 'react';
import './HomePage.css';
import DiscoverModal from '../components/DiscoverModal'; 
import LoginModal from '../components/LoginModal';

const HomePage = () => {
  const [showModal, setShowModal] = useState(true);
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <div className="home-container">
      <header className="header">
        <div className="logo">
          <img src="/img/Group 9.png" alt="Chefify Logo" />
        </div>

        <div className="search-box">
          <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M10 2a8 8 0 015.293 13.88l5.414 5.414-1.414 1.414-5.414-5.414A8 8 0 1110 2zm0 2a6 6 0 100 12 6 6 0 000-12z" />
          </svg>
          <input type="text" placeholder="What would you like to cook?" />
        </div>

        <nav className="nav-links">
          <a href="#what-to-cook">What to cook</a>
          <a href="#recipes">Recipes</a>
          <a href="#ingredients">Ingredients</a>
          <a href="#occasions">Occasions</a>
          <a href="#about-us">About Us</a>
        </nav>

        <div className="header-actions">
          <button className="btn-login" onClick={() => setShowLoginModal(true)}>
            Login
          </button>
          <button className="btn-subscribe">Subscribe</button>
          
        </div>
      </header>

      <section className="hero-section">
        <img className="hero-bg" src="/img/Image 73.png" alt="Woman cooking" />
        
        <div className="recipe-card">
          <div className="badge-recipe-of-the-day">
            Recipe of the day
          </div>
          
          <h2 className="recipe-title">Salad Caprese</h2>
          <p className="recipe-desc">
            Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, herbs, olive oil, and balsamic vinegar create a refreshing dish for lunch or appetizer.
          </p>
          
          <div className="recipe-author">
            <img 
              src="/img/avt.png" 
              alt="Author" 
              className="author-avatar" 
              onError={(e) => { e.target.src = "https://i.pravatar.cc/150?img=1" }} 
            />
            <span className="author-name">Salad Caprese</span>
          </div>

          <button className="btn-view-now">
            View now &#8594;
          </button>
        </div>
      </section>

      {showModal && <DiscoverModal onClose={() => setShowModal(false)} />}
      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
    </div>
  );
};

export default HomePage;