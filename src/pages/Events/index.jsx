// src/pages/Events.js
import React, { useState } from 'react'; // Import useState hook for managing component state
import './Events.css'; // Import the CSS file for styling

// Mock event data. In a real application, this would typically come from an API.
const ALL_EVENTS_DATA = [
    {
        id: 1,
        title: 'Community Outreach Day',
        date: 'August 15, 2025',
        time: '10:00 AM - 3:00 PM',
        location: 'Local Park',
        description: 'Join us for a day of serving our community. Food, games, and fellowship!',
        posterUrl: '/images/events/ event1.png' // Placeholder image URL
    },
    {
        id: 2,
        title: 'Youth Group Night',
        date: 'August 22, 2025',
        time: '7:00 PM - 9:00 PM',
        location: 'Church Hall',
        description: 'Fun activities, worship, and Bible study for all youth.',
        posterUrl: '/images/events/event2.png'
    },
    {
        id: 3,
        title: 'Sunday Service Special Guest',
        date: 'August 29, 2025',
        time: '5:00 PM',
        location: 'S Block Building, Vision College',
        description: 'Special worship service with guest speaker Rev. John Doe.',
        posterUrl: '/images/events/event3.png'
    }
    // Add more events here to test the "Load More" functionality
];

const EVENTS_PER_LOAD = 3; // Defines how many events to load each time the "Load More" button is clicked

const Events = () => {
    // State to keep track of how many events are currently visible
    // Initially, it shows EVENTS_PER_LOAD number of events
    const [visibleEventsCount, setVisibleEventsCount] = useState(EVENTS_PER_LOAD);

    // Slice the ALL_EVENTS_DATA array to get only the events that should be currently visible
    const visibleEvents = ALL_EVENTS_DATA.slice(0, visibleEventsCount);

    // Determine if there are more events left to load
    const hasMoreEvents = visibleEventsCount < ALL_EVENTS_DATA.length;

    // Function to handle the "Load More" button click
    const handleLoadMore = () => {
        // Increase the visible events count by EVENTS_PER_LOAD
        setVisibleEventsCount(prevCount => prevCount + EVENTS_PER_LOAD);
    };

    return (
        <div className="events-page-container">
            {/* Main title for the events page */}
            <h1 className="events-title">What's happening at jmc</h1>

            {/* Grid container for the event posters */}
            <div className="events-grid">
                {/* Map over the visibleEvents array to render each event poster card */}
                {visibleEvents.map(event => (
                    <div key={event.id} className="event-poster-card">
                        {/* Container for the event poster image */}
                        <div className="poster-image-container">
                            <img src={event.posterUrl} alt={`${event.title} Poster`} className="poster-image" />
                        </div>
                        {/* Container for event details */}
                        <div className="event-details">
                            <h3>{event.title}</h3> {/* Event title */}
                            <p><strong>When:</strong> {event.date} at {event.time}</p> {/* Event date and time */}
                            <p><strong>Where:</strong> {event.location}</p> {/* Event location */}
                            {/* Uncomment below if you want to show description
                            <p className="event-description">{event.description}</p>
                            */}
                        </div>
                    </div>
                ))}
            </div>

            {/* Render the "Load More" button only if there are more events to load */}
            {hasMoreEvents && (
                <button onClick={handleLoadMore} className="load-more-button">
                    Load More
                </button>
            )}
        </div>
    );
};

export default Events;