import React from "react";
import { v4 } from  "uuid";

function NewWorkoutForm(props){

    function handleNewWorkoutFormSubmission(event) {
      event.preventDefault();
      console.log(event.target.name.value)
      console.log(event.target.group.value)
      console.log(event.target.description.value)
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
        <input
          type="text"
          name="description"
          placeholder="description of work out"/>
        <button type="submit">submit</button>
      </form>
    </React.Fragment>
  )

}

export default NewWorkoutForm;