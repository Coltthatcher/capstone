import React from "react";
import { v4 } from  "uuid";

function NewWorkoutForm(props){
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
      </form>
    </React.Fragment>
  )
}

export default NewWorkoutForm;