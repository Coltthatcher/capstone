import React from 'react';
import { Link } from 'react-router-dom';
import { MdDirectionsRun } from "react-icons/md";
import { FaBars, FaTimes } from 'react-icons/fa';


function Navbar() {
  return (
    <React.Fragment>
      <div className='navbar'>
        <div className='navbar-container container'>
          <Link to='/' className='navbar-logo'>
            <MdDirectionsRun className='navbar-icon' />
            Goal
          </Link>
          <div className='menu-icon'>

          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Navbar