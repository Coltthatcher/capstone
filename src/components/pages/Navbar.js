import React from 'react'

function Navbar() {
  return (
    <React.Fragment>
      <div className='navbar'>
        <div className='navbar-container container'>
          <Link to='/' className='navbar-logo'>
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