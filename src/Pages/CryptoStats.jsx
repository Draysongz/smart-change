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
    <div>
        <div className="left">
            <img src={trending} alt="trending" />
        </div>
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
    </div>
  )
}

export default CryptoStats
