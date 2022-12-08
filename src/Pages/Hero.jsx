import React from 'react'
import './Hero.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import mockup from '../assets/mockup.png'


const Hero = () => {

  

  return (
    <div className='holder' id='home'>
        <div className="hero">
            <div className="left">
                <div className="left-text">
                    <div className="paragraph">
                        <p>The World’s <br /> <span className="fast">Fastest Growing</span> <br /> Crypto App</p>
                       
                    </div>
                    <p className='description'> Buy and sell 200+ cryptocurrencies with 20+ flat currencies using <br /> bank transfers or your credit/debit card.</p>
                    {/* <Button id='downloadBtn' variant="outline-dark ">Get Started</Button> */}
                   
                    </div>
            </div>
            <div className="right">
                <img src={mockup} alt="mockup" className="mockup"  />
            </div>
        </div>
    </div>
  )
}

export default Hero
