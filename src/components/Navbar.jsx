import React, {useState} from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
const [click, setClick]= useState(false)

const handleClick = ()=> setClick(!click)
  return(
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt='logo'/>
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu" }>
                <li className="nav-item"><a href='/'>Home</a></li>
                <li className="nav-item"><a href='/'>About</a></li>
                <li className="nav-item"><a href='/'>Features</a></li>
                <li className="nav-item"><a href='/'>FAQ</a></li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
              {click ? (<FaTimes size={30} style={{color: '#F9A826'}} />) : <FaBars size={30} style={{color: '#F9A826'}} /> }
              
            </div>
         </div>
    )
}

export default Navbar