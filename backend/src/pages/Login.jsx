import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // Determine the user role based on the route
  const role = location.pathname.includes('admin')
    ? 'Admin'
    : location.pathname.includes('staff')
    ? 'Office Staff'
    : location.pathname.includes('librarian')
    ? 'Librarian'
    : 'Student';

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', { username, password, role });

      // Navigate to the appropriate dashboard after login
      if (role === 'Admin') navigate('/admin/dashboard');
      else if (role === 'Office Staff') navigate('/staff/dashboard');
      else if (role === 'Librarian') navigate('/librarian/dashboard');
      else navigate('/student/dashboard');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Login as {role}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="block w-full mb-4 px-4 py-2 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full mb-4 px-4 py-2 border rounded"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p>
            Don't have an account?{' '}
            <Link
              to={`/${role.toLowerCase()}/signup`}
              className="text-blue-500 hover:underline"
            >
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
