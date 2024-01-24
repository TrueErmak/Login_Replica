import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import './pages/Login.css';
import CreateProfile from './CreateProfile';
import HomePage from './pages/HomePage';
import AccessDenied from './pages/AccessDenied';
import './pages/AccessDenied.css';
// Import other components you need for routing

function TravelingLight() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create-profile" element={<CreateProfile />} />
        <Route path="/pages/HomePage" element={<HomePage />} /> 
        <Route path="/pages/AccessDenied" element={<AccessDenied />} />
        {/* Add other routes here */}
        {/* For example: */}
        {/* <Route path="/your-path" element={<YourComponent />} /> */}
      </Routes>
    </Router>
  );
}

export default TravelingLight;
