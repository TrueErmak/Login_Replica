import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import CreateProfile from './CreateProfile';
// Import other components you need for routing

function TravelingLight() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create-profile" element={<CreateProfile />} />
        {/* Add other routes here */}
        {/* For example: */}
        {/* <Route path="/your-path" element={<YourComponent />} /> */}
      </Routes>
    </Router>
  );
}

export default TravelingLight;
