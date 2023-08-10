import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <section>
            <form onSubmit={handleSubmit} className="contact-form">
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
            />
            <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="Email" 
            />
            <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                placeholder="Message" 
            />
            <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default Contact;