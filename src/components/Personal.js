import React from 'react'
import'./Personal.css'
import { Link } from 'react-router-dom';
import { BsFlower2 } from 'react-icons/bs';


function Personal() {
  return (
  <div className='personal_section'>
    <div className='wrapper_personal'>
      <h1 className='personal_heading'>Personal Hub</h1>
      <Link to='/workoutplans' className="workout-plans-sheet">
        <div className='personal-plan1'>
          <div className='icon-pers'>
          <BsFlower2 />
          </div>
          <h3>Your Plans</h3>
        </div>
        <div className='personal-plan1'>
          <BsFlower2 />
          <h1 className='workout-link'>Workout Hub</h1>
        </div>
        <div className='personal-plan1'>
          <BsFlower2 />
          <h1 className='help'>Help</h1>
        </div>
        
      </Link>
    </div>
  </div>

  
  )
}

export default Personal