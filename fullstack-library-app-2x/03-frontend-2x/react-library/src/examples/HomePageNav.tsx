// src/pages/HomePage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const HomePageNav = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Welcome to Our Website</h1>
            <p>This is the home page.</p>
            <button
                onClick={() => navigate('/about')}
                style={{
                    padding: '8px 16px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}
            >
                Go to About Page
            </button>
        </div>
    );
};