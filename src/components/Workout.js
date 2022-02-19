import React from "react";
import PropTypes from "prop-types";

function Workout(props){
  <React.Fragment>
    <h3>{props.group} - {props.names}</h3>
    <p>{props.description}</p>
    <hr/>
  </React.Fragment>
}



Workout.PropTypes = {
  names: PropTypes.string,
  group: PropTypes.string,
  description: PropTypes.string
};

export default Workout;
