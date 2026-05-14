function RecipeCard({ recipe }) {
  return (
    <article className="recipe-card">
      <img src={recipe.image} alt={recipe.title} className="recipe-image" />
      <div className="recipe-body">
        <div className="recipe-title-row">
          <h3>{recipe.title}</h3>
          <button type="button" className="save-button" aria-label={`Save ${recipe.title}`}>
            <img src="/Lab_03/Icon Button 73.png" alt="" aria-hidden="true" />
          </button>
        </div>
        <span className="time-tag">{recipe.time}</span>
      </div>
    </article>
  )
}

export default RecipeCard
