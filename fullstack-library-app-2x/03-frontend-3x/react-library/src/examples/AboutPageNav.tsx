// src/pages/AboutPage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const AboutPageNav = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>About Us</h1>
            <p>This is the about page.</p>
            <button
                onClick={() => navigate('/')}
                style={{
                    padding: '8px 16px',
                    backgroundColor: '#2196F3',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}
            >
                Back to Home
            </button>
        </div>
    );
};