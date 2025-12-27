import React, { useState, FormEvent } from 'react';

interface FormData {
    username: string;
    email: string;
    password: string;
}

interface FormErrors {
    username?: string;
    email?: string;
    password?: string;
}

function SimpleForm() {
    // State to store form data
    const [formData, setFormData] = useState<FormData>({
        username: '',
        email: '',
        password: ''
    });

    // State for validation errors
    const [errors, setErrors] = useState<FormErrors>({});

    // Handle input field changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Extract name and value from the input element that triggered the event
        const { name, value } = e.target;

        // Update formData state by merging previous state with the new value
        // using computed property name to dynamically set the field being updated
        setFormData(prev => ({
            ...prev,         // Spread existing form data
            [name]: value    // Update the specific field that changed
        }));
    };

    // Basic validation
    const validateForm = (): FormErrors => {
        const newErrors: FormErrors = {};

        if (!formData.username.trim()) {
            newErrors.username = 'Username is required';
        }

        if (!formData.email.includes('@')) {
            newErrors.email = 'Please enter a valid email';
        }

        if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        return newErrors;
    };

    // Handle form submission
    // `React.FormEvent<HTMLFormElement>` is used because it provides type safety for form submission events, ensuring the event object has the correct properties and methods for form handling.
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formErrors = validateForm();

        if (Object.keys(formErrors).length === 0) {
            // Form is valid, proceed with submission
            console.log('Form submitted:', formData);
            // Here you would typically make an API call
        } else {
            // Update errors state to show validation messages
            setErrors(formErrors);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                />
                {errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}
            </div>

            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
            </div>

            <div>
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
            </div>

            <button type="submit">Submit</button>
        </form>
    );
}

export default SimpleForm;