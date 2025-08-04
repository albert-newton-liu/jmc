import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Header.css';

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const navRef = useRef(null);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (navRef.current && !navRef.current.contains(event.target) && event.target.className !== 'hamburger-icon') {
                setIsNavOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [navRef]);

    const handleLinkClick = () => {
        setIsNavOpen(false);
    };

    return (
        <header className="main-header">
            <div className="church-logo">
                <NavLink to="/" onClick={handleLinkClick}>
                    <img
                        src="/logo/logo-small.png"
                        alt="Jubilee Multicultural Church Logo"
                        className="logo-image"
                    />
                </NavLink>
            </div>

            {/* Hamburger menu icon for mobile */}
            <button className="hamburger-icon" onClick={toggleNav}>
                <div className={`bar ${isNavOpen ? 'top-bar-open' : ''}`}></div>
                <div className={`bar ${isNavOpen ? 'middle-bar-open' : ''}`}></div>
                <div className={`bar ${isNavOpen ? 'bottom-bar-open' : ''}`}></div>
            </button>

            {/* Navigation menu. The 'isNavOpen' state controls its visibility on mobile */}
            <nav ref={navRef} className={`main-nav ${isNavOpen ? 'nav-open' : ''}`}>
                <NavLink to="/home" className={({ isActive }) => isActive ? 'active-link' : ''} onClick={handleLinkClick}>Home</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? 'active-link' : ''} onClick={handleLinkClick}>About us</NavLink>
                <NavLink to="/ministry" className={({ isActive }) => isActive ? 'active-link' : ''} onClick={handleLinkClick}>Ministry</NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? 'active-link' : ''} onClick={handleLinkClick}>Contact</NavLink>
                <NavLink to="/events" className={({ isActive }) => isActive ? 'active-link' : ''} onClick={handleLinkClick}>Events</NavLink>
                <NavLink to="/giving" className={({ isActive }) => isActive ? 'active-link' : ''} onClick={handleLinkClick}>Giving</NavLink>
                <a
                    href="https://www.instagram.com/jubilee_multicultural_church"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label="Instagram"
                    onClick={handleLinkClick}
                >
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </nav>
        </header>
    );
}
