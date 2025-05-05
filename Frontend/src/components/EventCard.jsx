
import React from 'react';

const EventCard = ({ event, onEdit, onDelete, onView }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <h3 className="text-xl font-semibold">{event.title}</h3>
      <p className="text-sm text-gray-600">{event.type}</p>
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-40 object-cover rounded-md my-2"
      />
      <div className="flex justify-between mt-2">
        <button
          className="text-blue-600 hover:underline"
          onClick={() => onView(event)}
        >
          View
        </button>
        <button
          className="text-green-600 hover:underline"
          onClick={() => onEdit(event)}
        >
          Edit
        </button>
        <button
          className="text-red-600 hover:underline"
          onClick={() => onDelete(event._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default EventCard;
