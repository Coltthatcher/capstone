import { useState, useEffect } from "react";
import React from 'react'
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import "./WorkoutPlans.css"
import { Button } from "../../Button";


const WorkoutPlans = () => {

  const [workouts, setWorkouts ] = useState([]);
  const usersCollectionRef = collection(db, "workouts")
  const createWorkout = async () => {

  }

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
          <div className='columns'>
            <div className="workouts">
              
              {workouts.map((workouts) => {
                return (
                  <div>
                    {" "}
                    <div className="col">
                      <h1>Name: {workouts.name}</h1>
                    </div>
                    <div className="col2">
                      <h1>Muscle-Group: {workouts.group}</h1>
                    </div>
                    <div className="col3">
                      <h1>Description: {workouts.description}</h1>
                    </div>
                    <input placeholder="Name..." />
                    <input placeholder="Name..." />
                    <input placeholder="Name..." />
                    <Button onClick={createWorkout} buttonSize='btn--large'>Create New Workout</Button>
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