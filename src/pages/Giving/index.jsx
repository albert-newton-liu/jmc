// src/pages/Giving.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Giving.css';

const Giving = () => {
  let navigate = useNavigate();

  return (
    <div className="giving-page-container">
      {/* Top Image Section */}
      <div className="giving-top-image-container">
        {/* <img
          src="/images/giving1.jpg" // Placeholder image URL
          alt="Giving Banner"
          className="giving-banner-image"
        /> */}
      </div>

      {/* Giving Words Section */}
      <div className="giving-words-section">
        <h3 className="giving-words-title">For God loves a cheerful giver</h3>
        <p>– 2 Corinthians 9:7</p>
        <p className="giving-words-text">
          At Jubilee Multicultural Church, we believe that generosity is an act of worship. <br/>
          It reflects our gratitude to God, our trust in His provision, and our love for one another.
        </p>
        <p className="giving-words-text">
          Through your faithful giving, God continues to provide for the ministries and mission of JMC. <br/>
          We are committed to stewarding your gifts with integrity, transparency, and accountability—so that every offering <br/>
          is used wisely for God’s kingdom and His glory.
        </p>
      </div>

      {/* Bank Information Section */}
      <div className="bank-info-section card"> {/* Using 'card' class for consistent styling */}
        <h3>Bank Details for Tithes</h3>
        <div className="bank-detail-item">
          <strong>Bank Name:</strong> <span className="bank-info-value">Auckland Savings Bank (ASB)</span>
        </div>
        <div className="bank-detail-item">
          <strong>Account Name:</strong> <span className="bank-info-value">Jubilee Multicultural Church</span>
        </div>
        <div className="bank-detail-item">
          <strong>Account Number:</strong> <span className="bank-info-value">12-3232-0022966-00</span>
        </div>
        <p className="bank-info-note">
          Please ensure you include your name or a reference when making a direct deposit.
        </p>
      </div>

      {/* Feedback Section */}
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
    </div>
  );
};

export default Giving;