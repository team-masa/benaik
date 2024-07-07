import { useState, useEffect } from 'react';
import EventCard from './eventCard';
import axios from 'axios';

// This component renders a list of events fetched from the server
export default function Events() {
  // State hooks to manage the list of events and the filtered list based on search terms
  const [events, setEvents] = useState([]); // List of all events
  const [filteredEvents, setFilteredEvents] = useState([]); // List of events filtered based on search terms

  // State hook to manage the search terms entered by the user
  const [searchTerms, setSearchTerms] = useState({
    eventName: '', // Name of the event
    location: '', // Location of the event
    price: '', // Price of the event
    startDate: '', // Start date of the event
    endDate: '' // End date of the event
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(4); // Number of events per page

  // Fetch events from the server
  const getEvents = async () => {
    try {
      const response = await axios.get('https://event-management-app-3.onrender.com/events');
      if (response.status === 200) {
        setEvents(response.data);
        setFilteredEvents(response.data); // Initialize with all events
      } else {
        setEvents([]);
        setFilteredEvents([]);
      }
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  // Search function to filter events
  const handleSearch = () => {
    const { eventName, location, price, startDate, endDate } = searchTerms;
    const filtered = events.filter((event) => {
      const matchesEventName = event.name.toLowerCase().includes(eventName.toLowerCase());
      const matchesLocation = event.location.toLowerCase().includes(location.toLowerCase());
      const matchesPrice = price ? event.price <= parseFloat(price) : true;
      const eventDate = new Date(event.date);
      const matchesStartDate = startDate ? eventDate >= new Date(startDate) : true;
      const matchesEndDate = endDate ? eventDate <= new Date(endDate) : true;

      return matchesEventName && matchesLocation && matchesPrice && matchesStartDate && matchesEndDate;
    });

    setFilteredEvents(filtered);
    setCurrentPage(1); // Reset to the first page after search
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchTerms(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  // Get current events for the page
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent);

  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="flex-wrap flex text-indigo-400 font-bold text-3xl justify-center p-2">
        All Events
      </div>
      <div className="flex flex-col items-center  min-h-screen p-4">
        <form onSubmit={handleSubmit} className="mb-8 p-4 bg-white rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="flex flex-col">
              <label htmlFor="eventName" className="text-sm font-medium text-gray-700 mb-1">Event Name</label>
              <input
                type="text"
                name="eventName"
                id="eventName"
                value={searchTerms.eventName}
                onChange={handleInputChange}
                placeholder="Event Name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="location" className="text-sm font-medium text-gray-700 mb-1">Location</label>
              <input
                type="text"
                name="location"
                id="location"
                value={searchTerms.location}
                onChange={handleInputChange}
                placeholder="Location"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="price" className="text-sm font-medium text-gray-700 mb-1">Max Price</label>
              <input
                type="number"
                name="price"
                id="price"
                value={searchTerms.price}
                onChange={handleInputChange}
                placeholder="Max Price"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="startDate" className="text-sm font-medium text-gray-700 mb-1">Start Date</label>
              <input
                type="date"
                name="startDate"
                id="startDate"
                value={searchTerms.startDate}
                onChange={handleInputChange}
                placeholder="Start Date"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="endDate" className="text-sm font-medium text-gray-700 mb-1">End Date</label>
              <input
                type="date"
                name="endDate"
                id="endDate"
                value={searchTerms.endDate}
                onChange={handleInputChange}
                placeholder="End Date"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Search Events
          </button>
        </form>
        <div className="flex justify-center mt-2 mb-8">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`mx-1 px-3 py-1 rounded-md ${currentPage === index + 1 ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600 border border-indigo-600'}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <div className="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {
            currentEvents.map((event, index) => (
              <div key={index} className="w-full">
                <EventCard
                  key={index}
                  img={event.image}
                  eventName={event.name}
                  location={event.location}
                  date={event.date}
                  price={event.price}
                />
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
}
