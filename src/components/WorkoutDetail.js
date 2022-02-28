import React from "react";
import PropTypes from "prop-types";


function WorkoutDetail(props){
  const { workout } = props;

  const selectedWorkout = workout[0];

  console.log(selectedWorkout)

  return (
    <React.Fragment>
      <h1>WorkoutDetail</h1>
      <h3><em>{selectedWorkout.name}</em></h3>
      <h4>{selectedWorkout.group}</h4>
      <p>{selectedWorkout.description}</p>
      <hr/> 
    </React.Fragment>
  )
}




WorkoutDetail.propTypes = {
  workout: PropTypes.array
};

export default WorkoutDetail;