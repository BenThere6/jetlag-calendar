import React from 'react';
import { Link } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';
// Import your CSS file if you have specific styles for the header
// import './Header.css';

const Header = () => {
    return (
        <header className="app-header">
            <HamburgerMenu />
            <div className="logo">
                <Link to="/">Jetlag Management App</Link> {/* Adjust the link as needed */}
            </div>
            <nav className="navigation">
                <ul>
                    {/* <li><Link to="/">Home</Link></li> */}
                    {/* <li><Link to="/trip-planning">Trip Planning</Link></li>
                    <li><Link to="/sleep-schedule">Sleep Schedule</Link></li>
                    <li><Link to="/meal-times">Meal Times</Link></li> */}
                    {/* Add additional navigation links as needed */}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
