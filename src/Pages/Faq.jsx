import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import './Faq.css'
import FAQ from '../assets/FAQs.png'


const Faq = () => {
  return (
    <>
    <h2 className='faq'>Frequently Asked Questions</h2>
    <div className="faq-container">
        <div className="faq-image">
            <img className='faq-logo' src={FAQ} alt="" width='600' />
        </div>
        <Accordion className='accordion'  flush>
      <Accordion.Item id='acc-header' eventKey="0">
        <Accordion.Header id='acc-head'>How do I Get the app?</Accordion.Header>
        <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item id='acc-header' eventKey="1">
        <Accordion.Header id='acc-head'>How do i become a verified Merchant</Accordion.Header>
        <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item id='acc-header' eventKey="2">
        <Accordion.Header id='acc-head'>How Secure is Smart Change</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    </>
  )
}

export default Faq