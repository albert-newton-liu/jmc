// src/pages/Events.js
import React, { useState } from 'react'; // Import useState hook for managing component state
import {ALL_EVENTS_DATA} from '../../constants/Constant'
import './Events.css'; 

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
                            <p><strong>When:</strong> {event.date} {event.time == '' ? "" : "at " + event.time}</p> {/* Event date and time */}
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