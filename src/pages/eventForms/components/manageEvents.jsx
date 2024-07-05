import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const EventManagement = () => {
  const [selectedTab, setSelectedTab] = useState('Attending');
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [events, setEvents] = useState([]);

  const tabs = ['Attending', 'Hosting', 'Saved', 'Past'];

  useEffect(() => {
    // Fetch events when component mounts or selectedTab changes
    fetchEvents();
  }, [selectedTab]);

  const fetchEvents = async () => {
    try {
      const response = await fetch('https://event-management-app-3.onrender.com/events');
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const createEvent = async (event) => {
    try {
      const response = await fetch('https://event-management-app-3.onrender.com/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(event)
      });
      const newEvent = await response.json();
      setEvents([...events, newEvent]);
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  const updateEvent = async (eventId, updatedEvent) => {
    try {
      const response = await fetch(`https://event-management-app-3.onrender.com/events/${eventId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedEvent)
      });
      const updated = await response.json();
      setEvents(events.map(event => (event.id === eventId ? updated : event)));
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

  const deleteEvent = async (eventId) => {
    try {
      await fetch(`https://event-management-app-3.onrender.com/events/${eventId}`, {
        method: 'DELETE'
      });
      setEvents(events.filter(event => event.id !== eventId));
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  // Function to render the calendar
  const renderCalendar = () => {
    // Get the number of days in the current month
    const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
    // Get the day of the week that the current month starts on
    const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
    // Initialize an array to hold the calendar days
    const days = [];

    // Add empty cells to the beginning of the array to account for the days of the week before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="p-2"></div>);
    }

    // Add the days of the month to the array
    for (let i = 1; i <= daysInMonth; i++) {
      // Add a className to the div if the day is the 4th to make it stand out
      days.push(
        <div key={i} className={`p-2 text-center ${i === 4 ? 'bg-teal-500 text-white rounded-full' : ''}`}>
          {i}  {/* Display the day number */}
        </div>
      );
    }

    return days;
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center mb-6">
        <Link to="/" className="text-teal-500 hover:underline mr-4">
          ← Back to home page
        </Link>
        <h1 className="text-2xl font-bold">Your events</h1>
      </div>

      <div className="flex">
        <div className="w-1/4 bg-gray-100 p-4 rounded-lg mr-8">
          {tabs.map((tab) => (
            <div
              key={tab}
              className={`cursor-pointer p-2 ${selectedTab === tab ? 'text-teal-500 font-bold' : ''}`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </div>
          ))}
        </div>

        <div className="w-3/4">
          {selectedTab === 'Attending' && (
            <div className="text-center">
              <img src="/path-to-calendar-icon.png" alt="Calendar" className="mx-auto mb-4" />
              <p className="mb-2">You have not registered for any events</p>
              <a href="#" className="text-teal-500 hover:underline">Discover new events</a>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8">
        <div className="flex justify-between items-center mb-4">
          <button onClick={prevMonth} className="text-teal-500">←</button>
          <h2 className="text-xl font-bold">
            {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
          </h2>
          <button onClick={nextMonth} className="text-teal-500">→</button>
        </div>
        <div className="grid grid-cols-7 gap-2 text-center">
          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
            <div key={day} className="font-bold">{day}</div>
          ))}
          {renderCalendar()}
        </div>
      </div>

      <button className="mt-4 text-teal-500 hover:underline">
        🔄 Sync calendar
      </button>
    </div>
  );
};

export default EventManagement;
