import React from 'react';

function EventDetailsModal({ event, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h3 className="text-xl font-bold mb-2">{event.name}</h3>
        <img src={event.imageUrl} alt={event.name} className="w-full h-48 object-cover rounded mb-2" />
        <p><strong>Type:</strong> {event.type}</p>
        <p><strong>ID:</strong> {event._id}</p>
        <button onClick={onClose} className="mt-4 bg-gray-600 text-white px-4 py-2 rounded">Close</button>
      </div>
    </div>
  );
}

export default EventDetailsModal;
