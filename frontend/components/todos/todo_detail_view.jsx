import React from 'react';

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
      </div>
    );
  }
}
