import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './RecipeBoxPage.css';

const RecipeBoxPage = () => {
  const recipes = [
    { id: 1, title: 'Italian-style tomato salad', time: '14 minutes', img: 'Italian-style tomato.png' },
    { id: 2, title: 'Vegetable and shrimp spaghetti', time: '15 minutes', img: 'Vegetable and shrimp spaghetti.png' },
    { id: 3, title: 'Lotus delight salad', time: '20 minutes', img: 'Lotus delight salad.png' },
    { id: 4, title: 'Snack cakes', time: '21 minutes', img: 'Snack cakes.png' },
    { id: 5, title: 'Salad with cabbage and shrimp', time: '32 minutes', img: 'Salad with cabbage.png' },
    { id: 6, title: 'Bean, shrimp, and potato salad', time: '32 minutes', img: 'Bean, shrimp, and potato salad.png' },
    { id: 7, title: 'Sunny-side up fried eggs', time: '32 minutes', img: 'Sunny-side up fried eggs.png' },
    { id: 8, title: 'Lotus delight salad', time: '32 minutes', img: 'Lotus delight salad_01.png' },
  ];

  return (
    <div className="recipe-box-page">
      <Header />

      <main className="rb-main-content">
        <div className="breadcrumb">
          <span>Home</span>
          <span className="separator">{'>'}</span>
          <span className="current">Your Recipe Box</span>
        </div>

        <h1 className="rb-page-title">Emma Gonzalez's Recipe Box</h1>
        
        <div className="profile-section">
          <div className="avatar-container">
            <img src="/img/Lab_02_b/avatar.png" alt="Emma Gonzalez" className="profile-avatar" />
          </div>
          <div className="profile-info">
            <p className="profile-desc">
              Emma Gonzalez is a deputy editor at Chefify, bringing her expertise as a former cooking editor at The Los Angeles Times. She is also an accomplished author, contributing to numerous cookbooks and food publications. Originally from East Los Angeles, Emma now resides in New York City, where she explores a wide range of culinary delights.
            </p>
            <div className="profile-actions">
              <span className="subscriber-count">6.5k Subscribes</span>
              <button className="btn-share">
                Share <img src="/img/Lab_02_b/Share fat.png" alt="Share" className="share-icon" />
              </button>
            </div>
          </div>
        </div>

        <div className="rb-tabs">
          <button className="tab active">Saved Recipes</button>
          <button className="tab">Folders</button>
          <button className="tab">Recipes by Genevieve</button>
        </div>

        <div className="recipe-grid">
          {recipes.map((recipe) => (
            <div className="recipe-card-item" key={recipe.id}>
              <div className="recipe-img-wrapper">
                 <img src={`/img/Lab_02_b/${recipe.img}`} alt={recipe.title} />
              </div>
              <div className="recipe-card-content">
                <div className="recipe-card-header">
                  <h3 className="recipe-card-title">{recipe.title}</h3>
                  <button className="btn-bookmark">
                    <img src="/img/Lab_02_b/Icon Button 73.png" alt="Bookmark" />
                  </button>
                </div>
                <span className="recipe-time-badge">{recipe.time}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination">
          <button className="page-btn nav-btn">{'<'}</button>
          <button className="page-btn active">1</button>
          <button className="page-btn">2</button>
          <button className="page-btn">3</button>
          <button className="page-btn">4</button>
          <span className="page-dots">...</span>
          <button className="page-btn">10</button>
          <button className="page-btn">11</button>
          <button className="page-btn nav-btn">{'>'}</button>
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default RecipeBoxPage;