// src/components/MinistrySection.js
import React from 'react';
import './MinistrySection.css'; // Styling for this component

// This component now takes imageLeft and imageRight props for two distinct images
const MinistrySection = ({ title, imageLeft, imageRight, children }) => {
    return (
        <section className="ministry-section">
            <div className="ministry-block-content-wrapper">
                {/* Left Image */}
                <div className="ministry-image-column ministry-image-left">
                    <img src={imageLeft} alt={`${title} Left Image`} className="ministry-image" />
                </div>

                {/* Central Text Content */}
                <div className="ministry-text-column">
                    <h2>{title}</h2>
                    {children}
                </div>

                {/* Right Image */}
                <div className="ministry-image-column ministry-image-right">
                    <img src={imageRight} alt={`${title} Right Image`} className="ministry-image" />
                </div>
            </div>
        </section>
    );
};

export default MinistrySection;