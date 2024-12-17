import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">
        School Management
      </Link>
      <div>
        <Link to="/students" className="mx-4 hover:underline">Students</Link>
        <Link to="/fees" className="mx-4 hover:underline">Fees</Link>
        <Link to="/library" className="mx-4 hover:underline">Library</Link>
        <Link to="/profile" className="mx-4 hover:underline">Profile</Link>
      </div>
    </nav>
  );
}

export default Navbar;
