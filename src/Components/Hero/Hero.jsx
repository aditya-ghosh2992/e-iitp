import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  const handleExploreMore = () => {
    // Add your navigation or action logic here
    console.log('Explore more clicked!');
  };

  return (
    <div className='hero'>
      <div className="hero-text">
        <h1>
          E-Gymkhana IIT Patna<br/>
          <span className='typing'>Welcome's  You!</span>
        </h1>
        <p>Get ready to ignite your student life with IIT Patna! <b>E-Gymkhana of IITP</b> is a vibrant student community that enhances the hybrid learning experience with thrilling events, innovative workshops, and endless opportunities for growth. <br />🌟 E-Gymkhana is where your campus experience comes alive! 🌟</p>
        <button className='btn' onClick={handleExploreMore}>
          Explore more <img src={dark_arrow} alt="Arrow icon" />
        </button>
      </div>
    </div>
  )
}

export default Hero
