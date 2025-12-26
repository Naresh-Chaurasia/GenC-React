// src/components/ContactPage/ContactPage.tsx
import React from 'react';

export const ContactPage = () => {
    return (
        <div className="container mt-5">
            <h2>Contact Us</h2>
            <p>Have questions? Reach out to us through any of the following methods:</p>

            <div className="row mt-4">
                <div className="col-md-6">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h5 className="card-title">Visit Us</h5>
                            <p className="card-text">
                                123 Library Street<br />
                                Bookville, BV 12345<br />
                                United States
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Contact Information</h5>
                            <p className="card-text">
                                <strong>Phone:</strong> (123) 456-7890<br />
                                <strong>Email:</strong> info@library.com<br />
                                <strong>Hours:</strong> Mon-Fri: 9am-9pm, Sat-Sun: 10am-6pm
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};