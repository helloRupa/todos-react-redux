import React from 'react';
import { StepListContainer } from '../steps/step_list_container';

export default class TodoDetailView extends React.Component {
  constructor(props) {
    super(props);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  deleteTodo() {
    this.props.removeTodo(this.props.todo);
  }

  render() {
    return (
      <div>
        {this.props.todo.body}
        <button onClick={this.deleteTodo}>
          Delete
        </button>
        <StepListContainer todoId={this.props.todo.id}/>
      </div>
    );
  }
}
