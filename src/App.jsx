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
import Gallery from './Components/Gallery/Gallery';
import Registrationform from './Components/Registrationform/RegistrationForm';
import GamingClub from './Components/Clubs/GamingClub';
import TechnicalClub from './Components/Clubs/TechnicalClub';
import CulturalClub from './Components/Clubs/CulturalClub';
import EntrepeneurClub from './Components/Clubs/EntrepeneurClub';
import Explore from './Components/Hero/Explore';

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
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/register-form" element={<Registrationform />} />
        <Route path="/clubs/1" element={<GamingClub />} />
        <Route path="/clubs/2" element={<TechnicalClub />} />
        <Route path="/clubs/3" element={<CulturalClub />} />
        <Route path="/clubs/4" element={<EntrepeneurClub />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </Router>
  );
};

export default App;
