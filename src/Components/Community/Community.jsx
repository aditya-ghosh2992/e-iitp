import React from 'react'
import './Community.css'
import program_1 from '../../assets/program-1.jpg'
import program_2 from '../../assets/program-2.jpg'
import program_3 from '../../assets/program-2.jpg'
import Technology from '../../assets/program-icon-4.png'
import Sports from '../../assets/program-icon-4.png'
import Social from '../../assets/program-icon-4.png'


const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={program_1} alt="" />
            <div className="caption">
                <img src={Technology} alt="" />
                <p>Technology Community</p>
            </div>
        </div>
        <div className="program">
            <img src={program_2} alt="" />
            <div className="caption">
                <img src={Sports} alt="" />
                <p>Sports Community</p>
            </div>
        </div>
        <div className="program">
            <img src={program_3} alt="" />
            <div className="caption">
                <img src={Social} alt="" />
                <p>Social & Clutural Community</p>
            </div>
        </div>
      
    </div>
  )
}

export default Programs
