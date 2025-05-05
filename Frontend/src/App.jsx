import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Navbar from './components/Navbar.jsx';
import EventCard from './components/EventCard.jsx';
import EventForm from './components/EventForm.jsx';
import EventDetailsModal from './components/EventDetailsModal.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/event-card" element={<EventCard />} />
            <Route path="/event-form" element={<EventForm />} />
            <Route path="/event-details-modal" element={<EventDetailsModal />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
