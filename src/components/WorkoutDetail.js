import React from "react";
import PropTypes from "prop-types";


function WorkoutDetail(props){
  const { workout } = props;


  return (
    <React.Fragment>
      <h1>WorkoutDetail</h1>
      <h3><em>{workout.name}</em></h3>
      <h4>{workout.group}</h4>
      <p>{workout.description}</p>
      <hr/> 
    </React.Fragment>
  )
}




WorkoutDetail.propTypes = {
  workout: PropTypes.array
};

export default WorkoutDetail;