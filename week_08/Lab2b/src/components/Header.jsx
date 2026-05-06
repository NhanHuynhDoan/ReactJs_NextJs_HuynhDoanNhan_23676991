import React from 'react';
import './Header.css';

const Header = ({ onGoToRecipeBox }) => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/img/Lab_02/chefify.png" alt="Chefify Logo" className="logo" />
      </div>
      
      <div className="search-box textbox">
        <img src="/img/Lab_02_b/search.png" alt="Search" className="search-icon" />
        
        <input type="text" placeholder="What would you like to cook?" />
      </div>

      <nav className="nav-menu">
        <a href="#what-to-cook">What to cook</a>
        <a href="#recipes">Recipes</a>
        <a href="#ingredients">Ingredients</a>
        <a href="#occasions">Occasions</a>
        <a href="#about-us">About Us</a>
      </nav>

      <div className="user-actions">
        <button className="recipe-box-btn" onClick={onGoToRecipeBox}>
          <img src="/img/Lab_02/check.png" alt="Check" className="check-icon" />
          Your Recipe Box
        </button>
        <img src="/img/Lab_02_b/avatar.png" alt="User Avatar" className="avatar" />
      </div>
    </header>
  );
};

export default Header;