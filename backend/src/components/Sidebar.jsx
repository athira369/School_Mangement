import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="bg-gray-800 text-white w-64 h-screen p-5">
      <h2 className="text-xl font-semibold mb-5">Dashboard</h2>
      <ul>
        <li>
          <Link to="/students" className="block py-2 px-4 rounded hover:bg-blue-500">Students</Link>
        </li>
        <li>
          <Link to="/fees" className="block py-2 px-4 rounded hover:bg-blue-500">Fees</Link>
        </li>
        <li>
          <Link to="/library" className="block py-2 px-4 rounded hover:bg-blue-500">Library</Link>
        </li>
        <li>
          <Link to="/profile" className="block py-2 px-4 rounded hover:bg-blue-500">Profile</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
