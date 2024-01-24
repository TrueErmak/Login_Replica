import React, { useState } from 'react';
import './CreateProfile.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
//  -------------- DECLARATION ZONE -------------------------------



function CreateProfile() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password,
            email: email,
        }),
      });

      if (response.ok) {
        setRegistrationSuccess(true);
        setTimeout(() => {
          navigate('/'); // Redirect to login page after 3 seconds
        }, 3000);
      } else {
        console.log("Error creating profile");
      }
    } catch (error) {
        console.error("There was an error: ", error);
    }
  };

  return (
    <div className="create-profile-container">
      {registrationSuccess ? (
        <div>
          <h2>Profile Created Successfully</h2>
          <p>Redirecting to login...</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="create-profile-form">
          <h2>Create Your Profile</h2>
          <input 
            type="text" 
            placeholder="Username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <button type="submit">Create Profile</button>
        </form>
      )}
    </div>
  );
}

export default CreateProfile;
