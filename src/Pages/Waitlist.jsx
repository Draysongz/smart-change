import React from 'react'
import './Waitlist.css'

const Waitlist = () => {

  return (
    <div>
        <div className="list-container">
          <h1>Join The Waitlist</h1>
          <div className="waitlist-input">
            <input type="email"  placeholder='johndoe@gmail.com' id='email' className="list-input" />
            <button className="input-btn">Submit</button>
          </div>
      
        </div>
    </div>
  )
} 

export default Waitlist