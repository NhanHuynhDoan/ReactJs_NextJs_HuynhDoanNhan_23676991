import React from 'react';
import './DiscoverModal.css';

const DiscoverModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="btn-close" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="#171A1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <h2 className="modal-title">Discover Chefify</h2>
        <p className="modal-subtitle">
          Easy and delicious cooking instructions right here. Start exploring now!
        </p>

        <img 
          className="modal-image" 
          src="/img/Image 93.png" 
          alt="Discover dishes" 
        />

        <div className="modal-pagination">
          <div className="dot active"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>

        <div className="modal-actions">
          <button className="btn-next" onClick={() => alert("Chuyển trang tiếp theo!")}>
            Next
          </button>
          <button className="btn-skip" onClick={onClose}>
            Skip
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscoverModal;