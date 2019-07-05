import React from 'react';

export default class StepListItem extends React.Component {
  constructor(props) {
    super(props);
    this.deleteStep = this.deleteStep.bind(this);
  }

  deleteStep() {
    this.props.removeStep(this.props.step);
  }

  render() {
    return (
      <div>
        <h2>{this.props.step.title}</h2>
        <p>{this.props.step.body}</p>
        <button onClick={this.deleteStep}>Delete Step</button>
      </div>
    );
  }
};
