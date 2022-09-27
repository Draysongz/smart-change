import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { json } from 'react-router-dom'
import './CryptoStats.css'
function CryptoStats() {
    const [coinPrice, setCoinPrice]= useState(0)
    const [coin, setCoin]= useState('')
    useEffect(()=>{
        const access_key='c598dc1e-312a-4678-8390-547c6227f8ff'
        const url = `api.coincap.io/v2/assets?access_key=${access_key}&symbols=BTC,ETH,SOL,ALGO`
        console.log(url);
        fetch(url)
        .then(res=> console.log(res.json()))
    })
  return (
    <div>
        <div className="column-container">
            <Row className='rows'>
                <Col >Coin</Col>
                <Col >Price</Col>
                <Col>Chart</Col>
            </Row>
            <Row className='rows'>
                <Col >sm=true</Col>
                <Col >sm=true</Col>
                <Col >sm=true</Col>
            </Row>
         </div>
    </div>
  )
}

export default CryptoStats
