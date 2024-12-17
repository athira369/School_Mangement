import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl mb-4">Welcome to the School Management System</h1>
      <Link to="/students" className="text-blue-500">Go to Student List</Link>
    </div>
  );
}

export default Home;
