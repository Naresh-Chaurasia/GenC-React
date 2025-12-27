import React from 'react';

const ContactPage = () => {
    return (
        <div className="container mt-5">
            <h1>Contact Us</h1>
            <p>Feel free to reach out to us!</p>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Library Information</h5>
                    <p className="card-text">Email: contact@library.com</p>
                    <p className="card-text">Phone: (123) 456-7890</p>
                    <p className="card-text">Address: 123 Library St, Bookville</p>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
