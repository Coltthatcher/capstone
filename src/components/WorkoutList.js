import React from "react";
import Workout from "./Workout";
import PropTypes from "prop-types";




function WorkoutList(props){
  return (
    <React.Fragment>
      <hr/>
      {props.workoutList.map((workout) =>
        <Workout 
          handleChangingSelectedWorkout={ props.handleChangingSelectedWorkout }
          name={workout.name}
          group={workout.group}
          description={workout.description}
          id={workout.id}
          key={workout.id}/>
      )}
    </React.Fragment>
  );
}

WorkoutList.propTypes = {
  workoutList: PropTypes.array,
  onWorkoutSelection: PropTypes.func
};

export default WorkoutList;