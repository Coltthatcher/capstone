import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdDirectionsRun } from "react-icons/md";
import { FaBars, FaTimes } from 'react-icons/fa';


function Navbar() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  return (
    <React.Fragment>
      <div className='navbar'>
        <div className='navbar-container container'>
          <Link to='/' className='navbar-logo'>
            <MdDirectionsRun className='navbar-icon' />
            Goal
          </Link>
          <div className='menu-icon' onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to ='/' className='nav-links'>
                Homepage
              </Link>
            </li>
            <li className="nav-item">
              <Link to ='/services' className='nav-links'>
                Workout Plans
              </Link>
            </li>
            <li className="nav-item">
              <Link to ='/products' className='nav-links'>
                Pricing
              </Link>
            </li>
            <li className='nav-btn'>
              {button ? (
                <Link to='/sign-up' className='btn-link'>
                  <Button buttonStyle='btn--outline'>Start Goals</Button>
                </Link>
              ): (
                <Link to='/sign-up' className='btn-link'>
                  <Button buttonStyle='btn--outline'
                          buttonSize='btn--mobile'
                  >Sign Up</Button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Navbar