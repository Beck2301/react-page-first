import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () =>setClick(false);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        BEDEV <i class="fab fa-typo3"></i>
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
                        <Link to='/productos' className="nav-links" onClick={closeMobileMenu}>
                            Productos
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to='/sign-up' className="nav-links-mobile" onClick={closeMobileMenu}>
                            Sign up
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
