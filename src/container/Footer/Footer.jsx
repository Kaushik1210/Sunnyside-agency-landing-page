import React from 'react'
import './footer.css'
import images from '../../images'

const Footer = () => {
  return (
    <div id='contact'>
      <div className="footer">
        <div className="footer_logo">
          <img src={images.logofooter} alt="logo" />
        </div>

        <div className="footer_menu">
          <a href="#about">About </a>
          <a href="#services">Services</a>
          <a href="#project">Project</a>

          
          </div>

          <div className="contact_socialmedia">
            <img src={images.iconfacebook} alt="facebook" />
            <img src={images.iconinstagram} alt="imstagram" />
            <img src={images.icontwitter} alt="twitter" />
            <img src={images.iconpinterest} alt="pinterest" />
        </div>
      </div>
    </div>
  )
}

export default Footer
