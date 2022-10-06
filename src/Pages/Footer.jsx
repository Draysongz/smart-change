import React from 'react'
import './Footer.css'
import logo from '../assets/logo.png'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
   <div className="footer-container" id='footer'>
    <div className="first">
      <img src={logo} alt="smart-logo" width='100' />
    
    </div>
    <div className="second">
      <h3>Buy Crypto</h3>
      <h3>Exchanges</h3>
      <h3>Watchlist</h3>
      <h3>Portfolio</h3>
    </div>
    <div className="third">
      <h3>Products</h3>
      <h3>About Us</h3>
      <h3>Careers</h3>
      <h3>Blog</h3>
    </div>
    <div className="fourth">
    <h3>Help Center</h3>
      <h3>Contact Us</h3>
      <h3>System Status</h3>
      <h3>Availability</h3>
    </div>
    <div className="fifth">
      <h3>Newsletter</h3>
      <h4>Never miss anything crypto <br /> when you're on the go</h4>
      <div className="email">
      <input type="text" placeholder='Enter you email address' className='email-input' />
      <div className="button">
        <FontAwesomeIcon icon={faArrowAltCircleRight} className='arrow'/>
      </div>
      </div>
      
    </div>
   </div>
  )
}

export default Footer
