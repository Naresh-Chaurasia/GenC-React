// src/components/HomePage/HomePage.tsx
import React from 'react';

export const HomePage = () => {
    return (
        <div className="container mt-5">
            <h2>Welcome to Our Library</h2>
            <p>This is the home page of our library application. Browse our collection of books and find your next great read!</p>
            <div className="mt-4">
                <h4>Featured Books</h4>
                <ul className="list-group">
                    <li className="list-group-item">The Great Gatsby</li>
                    <li className="list-group-item">To Kill a Mockingbird</li>
                    <li className="list-group-item">1984</li>
                </ul>
            </div>
        </div>
    );
};