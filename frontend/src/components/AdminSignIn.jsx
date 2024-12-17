import React, { useState } from 'react';
import { AdminSignInContainer, FormContainer, InputField, SubmitButton } from '../styles/AdminSignInStyles';
import axios from 'axios';

const AdminSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    debugger
    e.preventDefault(); // Prevent form default behavior
    
    try {
      debugger
      const response = await axios.post('http://localhost:5000/api/v1/admin/signin', { email, password });
      if (response.status === 200) {
        // Sign-in successful, redirect to admin dashboard
        console.log('Admin Sign In:', { email, password });
        window.location.href = '/admin/dashboard'; // Programmatic redirection
      } else {
        // Handle sign-in errors
        console.error('Sign-in failed');
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
    }
  };

  return (
    <AdminSignInContainer>
      <h2>Admin Sign In</h2>
      <FormContainer >  {/* Use onSubmit here for better form handling */}
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
        <SubmitButton type="submit" onClick={handleSignIn}>Sign In</SubmitButton>  {/* Use type="submit" for button */}
      </FormContainer>
    </AdminSignInContainer>
  );
};

export default AdminSignIn;
