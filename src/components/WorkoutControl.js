import React from "react"
import NewWorkoutForm from "./NewWorkoutForm";
import WorkoutList from "./WorkoutList";


class WorkoutControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainWorkoutList: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }


  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewWorkoutForm />
      buttonText = "Return to Workout center";
  } else {
    currentlyVisibleState = <WorkoutList workoutlist={this.state.mainWorkoutList} />
    buttonText = "Add Workout";
    
  }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default WorkoutControl;