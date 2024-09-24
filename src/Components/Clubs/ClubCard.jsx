// src/components/Clubs/ClubCard.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ClubCard = ({ club }) => {
  const [flipped, setFlipped] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setFlipped(true);
  };

  const handleMouseLeave = () => {
    setFlipped(false);
  };

  const handleExploreClick = () => {
    // Navigate to the respective club page
    navigate(`/clubs/${club.id}`);
  };

  return (
    <div
      className="club-card-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`club-card ${flipped ? 'flipped' : ''}`}>
        <div className="club-card-front">
          <img src={club.image} alt={club.name} className="club-card-image" />
        </div>
        <div className="club-card-back">
          <h2 className="club-card-title">{club.name}</h2>
          <p className="club-card-description">{club.description}</p>
          <button className="club-card-button" onClick={handleExploreClick}>
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClubCard;
