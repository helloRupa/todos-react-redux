import React from 'react';
import { StepListItemContainer } from './step_list_item_container';

export default class StepList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.steps.map((step, idx) => < StepListItemContainer step={step} key={idx} />)}
        </ul>
        {/* <StepForm /> */}
      </div>
    );
  }
}

