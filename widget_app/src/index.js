import React from 'react';
import ReactDOM from "react-dom";

class MasterForm extends React.Component {
  constructor(props) {
    super(props)
    // Set the initial input values
    this.state = {
      currentStep: 1, // Default is Step 1
      app_selection: '',
      app_info: '',
    }
    // Bind the submission to handleChange()
    this.handleChange = this.handleChange.bind(this)
  }

  // Use the submitted data to set the state
  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  // Trigger an alert on form submission
  handleSubmit = (event) => {
    event.preventDefault()
    const { currentStep, widget_selection } = this.state
    alert(`Your registration detail: \n`)
  }

  _next = () => {
    let currentStep = this.state.currentStep
    if (currentStep == 1){
      let current_selected_app = this.state.app_selection;
      fetch("api/" + current_selected_app)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState(() => {
          return {
            app_info: JSON.stringify(data)
          };
        });
      });
    }
    currentStep = currentStep >= 2? 2: currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }

  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }
  /*
  * the functions for our button
  */
  previousButton() {
    let currentStep = this.state.currentStep;
    if(currentStep != 1){
      return (
        <button
          className="btn btn-secondary"
          type="button" onClick={this._prev}>
        Previous
        </button>
      )
    }
    return null;
  }

  nextButton(){
    let currentStep = this.state.currentStep;
    if(currentStep != 2){
      return (
        <button
          className="btn btn-primary float-right"
          type="button" onClick={this._next}>
        Next
        </button>
      )
    }
    return null;
  }
  // Render UI will go here...
  render() {
    return (
      <React.Fragment>
      <h1>React Wizard Form 🧙‍♂️</h1>
      <p>Step {this.state.currentStep} </p>
      <p>Value {this.state.app_selection} </p>
      <p>app_info {this.state.app_info} </p>
      <form onSubmit={this.handleSubmit}>
      {/*
        render the form steps and pass required props in
      */}
        <Step1
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          email={this.state.email}
        />
        <Step2
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          step1_value={this.state.app_selection}
          app_info = {this.state.app_info}
        />
        {this.previousButton()}
        {this.nextButton()}

      </form>
      </React.Fragment>
    );
  }
}

class Step1 extends React.Component {
  render() {
    if (this.props.currentStep !== 1) { // Prop: The current step
      return null
    }
    // The markup for the Step 1 UI
    return(
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          className="form-control"
          id="app_selection"
          name="app_selection"
          type="text"
          placeholder="Enter app_selection"
          value={this.props.app_selection} // Prop: The email input data
          onChange={this.props.handleChange} // Prop: Puts data into state
        />
      </div>

    )
  }
}

class Step2 extends React.Component {
  render() {
    if (this.props.currentStep !== 2) { // Prop: The current step
      return null
    }
    // The markup for the Step 2 UI
    return(
      <React.Fragment>
        <div> sample api call with key {this.props.step1_value}</div>
        <div> response from api call {this.props.app_info}</div>
      </React.Fragment>

    )
  }
}

ReactDOM.render(<MasterForm />, document.getElementById('root'))