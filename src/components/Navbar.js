import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () =>setClick(false);

    const showButton = ()  =>  {
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    };
    useEffect(() =>{
        showButton()
    }, [] );

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                       
                        <img src='https://i.ibb.co/YRyW8Zk/LOGOBE.png' alt="" className="logo" ></img>
                    </Link>
                </div>
                <div class="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active': 'nav-menu'}>
                    <li class="nav-item">
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to='/services' className="nav-links" onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to='/products' className="nav-links" onClick={closeMobileMenu}>
                            Productos
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to='/sign-up' className="nav-links-mobile" onClick={closeMobileMenu}>
                            Sign up
                        </Link>
                    </li>
                </ul>

                {button && <Button buttonSyle="btn--outline ">SIGN UP</Button>}
            </nav>
        </>
    )
}

export default Navbar
