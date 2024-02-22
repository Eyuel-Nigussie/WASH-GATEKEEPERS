import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import FAQ from './components/FAQ';
import Profile from './components/Profile';
import Individual from './components/Individual Issue';

const App = () => {
  // Adjusted style for a darker and less transparent full-page background logo
  const backgroundStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url(${process.env.PUBLIC_URL}/wash.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.5, // Reduced transparency for darker effect
    zIndex: -1, // Ensure the background is behind everything else
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adding dark overlay to the background
  };

  return (
    <Router>
      {/* Full-page background logo with adjusted opacity and dark overlay */}
      <div style={backgroundStyle}></div>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        borderBottom: '2px solid #ddd',
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Even darker background for the nav for better readability
        color: 'white', // Make text color white
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/" style={{ marginRight: '15px', textDecoration: 'none', color: 'white' }}>Home</Link>
          <Link to="/faq" style={{ marginRight: '15px', textDecoration: 'none', color: 'white' }}>FAQ</Link>
          <Link to="/profile" style={{ marginRight: '15px', textDecoration: 'none', color: 'white' }}>Profile</Link>
          <Link to="/logout" style={{ textDecoration: 'none', color: 'white' }}>Logout</Link>
        </div>
        <input 
          type="text" 
          placeholder="Search..." 
          style={{
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ddd',
            borderRadius: '20px',
            outline: 'none',
            color: 'black', // Ensure input text is visible
          }} 
        />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/individual/:id" element={<Individual />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
