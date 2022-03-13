import { useState, useEffect } from "react";
import React from 'react'
import { db } from "./firebase-config";
import { collection, getDocs, addDoc, updateDoc, doc } from "firebase/firestore";
import "./WorkoutPlans.css"
import { Button } from "../../Button";


const WorkoutPlans = () => {

  const [newName, setNewName] = useState("")
  const [newGroup, setNewGroup] = useState("")
  const [newDescription, setNewDescription] = useState("")

  const [workouts, setWorkouts ] = useState([]);
  const usersCollectionRef = collection(db, "workouts")
  
  
  const createWorkout = async () => {
    await addDoc(usersCollectionRef, {name: newName, group: newGroup, description: newDescription})
  }

  

  const updateWorkout = async (id, name, group, description ) => {
    const workoutDoc = doc(db, "workouts", id)
    const newData = {name: name, group: group, description: description }
    await updateDoc(workoutDoc, newData)
    console.log(workoutDoc)
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
                    <div className="col1">
                      <h1>Name: {workouts.name}</h1>
                    </div>
                    <div className="col2">
                      <h1>Muscle-Group: {workouts.group}</h1>
                    </div>
                    <div className="col3">
                      <h1>Description: {workouts.description}</h1>
                    </div>
                    <input placeholder="Name..." 
                    onChange={(event) => {
                      setNewName(event.target.value)
                      }}
                      />
                    <input placeholder="Muscle-group..."
                    onChange={(event) => {
                    setNewGroup(event.target.value)
                    }}
                    onClick={(event) => {
                      updateDoc(event.target.value)
                      console.log(updateDoc)
                    }}
                    />
                    <input placeholder="Description..."
                    onChange={(event) => {
                      setNewDescription(event.target.value)
                      }}
                    />
                    <Button onClick={createWorkout} buttonSize='btn--large'>Create New Workout</Button>
                    <Button onClick={updateWorkout}buttonSize='btn--large'>Create New Workout</Button>
                    
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