import React from 'react'
import'./Personal.css'
import { Link } from 'react-router-dom';

function Personal() {
  return (
  <div className='personal_section'>
    <div className='wrapper_personal'>
      <h1 className='personal_heading'>Personal Hub</h1>
      <Link to='/workoutplans' className="workout-plans-sheet">
        <div className='personal-plans'></div>
      </Link>
    </div>
  </div>

  
  )
}

export default Personal