import React from "react";
import Workout from "./Workout";


const mainWorkoutList = [
  {
    name:"Workout name",
    group:"Muscle Group",
    description:"Description of Workout"
  },
  {
    name:"Workout name2",
    group:"Muscle Group2",
    description:"Description of Workout2"
  },
  {
    name:"Workout name3",
    group:"Muscle Group3",
    description:"Description of Workout3"
  },
];




function WorkoutList(){
  return (
    <React.Fragment>
      <hr/>
      {mainWorkoutList.map((workout, index) =>
        <Workout name={workout.name}
          group={workout.group}
          description={workout.description}
          key={index}/>
      )}
    </React.Fragment>
  );
}

export default WorkoutList;