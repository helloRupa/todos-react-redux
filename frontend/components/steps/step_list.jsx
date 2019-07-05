import React from 'react';
import { StepListItemContainer } from './step_list_item_container';
import StepForm from './step_form';

export default class StepList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <label>Add New Step</label>
        < StepForm todoId={this.props.todoId} receiveStep={this.props.receiveStep} />
        <ol>
          {this.props.steps.map((step, idx) => (
          <li key={idx}>
            < StepListItemContainer step={step} key={idx} />
          </li>
          ))}
        </ol>
      </div>
    );
  }
}

