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
            <h3>ABOUT GYMKHANA</h3>
            <h2>Tomorrow's Champions Hub</h2>
            <p>Technology Students’ Gymkhana is the hub of the numerous extra-curricular and co-curricular activities in IIT Patna ranging from sports to socio-cultural. The Gymkhana is managed by the students, for the students, under the guidance and active participation of the faculty and staff members.
            </p>
            <p>The moto of Technology Students' Gymkhana is YOGAH KARMASU KAUSALAM  which in English means "Excellence in action is Yoga". Our goal is to bring overall development in IITians through cultivating and nurturing their extra-curricular talents.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis soluta facilis sapiente officiis ea repudiandae facere quidem ut laboriosam aperiam illo possimus voluptates aliquam sed veniam saepe corrupti, reiciendis illum!</p>

        </div>
    </div>
  )
}

export default About
