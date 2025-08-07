// src/pages/Giving.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Giving.css';

const Giving = () => {
  let navigate = useNavigate();

  return (
    <div className="giving-page-container">
      <div className="giving-words-section-wrapper">
        <img
          src="/images/giving.jpg" 
          alt="Giving Icon"
          className="giving-section-icon"
        />
        <div className="giving-words-content">
          <h3 className="giving-words-title">For God loves a cheerful giver</h3>
          <p>– 2 Corinthians 9:7</p>
          <p className="giving-words-text">
            At Jubilee Multicultural Church, we believe that generosity is an act of worship.<br/>
            It reflects our gratitude to God, our trust in His provision, and our love for one another.
          </p>
          <p className="giving-words-text">
            Through your faithful giving, God continues to provide for the ministries and mission of JMC. <br/>
            We are committed to stewarding your gifts with integrity, transparency, and accountability—so that every offering 
            is used wisely for God’s kingdom and His glory.
          </p>
        </div>
      </div>

      {/* New container for side-by-side layout */}
      <div className="info-cards-wrapper">
          {/* Feedback Section - Now on the left */}
          <div className="feedback-section">
            <h3 className="feedback-title">Feedback & Inquiries</h3>
            <p className="feedback-text">
              A charitable donation receipt will be issued to all givers shortly after the end of each income tax year.<br />
              If you have any questions regarding giving, please don't hesitate to contact us.
            </p>

            <button className="contact-us-button" onClick={() => navigate('/contact')}>
              Contact Us
            </button>
          </div>

          {/* Bank Card Section - Now on the right */}
          <div className="bank-card-container">
            <div className="bank-card-header">
              <p className="bank-card-title">Bank Details</p>
              <div className="bank-card-chip"></div>
            </div>
            
            <div className="bank-card-details">
              <div className="bank-card-row">
                <span className="detail-label">Bank:</span>
                <span className="detail-value">ASB</span>
              </div>
              <div className="bank-card-row">
                <span className="detail-label">Account Name:</span>
                <span className="detail-value">Jubilee Multicultural Church</span>
              </div>
              <div className="bank-card-row">
                <span className="detail-label">Account Number:</span>
                <span className="detail-value account-number">12-3232-0022966-00</span>
              </div>
            </div>

            <p className="bank-card-note">
              Please include your name or a reference when making a direct deposit.
            </p>
            
            <div className="bank-card-logo">JMC</div>
          </div>
      </div>
    </div>
  );
};

export default Giving;
