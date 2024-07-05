import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import axios from 'axios';

const EventCreationForm = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const clearForm = () => {
    setName('');
    setDate('');
    setPrice('');
    setLocation('');
    setImage(null);
    // Reset the file input
    document.getElementById('image').value = '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    if (!name || !date || !price || !location || !image) {
      setError('All fields are required.');
      setLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('date', date);
      formData.append('price', price);
      formData.append('location', location);
      formData.append('image', image);

      const response = await axios.post('https://event-management-app-3.onrender.com/events', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setSuccess(true);
      console.log('Event created:', response.data);
      
      // Clear form fields after successful submission
      clearForm();

      // Navigate to the event management page
      navigate('/manage-event');
      
      // Set a timeout to clear the success message after 3 seconds
      setTimeout(() => setSuccess(false), 3000);

    } catch (error) {
      setError(error.response?.data?.message || 'Failed to create event');
      console.error('Error creating event:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-800">
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back
      </Link>

      <h2 className="text-2xl font-bold mt-4 mb-6">Create a new event</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Event Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">Event Date</label>
          <input
            name="date"
            type="date"
            id="date"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">Event Price</label>
          <input
            name="price"
            type="number"
            id="price"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">Event Location</label>
          <input
            name="location"
            type="text"
            id="location"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />Home

        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">Event Flier</label>
          <input
            name="image"
            type="file"
            id="image"
            className="mt-1 block w-full text-sm text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            onChange={handleFileChange}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          disabled={loading}
        >
          {loading ? 'Creating...' : 'Create Event'}
        </button>
      </form>

      {error && <p className="mt-4 text-xs text-center text-red-500">{error}</p>}
      {success && <p className="mt-4 text-xs text-center text-green-500">Event created successfully!</p>}
    </div>
  );
};

export default EventCreationForm;
