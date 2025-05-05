import React, { useState } from 'react';
import api from '../services/api';

function EventForm({ refreshEvents }) {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('type', type);
    formData.append('image', image);

    await api.post('/events', formData);
    setName('');
    setType('');
    setImage(null);
    refreshEvents();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input type="text" placeholder="Event Name" value={name} onChange={(e) => setName(e.target.value)} className="p-2 border rounded w-full mb-2" required />
      <input type="text" placeholder="Event Type" value={type} onChange={(e) => setType(e.target.value)} className="p-2 border rounded w-full mb-2" required />
      <input type="file" onChange={(e) => setImage(e.target.files[0])} className="mb-2" required />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Event</button>
    </form>
  );
}

export default EventForm;
