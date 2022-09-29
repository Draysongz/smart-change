import React from 'react'
import iphone from '../assets/iphone.png'
import eclipse from '../assets/eclipse.png'
import {BsFillCheckCircleFill} from 'react-icons/bs'
import {Slide} from 'react-awesome-reveal'
import {Zoom} from 'react-awesome-reveal'
import './Features.css'

const Features = () => {
  return (
<div className="features-container"> 
    <div className="features">
        <div className="mockup-caption">
            <Zoom>
            <h1>Features</h1>
            </Zoom>
            <Slide direction='top' cascade damping={0.3}>
            <h3 className='Ui'> <BsFillCheckCircleFill className='check'/> User Friendly UI</h3>
            <p className='desc'>Smart change has been built with an easy and simple UI</p>
            <h3 className='Ui'> <BsFillCheckCircleFill className='check'/> Easy and Fast B2B swap</h3>
            <p className='desc'>Swap your coins easily with our B2B swap feature</p>
            <h3 className='Ui'> <BsFillCheckCircleFill className='check'/> Trade with Verified Merchants</h3>
            </Slide>
        </div>
        <Zoom>
        <div className="first-mockup">
       
            <img src={eclipse} alt="" className="eclipse" width='500' />
            <img src={iphone} alt="merchant" className="iphone" width='550'  />
        </div>
        </Zoom>
    </div>
</div>
  )
}

export default Features
