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
          Dayana, Rebeca, and D’Angele serve as vocalists. Amir plays the acoustic guitar, Nathan and Euan play the bass, Alastair is on the keyboard, and Gitu and Ting Wei play the cajón.
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
          Savanah, though young, leads with great enthusiasm and care, helping our children learn about God through fun, engaging activities.<br />
          The children, aged between 3 and 10, enjoy a safe and vibrant environment where they grow in faith, friendship, and joy.
        </p>
      </MinistrySection>

      {/* JMC Young Adults Bible Study Section - Layout: Image | Text | Image */}
      <MinistrySection
        title="Young Adults Bible Study"
        imageLeft="/images/ministry5.JPG" // Image for the left side
        imageRight="/images/ministry6.jpeg" // Image for the right side
      >
        <p>
          Our Young Adults Bible Study is led weekly by Gitu every Thursday evening at 7 PM. <br />
          This gathering is centered around studying God’s Word together, growing deeper in faith, and building meaningful friendships among university students and young adults.<br />
          Along with Bible study, the group occasionally enjoys shared dinners and fun activities, creating a warm and welcoming community where young people can connect, encourage one another, and grow together in Christ.<br />
          <b>Location:</b> 1 Greenwood Street
        </p>
      </MinistrySection>

      {/* JMC Young Adults Bible Study Section - Layout: Image | Text | Image */}
      <MinistrySection
        title="JMC LIFE GROUP"
        imageLeft="/images/ministry7.JPG" // Image for the left side
        imageRight="/images/ministry8.PNG" // Image for the right side
      >
        <p>
          JMC LIFE GROUP meets fortnightly on Friday evenings as a place where people can share life, study the Bible, and pray for one another in a caring and supportive environment.<br />
          Through fellowship, encouragement, and Christ-centered conversations, we seek to grow together as a family of faith and walk alongside one another in every season of life.<br />
          <b>Location:</b> 34A Mansel Ave, Hillcrest
        </p>
      </MinistrySection>

      {/* Add more Ministry Sections as needed, always following the Image | Text | Image pattern */}
    </div>
  );
};

export default Ministry;