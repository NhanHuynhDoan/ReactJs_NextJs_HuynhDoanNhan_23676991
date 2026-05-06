import React from 'react';
import './FilterSidebar.css';

const FilterSidebar = () => {
  return (
    <aside className="filter-container">
      <div className="filter-header">
        <img src="/img/Lab_02/list_filter.png" alt="Filter Icon" className="filter-icon" />
        <h3>FILTERS</h3>
      </div>

      <div className="filter-group">
        <div className="filter-title">
          <h4>Type</h4>
          <span className="toggle-icon">^</span>
        </div>
        <div className="filter-grid">
          <div className="checkbox-item"><img src="/img/Lab_02/checkbox.png" alt="Unchecked" /> Pan-fried</div>
          <div className="checkbox-item"><img src="/img/Lab_02/checkbox.png" alt="Unchecked" /> Stir-fried</div>
          <div className="checkbox-item"><img src="/img/Lab_02/checkboxpink.png" alt="Checked" /> Grilled</div>
          <div className="checkbox-item"><img src="/img/Lab_02/checkboxpink.png" alt="Checked" /> Roasted</div>
          <div className="checkbox-item"><img src="/img/Lab_02/checkbox.png" alt="Unchecked" /> Sauteed</div>
          <div className="checkbox-item"><img src="/img/Lab_02/checkbox.png" alt="Unchecked" /> Baked</div>
          <div className="checkbox-item"><img src="/img/Lab_02/checkbox.png" alt="Unchecked" /> Steamed</div>
          <div className="checkbox-item"><img src="/img/Lab_02/checkbox.png" alt="Unchecked" /> Stewed</div>
        </div>
      </div>

      <div className="filter-group border-top">
        <div className="filter-title">
          <h4>Time</h4>
          <span className="toggle-icon">^</span>
        </div>
        <div className="time-slider">
           <div className="time-labels">
              <span>30 minutes</span>
              <span>50 minutes</span>
           </div>
           <img src="/img/Lab_02/slider.png" alt="Time Slider" className="slider-img" />
        </div>
      </div>

      <div className="filter-group border-top">
        <div className="filter-title">
          <h4>Rating</h4>
          <span className="toggle-icon">^</span>
        </div>
        <div className="rating-list">
          <div className="checkbox-item"><img src="/img/Lab_02/checkbox.png" alt="Unchecked" /> <img src="/img/Lab_02/rating_5.png" alt="5 Stars" /></div>
          <div className="checkbox-item"><img src="/img/Lab_02/checkbox.png" alt="Unchecked" /> <img src="/img/Lab_02/rating_4.png" alt="4 Stars" /></div>
          <div className="checkbox-item"><img src="/img/Lab_02/checkboxpink.png" alt="Checked" /> <img src="/img/Lab_02/rating_3.png" alt="3 Stars" /></div>
          <div className="checkbox-item"><img src="/img/Lab_02/checkboxpink.png" alt="Checked" /> <img src="/img/Lab_02/rating_2.png" alt="2 Stars" /></div>
          <div className="checkbox-item"><img src="/img/Lab_02/checkboxpink.png" alt="Checked" /> <img src="/img/Lab_02/rating_1.png" alt="1 Star" /></div>
        </div>
      </div>

      <div className="apply-btn-wrapper">
        <button className="button apply-btn">Apply</button>
      </div>
    </aside>
  );
};

export default FilterSidebar;