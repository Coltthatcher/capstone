import React from "react";
import PropTypes from "prop-types";

function Workout({
  name,
  group,
  description,
  handleChangingSelectedWorkout,
  id
}){
  
  return(
  <React.Fragment>
    <div onClick={() => handleChangingSelectedWorkout(id)}>
    <h1>{name}</h1>
    <h2>muscle group: {group}</h2>
    <p>{description}</p>
    <hr/>
    </div>
  </React.Fragment>
  );
}



Workout.propTypes = {
  name: PropTypes.string,
  group: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  handleWhenWorkoutClicked: PropTypes.func
};

export default Workout;
