import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/HamburgerMenu.css';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button className='ham-button' onClick={toggleMenu}>
                Hamburger
            </button>
            <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
                <div className="menu-items">
                    <Link to="/" onClick={toggleMenu}>Home</Link>
                    <Link to="/trip-planning" onClick={toggleMenu}>Trip Planning</Link>
                    <Link to="/sleep-schedule" onClick={toggleMenu}>Sleep Schedule</Link>
                    <Link to="/notifications" onClick={toggleMenu}>Notifications</Link>
                    <Link to="/meal-times" onClick={toggleMenu}>Meal Times</Link>
                    <Link to="/napping-guidelines" onClick={toggleMenu}>Napping Guidelines</Link>
                    <Link to="/relaxation-techniques" onClick={toggleMenu}>Relaxation Techniques</Link>
                </div>
            </div>
        </div>
    );
};

export default HamburgerMenu;