import React from 'react';
import { Link } from 'react-router-dom';
// import './Footer.css'; // Ensure your CSS is updated accordingly

const Footer = () => {
    return (
        <footer className="app-footer">
            <div className="footer-content">
                {/* Links to the suggested pages */}
                <Link to="/" className="footer-link">Home</Link>
                <Link to="/trip-planning" className="footer-link">Trip Planning</Link>
                <Link to="/sleep-schedule" className="footer-link">Sleep Schedule</Link>
                <Link to="/notifications" className="footer-link">Notifications</Link>
            </div>
        </footer>
    );
};

export default Footer;
