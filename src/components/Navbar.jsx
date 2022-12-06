import React, {useState} from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import { Button } from 'react-bootstrap';
import Nav from './Navbar'
const Navbar = () => {

    //to change burger classes
    const [burger_class, setBurgerClass]= useState('burger-bar unclicked')
    const [menu_class, setMenuClass]= useState('menu hidden')
    const[isMenuClicked, setIsMenuClicked] = useState(false)
     
    //toggle burger menu changes
    const updateMenu = () =>{
        if(isMenuClicked){
            setBurgerClass('burger-bar clicked')
            setMenuClass('menu visible')
        }else{
            setBurgerClass('burger-bar unclicked')
            setMenuClass('menu hidden')
        }
        setIsMenuClicked(!isMenuClicked)
    }
  return (
    <div style={{width: '100%', height:'10vh'}}>
        <nav className='small-nav'>
            <div className="small-logo">
                 <img className='brandl' src={logo} alt='crypto smart' width='100'/>
            </div>
            <div className='burger-menu' onClick={updateMenu}>
                <div className={burger_class} ></div>
                <div className={burger_class} ></div>
                <div className={burger_class} ></div>
            </div>
        </nav>
    
    <div className={menu_class }>
       <ul className='small-list'>
        <li className='small-list-type'><a href='#home'>Home</a></li>
        <li className='small-list-type'><a href='#about'>About us</a></li>
        <li className='small-list-type'><a href='#features'>Features</a></li>
        <Button id='downloadBtn' variant="dark ">Download</Button>
       </ul>
            
    </div>
    <nav className="nav-container">
            <img className='brand' src={logo} alt='crypto smart' width='100'/>
            <ul className="navlist">
                {Nav.map((nav, index)=>{
                    return(
                        <li className='navs' key={index}>
                            <a id={nav.id} href={`#${nav.id}`}>
                            {nav.title} 
                            </a>
                            </li>
                            
                    )
                })}
            </ul>
            <Button id='downloadBtn' variant="dark ">Download</Button>
        </nav>
    </div>
  )
}

export default Navbar