// src/components/AboutPage/AboutPage.tsx
import React from 'react';

export const AboutPage = () => {
    return (
        <div className="container mt-5">
            <h2>About Our Library</h2>
            <p>We are a community library dedicated to providing access to knowledge and fostering a love for reading.</p>
            <div className="card mt-4">
                <div className="card-body">
                    <h5 className="card-title">Our Mission</h5>
                    <p className="card-text">To make knowledge accessible to everyone in our community.</p>
                    <h5 className="card-title mt-3">Our History</h5>
                    <p className="card-text">Established in 2020, we've been serving our community with a growing collection of books and resources.</p>
                </div>
            </div>
        </div>
    );
};