// src/pages/Ministry.js
import React from 'react';
import MinistrySection from './MinistrySection';
import './Ministry.css'; // Overall Ministry page styling



const Ministry = () => {
  return (
    <div className="ministry-page-container">

      <MinistrySection
        title="JMC Worship Ministry"
        imageLeft="images/ministry1.jpg"
        imageRight="/images/ministry3.jpg"
      >
        <p>
          Our worship team is made up of passionate and talented members from diverse cultural backgrounds. 
          Dayana serves the team with vocals and keyboard, Amir plays the acoustic guitar, Nathan plays the bass, Alastair is on the cajón, and Rebeca sings vocals.<br/>
          Together, they joyfully lead our congregation into heartfelt worship each week, creating an atmosphere where people from all nations can encounter the presence of God.
        </p>
      </MinistrySection>

      {/* JMC Children’s Ministry Section - Layout: Image | Text | Image */}
      <MinistrySection
        title="JMC Children’s Ministry"

        imageLeft="/images/ministry2.jpg" // Image for the left side
        imageRight="/images/ministry4.jpg" // Image for the right side
      >
        <p>
          Our children’s ministry is lovingly led by Savanah, guided by her mother Rebeca.
          Savanah, though young, leads with great enthusiasm and care, helping our children learn about God through fun, engaging activities..<br />
          The children, aged between 3 and 10, enjoy a safe and vibrant environment where they grow in faith, friendship, and joy.
        </p>
      </MinistrySection>

      {/* Add more Ministry Sections as needed, always following the Image | Text | Image pattern */}
    </div>
  );
};

export default Ministry;