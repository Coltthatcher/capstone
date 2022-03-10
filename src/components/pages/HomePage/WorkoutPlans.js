import { useState, useEffect } from "react";
import React from 'react'
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";


const WorkoutPlans = () => {
  const [workouts, setWorkouts ] = useState([]);
  const usersCollectionRef = collection(db, "workouts")
  useEffect(() => {

    const getWorkouts = async () => {
        const data = await getDocs(usersCollectionRef)
        setWorkouts(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }
    getWorkouts();
  }, [])
  return (
    <React.Fragment>
    <div className='workout_section'>
      <div className='workout_wrapper'>
        <div className='workout_container'>
          <div className='col'>
            <div className="workouts">
              {workouts.map((workouts) => {
                return (
                  <div>
                    {" "}
                  <h1>Name: {workouts.name}</h1>
                  <h1>Muscle-Group: {workouts.group}</h1>
                  </div>
                )
              })}
            </div>
            </div>
          </div>
        </div>
    </div>
    </React.Fragment>
  )
}

export default WorkoutPlans