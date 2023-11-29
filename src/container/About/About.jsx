import React from 'react'
import './about.css'
import images from '../../images'
import Navbar from '../Navbar/Navbar'



const About = () => {
 return (
    
      <div>
           
        <div className="about_bg">
          
        <Navbar/> 
          <div className="about_overlay">
            <h1 className='about_heading'>
              WE ARE CREATIVES
            </h1>
            <img src={images.iconarrowdown} className='arrowdown' />
          </div>
        </div>

      </div>
      
    
  )
}

export default About
