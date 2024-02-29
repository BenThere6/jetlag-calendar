import React from 'react';
// Import your CSS file if you have specific styles for the footer
// import './Footer.css';

const Footer = () => {
    return (
        <footer className="app-footer">
            <div className="footer-content">
                <section className="footer-section">
                    <h4>About Us</h4>
                    <p>Learn more about our mission and the team behind the Jetlag Management App.</p>
                    {/* You can add a link to an about page or expand on your mission statement here */}
                </section>

                <section className="footer-section">
                    <h4>Contact</h4>
                    <p>Have questions or feedback? Feel free to reach out to us.</p>
                    {/* Insert email link or contact form link here */}
                </section>

                <section className="footer-section">
                    <h4>Follow Us</h4>
                    {/* Links to social media profiles, if applicable */}
                    <p>Stay updated with the latest news and updates.</p>
                </section>

                <section className="footer-section">
                    <h4>Legal</h4>
                    <p>Privacy Policy | Terms of Use</p>
                    {/* Links to your privacy policy and terms of use */}
                </section>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Jetlag Management App</p>
            </div>
        </footer>
    );
};

export default Footer;
