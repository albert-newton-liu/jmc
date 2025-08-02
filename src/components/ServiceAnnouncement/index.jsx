// src/components/ServiceAnnouncement.js

import React from 'react';
import './ServiceAnnouncement.css';

export default function ServiceAnnouncement() {
  const sundayServiceOrder = `
When: Every Sunday at 5:00 PM
Where: S Block Building, Vision College, 21 Ruakura Road, Hamilton
  `;

  return (
    <section className="service-announcement-section">
      <div className="announcement-content">
        <h3 className="announcement-title">Service Announcement</h3> 
        <pre className="announcement-text">{sundayServiceOrder}</pre>
      </div>
    </section>
  );
}