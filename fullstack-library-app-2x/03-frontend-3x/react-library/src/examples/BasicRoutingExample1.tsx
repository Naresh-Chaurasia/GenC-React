// src/examples/BasicRoutingExample.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Simple components for our routes
const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;
const Contact = () => <h2>Contact Page</h2>;

export const BasicRoutingExample1 = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    {/* 
      <Routes> is a wrapper provided by react-router-dom.
      It looks at the current URL in the browser
      and decides which <Route> should be rendered.
    */}

                    <Route
                        path="/"
                        element={<Home />}
                    /*
                      path="/" means the root URL (e.g., http://localhost:3000/)
                      element={<Home />} tells React Router to render
                      the Home component when the URL matches "/"
                    */
                    />

                    <Route
                        path="/about"
                        element={<About />}
                    /*
                      path="/about" matches URLs like http://localhost:3000/about
                      element={<About />} renders the About component
                      when the user navigates to "/about"
                    */
                    />

                    <Route
                        path="/contact"
                        element={<Contact />}
                    /*
                      path="/contact" matches URLs like http://localhost:3000/contact
                      element={<Contact />} renders the Contact component
                      when the user navigates to "/contact"
                    */
                    />
                </Routes>

            </div>
        </Router>
    );
};