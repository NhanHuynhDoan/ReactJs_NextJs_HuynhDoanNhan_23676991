import RecipeCard from './RecipeCard'

function RecipeSection({ recipes }) {
  return (
    <section className="recipes-section">
      <div className="recipes-header">
        <h1>Salad (32)</h1>
        <select defaultValue="A-Z" aria-label="Sort recipes">
          <option>A-Z</option>
          <option>Popular</option>
          <option>Newest</option>
        </select>
      </div>

      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <RecipeCard key={`${recipe.title}-${recipe.image}`} recipe={recipe} />
        ))}
      </div>

      <div className="pagination" aria-label="Pagination">
        <button type="button" className="page-arrow" aria-label="Previous page">
          {'\u2039'}
        </button>
        <button type="button" className="page-number active">
          1
        </button>
        <button type="button" className="page-number">
          2
        </button>
        <button type="button" className="page-number">
          3
        </button>
        <button type="button" className="page-number">
          4
        </button>
        <button type="button" className="page-number">
          ...
        </button>
        <button type="button" className="page-number">
          10
        </button>
        <button type="button" className="page-number">
          11
        </button>
        <button type="button" className="page-arrow" aria-label="Next page">
          {'\u203a'}
        </button>
      </div>
    </section>
  )
}

export default RecipeSection
