import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Technology Students' Gymkhana IIT Patna Welcomes You!</h1>
        <p>Join a vibrant community where innovation meets tradition. At Gymkhana IIT Patna, we nurture talent, inspire creativity, and cultivate leaders of tomorrow. Explore endless possibilities and transform your aspirations into reality.</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
