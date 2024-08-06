// src/components/Clubs.jsx
import React from 'react';
import ClubCard from './ClubCard';
import './Clubs.css';

import clubImage1 from '../../assets/gallery-2.png'; // Replace with your club images
import clubImage2 from '../../assets/gallery-4.jpg'; // Replace with your club images
import clubImage3 from '../../assets/gallery-5.jpg'; 
// ... import other club images

const Clubs = () => {
  const clubs = [
    { id: 1, name: 'Gaming Club', description: 'Connect with fellow gamers, participate in tournaments, and explore the latest in gaming technology. From eSports to casual gaming, join us for a vibrant gaming community.', image: clubImage1 },
    { id: 2, name: 'Technical Club', description: 'Enhance your skills with workshops, hackathons, and innovative projects. Collaborate with peers and industry experts to stay ahead in the tech world.', image: clubImage2 },
    { id: 3, name: 'Cultural Club', description: 'Celebrate diversity through events, festivals, and performances. Join us to explore and appreciate various cultural traditions and heritages.', image: clubImage3 },
    // Add other clubs
  ];

  return (
    <div className="clubs-container">
      {clubs.map((club) => (
        <ClubCard key={club.id} club={club} />
      ))}
    </div>
  );
};

export default Clubs;
