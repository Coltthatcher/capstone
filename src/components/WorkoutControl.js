import React from "react"
import NewWorkoutForm from "./NewWorkoutForm";
import WorkoutList from "./WorkoutList";


class WorkoutControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }


  render(){
    let currentlyVisibleState = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewWorkoutForm />
  } else {
    currentlyVisibleState = <WorkoutList />
  }
    return(
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}

export default WorkoutControl;