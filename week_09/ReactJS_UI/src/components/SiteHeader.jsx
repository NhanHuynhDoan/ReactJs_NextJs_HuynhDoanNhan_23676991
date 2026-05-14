function SiteHeader({ navItems }) {
  return (
    <header className="topbar">
      <a className="brand-link" href="/">
        <img className="brand-logo" src="/Lab_03/chefify.png" alt="Chefify" />
      </a>

      <label className="searchbar" aria-label="Search recipes">
        <img src="/Lab_03/search.png" alt="" aria-hidden="true" />
        <input type="text" defaultValue="Salad" />
      </label>

      <nav className="navlinks" aria-label="Primary">
        {navItems.map((item) => (
          <a key={item} href="/">
            {item}
          </a>
        ))}
      </nav>

      <div className="topbar-actions">
        <button type="button" className="recipe-box">
          <img src="/Lab_03/archive_check.png" alt="" aria-hidden="true" />
          <span>Your Recipe Box</span>
        </button>
        <img className="avatar" src="/Lab_03/avatar.png" alt="User avatar" />
      </div>
    </header>
  )
}

export default SiteHeader
