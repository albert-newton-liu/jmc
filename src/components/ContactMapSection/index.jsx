import React from 'react'

import './ContactMapSection.css'; // Create this file for styling

const ContactMapSection = () => {
    // Replace with your actual address
    const address = "S Block Building, Vision College, 21 Ruakura Road, Hamilton 3216, New Zealand";
    
    // Google Maps URL for opening in a new tab, uses 'q' parameter for address query
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

    const handleOpenMap = () => {
        window.open(googleMapsUrl, '_blank'); // Opens the map in a new tab
    };

    return (
        <section className="contact-map-section">
            <h2>Find Us Here</h2>
            <p className="contact-address">{address}</p>
            {/* Optional: Add a brief instruction or descriptive text */}
            <p className="contact-map-instruction">Click the button below to open our location on Google Maps.</p>
            <button
                className="open-map-button"
                onClick={handleOpenMap}
                aria-label="Open location on Google Maps"
            >
                Open Map
            </button>
            {/* The map container and iframe are removed */}
        </section>
    );
};

export default ContactMapSection;
