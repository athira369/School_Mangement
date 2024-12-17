import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">School Management System</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Admin Button */}
        <Link
          to="/admin/login"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded text-center"
        >
          Admin
        </Link>

        {/* Office Staff Button */}
        <Link
          to="/staff/login"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded text-center"
        >
          Office Staff
        </Link>
          {/* Librarian Button */}
        <Link
          to="/admin/login"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded text-center"
        >
          Librarian
        </Link>

        {/* Students Button */}
        <Link
          to="/student/login"
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-4 px-6 rounded text-center"
        >
          Students
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
