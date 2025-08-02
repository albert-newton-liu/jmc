// src/pages/Contact.js
import React, { useState } from 'react';
import './Contact.css';

// Define contact details as a constant for easy management
const CONTACT_DETAILS = {
  name: 'Daniel Park',
  phone: '+64 021 415 204',
  email: 'agoodshepherd@gmail.com',
  address: 'S Block, Vision College,\n21 Ruakura Road, Hamilton 3216, New Zealand', // Use \n for line breaks
  instagramUrl: 'https://www.instagram.com/jubilee_multicultural_church/',
  // Add other social links if needed, e.g., facebookUrl: '...'
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [isSubmitting, setIsSubmitting] = useState(false); // To prevent multiple submissions

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Disable button during submission
    setSubmitStatus(null); // Clear previous status

    console.log('Form data submitted:', formData);

    try {
      // For demonstration, simulate success or failure randomly, or always success
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay

      const success = true; // Set to false to test error state

      if (success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Clear form on success
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false); // Re-enable button
    }
  };

  return (
    <div className="contact-page-container">
      <p className="contact-intro">We'd love to hear from you. Please reach out to us using the information below or send us a message.</p>

      <div className="contact-content-wrapper">
        {/* Left Section: Contact Details */}
        <div className="contact-details card">
          <h2>Our Details</h2>
          <div className="detail-item">
            <strong>Name:</strong> {CONTACT_DETAILS.name}
          </div>
          <div className="detail-item">
            <strong>Phone:</strong> <a href={`tel:${CONTACT_DETAILS.phone}`}>{CONTACT_DETAILS.phone}</a>
          </div>
          <div className="detail-item">
            <strong>Email:</strong> <a href={`mailto:${CONTACT_DETAILS.email}`}>{CONTACT_DETAILS.email}</a>
          </div>
          <div className="detail-item">
            <strong>Address:</strong>
            <div className="address-lines">
                {CONTACT_DETAILS.address.split('\n').map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </div>
          </div>

          <div className="social-links">
            <p>Connect with us:</p>
            <a href={CONTACT_DETAILS.instagramUrl} target="_blank" rel="noopener noreferrer" className="social-icon-link">
              Instagram
            </a>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="contact-form-container card">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Full Name"
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group message-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                placeholder="Enter your message here..."
                required
                disabled={isSubmitting}
              ></textarea>
            </div>
            <button type="submit" className="submit-button" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {/* Submission Status Message */}
            {submitStatus === 'success' && (
              <p className="submission-message success">Thank you! Your message has been sent successfully.</p>
            )}
            {submitStatus === 'error' && (
              <p className="submission-message error">Failed to send message. Please try again later.</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;