import React from 'react';
import { Link } from 'react-router-dom';

function StaffDashboard() {
  return (
    <div>
      <h1>Office Staff Dashboard</h1>
      <ul>
        <li><Link to="/staff/students">View Students</Link></li>
        <li><Link to="/staff/fees">Manage Fees</Link></li>
        <li><Link to="/staff/library-records">View Library Records</Link></li>
      </ul>
    </div>
  );
}

export default StaffDashboard;
