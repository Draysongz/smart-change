import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import '../Pages/CryptoStats.css'
const TrendingCoin = ({coin }) => {
    console.log(coin);
  return (
    <>
    <Row className='rows'>
                <Col className='name-display' ><img src={coin.small} id='coin-logo' alt="logo" width='35' /> <span>{coin.name}</span> </Col>
                <Col className='price-display' >{(coin.price_btc).toFixed(8)}</Col>
                <Col className='id-display'>{coin.id}</Col>
            </Row>


    </>
  )
}

export default TrendingCoin
