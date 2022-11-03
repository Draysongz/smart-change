import React from 'react'
import Nav from '../components/Navbar'
import './Hero.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import logo from '../assets/logo.png'
import mockup from '../assets/mockup.png'


const Hero = () => {

    const showId= (e)=>{
        e.preventDefault()
        console.log(e.target.id);
    }

  return (
    <div className='holder' id='home'>
        <nav className="nav-container">
            <img src={logo} alt='crypto smart' width='100'/>
            <ul className="navlist">
                {Nav.map((nav, index)=>{
                    return(
                        <li className='navs' key={index}>
                            <a id={nav.id} href={`#${nav.id}`} onClick={showId}>
                            {nav.title} 
                            </a>
                            </li>
                            
                    )
                })}
            </ul>
            <Button id='downloadBtn' variant="dark ">Download</Button>
        </nav>
        <div className="hero">
            <div className="left">
                <div className="left-text">
                    <div className="paragraph">
                        <p>The World’s <br /> <span className="fast">Fastest Growing</span> <br /> Crypto App</p>
                       
                    </div>
                    <p className='description'> Buy and sell 200+ cryptocurrencies with 20+ flat currencies using <br /> bank transfers or your credit/debit card.</p>
                    <Button id='downloadBtn' variant="outline-dark ">Get Started</Button>
                    </div>
            </div>

            <div className="right">
               
                <img className='mockup' src={mockup} alt='mockup' width='900' />
                
            </div>
        </div>
    </div>
  )
}

export default Hero
