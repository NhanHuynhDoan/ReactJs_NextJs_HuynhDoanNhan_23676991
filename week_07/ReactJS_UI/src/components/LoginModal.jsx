import React from 'react';
import './LoginModal.css';

const LoginModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="login-modal-container">
        
        <div className="login-left-pane">
          <img className="login-image" src="/img/Image 72.png" alt="Delicious Food" />
          <div className="login-quote">
            "Embrace the art of cooking, where flavors come alive!"
          </div>
        </div>

        <div className="login-right-pane">
          <button className="btn-close-login" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="#171A1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <h2 className="login-title">Login</h2>
          <p className="login-subtitle">Enter your email to log in.</p>

          <input 
            type="email" 
            className="login-input" 
            placeholder="Enter your email" 
          />

          <button className="btn-continue">
            Continue
          </button>

          <div className="login-divider">
            <span className="line"></span>
            <span className="or-text">OR</span>
            <span className="line"></span>
          </div>

          <p className="login-terms">
            By continuing, you agree to the updated <strong>Terms of Sale</strong>, <strong>Terms of Service</strong>, and <strong>Privacy Policy</strong>.
          </p>

          <div className="social-login-group">
            <button className="btn-social google">
              <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#EA4335"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>

            <button className="btn-social facebook">
              <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
              </svg>
              Continue with Facebook
            </button>

            <button className="btn-social apple">
              <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.05 20.28c-.98.95-2.05 1.8-3.08 1.8-1.09 0-1.46-.65-2.73-.65-1.25 0-1.68.61-2.71.65-1.07.03-2.28-.97-3.32-2.48-2.09-3.03-3.68-8.54-1.53-12.28C4.74 5.48 6.51 4.41 8.36 4.38c1.03-.02 2.01.69 2.66.69.64 0 1.84-.85 3.08-.72 1.31.05 2.51.52 3.39 1.41-2.06 1.25-1.73 4.29.58 5.31-.83 2.1-2.19 4.35-4.08 6.11-2.22 2.08-4.52 4.14-6.88 6.09-.01.01-.02.01-.03.02zM12.03 4.18c-.16-1.54 1.13-3.16 2.66-3.32.22 1.55-1.12 3.16-2.66 3.32z" />
              </svg>
              Continue with Apple
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LoginModal;