import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import './Header.css';

export default function Header() {
    return (

        <header className="main-header">
            <div className="church-logo">
                <NavLink to="/">
                    <img
                        src="/logo.png"
                        alt="Jubilee Multicultural Church Logo"
                        className="logo-image"
                    />
                </NavLink>
            </div>
            <nav className="main-nav">
                <NavLink to="/home" className={({ isActive }) => isActive ? 'active-link' : ''}>Home</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? 'active-link' : ''}>About us</NavLink>
                <NavLink to="/ministry" className={({ isActive }) => isActive ? 'active-link' : ''}>Ministry</NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? 'active-link' : ''}>Contact</NavLink>
                <NavLink to="/events" className={({ isActive }) => isActive ? 'active-link' : ''}>Events</NavLink>
                <NavLink to="/giving" className={({ isActive }) => isActive ? 'active-link' : ''}>Giving</NavLink>


                <a
                    href="https://www.instagram.com/jubilee_multicultural_church"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label="Instagram"
                >
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </nav>
        </header>
    );
}