import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdDirectionsRun } from "react-icons/md";
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib' 


function Navbar() {
  const [click, setClick] = useState(false)

  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)

  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if(window.innerWidth <= 960 ) {
      setButton(false)
    } else {
      setButton(true);
    }
  }

useEffect(() => {
  showButton();
}, []);

  return (
    <React.Fragment>
      <IconContext.Provider value={{ color: '#fff'}}>
      <div className='navbar'>
        <div className='navbar-container container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <MdDirectionsRun className='navbar-icon' />
            GOAL
          </Link>
          <div className='menu-icon' onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to ='/' className='nav-links' onClick={closeMobileMenu} >
                Homepage
              </Link>
            </li>
            <li className="nav-item">
              <Link to ='/personal' className='nav-links' onClick={closeMobileMenu} >
                Personal Hub
              </Link>
            </li>
            <li className="nav-item">
              <Link to ='/pricing' className='nav-links' onClick={closeMobileMenu} >
                Pricing
              </Link>
            </li>
            <li className='nav-btn'>
              {button ? (
                <Link to='/sign-up' className='btn-link' >
                  <Button buttonStyle='btn--outline'>Start Goals</Button>
                </Link>
              ): (
                <Link to='/sign-up' className='btn-link' onClick={closeMobileMenu} >
                  <Button buttonStyle='btn--outline'
                          buttonSize='btn--mobile'
                  >Sign Up</Button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
      </IconContext.Provider>
    </React.Fragment>
  )
}

export default Navbar