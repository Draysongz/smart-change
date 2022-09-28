import React from 'react'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import TrendingCoin from '../components/TrendingCoin'
import useAxios from '../Hooks/useAxios'
import {Slide} from 'react-awesome-reveal'
import trending from '../assets/trending.png'
import './CryptoStats.css'
function CryptoStats() {
 const {response}= useAxios("search/trending")
  return (
    <div className='stats-container'>
       
        <div className="left">
        <Slide direction='left'>
            <img src={trending} alt="trending" width='400' />
            </Slide>
        </div>
        

        <Slide direction='right' duration='2000'>
        <div className="column-container">
            <h3>Trending</h3>
            <Row className='rows'>
                <Col >Coin</Col>
                <Col >Price/BTC</Col>
                <Col>ID</Col>
            </Row>
            <Slide direction='up'>
            {response && response.coins.map(coin=> <TrendingCoin key={coin.item.coin_id} coin = {coin.item}/>  )}
            </Slide>
         </div>
         </Slide>
    </div>
   
  )
}

export default CryptoStats
