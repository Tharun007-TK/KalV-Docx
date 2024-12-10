import React from 'react';
import './Herosection.css';
import heroImage from '../assets/bg.png';

const HeroSection = () => {
    return (
        <>
            <section
                className="hero-section"
                style={{
                    backgroundImage: `url(${heroImage})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height: '100vh',
                }}
            >
                <div className="hero-content">
                    <h1>Aerospace Computational Engineering</h1>
                    <p>
                        Explore cutting-edge computational techniques to solve complex aerospace challenges.
                    </p>
                    <button className="cta-button">Learn More</button>
                </div>
            </section>

            {/* Navigation Bar */}
            <nav className="hero-nav">
                <ul>
                    <li><a href="#overview">Overview</a></li>
                    <li><a href="#course-details">Course Details</a></li>
                    <li><a href="#career">Your Career</a></li>
                    <li><a href="#how-to-apply" className="highlight">How to Apply</a></li>
                    <li><a href="#fees">Fees and Funding</a></li>
                    <li><a href="#requirements">Entry Requirements</a></li>
                </ul>
            </nav>
        </>
    );
};

export default HeroSection;

