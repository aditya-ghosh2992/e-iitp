import React from 'react'
import './About.css'
import about2_img from '../../assets/about2.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about2_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon'/>
        </div>
        <div className="about-right">
            <h3>ABOUT E-GYMKHANA</h3>
            <h2>"Empower. Engage. Excel."</h2>
            <br />
            <p>Welcome to <b>E-Gymkhana at IIT Patna</b>—the official hybrid student community, where the future of learning comes to life. E-Gymkhana is a dynamic hub designed to elevate your hybrid learning experience, blending the best of virtual and on-campus opportunities.
            </p>
            <p>Our mission is to empower every student with the tools, connections, and experiences needed to thrive in an ever-evolving academic landscape. Whether you're participating in cutting-edge workshops, joining thrilling events, or leading innovative projects, E-Gymkhana offers endless opportunities for growth and discovery.</p>
            <p> Here, education goes beyond the online classes. We foster a culture of collaboration, creativity, and leadership, helping you build the skills and networks that will shape your future. At E-Gymkhana, you’re not just part of a community—you’re part of a movement towards excellence, innovation, and success at IIT Patna.</p>

        </div>
    </div>
  )
}

export default About
