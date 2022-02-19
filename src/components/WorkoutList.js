import React from "react";
import Workout from "./Workout";

function WorkoutList(){
  return(
    <React.Fragment>
      <Workout
        group="Muscle Group"
        name="Workout name"
        description="Description of Workout" />
      <Workout
        group="Muscle Group2"
        name="Workout name2"
        description="Description of Workout2" />
    </React.Fragment>
  );
}

export default WorkoutList;