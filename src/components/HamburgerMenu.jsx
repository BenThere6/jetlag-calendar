import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import './HamburgerMenu.css'; // Style as needed

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="hamburger-menu">
            <button onClick={toggleMenu}>
                {/* Icon or text for the menu button */}
                Hamburger
            </button>
            {isOpen && (
                <div className="menu-items">
                    <Link to="/" onClick={toggleMenu}>Home</Link>
                    <Link to="/trip-planning" onClick={toggleMenu}>Trip Planning</Link>
                    <Link to="/sleep-schedule" onClick={toggleMenu}>Sleep Schedule</Link>
                    <Link to="/notifications" onClick={toggleMenu}>Notifications</Link>
                    <Link to="/meal-times" onClick={toggleMenu}>Meal Times</Link>
                    <Link to="/napping-guidelines" onClick={toggleMenu}>Napping Guidelines</Link>
                    <Link to="/relaxation-techniques" onClick={toggleMenu}>Relaxation Techniques</Link>
                </div>
            )}
        </div>
    );
};

export default HamburgerMenu;
