import React from 'react';

const EventCard = ({ eventName, location, date, price, img }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg bg-white transform transition-transform duration-500 hover:scale-105">
      <img src={`https://savefiles.org/${img}?shareable_link=282`} alt={eventName} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{eventName}</h3>
        <p className="text-gray-500">{new Date(date).toLocaleDateString()}</p>
        <p className="text-gray-700">{location}</p>
        <p className="text-gray-900 font-bold">${price}</p>
      </div>
    </div>
  );
};

export default EventCard;