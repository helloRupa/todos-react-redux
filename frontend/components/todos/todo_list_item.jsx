import React from 'react';

export default class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {done: this.props.todo.done};
    this.updateTodo = this.updateTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.updateDeleteText = this.updateDeleteText.bind(this);
  }

  deleteTodo() {
    this.props.removeTodo(this.props.todo);
  }

  updateTodo(e) {
    this.props.receiveTodo({...this.props.todo, done: !this.props.todo.done});

    this.setState({done: !this.props.todo.done});
  }

  updateDeleteText() {
    return this.state.done ? 'Undo' : 'Done';
  }

  render() {
    return(
      <div>
        <li>{this.props.todo.title}</li>
        <button onClick={this.deleteTodo}>
          Delete
        </button>
        <button onClick={this.updateTodo}>
          {this.updateDeleteText()}
        </button>
      </div>
    );
  }
};
