import React from 'react';
import Header from '../components/Header';
import FilterSidebar from '../components/FilterSidebar';
import './SearchResultPage.css';
import Footer from '../components/Footer';

const SearchResultPage = () => {
  return (
    <div className="search-page">
      <Header />

      <div className="main-content">
        <FilterSidebar />

        <main className="no-result-area">
          <h1 className="error-title">Sorry, no results were found for "cakescascsa"</h1>
          <img src="/img/Lab_02/nothing.png" alt="Nothing found illustration" className="nothing-img" />
          <p className="suggestion-text">We have all your Independence Day sweets covered.</p>
          
          <div className="tag-suggestions">
            <span className="tag pink-tag">Sweet Cake</span>
            <span className="tag purple-tag">Black Cake</span>
            <span className="tag red-tag">Pozole Verde</span>
            <span className="tag cyan-tag">Healthy food</span>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default SearchResultPage;