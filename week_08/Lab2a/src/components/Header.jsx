import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/img/Lab_02/chefify.png" alt="Chefify Logo" className="logo" />
      </div>
      
      <div className="search-box textbox">
        <img src="/img/Lab_02/search.png" alt="Search" className="search-icon" />
        <input type="text" defaultValue="cakescascsa" />
      </div>

      <nav className="nav-menu">
        <a href="#what-to-cook">What to cook</a>
        <a href="#recipes">Recipes</a>
        <a href="#ingredients">Ingredients</a>
        <a href="#occasions">Occasions</a>
        <a href="#about-us">About Us</a>
      </nav>

      <div className="user-actions">
        <button className="recipe-box-btn">
          <img src="/img/Lab_02/check.png" alt="Check" className="check-icon" />
          Your Recipe Box
        </button>
        <img src="/img/Lab_02/avatar.png" alt="User Avatar" className="avatar" />
      </div>
    </header>
  );
};

export default Header;