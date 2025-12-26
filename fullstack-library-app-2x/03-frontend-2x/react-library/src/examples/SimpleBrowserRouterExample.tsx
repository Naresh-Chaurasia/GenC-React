// src/examples/SimpleBrowserRouterExample.tsx
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Simple page components
const Home = () => <div className="p-4 border rounded m-2"><h2>🏠 Home Page</h2><p>Welcome to our website!</p></div>;
const About = () => <div className="p-4 border rounded m-2"><h2>ℹ️ About Us</h2><p>Learn more about our company.</p></div>;
const Contact = () => <div className="p-4 border rounded m-2"><h2>📞 Contact</h2><p>Get in touch with us.</p></div>;

export const SimpleBrowserRouterExample = () => {
    return (
        <BrowserRouter>
            <div className="p-4">
                <h1>Simple BrowserRouter Example</h1>

                {/* Navigation Links */}
                <nav className="mb-4 p-2 bg-light border rounded">
                    <ul className="list-inline">
                        <li className="list-inline-item me-3">
                            <Link to="/" className="text-decoration-none">Home</Link>
                        </li>
                        <li className="list-inline-item me-3">
                            <Link to="/about" className="text-decoration-none">About</Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="/contact" className="text-decoration-none">Contact</Link>
                        </li>
                    </ul>
                </nav>

                {/* Route Configuration */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>

                <div className="mt-4 p-3 bg-light border rounded">
                    <h3>How it works:</h3>
                    <ol>
                        <li><strong>BrowserRouter</strong> keeps the UI in sync with the URL</li>
                        <li><strong>Link</strong> components navigate without page reloads</li>
                        <li><strong>Routes</strong> matches the URL and renders the correct component</li>
                    </ol>
                </div>
            </div>
        </BrowserRouter>
    );
};