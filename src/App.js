import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import CreateProfile from './CreateProfile';
import HomePage from './pages/HomePage';
import AccessDenied from './pages/AccessDenied';

// other component imports

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create-profile" element={<CreateProfile />} />
        <Route path="/pages/HomePage" element={<HomePage />} />
        <Route path="/pages/AccessDenied" element={<AccessDenied />} />
        {/* other routes */}
      </Routes>
    </Router>
  );
}

export default App;
