// src/components/WelcomeSection.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomeSection.css'; // Create this CSS file for styling

export default function WelcomeSection() {
  const welcomeMessage = `
    Welcome to Jubilee Multicultural Church – a vibrant, multicultural faith community.
    Our desire is to be with Jesus, to become like Jesus, and to do as Jesus did.
    During our Sunday gatherings, we engage with God’s truth through heartfelt worship and practical, Spirit-led messages that empower you to live out your faith in everyday life.
    Our goal is to create an environment where people from all nations can encounter the love of God and experience His transformative presence.
  `;

  let navigate = useNavigate();

  return (
    <section className="welcome-section">
      <div className="welcome-content">
        <h2 className="welcome-title">A Warm Welcome to You!</h2>
        <p className="welcome-text">{welcomeMessage}</p>
        <button className="learn-more-button" onClick={() => navigate("/about")}>Learn More About Us</button>
      </div>
    </section>
  );
}