
import React from 'react';

function Navbar({ onLogout }) {
  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">College Events</h1>
      <button
        onClick={onLogout}
        className="bg-white text-blue-600 font-semibold px-4 py-2 rounded hover:bg-blue-100"
      >
        Logout
      </button>
    </nav>
  );
}

export default Navbar;
