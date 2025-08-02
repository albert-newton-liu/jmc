import React from 'react'
import AboutContentSection from './AboutContentSection'
import ContactMapSection from '../../components/ContactMapSection'

import './About.css';

export default function About() {
  return (
    <div className="about-page-container">
      <AboutContentSection />
      <ContactMapSection />
    </div>
  )
}
