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
                <div className='page-icon-container'>
                    <Link to="/"><img className='page-icon' src='/icons/android-chrome-512x512.png'></img></Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
