import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Clubs from './Components/Clubs/Clubs';
import Community from './Components/Community/Community';
import Events from './Components/Events/Events';
import Video from './Components/video/VideoSection';
import Register from './Components/Register/Register';
import Gallery from './Components/Gallery/Gallery'; // Import Gallery component
import Registrationform from './Components/Registrationform/RegistrationForm';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about_us" element={<About />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/community" element={<Community />} />
        <Route path="/events" element={<Events />} />
        <Route path="/video" element={<Video />} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/gallery" element={<Gallery />} /> {/* Add Gallery route */}
        <Route path="/register-form" element={<Registrationform />} />
      </Routes>
    </Router>
  );
};

export default App;
