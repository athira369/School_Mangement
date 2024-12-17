import React, { useState } from 'react';
import { StudentSignInContainer, FormContainer, InputField, SubmitButton } from '../styles/StudentSignInStyles';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const StudentSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();  // Use useNavigate to navigate after successful sign-in

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/v1/auth/studentsignin', { email, password });

      if (response.data.success) {
        // Save the JWT token in localStorage (or cookies)
        localStorage.setItem('token', response.data.token);
        
        // Navigate to the student dashboard
        navigate('/student/dashboard');
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('Something went wrong. Please try again later.');
      console.error('Sign-in error:', err);
    }
  };

  return (
    <StudentSignInContainer>
      <h2>Student Sign In</h2>
      <FormContainer onSubmit={handleSignIn}>
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /> 
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <SubmitButton type="submit">Sign In</SubmitButton>
      </FormContainer>
    </StudentSignInContainer>
  );
};

export default StudentSignIn;
