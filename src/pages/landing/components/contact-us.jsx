import React, { useState } from 'react';
import axios from 'axios';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await axios.post('https://event-management-app-3.onrender.com/contact', formData);
            if (response.status === 200) {
                setSuccess('Your message has been sent successfully!');
                setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
            } else {
                setError('Failed to send your message. Please try again.');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        }

        setIsSubmitting(false);
    };

    return (
        <div id='contact' className="justify-center items-center h-screen bg-navy-50 px-4 mt-8">
            <h2 className="text-center text-3xl font-bold text-navy-900 mb-6">CONTACT US</h2>

            <div className="flex flex-col lg:flex-row bg-white p-8">
                <div className="lg:w-1/2 pr-8">
                    <div className="bg-indigo-500 h-4 w-16 mb-2"></div>
                    <div className="bg-indigo-500 h-4 w-24 mb-6"></div>


                    <div className="space-y-4">
                        <div className="flex items-start">
                            <i className="fas fa-map-marker-alt text-navy-900 mt-1 mr-3"></i>
                            <div>
                                <p className="font-semibold">BENAIK</p>
                                <p>Ground Floor, Your Building, Your Park</p>
                                <p>Your Address, Your City, Your Postcode</p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <i className="fas fa-envelope text-navy-900 mr-3"></i>
                            <a href="mailto:your-email@example.com" className="text-blue-600 hover:underline">
                               benaik-events@example.com
                            </a>
                        </div>

                        <div className="flex items-center">
                            <i className="fas fa-phone text-navy-900 mr-3"></i>
                            <p>+485 5934 394</p>
                        </div>
                    </div>

                    <div className="mt-8 text-sm text-gray-600">
                        <a href="#" className="hover:underline">Privacy Policy</a> | <a href="#" className="hover:underline">Terms & Conditions</a>
                        <p>© benaik {new Date().getFullYear()}</p>
                    </div>
                </div>

                <div className="lg:w-1/2 lg:mt-0">
                    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
                        <div className="mb-0">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Subject"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                rows="4"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className={`w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                        {success && <p className="mt-4 text-green-600">{success}</p>}
                        {error && <p className="mt-4 text-red-600">{error}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
