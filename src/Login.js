import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



// Add any additional imports here, if necessary

function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate here

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:5000/login', { // Make sure the URL matches your Flask server
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: id,  // Ensure 'id' is your username field
                password: password,
            }),
        });

        const data = await response.json();
        if (response.ok && data.message === 'Login successful') {
            // Redirect to HomePage if login is successful
            navigate('/pages/homePage');
        } else {
            // Redirect to AccessDenied route if login is unsuccessful
            navigate('/pages/AccessDenied');
        }
    } catch (error) {
        console.error("There was an error: ", error);
    }
};

  const handleCreateAccount = () => {
    // Logic for handling account creation
    // For example, redirect to a sign-up page:
    console.log('Redirect to account creation page');
    // You can use window.location.href = '/signup' or use your router's navigation method if using React Router
  };

  // to handle the hook statments that navigate to the home page after a sucessfull login
  

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
