import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h4 className="footer-title">About Us</h4>
          <p className="footer-desc">
            Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
          </p>
          <div className="subscribe-box">
            <input type="email" placeholder="Enter your email" />
            <button className="btn-send">Send</button>
          </div>
          
          <div className="footer-bottom-info">
            <div className="footer-logo-wrap">
               <img src="/img/Lab_02/chefifywhite.png" alt="Chefify" className="footer-logo" />
            </div>
            <span className="copyright">2023 Chefify Company</span>
            <span className="terms">Terms of Service | Privacy Policy</span>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-col">
            <h4 className="footer-title">Learn More</h4>
            <ul>
              <li><a href="#cooks">Our Cooks</a></li>
              <li><a href="#features">See Our Features</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>

            <h4 className="footer-title mt-24">Shop</h4>
            <ul>
              <li><a href="#gift">Gift Subscription</a></li>
              <li><a href="#feedback">Send Us Feedback</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Recipes</h4>
            <ul>
              <li><a href="#week">What to Cook This Week</a></li>
              <li><a href="#pasta">Pasta</a></li>
              <li><a href="#dinner">Dinner</a></li>
              <li><a href="#healthy">Healthy</a></li>
              <li><a href="#vegetarian">Vegetarian</a></li>
              <li><a href="#vegan">Vegan</a></li>
              <li><a href="#christmas">Christmas</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;