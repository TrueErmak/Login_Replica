import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';


// Add any additional imports here, if necessary

function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('ID:', id, 'Password:', password);
    // Add logic to handle login here
  };

  const handleCreateAccount = () => {
    // Logic for handling account creation
    // For example, redirect to a sign-up page:
    console.log('Redirect to account creation page');
    // You can use window.location.href = '/signup' or use your router's navigation method if using React Router
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Secure Access</h2>
        <input 
          type="text" 
          placeholder="ID" 
          value={id} 
          onChange={(e) => setId(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Enter</button>
        <Link to="/create-profile" className="create-profile-link">Create Account</Link>
      </form>
    </div>
  );
  }



export default Login;
