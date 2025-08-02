// src/components/GoalIntroductionSection.js

import React from 'react';
import './GoalIntroductionSection.css'; // Import the CSS for this component

export default function GoalIntroductionSection() {
  // Define the goal introduction text
  const goalIntro = `
    We want to be with Jesus. 
    We want to become like Jesus. 
    We want to do as Jesus did.
  `;

  return (
    <section className="goal-introduction-section">
      {/* Container for the logo - now its own flex item */}
      <div className="logo-container-internal">
        {/* Church logo - ensure this path is correct for your logo */}
        <img
          src="/logo.png"
          alt="Jubilee Multicultural Church Logo"
          className="goal-introduction-logo"
        />
      </div>

      {/* Container for the text content - now its own flex item */}
      <div className="vision-mission-content">
        {/* Vision & Mission title */}
        <h3 className="goal-introduction-title">Our Vision & Mission</h3>
        {/* Using <pre> tag to preserve line breaks from the string */}
        <pre className="goal-introduction-text">{goalIntro}</pre>
      </div>
    </section>
  );
}