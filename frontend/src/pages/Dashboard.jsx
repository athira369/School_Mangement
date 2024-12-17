import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <p>Welcome to the School Management System!</p>
      <div className="mt-6">
        <Link to="/students" className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700">Go to Students</Link>
      </div>
      <div className="mt-4">
        <Link to="/fees" className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700">Manage Fees</Link>
      </div>
      <div className="mt-4">
        <Link to="/library" className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700">Manage Library</Link>
      </div>
    </div>
  );
}

export default Dashboard;
