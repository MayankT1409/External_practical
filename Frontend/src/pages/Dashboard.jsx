import React, { useEffect, useState } from 'react';
import api from '../services/api';
import EventForm from '../components/EventForm.jsx';
import EventCard from "../components/EventCard.jsx"; 
import EventDetailsModal from '../components/EventDetailsModal.jsx';

function Dashboard() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchEvents = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.get('/events');
      if (res?.data) {
        setEvents(res.data);
      } else {
        throw new Error('Invalid response data');
      }
    } catch (err) {
      console.error('Failed to fetch events:', err.message || err);
      setError('Failed to load events. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const filteredEvents = events.filter(e =>
    e.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Event Dashboard</h2>

      <input
        type="text"
        placeholder="Search events..."
        className="p-2 border rounded mb-4 w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <EventForm refreshEvents={fetchEvents} />

      {loading && <p className="text-blue-500">Loading events...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {!loading && !error && filteredEvents.map(event => (
          <EventCard
            key={event._id}
            event={event}
            refreshEvents={fetchEvents}
            onViewDetails={setSelectedEvent}
          />
        ))}
      </div>

      {selectedEvent && (
        <EventDetailsModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </div>
  );
}

export default Dashboard;