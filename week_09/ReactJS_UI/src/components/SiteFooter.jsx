function SiteFooter({ footerColumns }) {
  const learnMoreColumn = footerColumns.find((column) => column.title === 'Learn More')
  const shopColumn = footerColumns.find((column) => column.title === 'Shop')
  const recipesColumn = footerColumns.find((column) => column.title === 'Recipes')

  return (
    <footer className="footer">
      <div className="footer-shell">
        <div className="footer-top">
          <div className="footer-about">
            <h4>About Us</h4>
            <p>
              Welcome to our website, a wonderful place to explore and learn how to cook like a
              pro.
            </p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <button type="button">Send</button>
            </div>
          </div>

          <div className="footer-column-stack">
            {[learnMoreColumn, shopColumn].filter(Boolean).map((column) => (
              <div key={column.title} className="footer-column">
                <h4>{column.title}</h4>
                <ul>
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="/">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {recipesColumn ? (
            <div className="footer-column">
              <h4>{recipesColumn.title}</h4>
              <ul>
                {recipesColumn.links.map((link) => (
                  <li key={link}>
                    <a href="/">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>

        <div className="footer-bottom">
          <div className="footer-brand">
            <img className="footer-logo" src="/Lab_03/chefifywhite.png" alt="Chefify" />
            <span className="copyright">2023 Cheffiy Company</span>
            <div className="footer-legal">
              <a href="/">Terms of Service</a>
              <a href="/">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
