import React from "react";
import PropTypes from "prop-types";

function Workout(props){
  return(
  <React.Fragment>
    <h1>{props.name}</h1>
    <h2>muscle group: {props.group}</h2>
    <p>{props.description}</p>
    <hr/>
  </React.Fragment>
  );
}



Workout.propTypes = {
  name: PropTypes.string,
  group: PropTypes.string,
  description: PropTypes.string
};

export default Workout;
