import { useState, useEffect } from "react";
import React from 'react'
import {useHistory, useParams} from 'react-router-dom';
import { db } from "./firebase-config";

const WorkoutPlans = () => {
  const [workouts, setWorkouts ] = useState([]);
  
  useEffect(() => {
    
  }, [])
  return (
    <React.Fragment>
    <div className='workout_section'>
      <div className='workout_wrapper'>
        <div className='workout_container'>
          <div className='col'>
            </div>
          </div>
        </div>
    </div>
    </React.Fragment>
  )
}

export default WorkoutPlans