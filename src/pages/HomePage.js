import React from 'react';
import './HomePage.css';

function HomePage() {
    return (
        <div className="home-page">
            <h1>Welcome to the Home Page</h1>
            <p>This is your home page after successful login.</p>
            {/* YouTube video iframe */}
            <div className="video-container">
                <iframe
                    src="https://www.youtube.com/embed/PPoYzyOn44M"
                    title="YouTube video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    width="100%"
                    height="100%"
                ></iframe>
            </div>
        </div>
    );
}

export default HomePage;