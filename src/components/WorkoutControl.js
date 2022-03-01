import React from "react"
import NewWorkoutForm from "./NewWorkoutForm";
import WorkoutList from "./WorkoutList";
import WorkoutDetail from "./WorkoutDetail";


class WorkoutControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainWorkoutList: [],
      selectedWorkout: null
    };
  }

  handleClick = () => {
    if (this.state.selectedWorkout != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedWorkout: null
      });
    } else {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }
}

  handleAddingNewWorkoutToList = (newWorkout) => {
    const newMainWorkoutList = this.state.mainWorkoutList.concat(newWorkout);
    this.setState({mainWorkoutList: newMainWorkoutList,
                                  formVisibleOnPage: false});
    }

    handleChangingSelectedWorkout = (id) => {
      const selectedWorkout = this.state.mainWorkoutList.filter(workout => workout.id === id);
      this.setState({selectedWorkout: selectedWorkout});
    }

    

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedWorkout != null) {
      currentlyVisibleState = <WorkoutDetail workout = {this.state.selectedWorkout} />
      buttonText= "Return to Workout center";

    } else if  (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewWorkoutForm onNewWorkoutCreation={this.handleAddingNewWorkoutToList}/>
      buttonText = "Return to Workout center";
    } else {
      currentlyVisibleState = <WorkoutList workoutList={this.state.mainWorkoutList} handleChangingSelectedWorkout={this.handleChangingSelectedWorkout} />
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