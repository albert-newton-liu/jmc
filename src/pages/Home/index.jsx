import React from 'react'
import HeroSection from '../../components/HeroSection';
import GoalIntroductionSection from '../../components/GoalIntroductionSection';
import ServiceAnnouncement from '../../components/ServiceAnnouncement';
import WelcomeSection from '../../components/WelcomeSection';

import './Home.css'

export default function Home() {
  return (
    <div className="home-page-container">
      {/* Hero Section - Carousel with text overlay */}
      <HeroSection />

      {/* Two-column layout for Goal Introduction and Service Announcement */}
      {/* This section acts as a flex container for its children */}
      <section className="home-two-column-section">
        <GoalIntroductionSection /> {/* Left column content */}
        <ServiceAnnouncement />     {/* Right column content */}
      </section>

      {/* Welcome Message Section (assuming this is another section on your home page) */}
      <WelcomeSection />
    </div>
  );
}
