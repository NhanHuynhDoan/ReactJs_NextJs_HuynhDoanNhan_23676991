import StarRating from './StarRating'

function FiltersSidebar({ typeFilters, ratingRows }) {
  return (
    <aside className="filters-panel">
      <h2 className="filter-title">Filters</h2>

      <section className="filter-group">
        <div className="filter-heading">
          <span>Type</span>
          <img className="chevron-icon" src="/Lab_03/Chevron up large 1.png" alt="" aria-hidden="true" />
        </div>
        <div className="checkbox-grid">
          {typeFilters.map((item, index) => (
            <label key={item} className="checkbox-item">
              <input type="checkbox" defaultChecked={index === 2 || index === 3} />
              <span>{item}</span>
            </label>
          ))}
        </div>
      </section>

      <section className="filter-group">
        <div className="filter-heading">
          <span>Time</span>
          <img className="chevron-icon" src="/Lab_03/Chevron up large 1.png" alt="" aria-hidden="true" />
        </div>
        <div className="time-scale">
          <div className="time-labels">
            <span>30 minutes</span>
            <span>60 minutes</span>
          </div>
          <div className="slider-track" aria-hidden="true">
            <span className="slider-fill"></span>
            <span className="slider-thumb thumb-left"></span>
            <span className="slider-thumb thumb-right"></span>
          </div>
        </div>
      </section>

      <section className="filter-group">
        <div className="filter-heading">
          <span>Rating</span>
          <img className="chevron-icon" src="/Lab_03/Chevron up large 1.png" alt="" aria-hidden="true" />
        </div>
        <div className="rating-list">
          {ratingRows.map((count, index) => (
            <label key={count} className="checkbox-item rating-item">
              <input type="checkbox" defaultChecked={index >= 2} />
              <StarRating count={count} />
            </label>
          ))}
        </div>
      </section>

      <button type="button" className="apply-button">
        Apply
      </button>
    </aside>
  )
}

export default FiltersSidebar
