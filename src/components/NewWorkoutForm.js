import React from "react";
import { v4 } from  "uuid";
import PropTypes from "prop-types";


function NewWorkoutForm(props){
  
  function handleNewWorkoutFormSubmission(event) {
    event.preventDefault();
    props.onNewWorkoutCreation({name: event.target.name.value, group: event.target.group.value, description: event.target.description.value, id: v4()})
  }
  
  return (
    <React.Fragment>
      <form onSubmit={handleNewWorkoutFormSubmission}>
        <input
          type="text"
          name="name"
          placeholder="workout name"/>
        <input
          type="text"
          name="group"
          placeholder="muscle group"/>
        <textarea
          type="text"
          name="description"
          placeholder="description of work out"/>
        <button type="submit">submit</button>
      </form>
    </React.Fragment>
  )

}

NewWorkoutForm.propTypes = {
  onNewWorkoutCreation: PropTypes.func
};

export default NewWorkoutForm;