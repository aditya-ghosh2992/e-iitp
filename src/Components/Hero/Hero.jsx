import React from 'react'
import './Hero.css'
import './Explore.css'; 
import dark_arrow from '../../assets/dark-arrow.png'
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleExploreMore = () => {
    navigate('/explore');
  };

  return (
    <div className='hero'>
      <div className="hero-text">
        <h1>
          E-Gymkhana IIT Patna<br/>
          <span className='typing'>Welcome's  You!</span>
        </h1>
        <p>Get ready to ignite your student life with IIT Patna! <b>E-Gymkhana of IITP</b> is ready to enhances your hybrid learning experience. <br />🌟 E-Gymkhana is where your campus experience comes alive! 🌟</p>
        <button className='btn' onClick={handleExploreMore}>
          Explore more <img src={dark_arrow} alt="Arrow icon" />
        </button>
      </div>
    </div>
  )
}

export default Hero;
