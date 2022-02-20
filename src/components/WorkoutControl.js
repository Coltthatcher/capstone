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

  handleClick = () => {
    this.setState({formVisibleOnPage: true});
  }


  render(){
    let currentlyVisibleState = null;
    let addWorkoutButton = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewWorkoutForm />
  } else {
    currentlyVisibleState = <WorkoutList />
    addWorkoutButton = <button onClick={this.handleClick}>Add New Workout</button>
  }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        {addWorkoutButton}
      </React.Fragment>
    );
  }
}

export default WorkoutControl;