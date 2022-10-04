import React from 'react'
import './Features.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBill1Wave } from '@fortawesome/free-solid-svg-icons'
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'

const Features = () => {
  return (
    <div className="features-container">
      <h1 className="feature-title">Features</h1>
        {/*features div container */}
      <div className="features">
          {/*first div */}
        <div className="buy">
          <div className="buy-icon">
          <FontAwesomeIcon icon={faMoneyBill1Wave} className='font' />
          </div>
        <h2 className='buy-title'>Buy</h2>
        <p>Lorem, ipsum dolor sit amet consectetur<br />
         Molestias cum unde voluptatem aut quas sapiente non? Et aut sapiente maiores corporis!</p>
        </div>

        {/*Second div */}
        <div className="sell">
        <div className="buy-icon">
          <FontAwesomeIcon icon={faCartShopping} className='font' />
          </div>
        <h2 className='sell-title'>Sell</h2>
        <p>Lorem, ipsum dolor sit amet consectetur<br />
         Molestias cum unde voluptatem aut quas<br />
         sapiente non? Et aut sapiente maiores corporis!</p>
        </div>
        <div className="swap">
        <div className="buy-icon">
          <FontAwesomeIcon icon={faArrowRightArrowLeft} className='font' />
          </div>
        <h2 className='swap-title'>B2B Swap</h2>
        <p>Lorem, ipsum dolor sit amet consectetur<br />
         Molestias cum unde voluptatem aut quas sapiente non? Et aut sapiente maiores corporis!</p>
        </div>
      </div>
    </div>
  )
}

export default Features